const { DataTypes, Model } = require('sequelize');
const conexao = require('../config/database');

module.exports = (sequelize) => { 
  class Pessoa extends Model {}

  Pessoa.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nome',

      },
      CPF: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'cpf',

      },
      Telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'telefone',

      },
    },
    {
      sequelize,  
      modelName: 'Pessoa',
      tableName: 'pessoas',
      timestamps: false,
    }
  );

  return Pessoa;
};