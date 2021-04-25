// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const NotificationEventUser = sequelize.define('notificationEventUser', {
    push: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inApp: {
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
    tableName: 'notification_event_user',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  NotificationEventUser.associate = (models) => {
    NotificationEventUser.belongsTo(models.chargePoints, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'user',
    });
    NotificationEventUser.belongsTo(models.notificationEvents, {
      foreignKey: {
        name: 'eventIdKey',
        field: 'event_id',
      },
      as: 'event',
    });
  };

  return NotificationEventUser;
};