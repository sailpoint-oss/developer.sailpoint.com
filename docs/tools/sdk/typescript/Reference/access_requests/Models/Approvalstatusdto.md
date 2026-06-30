---
id: v1-approvalstatusdto-v1
title: ApprovalstatusdtoV1
pagination_label: ApprovalstatusdtoV1
sidebar_label: ApprovalstatusdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ApprovalstatusdtoV1', 'v1ApprovalstatusdtoV1']
slug: /tools/sdk/typescript/access_requests/models/approvalstatusdto-v1
tags: ['SDK', 'Software Development Kit', 'ApprovalstatusdtoV1', 'v1ApprovalstatusdtoV1']
---

# ApprovalstatusdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ApprovalstatusdtoOriginalOwnerV1` |  | [default to undefined]
**currentOwner** | **(optional)** `ApprovalstatusdtoCurrentOwnerV1` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `ManualworkitemstateV1` |  | [default to undefined]
**scheme** | **(optional)** `ApprovalschemeV1` |  | [default to undefined]
**errorMessages** | **(optional)** `Array<ErrormessagedtoV1>` | If the request failed, includes any error messages that were generated. | [default to undefined]
**comment** | **(optional)** `string` | Comment, if any, provided by the approver. | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]

