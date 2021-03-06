// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const ChargePointSchedules = sequelize.define('chargePointSchedules', {
    dayOfWeek: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    visibility: {
      type: DataTypes.ENUM('public','private'),
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
    tableName: 'charge_point_schedules',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  ChargePointSchedules.associate = (models) => {
    ChargePointSchedules.belongsTo(models.chargePoints, {
      foreignKey: {
        name: 'chargePointIdKey',
        field: 'charge_point_id',
      },
      as: 'chargePoint',
    });
  };

  return ChargePointSchedules;
};
