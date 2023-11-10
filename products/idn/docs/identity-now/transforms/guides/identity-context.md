---
id: identity-context
title: Identity Attribute Context in Transforms
pagination_label: Identity Attribute Context
sidebar_label: Identity Attribute Context
sidebar_class_name: identityContextTransform
keywords: ['transforms', 'guides', 'nested', 'lifecycle']
description: Learn what is possible with the identity attribute context
sidebar_position: 5
slug: /docs/transforms/guides/identity-context
tags: ['Transforms', 'Guides', 'identity']
---

## Overview

Transforms ships with the Apache Velocity template engine that allows a transform to reference, transform, and render values passed into the transform context.

The following variables are available to the Apache Velocity template engine when a transform is used to source an identity attribute.

| Variable | Type | Description |
| --- | --- | --- |
| identity | sailpoint.object.Identity | This is the identity the attribute promotion is performed on. |
| attributeDefinition | sailpoint.object.ObjectAttribute | This is the definition of the attribute being promoted. |
| oldValue | Object | This is the attribute's previous value. |

For available methods on these objects see our [rule java documentation](https://developer.sailpoint.com/idn/docs/rules/java-docs).

## Example Usage

The following examples will help get you started to see what is possible with the identity context.

:::info

`$identity` as well as the other variables can be used in all transform operations.

:::

### Get the Id From an Identity’s Manager

The use of a firstValid is needed, if the identity does not have a manager `getManager()` returns null.

```json
{
  "type": "firstValid",
  "attributes": {
    "values": ["$identity.getManager().getId()", "no manager exists"]
  }
}
```

### Get Custom Attribute From an Identity’s Manager

The use of a firstValid is needed, if the identity does not have a manager `getManager()` returns null.

```json
{
  "type": "firstValid",
  "attributes": {
    "values": ["$identity.getManager().getStringAttribute('country')", "no manager exists"]
  }
}
```

### Get Whether or Not the Identity Is a Manager

```json
{
  "type": "static",
  "attributes": {
    "value": "$identity.getManagerStatus()"
  }
}
```

### Get Accounts for an Identity

```json
{
  "type": "static",
  "attributes": {
    "value": "$identity.getLinks()"
  }
}
```

### Get a Comma Separated List of Account Names From a Particular Application/Source

The velocity logic behind the transform

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

If you assign a variable with the identity attribute context, it will cast the type to a string.

:::

For example, if we wanted to assign the identity's manager object to a variable and then get additional data off of it.

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
