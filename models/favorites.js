// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Favorites = sequelize.define('favorites', {
    favoriteType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favoriteId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'favorites',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Favorites.associate = (models) => {
    Favorites.belongsTo(models.users, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'user',
    });
  };

  return Favorites;
};
