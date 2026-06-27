---
id: v1-attributedto-v1
title: AttributedtoV1
pagination_label: AttributedtoV1
sidebar_label: AttributedtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AttributedtoV1', 'v1AttributedtoV1']
slug: /tools/sdk/typescript/access_profiles/models/attributedto-v1
tags: ['SDK', 'Software Development Kit', 'AttributedtoV1', 'v1AttributedtoV1']
---

# AttributedtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | Technical name of the Attribute. This is unique and cannot be changed after creation. | [default to undefined]
**name** | **(optional)** `string` | The display name of the key. | [default to undefined]
**multiselect** | **(optional)** `boolean` | Indicates whether the attribute can have multiple values. | [default to false]
**status** | **(optional)** `string` | The status of the Attribute. | [default to undefined]
**type** | **(optional)** `string` | The type of the Attribute. This can be either \"custom\" or \"governance\". | [default to undefined]
**objectTypes** | **(optional)** `Array<string>` | An array of object types this attributes values can be applied to. Possible values are \"all\" or \"entitlement\". Value \"all\" means this attribute can be used with all object types that are supported. | [default to undefined]
**description** | **(optional)** `string` | The description of the Attribute. | [default to undefined]
**values** | **(optional)** `Array<AttributevaluedtoV1>` |  | [default to undefined]

