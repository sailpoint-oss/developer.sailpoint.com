---
id: account-attribute
title: Account Attribute
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

## Transform Structure

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

- **Required Attributes**
  - **type** - This must always be set to `accountAttribute`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **sourceName** - This is a reference to the source to search for accounts.
    - This is a reference by a source's display name attribute (e.g., Active Directory). If the display name is updated, this reference must also be updated.
    - As an alternative, you can provide an `applicationId` or `applicationName` instead.
      - `applicationId` - This is a reference by a source's external GUID/ID attribute (e.g., "ff8081815a8b3925015a8b6adac901ff").
      - `applicationName` - This is a reference by a source's immutable name attribute (e.g., "Active Directory \[source\]").
  - **attributeName** - The name of the attribute on the account to return. This matches the name of the account attribute name visible in the user interface or on the source schema.
- **Optional Attributes**
  - **requiresPeriodicRefresh** - This is a `true` or `false` value indicating whether the transform logic must be reevaluated every evening as part of the identity refresh process.
  - **accountSortAttribute** - This configuration's value is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries.
    - Accounts can be sorted by any schema attribute.
    - If no sort attribute is defined, the transform will default to "created" (ascending sort on created date - oldest object wins).
  - **accountSortDescending** - This configuration's value is a boolean (true/false). It controls the sort order when there are multiple accounts.
    - If not defined, the transform will default to false (ascending order)
  - **accountReturnFirstLink** - This configuration's value is a boolean (true/false). It controls which account to source a value from for an attribute. If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If this flag is set to false, the transform returns the first non-null value.
    - If the configuration's value is not defined, the transform will default to the false setting.
  - **accountFilter** - This expression queries the database to narrow search results. This configuration's value is a `sailpoint.object.Filter` expression for searching against the database. The default filter always includes the source and identity, and any subsequent expressions are combined in an AND operation with the existing search criteria.
    - Only certain searchable attributes are available:
      - `nativeIdentity` - This is the account ID.
      - `displayName` - This is the account name.
      - `entitlements` - This boolean value determine whether the account has entitlements.
  - **accountPropertyFilter** - Use this expression to search and filter accounts in memory. This configuration's value is a `sailpoint.object.Filter` expression for searching against the returned resultset.
    - All account attributes are available for filtering because this operation is performed in memory.
    - Examples:
      - `(status != "terminated")`
      - `(department == "Engineering")`
      - `(groups.containsAll({"Admin"}) || location == "Austin")`
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

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

**Transform Request Body**:

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

**Transform Request Body**:

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
