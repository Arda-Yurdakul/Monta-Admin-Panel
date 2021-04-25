// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Operators = sequelize.define('operators', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DOUBLE,
      defaultValue: Sequelize.literal('0.0000'),
      allowNull: false,
    },
    balanceCredit: {
      type: DataTypes.DOUBLE,
      field: 'balance_credit',
      defaultValue: Sequelize.literal('0.0000'),
      allowNull: false,
    },
    master: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    masterOperatorCutPercentage: {
      type: DataTypes.DOUBLE,
      field: 'master_operator_cut_percentage',
      allowNull: false,
    },
    masterServiceCutPercentage: {
      type: DataTypes.DOUBLE,
      field: 'master_service_cut_percentage',
      defaultValue: Sequelize.literal('15.0000'),
      allowNull: false,
    },
    logoPath: {
      type: DataTypes.STRING,
      field: 'logo_path',
    },
    configAutoGenerateChargePointGroups: {
      type: DataTypes.INTEGER,
      field: 'config_auto_generate_charge_point_groups',
      defaultValue: 1,
      allowNull: false,
    },
    configServiceProvider: {
      type: DataTypes.INTEGER,
      field: 'config_service_provider',
      defaultValue: 0,
      allowNull: false,
    },
    configChargePointOperator: {
      type: DataTypes.INTEGER,
      field: 'config_charge_point_operator',
      defaultValue: 0,
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
    zip: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    companyName: {
      type: DataTypes.STRING,
      field: 'company_name',
    },
    financeEmail: {
      type: DataTypes.STRING,
      field: 'finance_email',
    },
    vatNumber: {
      type: DataTypes.STRING,
      field: 'vat_number',
    },
    daysToPayInvoices: {
      type: DataTypes.INTEGER,
      field: 'days_to_pay_invoices',
      defaultValue: 14,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  }, {
    tableName: 'operators',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Operators.associate = (models) => {
    Operators.belongsTo(models.partners, {
      foreignKey: {
        name: 'partnerIdKey',
        field: 'partner_id',
      },
      as: 'partner',
    });
    Operators.belongsTo(models.countries, {
      foreignKey: {
        name: 'countryIdKey',
        field: 'country_id',
      },
      as: 'country',
    });
    Operators.belongsTo(models.currencies, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'currency',
    });
    Operators.hasMany(models.chargePointGroups, {
      foreignKey: {
        name: 'operatorIdKey',
        field: 'operator_id',
      },
      as: 'chargePointGroups',
    });
    Operators.hasMany(models.chargePoints, {
      foreignKey: {
        name: 'operatorIdKey',
        field: 'operator_id',
      },
      as: 'chargePoints',
    });
    Operators.hasMany(models.plans, {
      foreignKey: {
        name: 'operatorIdKey',
        field: 'operator_id',
      },
      as: 'plans',
    });
    Operators.hasMany(models.subscriptions, {
      foreignKey: {
        name: 'operatorIdKey',
        field: 'operator_id',
      },
      as: 'subscriptions',
    });
    Operators.hasMany(models.teams, {
      foreignKey: {
        name: 'operatorIdKey',
        field: 'operator_id',
      },
      as: 'teams',
    });
  };

  return Operators;
};
