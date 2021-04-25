// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ChargePointGroups = sequelize.define('chargePointGroups', {
    externalId: {
      type: DataTypes.STRING,
      field: 'external_id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operatorName: {
      type: DataTypes.STRING,
      field: 'operator_name',
    },
    chargePointCount: {
      type: DataTypes.INTEGER,
      field: 'charge_point_count',
      defaultValue: 0,
      allowNull: false,
    },
    autoGenerated: {
      type: DataTypes.INTEGER,
      field: 'auto_generated',
      defaultValue: 0,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING,
    },
    address2: {
      type: DataTypes.STRING,
    },
    address3: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    note: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.ENUM('public','public-request','private'),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('ac','dc'),
    },
    maxKw: {
      type: DataTypes.DOUBLE,
      field: 'max_kw',
    },
    kwhCostType: {
      type: DataTypes.ENUM('fixed','spot'),
      field: 'kwh_cost_type',
    },
    kwhCostFixedPrice: {
      type: DataTypes.DOUBLE,
      field: 'kwh_cost_fixed_price',
    },
    kwhCostSpotOverheadPercentage: {
      type: DataTypes.DOUBLE,
      field: 'kwh_cost_spot_overhead_percentage',
    },
    kwhCostSpotOverheadValue: {
      type: DataTypes.DOUBLE,
      field: 'kwh_cost_spot_overhead_value',
    },
    kwhSalesType: {
      type: DataTypes.ENUM('fixed','spot'),
      field: 'kwh_sales_type',
    },
    kwhSalesFixedPrice: {
      type: DataTypes.DOUBLE,
      field: 'kwh_sales_fixed_price',
    },
    kwhSalesSpotOverheadPercentage: {
      type: DataTypes.DOUBLE,
      field: 'kwh_sales_spot_overhead_percentage',
    },
    kwhSalesSpotOverheadValue: {
      type: DataTypes.DOUBLE,
      field: 'kwh_sales_spot_overhead_value',
    },
    chatActiveAt: {
      type: DataTypes.DATE,
      field: 'chat_active_at',
    },
    activeAt: {
      type: DataTypes.DATE,
      field: 'active_at',
    },
    staticMapPath: {
      type: DataTypes.STRING,
      field: 'static_map_path',
    },
    staticMapPathUpdatedAt: {
      type: DataTypes.DATE,
      field: 'static_map_path_updated_at',
    },
    typeLabel: {
      type: DataTypes.STRING,
      field: 'type_label',
    },
    maxKwLabel: {
      type: DataTypes.STRING,
      field: 'max_kw_label',
    },
    priceLabel: {
      type: DataTypes.STRING,
      field: 'price_label',
    },
    connectorLabel: {
      type: DataTypes.STRING,
      field: 'connector_label',
    },
    minKwhSalesFixedPrice: {
      type: DataTypes.DOUBLE,
      field: 'min_kwh_sales_fixed_price',
    },
    maxKwhSalesFixedPrice: {
      type: DataTypes.DOUBLE,
      field: 'max_kwh_sales_fixed_price',
    },
    available: {
      type: DataTypes.INTEGER,
    },
    hasCable: {
      type: DataTypes.INTEGER,
      field: 'has_cable',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
  }, {
    tableName: 'charge_point_groups',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  ChargePointGroups.associate = (models) => {
    ChargePointGroups.belongsTo(models.countryAreas, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryArea',
    });
    ChargePointGroups.belongsTo(models.countries, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      as: 'country',
    });
    ChargePointGroups.belongsTo(models.currencies, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'currency',
    });
    ChargePointGroups.belongsTo(models.operators, {
      foreignKey: {
        name: 'operatorIdKey',
        field: 'operator_id',
      },
      as: 'operator',
    });
    ChargePointGroups.belongsTo(models.teams, {
      foreignKey: {
        name: 'teamIdKey',
        field: 'team_id',
      },
      as: 'team',
    });
    ChargePointGroups.belongsToMany(models.connectors, {
      through: 'chargePointGroupConnector',
      foreignKey: 'charge_point_group_id',
      otherKey: 'connector_id',
      as: 'connectorsThroughChargePointGroupConnectors',
    });
    ChargePointGroups.hasMany(models.chargePoints, {
      foreignKey: {
        name: 'chargePointGroupIdKey',
        field: 'charge_point_group_id',
      },
      as: 'chargePointGroupChargePoints',
    });
  };

  return ChargePointGroups;
};