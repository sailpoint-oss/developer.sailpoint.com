---
id: v1-manualworkitemdetails-v1
title: ManualworkitemdetailsV1
pagination_label: ManualworkitemdetailsV1
sidebar_label: ManualworkitemdetailsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManualworkitemdetailsV1', 'v1ManualworkitemdetailsV1']
slug: /tools/sdk/typescript/access_requests/models/manualworkitemdetails-v1
tags: ['SDK', 'Software Development Kit', 'ManualworkitemdetailsV1', 'v1ManualworkitemdetailsV1']
---

# ManualworkitemdetailsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ManualworkitemdetailsOriginalOwnerV1` |  | [default to undefined]
**currentOwner** | **(optional)** `ManualworkitemdetailsCurrentOwnerV1` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `ManualworkitemstateV1` |  | [default to undefined]
**forwardHistory** | **(optional)** `Array<ApprovalforwardhistoryV1>` | The history of approval forward action. | [default to undefined]

