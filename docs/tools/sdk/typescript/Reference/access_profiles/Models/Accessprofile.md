---
id: v1-accessprofile-v1
title: AccessprofileV1
pagination_label: AccessprofileV1
sidebar_label: AccessprofileV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessprofileV1', 'v1AccessprofileV1']
slug: /tools/sdk/typescript/access_profiles/models/accessprofile-v1
tags: ['SDK', 'Software Development Kit', 'AccessprofileV1', 'v1AccessprofileV1']
---

# AccessprofileV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Access profile ID. | [readonly] [default to undefined]
**name** | `string` | Access profile name. | [default to undefined]
**description** | **(optional)** `string` | Access profile description. | [default to undefined]
**created** | **(optional)** `string` | Date and time when the access profile was created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Date and time when the access profile was last modified. | [readonly] [default to undefined]
**enabled** | **(optional)** `boolean` | Indicates whether the access profile is enabled. If it\'s enabled, you must include at least one entitlement. | [default to false]
**owner** | `OwnerreferenceV1` |  | [default to undefined]
**source** | `AccessprofilesourcerefV1` |  | [default to undefined]
**entitlements** | **(optional)** `Array<EntitlementrefV1>` | List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement. | [default to undefined]
**requestable** | **(optional)** `boolean` | Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error. | [default to true]
**accessRequestConfig** | **(optional)** `RequestabilityV1` |  | [default to undefined]
**revocationRequestConfig** | **(optional)** `RevocabilityV1` |  | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of segment IDs, if any, that the access profile is assigned to. | [default to undefined]
**accessModelMetadata** | **(optional)** `AttributedtolistV1` |  | [default to undefined]
**provisioningCriteria** | **(optional)** `Provisioningcriterialevel1V1` |  | [default to undefined]
**additionalOwners** | **(optional)** `Array<AdditionalownerrefV1>` | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [default to undefined]

