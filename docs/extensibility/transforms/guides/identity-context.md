---
id: identity-context
title: Identity Attribute Context in Transforms
pagination_label: Identity Attribute Context
sidebar_label: Identity Attribute Context
sidebar_class_name: identityContextTransform
keywords: ['transforms', 'guides', 'nested', 'lifecycle']
description: Examples on how you might use the identity attribute context.
sidebar_position: 5
slug: /extensibility/transforms/guides/identity-context-examples
tags: ['Transforms', 'Guides', 'identity']
---

## Overview

Transforms ship with the Apache Velocity template engine, which allows a transform to reference, transform, and render values passed into the transform context.

The following variables are available to the Apache Velocity template engine when a transform is used to source an identity attribute:

| Variable | Type | Description |
| --- | --- | --- |
| identity | sailpoint.object.Identity | This is the identity the attribute promotion is performed on. |
| attributeDefinition | sailpoint.object.AttributeDefinition | This is the definition of the attribute being promoted. |
| oldValue | Object | This is the attribute's previous value. |

For available methods on these objects see our [Rules Java Docs](https://developer.sailpoint.com/docs/extensibility/rules/java-docs).

## Examples

These examples will help you learn what you can do with the identity context.

:::info

You can use `$identity`, as well as the other variables, in all transform operations.

:::

### Get the ID of the identity's manager

You must use a `firstValid`. If the identity does not have a manager, `getManager()` returns null.

```json
{
  "type": "firstValid",
  "attributes": {
    "values": [
      "$identity.getManager().getId()",
      "no manager exists"
    ]
  }
}
```

### Get a custom attribute of the identity's manager

You must use a `firstValid`. If the identity does not have a manager, `getManager()` returns null.

```json
{
  "type": "firstValid",
  "attributes": {
    "values": [
      "$identity.getManager().getStringAttribute('country')",
      "no manager exists"
    ]
  }
}
```

### Get managerial status of the identity

This example would get a boolean response indicating whether the identity is listed as the manager of another identity.

```json
{
  "type": "static",
  "attributes": {
    "value": "$identity.getManagerStatus()"
  }
}
```

### Get an identity's accounts

This example would get an identity's various associated source accounts.

```json
{
  "type": "static",
  "attributes": {
    "value": "$identity.getLinks()"
  }
}
```

### Get details of an account on a specified application/source

The below examples pull in the SailPoint-generated account ID for the first account an identity has on a source, but you can replace `id` with the name of the attribute you're interested in retrieving.

To retrieve an attribute from an identity's account in a specific source, by Source ID:

```json
{
  "type": "firstValid",
    "attributes": {
        "values": [
            {
                "type": "static",
                "attributes": {
                    "value": "$identity.getLinksByAppIdOrName("2c918088814e6a610181686b56977fa8",null\")[0].id"
                }
            },
            null
        ],
        "ignoreErrors": true
    }
}
```

To retrieve an attribute from an identity's account in a specific source, by Source Name:

:::caution

Note the `[source]` at the end of the Source Name in the below example. This is required for all sources other than the internal IdentityNow source.

:::

```json
{
  "type": "firstValid",
    "attributes": {
        "values": [
            {
                "type": "static",
                "attributes": {
                    "value": "$identity.getLinksByAppIdOrName(null,\"Active Directory [source]\")[0].id"
                }
            },
            null
        ],
        "ignoreErrors": true
    }
}
```

### Get a comma separated list of account names from an application/source

This is the velocity logic of the transform:

```java
/* Loop through accounts returned from get accounts by application id */
#foreach($account in $identity.getLinksByAppIdOrName("2c918088814e6a610181686b56977fa8",null))
    #if($foreach.index + 1 != $identity.getLinks().size()) /* If we are not on the last item, include a comma */
        $account.getNativeIdentity(),
    #else
        $account.getNativeIdentity()
    #end
#end
```

```json
{
  "type": "static",
  "attributes": {
    "value": "#foreach($account in $identity.getLinksByAppIdOrName(\"2c918088814e6a610181686b56977fa8\",null))#if($foreach.index + 1 != $identity.getLinks().size())$account.getNativeIdentity(),#else$account.getNativeIdentity()#end#end"
  }
}
```

## Notes

:::caution

If you assign a variable with the identity attribute context, doing so will cast the type to a string.

:::

For example, you may do this if you wanted to assign the identity's manager object to a variable and then get additional data from it.

:::warning Invalid

```json
{
  "type": "static",
  "attributes": {
    "manager": "$identity.getManager()",
    "value": "$manager.getStringAttribute('country')"
  }
}
```

:::

:::tip Valid

```json
{
  "type": "static",
  "attributes": {
    "managerCountry": "$identity.getManager().getStringAttribute('country')",
    "value": "$managerCountry"
  }
}
```

:::
