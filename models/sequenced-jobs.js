// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const SequencedJobs = sequelize.define('sequencedJobs', {
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    params: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('queued','progress','completed','failed','cancelled'),
      allowNull: false,
    },
    queuedAt: {
      type: DataTypes.DATE,
    },
    progressAt: {
      type: DataTypes.DATE,
    },
    completedAt: {
      type: DataTypes.DATE,
    },
    failedAt: {
      type: DataTypes.DATE,
    },
    cancelledAt: {
      type: DataTypes.DATE,
    },
    start: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    stop: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    current: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    exception: {
      type: DataTypes.STRING,
    },
    log: {
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
    tableName: 'sequenced_jobs',
    underscored: true,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  SequencedJobs.associate = (models) => {
  };

  return SequencedJobs;
};
