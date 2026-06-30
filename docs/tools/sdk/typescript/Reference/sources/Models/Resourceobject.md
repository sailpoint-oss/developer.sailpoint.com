---
id: v1-resourceobject-v1
title: ResourceobjectV1
pagination_label: ResourceobjectV1
sidebar_label: ResourceobjectV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ResourceobjectV1', 'v1ResourceobjectV1']
slug: /tools/sdk/typescript/sources/models/resourceobject-v1
tags: ['SDK', 'Software Development Kit', 'ResourceobjectV1', 'v1ResourceobjectV1']
---

# ResourceobjectV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **(optional)** `string` | Identifier of the specific instance where this object resides. | [readonly] [default to undefined]
**identity** | **(optional)** `string` | Native identity of the object in the Source. | [readonly] [default to undefined]
**uuid** | **(optional)** `string` | Universal unique identifier of the object in the Source. | [readonly] [default to undefined]
**previousIdentity** | **(optional)** `string` | Native identity that the object has previously. | [readonly] [default to undefined]
**name** | **(optional)** `string` | Display name for this object. | [readonly] [default to undefined]
**objectType** | **(optional)** `string` | Type of object. | [readonly] [default to undefined]
**incomplete** | **(optional)** `boolean` | A flag indicating that this is an incomplete object. Used in special cases where the connector has to return account information in several phases and the objects might not have a complete set of all account attributes. The attributes in this object will replace the corresponding attributes in the Link, but no other Link attributes will be changed. | [readonly] [default to undefined]
**incremental** | **(optional)** `boolean` | A flag indicating that this is an incremental change object. This is similar to incomplete but it also means that the values of any multi-valued attributes in this object should be merged with the existing values in the Link rather than replacing the existing Link value. | [readonly] [default to undefined]
**_delete** | **(optional)** `boolean` | A flag indicating that this object has been deleted. This is set only when doing delta aggregation and the connector supports detection of native deletes. | [readonly] [default to undefined]
**remove** | **(optional)** `boolean` | A flag set indicating that the values in the attributes represent things to remove rather than things to add. Setting this implies incremental. The values which are always for multi-valued attributes are removed from the current values. | [readonly] [default to undefined]
**missing** | **(optional)** `Array<string>` | A list of attribute names that are not included in this object. This is only used with SMConnector and will only contain \"groups\". | [readonly] [default to undefined]
**attributes** | **(optional)** `object` | Attributes of this ResourceObject. | [readonly] [default to undefined]
**finalUpdate** | **(optional)** `boolean` | In Aggregation, for sparse object the count for total accounts scanned identities updated is not incremented. | [readonly] [default to undefined]

