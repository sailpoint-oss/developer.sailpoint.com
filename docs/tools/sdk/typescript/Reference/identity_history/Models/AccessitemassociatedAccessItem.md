---
id: v1-accessitemassociated-access-item-v1
title: AccessitemassociatedAccessItemV1
pagination_label: AccessitemassociatedAccessItemV1
sidebar_label: AccessitemassociatedAccessItemV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessitemassociatedAccessItemV1', 'v1AccessitemassociatedAccessItemV1']
slug: /tools/sdk/typescript/identity_history/models/accessitemassociated-access-item-v1
tags: ['SDK', 'Software Development Kit', 'AccessitemassociatedAccessItemV1', 'v1AccessitemassociatedAccessItemV1']
---

# AccessitemassociatedAccessItemV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | the access item id | [default to undefined]
**accessType** | **(optional)** `string` | the access item type. entitlement in this case | [default to undefined]
**displayName** | **(optional)** `string` | the access item display name | [default to undefined]
**sourceName** | **(optional)** `string` | the associated source name if it exists | [default to undefined]
**attribute** | `string` | the entitlement attribute | [default to undefined]
**value** | `string` | the associated value | [default to undefined]
**type** | `string` | the type of entitlement | [default to undefined]
**description** | **(optional)** `string` | the description for the role | [default to undefined]
**sourceId** | **(optional)** `string` | the id of the source | [default to undefined]
**standalone** | `boolean` | indicates whether the access profile is standalone | [default to undefined]
**privileged** | `boolean` | indicates whether the entitlement is privileged | [default to undefined]
**cloudGoverned** | `boolean` | indicates whether the entitlement is cloud governed | [default to undefined]
**entitlementCount** | `number` | the number of entitlements the account will create | [default to undefined]
**appRefs** | `Array<AccessitemaccessprofileresponseAppRefsInnerV1>` | the list of app ids associated with the access profile | [default to undefined]
**startDate** | **(optional)** `string` | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [default to undefined]
**removeDate** | **(optional)** `string` | the date the role is no longer assigned to the specified identity | [default to undefined]
**revocable** | `boolean` | indicates whether the role is revocable | [default to undefined]
**nativeIdentity** | `string` | the native identifier used to uniquely identify an acccount | [default to undefined]
**appRoleId** | `string` | the app role id | [default to undefined]

