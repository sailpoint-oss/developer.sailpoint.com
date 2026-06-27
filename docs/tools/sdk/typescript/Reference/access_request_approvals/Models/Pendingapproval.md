---
id: v1-pendingapproval-v1
title: PendingapprovalV1
pagination_label: PendingapprovalV1
sidebar_label: PendingapprovalV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PendingapprovalV1', 'v1PendingapprovalV1']
slug: /tools/sdk/typescript/access_request_approvals/models/pendingapproval-v1
tags: ['SDK', 'Software Development Kit', 'PendingapprovalV1', 'v1PendingapprovalV1']
---

# PendingapprovalV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The approval id. | [default to undefined]
**accessRequestId** | **(optional)** `string` | This is the access request id. | [default to undefined]
**name** | **(optional)** `string` | The name of the approval. | [default to undefined]
**created** | **(optional)** `string` | When the approval was created. | [default to undefined]
**modified** | **(optional)** `string` | When the approval was modified last time. | [default to undefined]
**requestCreated** | **(optional)** `string` | When the access-request was created. | [default to undefined]
**requestType** | **(optional)** `AccessrequesttypeV1` |  | [default to undefined]
**requester** | **(optional)** `AccessitemrequesterV1` |  | [default to undefined]
**requestedFor** | **(optional)** `AccessitemrequestedforV1` |  | [default to undefined]
**owner** | **(optional)** `PendingapprovalOwnerV1` |  | [default to undefined]
**requestedObject** | **(optional)** `RequestableobjectreferenceV1` |  | [default to undefined]
**requesterComment** | **(optional)** `CommentdtoV1` |  | [default to undefined]
**previousReviewersComments** | **(optional)** `Array<CommentdtoV1>` | The history of the previous reviewers comments. | [default to undefined]
**forwardHistory** | **(optional)** `Array<ApprovalforwardhistoryV1>` | The history of approval forward action. | [default to undefined]
**commentRequiredWhenRejected** | **(optional)** `boolean` | When true the rejector has to provide comments when rejecting | [default to false]
**actionInProcess** | **(optional)** `PendingapprovalactionV1` |  | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]
**removeDateUpdateRequested** | **(optional)** `boolean` | If true, then the request is to change the remove date or sunset date. | [default to false]
**currentRemoveDate** | **(optional)** `string` | The remove date or sunset date that was assigned at the time of the request. | [default to undefined]
**startDate** | **(optional)** `string` | The date the role or access profile or entitlement is/will assigned to the specified identity. | [default to undefined]
**startUpdateRequested** | **(optional)** `boolean` | If true, then the request is to change the start date or sunrise date. | [default to false]
**currentStartDate** | **(optional)** `string` | The start date or sunrise date that was assigned at the time of the request. | [default to undefined]
**sodViolationContext** | **(optional)** `SodviolationcontextcheckcompletedV1` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs, if any were included in the corresponding access request item | [default to undefined]
**requestedAccounts** | **(optional)** `Array<RequestedaccountrefV1>` | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level of the requested access item, if applicable. | [default to undefined]
**maxPermittedAccessDuration** | **(optional)** `PendingapprovalMaxPermittedAccessDurationV1` |  | [default to undefined]

