// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const SubscriptionPurchases = sequelize.define('subscriptionPurchases', {
    note: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM('period','diff'),
      allowNull: false,
    },
    discountPercentage: {
      type: DataTypes.DOUBLE,
      defaultValue: Sequelize.literal('0.0000'),
      allowNull: false,
    },
    discountAbsolute: {
      type: DataTypes.DOUBLE,
      defaultValue: Sequelize.literal('0.0000'),
      allowNull: false,
    },
    originalAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    discountAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    chargePoints: {
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
    tableName: 'subscription_purchases',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  SubscriptionPurchases.associate = (models) => {
    SubscriptionPurchases.belongsTo(models.subscriptions, {
      foreignKey: {
        name: 'subscriptionIdKey',
        field: 'subscription_id',
      },
      as: 'subscription',
    });
    SubscriptionPurchases.belongsTo(models.currencies, {
      foreignKey: {
        name: 'currencyIdKey',
        field: 'currency_id',
      },
      as: 'currency',
    });
  };

  return SubscriptionPurchases;
};