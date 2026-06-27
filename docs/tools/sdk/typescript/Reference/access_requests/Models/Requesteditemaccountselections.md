---
id: v1-requesteditemaccountselections-v1
title: RequesteditemaccountselectionsV1
pagination_label: RequesteditemaccountselectionsV1
sidebar_label: RequesteditemaccountselectionsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RequesteditemaccountselectionsV1', 'v1RequesteditemaccountselectionsV1']
slug: /tools/sdk/typescript/access_requests/models/requesteditemaccountselections-v1
tags: ['SDK', 'Software Development Kit', 'RequesteditemaccountselectionsV1', 'v1RequesteditemaccountselectionsV1']
---

# RequesteditemaccountselectionsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **(optional)** `string` | The description for this requested item | [default to undefined]
**accountsSelectionBlocked** | **(optional)** `boolean` | This field indicates if account selections are not allowed for this requested item. * If true, this field indicates that account selections will not be available for this item and user combination. In this case, no account selections should be provided in the access request for this item and user combination, irrespective of whether the user has single or multiple accounts on a source. * An example is where a user is requesting an access profile that is already assigned to one of their accounts.  | [default to false]
**accountsSelectionBlockedReason** | **(optional)** `string` | If account selections are not allowed for an item, this field will denote the reason. | [default to undefined]
**type** | **(optional)** `string` | The type of the item being requested. | [default to undefined]
**id** | **(optional)** `string` | The id of the requested item | [default to undefined]
**name** | **(optional)** `string` | The name of the requested item | [default to undefined]
**sources** | **(optional)** `Array<SourceaccountselectionsV1>` | The details for the sources and accounts for the requested item and identity combination | [default to undefined]

