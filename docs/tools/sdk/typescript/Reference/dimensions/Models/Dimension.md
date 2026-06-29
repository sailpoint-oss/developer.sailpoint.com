---
id: v1-dimension-v1
title: DimensionV1
pagination_label: DimensionV1
sidebar_label: DimensionV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'DimensionV1', 'v1DimensionV1']
slug: /tools/sdk/typescript/dimensions/models/dimension-v1
tags: ['SDK', 'Software Development Kit', 'DimensionV1', 'v1DimensionV1']
---

# DimensionV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id of the Dimension. This field must be left null when creating a dimension, otherwise a 400 Bad Request error will result. | [default to undefined]
**name** | `string` | The human-readable display name of the Dimension | [default to undefined]
**created** | **(optional)** `string` | Date the Dimension was created | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Date the Dimension was last modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the Dimension | [default to undefined]
**owner** | `OwnerreferenceV1` |  | [default to undefined]
**accessProfiles** | **(optional)** `Array<AccessprofilerefV1>` |  | [default to undefined]
**entitlements** | **(optional)** `Array<EntitlementrefV1>` |  | [default to undefined]
**membership** | **(optional)** `DimensionmembershipselectorV1` |  | [default to undefined]
**parentId** | **(optional)** `string` | The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call. | [default to undefined]

