---
id: v1-accessrequestadminitemstatus-v1
title: AccessrequestadminitemstatusV1
pagination_label: AccessrequestadminitemstatusV1
sidebar_label: AccessrequestadminitemstatusV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequestadminitemstatusV1', 'v1AccessrequestadminitemstatusV1']
slug: /tools/sdk/typescript/access_requests/models/accessrequestadminitemstatus-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequestadminitemstatusV1', 'v1AccessrequestadminitemstatusV1']
---

# AccessrequestadminitemstatusV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the access request. This is a new property as of 2025. Older access requests may not have an ID. | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the item being requested. | [default to undefined]
**type** | **(optional)** `string` | Type of requested object. | [default to undefined]
**cancelledRequestDetails** | **(optional)** `RequesteditemstatusCancelledRequestDetailsV1` |  | [default to undefined]
**errorMessages** | **(optional)** `Array<Array<ErrormessagedtoV1>>` | List of localized error messages, if any, encountered during the approval/provisioning process. | [default to undefined]
**state** | **(optional)** `RequesteditemstatusrequeststateV1` |  | [default to undefined]
**approvalDetails** | **(optional)** `Array<ApprovalstatusdtoV1>` | Approval details for each item. | [default to undefined]
**manualWorkItemDetails** | **(optional)** `Array<ManualworkitemdetailsV1>` | Manual work items created for provisioning the item. | [default to undefined]
**accountActivityItemId** | **(optional)** `string` | Id of associated account activity item. | [default to undefined]
**requestType** | **(optional)** `AccessrequesttypeV1` |  | [default to undefined]
**modified** | **(optional)** `string` | When the request was last modified. | [default to undefined]
**created** | **(optional)** `string` | When the request was created. | [default to undefined]
**requester** | **(optional)** `AccessitemrequesterV1` |  | [default to undefined]
**requestedFor** | **(optional)** `RequesteditemstatusRequestedForV1` |  | [default to undefined]
**requesterComment** | **(optional)** `RequesteditemstatusRequesterCommentV1` |  | [default to undefined]
**sodViolationContext** | **(optional)** `RequesteditemstatusSodViolationContextV1` |  | [default to undefined]
**provisioningDetails** | **(optional)** `RequesteditemstatusProvisioningDetailsV1` |  | [default to undefined]
**preApprovalTriggerDetails** | **(optional)** `RequesteditemstatusPreApprovalTriggerDetailsV1` |  | [default to undefined]
**accessRequestPhases** | **(optional)** `Array<AccessrequestphasesV1>` | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [default to undefined]
**description** | **(optional)** `string` | Description associated to the requested object. | [default to undefined]
**startDate** | **(optional)** `string` | When the role access is scheduled for provisioning. | [default to undefined]
**removeDate** | **(optional)** `string` | When the role access is scheduled for removal. | [default to undefined]
**cancelable** | **(optional)** `boolean` | True if the request can be canceled. | [default to false]
**reauthorizationRequired** | **(optional)** `boolean` | True if re-auth is required. | [default to false]
**accessRequestId** | **(optional)** `string` | This is the account activity id. | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request | [default to undefined]

