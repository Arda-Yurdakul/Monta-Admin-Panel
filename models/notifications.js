// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Notifications = sequelize.define('notifications', {
    unique: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM('simple','1_action','2_actions'),
      defaultValue: "simple",
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
    },
    deeplink: {
      type: DataTypes.STRING,
    },
    referenceType: {
      type: DataTypes.STRING,
    },
    referenceId: {
      type: DataTypes.BIGINT,
    },
    action1: {
      type: DataTypes.STRING,
      field: 'action_1',
    },
    action1Title: {
      type: DataTypes.STRING,
      field: 'action_1_title',
    },
    action1Event: {
      type: DataTypes.STRING,
      field: 'action_1_event',
    },
    action2: {
      type: DataTypes.STRING,
      field: 'action_2',
    },
    action2Title: {
      type: DataTypes.STRING,
      field: 'action_2_title',
    },
    action2Event: {
      type: DataTypes.STRING,
      field: 'action_2_event',
    },
    push: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    inApp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collapseKey: {
      type: DataTypes.STRING,
    },
    readAt: {
      type: DataTypes.DATE,
    },
    pushSentAt: {
      type: DataTypes.DATE,
    },
    actionTriggeredAt: {
      type: DataTypes.DATE,
    },
    log: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    firebaseId: {
      type: DataTypes.STRING,
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
    tableName: 'notifications',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Notifications.associate = (models) => {
    Notifications.belongsTo(models.chargePoints, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'user',
    });
    Notifications.belongsTo(models.notificationEvents, {
      foreignKey: {
        name: 'eventIdKey',
        field: 'event_id',
      },
      as: 'event',
    });
  };

  return Notifications;
};
