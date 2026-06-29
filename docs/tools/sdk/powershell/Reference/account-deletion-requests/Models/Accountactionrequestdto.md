---
id: accountactionrequestdto
title: Accountactionrequestdto
pagination_label: Accountactionrequestdto
sidebar_label: Accountactionrequestdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountactionrequestdto', 'Accountactionrequestdto'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/accountactionrequestdto
tags: ['SDK', 'Software Development Kit', 'Accountactionrequestdto', 'Accountactionrequestdto']
---


# Accountactionrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountRequestId** | **String** | Account requester ID. | [optional] 
**RequestType** | **String** | Access item requester's identity ID. | [optional] 
**CreatedAt** | **System.DateTime** | Creation date and time of account deletion request date. | [optional] [readonly] 
**CompletedAt** | **System.DateTime** | Account deletion request completion date and time. | [optional] [readonly] 
**OverallStatus** | **String** | Overall status of deletion request. | [optional] 
**Requester** | [**AccountactionrequestdtoRequester**](accountactionrequestdto-requester) |  | [optional] 
**RequesterComments** | **String** | Comments added by the requester while creating the account deletion request. | [optional] 
**AccountDetails** | [**AccountactionrequestdtoAccountDetails**](accountactionrequestdto-account-details) |  | [optional] 
**CorrelatedIdentity** | [**AccountactionrequestdtoCorrelatedIdentity**](accountactionrequestdto-correlated-identity) |  | [optional] 
**ManagerReference** | [**Identityreference**](identityreference) |  | [optional] 
**ApprovalRequestId** | **String** | ID of the approval request associated with the account deletion action. | [optional] 
**AccountRequestPhases** | [**[]Accountrequestphase**](accountrequestphase) | List of account request phases. | [optional] 
**ApprovalDetails** | [**[]Approvaldetails**](approvaldetails) | List approval details | [optional] 
**ErrorDetails** | **String** | Detailed error information. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountactionrequestdto = Initialize-Accountactionrequestdto  -AccountRequestId 2d8180a46faadee4016fb4e018c20648 `
 -RequestType 2c7180a46faadee4016fb4e018c20648 `
 -CreatedAt 2026-01-20T21:30Z `
 -CompletedAt 2026-01-20T21:35Z `
 -OverallStatus SUCCESS `
 -Requester null `
 -RequesterComments User requested account deletion due to inactivity. `
 -AccountDetails null `
 -CorrelatedIdentity null `
 -ManagerReference null `
 -ApprovalRequestId 06cc946d58bb4422bbd094cf78667d42 `
 -AccountRequestPhases [{"name":"APPROVAL_PHASE","state":"APPROVED","started":"2026-01-14T08:08:28.644090559Z","finished":"2026-01-14T08:38:42.707043142Z"},{"name":"PROVISIONING_PHASE","state":"PASSED","started":"2026-01-14T08:38:42.785577841Z","finished":"2026-01-14T08:38:45.932606296Z"}] `
 -ApprovalDetails [{"identityID":"85131bd73fdc423599e57f40b29f01fe","id":"85131bd73fdc423599e57f40b29f01fe","name":"SailPoint Support","email":"support@testmail.identitysoon.com","type":"IDENTITY","ownerOf":{"email":"Alfred.255e71dfc6e@testmail.identitysoon.com","type":"IDENTITY","id":"7ec252acbd4245548bc25df22348cb75","name":"Alfred"},"actionedAs":{"email":"Alfred.255e71dfc6e@testmail.identitysoon.com","type":"IDENTITY","id":"7ec252acbd4245548bc25df22348cb75","name":"Alfred"},"members":{"email":"Alfred.255e71dfc6e@testmail.identitysoon.com","type":"IDENTITY","id":"7ec252acbd4245548bc25df22348cb75","name":"Alfred"}}] `
 -ErrorDetails Detailed error message.
```

- Convert the resource to JSON
```powershell
$Accountactionrequestdto | ConvertTo-JSON
```


[[Back to top]](#) 

