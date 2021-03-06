// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Currencies = sequelize.define('currencies', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameLocalized: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    master: {
      type: DataTypes.INTEGER,
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
    tableName: 'currencies',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Currencies.associate = (models) => {
    Currencies.hasMany(models.bankAccounts, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'bankAccounts',
    });
    Currencies.hasMany(models.chargePointGroups, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'chargePointGroups',
    });
    Currencies.hasMany(models.chargePoints, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'chargePoints',
    });
    Currencies.hasMany(models.charges, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'charges',
    });
    Currencies.hasMany(models.countries, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'countries',
    });
    Currencies.hasMany(models.currencyRates, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'currencyRates',
    });
    Currencies.hasMany(models.gridSpotPrices, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'gridSpotPrices',
    });
    Currencies.hasMany(models.hubjectOperatorPrices, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'hubjectOperatorPrices',
    });
    Currencies.hasMany(models.invoices, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'invoices',
    });
    Currencies.hasMany(models.operators, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'operators',
    });
    Currencies.hasMany(models.planPrices, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'planPrices',
    });
    Currencies.hasMany(models.receipts, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'receipts',
    });
    Currencies.hasMany(models.smartChargeResults, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'smartChargeResults',
    });
    Currencies.hasMany(models.stripeCharges, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'stripeCharges',
    });
    Currencies.hasMany(models.stripePaymentIntents, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'stripePaymentIntents',
    });
    Currencies.hasMany(models.subscriptionPurchases, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'subscriptionPurchases',
    });
    Currencies.hasMany(models.subscriptions, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'subscriptions',
    });
    Currencies.hasMany(models.taxRefunds, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'taxRefunds',
    });
    Currencies.hasMany(models.teams, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'teams',
    });
    Currencies.hasMany(models.transactions, {
      foreignKey: {
        name: 'fromCurrencyIdKey',
        field: 'from_currency_id',
      },
      as: 'fromCurrencyTransactions',
    });
    Currencies.hasMany(models.transactions, {
      foreignKey: {
        name: 'toCurrencyIdKey',
        field: 'to_currency_id',
      },
      as: 'toCurrencyTransactions',
    });
  };

  return Currencies;
};
