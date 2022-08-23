# Account Update

| Input/Output |  Data Type                  |
|:-------------|:---------------------------:|
| Input        | StdAccountUpdateInput       |
| Output       | StdAccountUpdateOutput      |

### Example StdAccountUpdateInput
```javascript
{
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "changes": [
        {
            "op": <Set|Add|Remove>,
            "attribute": <account attribute to modify>,
            "value": <the value to use for the operation>
        }
    ]
}
```
### Example StdAccountUpdateOutput
```javascript
{
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "disabled": false,
    "locked": false,
    "attributes": {
        "id": "john.doe",
        "displayName": "John Doe",
        "email": "example@sailpoint.com",
        "entitlements": [
            "administrator",
            "sailpoint"
        ]
    }
}
```
## Description

The account update command triggers whenever IDN is told to modify an identity's attributes or entitlements on the target source. For example, granting an identity a new entitlement through a role, changing an identity’s lifecycle state, or modifying an identity attribute tied to an account attribute all trigger the account update command.

## Input Schema
The payload from IDN contains the ID of the identity to modify, the configuration items the connector needs to call the source API, and one or more change operations to apply to the identity. Each operation has the following special considerations:

- **Set:** Set tells the connector to overwrite the current value of the attribute or entitlement with the new value provided in the payload. The entire entitlement array resets if there are multi-valued entitlements.

- **Add:** Add only works for multi-valued entitlements. Add tells the connector to add one or more values to the entitlement. Add is often useful for group entitlements when new groups are added to the identity. If only one entitlement is added, it is represented as a ```string```. If more than one entitlement is added, it represented as an ```array of strings```.

- **Remove:** Remove is similar to add, but it also works for attributes or single-valued entitlements. If you apply remove to multi-valued entitlements, doing so tells the connector to remove the value(s) from the entitlement. If only one entitlement is removed, it is represented as a ```string```. If more than one entitlement is removed, it is represented as an ```array of strings```. If you apply remove to a single-valued entitlement or account attribute, doing so tells the connector to set the value to ```null``` or ```empty```.

The following example payload tells the connector to perform the following update actions:

- Set the title of the account to “Developer Advocate.”

- Add the account to two groups on the source: “Engineering” and “Support.”

- Remove the account from the “Moderator” group.

```javascript
{
  "type": "std:account:update",
  "input": {
      "identity": "95",
      "changes": [
          {"op": "Set", "attribute": "title", "value": "Developer Advocate"},
          {"op": "Add", "attribute": "groups", "value": ["Engineering", "Support"]},
          {"op": "Remove", "attribute": "groups", "value": "Moderator"}
      ]
  }
}
```

## Response Schema
After the connector applies the operations defined in the input payload, the connector must respond to IDN with the changes to the account so IDN can update the identity accordingly. If an account update operation results in no changes to the account, the connector responds with an empty object ```{}```. If the update operation results in one or more changes to the account, the connector responds with the complete account as it exists in the source, just like an account read response. IDN can parse the response and apply the differences accordingly.

## Testing in IdentityNow
You can test the account update command the way you test the [Account Create](./account_create.md)  command. Follow the steps in “Testing in IdentityNow” from “Account Create” to set up an access profile and role. Be sure to run the aggregation so the account(s) are created in the target source. Once the account(s) are created in the target source, modify the access profile to grant an additional entitlement. Return to the role and click the ‘Update’ button in the upper right corner. Doing so triggers the account update command because the accounts are already created in the target source. Once the update is complete, ensure the account(s) have the additional entitlement.

Note: Testing the account update command for removing entitlements using this method does not work. You can remove the entitlement from the access profile and run an update, but IDN will not send an update command to the connector to remove the entitlement. We are looking for suggestions on how to test the removal of entitlements.