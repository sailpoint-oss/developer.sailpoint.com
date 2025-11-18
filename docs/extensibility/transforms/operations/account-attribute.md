---
id: account-attribute
title: Account attribute
pagination_label: Account Attribute
sidebar_label: Account Attribute
sidebar_class_name: accountAttribute
keywords: ['transforms', 'operations', 'account', 'attribute']
description: Look up an account for a particular source on an identity.
slug: /extensibility/transforms/operations/account-attribute
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the account attribute transform to look up an account for a particular source on an identity and return a specific attribute value from that account.

:::note Other Considerations

- If there are multiple accounts, then Identity Security Cloud by default takes the value from the oldest account (based on the account created date). You can configure this behavior by specifying `accountSortAttribute` and `accountSortDescending` attributes.
- If there are multiple accounts and the oldest account has a null attribute value, by default Identity Security Cloud moves to the next account that can have a value (if there are any). You can override this behavior with the `accountReturnFirstLink` property.
- You can filter the multiple accounts returned based on the data they contain so that you can target specific accounts. This is often used to target accounts that are "active" instead of those that are not.

:::

## Transform structure

The account attribute transform's configuration can take several attributes as inputs. The following example shows a fully configured transform with all required and optional attributes.

```json
{
  "attributes": {
    "sourceName": "Workday",
    "attributeName": "DEPARTMENT",
    "accountSortAttribute": "created",
    "accountSortDescending": true,
    "accountReturnFirstLink": true,
    "accountPropertyFilter": "(DEPARTMENT == \"Engineering\")",
    "accountFilter": "!(nativeIdentity.startsWith(\"*DELETED*\"))"
  },
  "type": "accountAttribute",
  "name": "Account Attribute Transform"
}
```

## Attributes

The account attribute transform uses the following structure:

```json
{
  "type": "accountAttribute",
  "name": "Transform Name",
  "attributes": {
    // Configuration properties go here
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `accountAttribute`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the configuration for looking up account attributes.

#### Required

- **sourceName** `string` _(required)_  
  The source to search for accounts. This references a source's display name (e.g., "Active Directory"). If the display name changes, this reference must be updated.
  
  **Alternatives:**
  - **applicationId** - Reference by source's external GUID (e.g., "ff8081815a8b3925015a8b6adac901ff")
  - **applicationName** - Reference by source's immutable name (e.g., "Active Directory \[source\]")

- **attributeName** `string` _(required)_  
  The name of the attribute on the account to return. This matches the account attribute name visible in the UI or source schema.

#### Optional

- **accountSortAttribute** `string` _(optional)_  
  The attribute name to use when sorting returned accounts (if multiple exist). Accounts can be sorted by any schema attribute. Default is `"created"` (ascending sort - oldest wins).

- **accountSortDescending** `boolean` _(optional)_  
  Controls the sort order when multiple accounts exist. Default is `false` (ascending order).

- **accountReturnFirstLink** `boolean` _(optional)_  
  Controls which account value to return:
  - `true` - Returns the value from the first account in the sorted list, even if null
  - `false` - Returns the first non-null value from the sorted accounts
  
  Default is `false`.

- **accountFilter** `string` _(optional)_  
  A `sailpoint.object.Filter` expression to narrow search results by querying the database. This filter is combined with the default source and identity filter using AND logic.
  
  **Available searchable attributes:**
  - `nativeIdentity` - The account ID
  - `displayName` - The account name  
  - `entitlements` - Whether the account has entitlements (boolean)

- **accountPropertyFilter** `string` _(optional)_  
  A `sailpoint.object.Filter` expression to filter accounts in memory after retrieval. All account attributes are available since filtering happens in memory.
  
  **Examples:**
  - `(status != "terminated")`
  - `(department == "Engineering")`
  - `(groups.containsAll({"Admin"}) || location == "Austin")`

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

HR systems can have multiple HR records for a person, especially in rehire and conversion scenarios. In order to get the correct identity data, you must get data from only the latest active accounts.

- `sourceName` is "Corporate HR" because that is the name of the authoritative source.

- `attributeName` is "HIREDATE" because that is the attribute you want from the authoritative source.

- `accountSortAttribute` is "created" because you want to sort on created dates in case there are multiple accounts.

- `accountSortDescending` is true because you want to sort based on the newest or latest account from the HR system.

- `accountReturnFirstLink` is true because you want to return the value of HIREDATE, event if it is null.

- `accountPropertyFilter` is filtering the accounts to look at only active accounts. Terminated accounts will not appear (assuming there are no data issues).

:::info

You cannot use `accountFilter` here because WORKER_STATUS\_\_c is not a searchable attribute, but `accountPropertyFilter` works instead.

:::

**Transform request body**:

```json
{
  "attributes": {
    "attributeName": "HIREDATE",
    "sourceName": "Corporate HR",
    "accountSortAttribute": "created",
    "accountSortDescending": true,
    "accountReturnFirstLink": true,
    "accountPropertyFilter": "(WORKER_STATUS__c == \"active\")"
  },
  "type": "accountAttribute",
  "name": "Account Attribute Transform"
}
```

---

<p>&nbsp;</p>

When you are mapping values like a username, focus on primary accounts from a particular source or accounts that are not service accounts.

- `sourceName` is "Active Directory" because that is the source this data is coming from.
- `attributeName` is "sAMAccountName" because you are mapping the username of the user.
- `accountFilter` is an expression filtering the accounts to make sure they are not service accounts.

:::info

`accountPropertyFilter` also would have worked here.

:::

**Transform request body**:

```json
{
  "attributes": {
    "attributeName": "sAMAccountName",
    "sourceName": "Active Directory",
    "accountFilter": "!(displayName.startsWith(\"SVC-\"))"
  },
  "type": "accountAttribute",
  "name": "Account Attribute Transform"
}
```

To determine whether an identity is a member of an entitlement.

- `input` contains the condition to be evaluated (is member of an entitlement or not). If the user doesn't meet the below conditions, the `firstValid` retuns "FALSE".
  - `sourceName` is "Active Directory" because that is the source this data is coming from.
  - `attributeName` is "sAMAccountName" because you are mapping the username of the user.
  - `accountPropertyFilter` is filtering accounts that are members of an entitlement that contains "All AD Users-rshwart".
- `table` contains the boolean results: FALSE or TRUE (default).

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "values": [
          {
            "attributes": {
              "accountPropertyFilter": "(memberOf.contains(\"All AD Users-rshwart\"))",
              "attributeName": "sAMAccountName",
              "sourceName": "Active Directory"
            },
            "type": "accountAttribute"
          },
          "FALSE"
        ]
      },
      "type": "firstValid"
    },
    "table": {
      "FALSE": "FALSE",
      "default": "TRUE"
    }
  },
  "id": "Contains IT Access",
  "type": "lookup"
}
```
