// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const VehicleConnector = sequelize.define('vehicleConnector', {
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'vehicle_connector',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  VehicleConnector.associate = (models) => {
    VehicleConnector.belongsTo(models.connectors, {
      foreignKey: {
        name: 'connectorIdKey',
        field: 'connector_id',
      },
      as: 'connector',
    });
    VehicleConnector.belongsTo(models.vehicles, {
      foreignKey: {
        name: 'vehicleIdKey',
        field: 'vehicle_id',
      },
      as: 'vehicle',
    });
  };

  return VehicleConnector;
};
