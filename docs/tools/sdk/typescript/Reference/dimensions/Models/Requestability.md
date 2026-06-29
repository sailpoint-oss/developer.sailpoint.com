---
id: v1-requestability-v1
title: RequestabilityV1
pagination_label: RequestabilityV1
sidebar_label: RequestabilityV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RequestabilityV1', 'v1RequestabilityV1']
slug: /tools/sdk/typescript/dimensions/models/requestability-v1
tags: ['SDK', 'Software Development Kit', 'RequestabilityV1', 'v1RequestabilityV1']
---

# RequestabilityV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Indicates whether the requester of the containing object must provide comments justifying the request. | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Indicates whether an approver must provide comments when denying the request. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Indicates whether reauthorization is required for the request. | [default to false]
**requireEndDate** | **(optional)** `boolean` | Indicates whether the requester of the containing object must provide access end date. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `AccessdurationV1` |  | [default to undefined]
**approvalSchemes** | **(optional)** `Array<AccessprofileapprovalschemeV1>` | List describing the steps involved in approving the request. | [default to undefined]

