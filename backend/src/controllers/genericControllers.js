const GenericModel = require("../models/genericModels");

const GenericController = {
  getAll: (req, res) => {
    const { table } = req.params;
    GenericModel.getAll(table, (err, results) => {
      if (err) {
        return res.status(500).json({
          message: `Erreur lors de la récupération des données de la table ${table}`,
        });
      }
      res.status(200).json(results);
    });
  },

  getById: (req, res) => {
    const { table, id } = req.params;
    GenericModel.getById(table, id, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: `Erreur lors de la récupération de l'enregistrement avec l'ID ${id} dans ${table}`,
        });
      }
      res.status(200).json(result);
    });
  },

  create: (req, res) => {
    const { table } = req.params;
    const data = req.body;
    GenericModel.create(table, data, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: `Erreur lors de l'insertion dans la table ${table}`,
        });
      }
      res.status(201).json({
        message: "Enregistrement créé avec succès",
        id: result.insertId,
      });
    });
  },

  update: (req, res) => {
    const { table, id } = req.params;
    const data = req.body;
    GenericModel.update(table, id, data, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: `Erreur lors de la mise à jour de l'enregistrement avec l'ID ${id} dans ${table}`,
        });
      }
      res.status(200).json({
        message: `Enregistrement avec l'ID ${id} mis à jour avec succès`,
      });
    });
  },

  delete: (req, res) => {
    const { table, id } = req.params;
    GenericModel.delete(table, id, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: `Erreur lors de la suppression de l'enregistrement avec l'ID ${id} dans ${table}`,
        });
      }
      res.status(200).json({
        message: `Enregistrement avec l'ID ${id} supprimé avec succès`,
      });
    });
  },
};

module.exports = GenericController;
