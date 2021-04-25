const { collection } = require("forest-express-sequelize");

// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection("users", {
  actions: [
    { name: "Set default address" },
    {
      name: "Charge Customer",
      type: "single",
      fields: [
        {
          field: "amount",
          isRequired: true,
          description: "Bill this user for the amount",
          type: "Number",
        },
        {
          field: "currency",
          isRequired: true,
          description: "The currency to be used in the billing",
          type: "Enum",
          enums: ["USD", "EUR", "DKK", "TRY"],
        },
      ],
      hooks: {
        load: ({ fields, record }) => {
          fields.amount.value = 4520;
          fields.currency.value = "DKK";
          return fields;
        },
      },
    },
    {
      name: "Visit External Website",
    },
  ],
});
