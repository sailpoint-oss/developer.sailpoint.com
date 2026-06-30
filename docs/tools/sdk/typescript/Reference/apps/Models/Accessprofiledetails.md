---
id: v1-accessprofiledetails-v1
title: AccessprofiledetailsV1
pagination_label: AccessprofiledetailsV1
sidebar_label: AccessprofiledetailsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessprofiledetailsV1', 'v1AccessprofiledetailsV1']
slug: /tools/sdk/typescript/apps/models/accessprofiledetails-v1
tags: ['SDK', 'Software Development Kit', 'AccessprofiledetailsV1', 'v1AccessprofiledetailsV1']
---

# AccessprofiledetailsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The ID of the Access Profile | [default to undefined]
**name** | **(optional)** `string` | Name of the Access Profile | [default to undefined]
**description** | **(optional)** `string` | Information about the Access Profile | [default to undefined]
**created** | **(optional)** `string` | Date the Access Profile was created | [default to undefined]
**modified** | **(optional)** `string` | Date the Access Profile was last modified. | [default to undefined]
**disabled** | **(optional)** `boolean` | Whether the Access Profile is enabled. | [default to true]
**requestable** | **(optional)** `boolean` | Whether the Access Profile is requestable via access request. | [default to false]
**_protected** | **(optional)** `boolean` | Whether the Access Profile is protected. | [default to false]
**ownerId** | **(optional)** `string` | The owner ID of the Access Profile | [default to undefined]
**sourceId** | **(optional)** `number` | The source ID of the Access Profile | [default to undefined]
**sourceName** | **(optional)** `string` | The source name of the Access Profile | [default to undefined]
**appId** | **(optional)** `number` | The source app ID of the Access Profile | [default to undefined]
**appName** | **(optional)** `string` | The source app name of the Access Profile | [default to undefined]
**applicationId** | **(optional)** `string` | The id of the application | [default to undefined]
**type** | **(optional)** `string` | The type of the access profile | [default to undefined]
**entitlements** | **(optional)** `Array<string>` | List of IDs of entitlements | [default to undefined]
**entitlementCount** | **(optional)** `number` | The number of entitlements in the access profile | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of IDs of segments, if any, to which this Access Profile is assigned. | [default to undefined]
**approvalSchemes** | **(optional)** `string` | Comma-separated list of approval schemes. Each approval scheme is one of - manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [default to undefined]
**revokeRequestApprovalSchemes** | **(optional)** `string` | Comma-separated list of revoke request approval schemes. Each approval scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [default to undefined]
**requestCommentsRequired** | **(optional)** `boolean` | Whether the access profile require request comment for access request. | [default to false]
**deniedCommentsRequired** | **(optional)** `boolean` | Whether denied comment is required when access request is denied. | [default to false]
**accountSelector** | **(optional)** `AccessprofiledetailsAccountSelectorV1` |  | [default to undefined]

