// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const OauthClients = sequelize.define('oauthClients', {
    userId: {
      type: DataTypes.BIGINT,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secret: {
      type: DataTypes.STRING,
    },
    provider: {
      type: DataTypes.STRING,
    },
    redirect: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personalAccessClient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    passwordClient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    revoked: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'oauth_clients',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  OauthClients.associate = (models) => {
  };

  return OauthClients;
};