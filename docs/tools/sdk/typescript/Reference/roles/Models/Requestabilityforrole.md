---
id: v1-requestabilityforrole-v1
title: RequestabilityforroleV1
pagination_label: RequestabilityforroleV1
sidebar_label: RequestabilityforroleV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RequestabilityforroleV1', 'v1RequestabilityforroleV1']
slug: /tools/sdk/typescript/roles/models/requestabilityforrole-v1
tags: ['SDK', 'Software Development Kit', 'RequestabilityforroleV1', 'v1RequestabilityforroleV1']
---

# RequestabilityforroleV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commentsRequired** | **(optional)** `boolean` | Whether the requester of the containing object must provide comments justifying the request | [default to false]
**denialCommentsRequired** | **(optional)** `boolean` | Whether an approver must provide comments when denying the request | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | Indicates whether reauthorization is required for the request. | [default to false]
**requireEndDate** | **(optional)** `boolean` | Indicates whether the requester of the containing object must provide access end date. | [default to false]
**maxPermittedAccessDuration** | **(optional)** `AccessdurationV1` |  | [default to undefined]
**approvalSchemes** | **(optional)** `Array<ApprovalschemeforroleV1>` | List describing the steps in approving the request | [default to undefined]
**dimensionSchema** | **(optional)** `DimensionschemaV1` |  | [default to undefined]
**formDefinitionId** | **(optional)** `string` | The ID of the form definition used for the access request. If specified, the form is presented to the requester during the access request process. | [default to undefined]

