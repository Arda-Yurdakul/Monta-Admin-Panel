// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const CountryAreas = sequelize.define('countryAreas', {
    externalId: {
      type: DataTypes.STRING,
      field: 'external_id',
    },
    name: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    imagePath: {
      type: DataTypes.STRING,
      field: 'image_path',
    },
    minPrice: {
      type: DataTypes.DOUBLE,
      field: 'min_price',
    },
    maxPrice: {
      type: DataTypes.DOUBLE,
      field: 'max_price',
    },
    avgPrice: {
      type: DataTypes.DOUBLE,
      field: 'avg_price',
    },
    minCo2: {
      type: DataTypes.DOUBLE,
      field: 'min_co2',
    },
    maxCo2: {
      type: DataTypes.DOUBLE,
      field: 'max_co2',
    },
    avgCo2: {
      type: DataTypes.DOUBLE,
      field: 'avg_co2',
    },
    minRenewable: {
      type: DataTypes.DOUBLE,
      field: 'min_renewable',
    },
    maxRenewable: {
      type: DataTypes.DOUBLE,
      field: 'max_renewable',
    },
    avgRenewable: {
      type: DataTypes.DOUBLE,
      field: 'avg_renewable',
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
    tableName: 'country_areas',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  CountryAreas.associate = (models) => {
    CountryAreas.belongsTo(models.countries, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      as: 'country',
    });
    CountryAreas.hasMany(models.chargePointGroups, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryAreaChargePointGroups',
    });
    CountryAreas.hasMany(models.chargePoints, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryAreaChargePoints',
    });
    CountryAreas.hasMany(models.gridCo2Emissions, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryAreaGridCo2Emissions',
    });
    CountryAreas.hasMany(models.gridRenewables, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryAreaGridRenewables',
    });
    CountryAreas.hasMany(models.gridSpotPrices, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryAreaGridSpotPrices',
    });
    CountryAreas.hasMany(models.smartChargeResults, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryAreaSmartChargeResults',
    });
    CountryAreas.hasMany(models.users, {
      foreignKey: {
        name: 'countryAreaIdKey',
        field: 'country_area_id',
      },
      as: 'countryAreaUsers',
    });
  };

  return CountryAreas;
};