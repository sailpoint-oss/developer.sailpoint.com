---
id: v1-entitlement-v1
title: EntitlementV1
pagination_label: EntitlementV1
sidebar_label: EntitlementV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'EntitlementV1', 'v1EntitlementV1']
slug: /tools/sdk/typescript/entitlements/models/entitlement-v1
tags: ['SDK', 'Software Development Kit', 'EntitlementV1', 'v1EntitlementV1']
---

# EntitlementV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The entitlement id | [default to undefined]
**name** | **(optional)** `string` | The entitlement name | [default to undefined]
**attribute** | **(optional)** `string` | The entitlement attribute name | [default to undefined]
**value** | **(optional)** `string` | The value of the entitlement | [default to undefined]
**sourceSchemaObjectType** | **(optional)** `string` | The object type of the entitlement from the source schema | [default to undefined]
**description** | **(optional)** `string` | The description of the entitlement | [default to undefined]
**privileged** | **(optional)** `boolean` | True if the entitlement is privileged | [default to false]
**cloudGoverned** | **(optional)** `boolean` | True if the entitlement is cloud governed | [default to false]
**requestable** | **(optional)** `boolean` | True if the entitlement is able to be directly requested | [default to false]
**owner** | **(optional)** `Entitlementv2OwnerV1` |  | [default to undefined]
**additionalOwners** | **(optional)** `Array<AdditionalownerrefV1>` | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [default to undefined]
**manuallyUpdatedFields** | **(optional)**  | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [default to undefined]
**accessModelMetadata** | **(optional)** `Entitlementv2AccessModelMetadataV1` |  | [default to undefined]
**created** | **(optional)** `string` | Time when the entitlement was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the entitlement was last modified | [default to undefined]
**source** | **(optional)** `EntitlementSourceV1` |  | [default to undefined]
**attributes** | **(optional)**  | A map of free-form key-value pairs from the source system | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of IDs of segments, if any, to which this Entitlement is assigned. | [default to undefined]
**directPermissions** | **(optional)** `Array<PermissiondtoV1>` |  | [default to undefined]

