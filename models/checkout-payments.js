// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const CheckoutPayments = sequelize.define('checkoutPayments', {
    payId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    srcId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('deposit','withdraw'),
      defaultValue: "deposit",
      allowNull: false,
    },
    payload: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'checkout_payments',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  CheckoutPayments.associate = (models) => {
  };

  return CheckoutPayments;
};
