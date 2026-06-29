---
id: v1-role-v1
title: RoleV1
pagination_label: RoleV1
sidebar_label: RoleV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RoleV1', 'v1RoleV1']
slug: /tools/sdk/typescript/roles/models/role-v1
tags: ['SDK', 'Software Development Kit', 'RoleV1', 'v1RoleV1']
---

# RoleV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result. | [default to undefined]
**name** | `string` | The human-readable display name of the Role | [default to undefined]
**created** | **(optional)** `string` | Date the Role was created | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Date the Role was last modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | A human-readable description of the Role | [default to undefined]
**owner** | `OwnerreferenceV1` |  | [default to undefined]
**additionalOwners** | **(optional)** `Array<AdditionalownerrefV1>` | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [default to undefined]
**accessProfiles** | **(optional)** `Array<AccessprofilerefV1>` |  | [default to undefined]
**entitlements** | **(optional)** `Array<EntitlementrefV1>` |  | [default to undefined]
**membership** | **(optional)** `RolemembershipselectorV1` |  | [default to undefined]
**legacyMembershipInfo** | **(optional)**  | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether the Role is enabled or not. | [default to false]
**requestable** | **(optional)** `boolean` | Whether the Role can be the target of access requests. | [default to false]
**accessRequestConfig** | **(optional)** `RequestabilityforroleV1` |  | [default to undefined]
**revocationRequestConfig** | **(optional)** `RevocabilityforroleV1` |  | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of IDs of segments, if any, to which this Role is assigned. | [default to undefined]
**dimensional** | **(optional)** `boolean` | Whether the Role is dimensional. | [default to false]
**dimensionRefs** | **(optional)** `Array<DimensionrefV1>` | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [default to undefined]
**accessModelMetadata** | **(optional)** `AttributedtolistV1` |  | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level of the role, if applicable. | [default to undefined]

