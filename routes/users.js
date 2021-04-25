const express = require("express");
const {
  PermissionMiddlewareCreator,
  RecordsGetter,
} = require("forest-express-sequelize");
const { users } = require("../models");

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator("users");

// This file contains the logic of every route in Forest Admin for the collection users:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

//Smart Action / Mark user as pending
router.post(
  "/actions/set-default-address",
  permissionMiddlewareCreator.smartAction(),
  (req, res) => {
    return new RecordsGetter(users).getIdsFromRequest(req).then((userIds) => {
      return users
        .update({ city: "København" }, { where: { id: userIds } })
        .then(() => {
          res.send({ success: "City set to default!" });
        });
    });
  }
);

router.post(
  "/actions/charge-customer",
  permissionMiddlewareCreator.smartAction(),
  (req, res) => {
    let attrs = req.body.data.attributes.values;
    let amount = attrs["amount"];
    let currency = attrs["currency"];

    return res.send({ success: "User billed for " + amount + " " + currency });
  }
);

router.post(
  "/actions/visit-external-website",
  permissionMiddlewareCreator.smartAction(),
  (req, res) => {
    res.send({
      success: "Return initiated successfully.",
      redirectTo:
        "https://www.royalmail.com/portal/rm/track?trackNumber=ZW924750388GB",
    });
  }
);

module.exports = router;

// Create a User
router.post(
  "/users",
  permissionMiddlewareCreator.create(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
    next();
  }
);

// Update a User
router.put(
  "/users/:recordId",
  permissionMiddlewareCreator.update(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
    next();
  }
);

// Delete a User
router.delete(
  "/users/:recordId",
  permissionMiddlewareCreator.delete(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
    next();
  }
);

// Get a list of Users
router.get(
  "/users",
  permissionMiddlewareCreator.list(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-list-of-records
    next();
  }
);

// Get a number of Users
router.get(
  "/users/count",
  permissionMiddlewareCreator.list(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
    next();
  }
);

// Get a User
router.get(
  "/users/:recordId(?!count)",
  permissionMiddlewareCreator.details(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
    next();
  }
);

// Export a list of Users
router.get(
  "/users.csv",
  permissionMiddlewareCreator.export(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
    next();
  }
);

// Delete a list of Users
router.delete(
  "/users",
  permissionMiddlewareCreator.delete(),
  (request, response, next) => {
    // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
    next();
  }
);

module.exports = router;
