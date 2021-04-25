// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Tags = sequelize.define('tags', {
    name: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    slug: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    orderColumn: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'tags',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Tags.associate = (models) => {
    Tags.hasMany(models.taggables, {
      foreignKey: {
        name: 'tagIdKey',
        field: 'tag_id',
      },
      as: 'taggables',
    });
  };

  return Tags;
};