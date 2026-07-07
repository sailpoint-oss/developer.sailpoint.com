---
id: v1-accessitemaccessprofileresponse-v1
title: AccessitemaccessprofileresponseV1
pagination_label: AccessitemaccessprofileresponseV1
sidebar_label: AccessitemaccessprofileresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessitemaccessprofileresponseV1', 'v1AccessitemaccessprofileresponseV1']
slug: /tools/sdk/typescript/identity_history/models/accessitemaccessprofileresponse-v1
tags: ['SDK', 'Software Development Kit', 'AccessitemaccessprofileresponseV1', 'v1AccessitemaccessprofileresponseV1']
---

# AccessitemaccessprofileresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | the access item id | [default to undefined]
**accessType** | **(optional)** `string` | the access item type. accessProfile in this case | [default to undefined]
**displayName** | **(optional)** `string` | the display name of the identity | [default to undefined]
**sourceName** | **(optional)** `string` | the name of the source | [default to undefined]
**entitlementCount** | `number` | the number of entitlements the access profile will create | [default to undefined]
**description** | **(optional)** `string` | the description for the access profile | [default to undefined]
**sourceId** | **(optional)** `string` | the id of the source | [default to undefined]
**appRefs** | `Array<AccessitemaccessprofileresponseAppRefsInnerV1>` | the list of app ids associated with the access profile | [default to undefined]
**startDate** | **(optional)** `string` | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [default to undefined]
**removeDate** | **(optional)** `string` | the date the access profile is no longer assigned to the specified identity | [default to undefined]
**standalone** | `boolean` | indicates whether the access profile is standalone | [default to undefined]
**revocable** | `boolean` | indicates whether the access profile is revocable | [default to undefined]

