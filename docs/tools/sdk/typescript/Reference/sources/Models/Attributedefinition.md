---
id: v1-attributedefinition-v1
title: AttributedefinitionV1
pagination_label: AttributedefinitionV1
sidebar_label: AttributedefinitionV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AttributedefinitionV1', 'v1AttributedefinitionV1']
slug: /tools/sdk/typescript/sources/models/attributedefinition-v1
tags: ['SDK', 'Software Development Kit', 'AttributedefinitionV1', 'v1AttributedefinitionV1']
---

# AttributedefinitionV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the attribute. | [default to undefined]
**nativeName** | **(optional)** `string` | Attribute name in the native system. | [default to undefined]
**type** | **(optional)** `AttributedefinitiontypeV1` |  | [default to undefined]
**schema** | **(optional)** `AttributedefinitionSchemaV1` |  | [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the attribute. | [default to undefined]
**isMulti** | **(optional)** `boolean` | Flag indicating whether or not the attribute is multi-valued. | [default to false]
**isEntitlement** | **(optional)** `boolean` | Flag indicating whether or not the attribute is an entitlement. | [default to false]
**isGroup** | **(optional)** `boolean` | Flag indicating whether or not the attribute represents a group. This can only be `true` if `isEntitlement` is also `true` **and** there is a schema defined for the attribute..  | [default to false]

