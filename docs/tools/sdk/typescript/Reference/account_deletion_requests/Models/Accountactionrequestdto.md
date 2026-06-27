---
id: v1-accountactionrequestdto-v1
title: AccountactionrequestdtoV1
pagination_label: AccountactionrequestdtoV1
sidebar_label: AccountactionrequestdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountactionrequestdtoV1', 'v1AccountactionrequestdtoV1']
slug: /tools/sdk/typescript/account_deletion_requests/models/accountactionrequestdto-v1
tags: ['SDK', 'Software Development Kit', 'AccountactionrequestdtoV1', 'v1AccountactionrequestdtoV1']
---

# AccountactionrequestdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountRequestId** | **(optional)** `string` | Account requester ID. | [default to undefined]
**requestType** | **(optional)** `string` | Access item requester\'s identity ID. | [default to undefined]
**createdAt** | **(optional)** `string` | Creation date and time of account deletion request date. | [readonly] [default to undefined]
**completedAt** | **(optional)** `string` | Account deletion request completion date and time. | [readonly] [default to undefined]
**overallStatus** | **(optional)** `string` | Overall status of deletion request. | [default to undefined]
**requester** | **(optional)** `AccountactionrequestdtoRequesterV1` |  | [default to undefined]
**requesterComments** | **(optional)** `string` | Comments added by the requester while creating the account deletion request. | [default to undefined]
**accountDetails** | **(optional)** `AccountactionrequestdtoAccountDetailsV1` |  | [default to undefined]
**correlatedIdentity** | **(optional)** `AccountactionrequestdtoCorrelatedIdentityV1` |  | [default to undefined]
**managerReference** | **(optional)** `IdentityreferenceV1` |  | [default to undefined]
**approvalRequestId** | **(optional)** `string` | ID of the approval request associated with the account deletion action. | [default to undefined]
**accountRequestPhases** | **(optional)** `Array<AccountrequestphaseV1>` | List of account request phases. | [default to undefined]
**approvalDetails** | **(optional)** `Array<ApprovaldetailsV1>` | List approval details | [default to undefined]
**errorDetails** | **(optional)** `string` | Detailed error information. | [default to undefined]

