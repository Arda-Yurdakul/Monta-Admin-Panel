// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Webhooks = sequelize.define('webhooks', {
    service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payload: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('created','progress','done','failed'),
      allowNull: false,
    },
    log: {
      type: DataTypes.STRING,
    },
    progressAt: {
      type: DataTypes.DATE,
    },
    doneAt: {
      type: DataTypes.DATE,
    },
    failedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'webhooks',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Webhooks.associate = (models) => {
  };

  return Webhooks;
};
