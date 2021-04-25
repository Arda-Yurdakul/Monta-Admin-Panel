// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Taggables = sequelize.define('taggables', {
    tagId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    taggableType: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    taggableId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    tableName: 'taggables',
    underscored: true,
    timestamps: false,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Taggables.associate = (models) => {
    Taggables.belongsTo(models.tags, {
      foreignKey: {
        name: 'tagIdKey',
        field: 'tag_id',
      },
      as: 'tag',
    });
  };

  return Taggables;
};
