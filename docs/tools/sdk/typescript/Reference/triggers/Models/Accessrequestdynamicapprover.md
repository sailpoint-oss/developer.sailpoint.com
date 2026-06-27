---
id: v1-accessrequestdynamicapprover-v1
title: AccessrequestdynamicapproverV1
pagination_label: AccessrequestdynamicapproverV1
sidebar_label: AccessrequestdynamicapproverV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestdynamicapproverV1', 'v1AccessrequestdynamicapproverV1']
slug: /tools/sdk/typescript/triggers/models/accessrequestdynamicapprover-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequestdynamicapproverV1', 'v1AccessrequestdynamicapproverV1']
---

# AccessrequestdynamicapproverV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | [default to undefined]
**requestedFor** | `Array<AccessitemrequestedfordtoV1>` | Identities access was requested for. | [default to undefined]
**requestedItems** | `Array<AccessrequestdynamicapproverRequestedItemsInnerV1>` | The access items that are being requested. | [default to undefined]
**requestedBy** | `AccessitemrequesterdtoV1` |  | [default to undefined]

