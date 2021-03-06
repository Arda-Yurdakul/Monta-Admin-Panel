// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Devices = sequelize.define('devices', {
    uuid: {
      type: DataTypes.STRING,
    },
    platform: {
      type: DataTypes.STRING,
    },
    environment: {
      type: DataTypes.STRING,
    },
    appVersion: {
      type: DataTypes.STRING,
    },
    deviceOs: {
      type: DataTypes.STRING,
    },
    device: {
      type: DataTypes.STRING,
    },
    activeAt: {
      type: DataTypes.DATE,
    },
    nextAt: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
    },
    timezone: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'devices',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Devices.associate = (models) => {
    Devices.belongsTo(models.users, {
      foreignKey: {
        name: 'userIdKey',
        field: 'user_id',
      },
      as: 'user',
    });
    Devices.hasMany(models.transactions, {
      foreignKey: {
        name: 'deviceIdKey',
        field: 'device_id',
      },
      as: 'transactions',
    });
  };

  return Devices;
};
