const { Pessoa } = require('../Models');

exports.createPessoa = async (req, res) => {
  try {
    const { Nome, CPF, Telefone } = req.body;

    // Valida se os campos obrigatórios estão presentes
    if (!Nome || !CPF || !Telefone) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes', details: 'Nome, CPF e Telefone são obrigatórios.' });
    }

    const novaPessoa = await Pessoa.create({
      Nome,
      CPF,
      Telefone,
    });

    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message });
  }
};

exports.getAllPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message });
  }
};

exports.getPessoaById = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pessoa', details: error.message });
  }
};

exports.updatePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const { Nome, CPF, Telefone } = req.body;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    // Valida se os campos obrigatórios estão presentes
    if (!Nome || !CPF || !Telefone) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes', details: 'Nome, CPF e Telefone são obrigatórios.' });
    }

    await pessoa.update({
      Nome,
      CPF,
      Telefone,
    });

    res.status(200).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pessoa', details: error.message });
  }
};

exports.deletePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({ error: 'Pessoa não encontrada' });
    }

    await pessoa.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pessoa', details: error.message });
  }
};
