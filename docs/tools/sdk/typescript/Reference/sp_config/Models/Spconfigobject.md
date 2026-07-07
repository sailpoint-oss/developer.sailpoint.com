---
id: v1-spconfigobject-v1
title: SpconfigobjectV1
pagination_label: SpconfigobjectV1
sidebar_label: SpconfigobjectV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SpconfigobjectV1', 'v1SpconfigobjectV1']
slug: /tools/sdk/typescript/sp_config/models/spconfigobject-v1
tags: ['SDK', 'Software Development Kit', 'SpconfigobjectV1', 'v1SpconfigobjectV1']
---

# SpconfigobjectV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | **(optional)** `string` | Object type the configuration is for. | [default to undefined]
**referenceExtractors** | **(optional)** `Array<string>` | List of JSON paths within an exported object of this type, representing references that must be resolved. | [default to undefined]
**signatureRequired** | **(optional)** `boolean` | Indicates whether this type of object will be JWS signed and cannot be modified before import. | [default to false]
**alwaysResolveById** | **(optional)** `boolean` | Indicates whether this object type must be always be resolved by ID. | [default to false]
**legacyObject** | **(optional)** `boolean` | Indicates whether this is a legacy object. | [default to false]
**onePerTenant** | **(optional)** `boolean` | Indicates whether there is only one object of this type. | [default to false]
**exportable** | **(optional)** `boolean` | Indicates whether the object can be exported or is just a reference object. | [default to false]
**rules** | **(optional)** `SpconfigrulesV1` |  | [default to undefined]

