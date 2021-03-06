// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ChargePointModels = sequelize.define('chargePointModels', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagePath: {
      type: DataTypes.STRING,
    },
    configMeterReading: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'charge_point_models',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  ChargePointModels.associate = (models) => {
    ChargePointModels.belongsTo(models.chargePointBrands, {
      foreignKey: {
        name: 'brandIdKey',
        field: 'brand_id',
      },
      as: 'brand',
    });
    ChargePointModels.belongsToMany(models.plans, {
      through: 'planChargePointModel',
      foreignKey: 'charge_point_model_id',
      otherKey: 'plan_id',
      as: 'plansThroughPlanChargePointModels',
    });
    ChargePointModels.hasMany(models.chargePointModelIntegration, {
      foreignKey: {
        name: 'modelIdKey',
        field: 'model_id',
      },
      as: 'modelChargePointModelIntegrations',
    });
    ChargePointModels.hasMany(models.chargePoints, {
      foreignKey: {
        name: 'chargePointModelIdKey',
        field: 'charge_point_model_id',
      },
      as: 'chargePointModelChargePoints',
    });
  };

  return ChargePointModels;
};
