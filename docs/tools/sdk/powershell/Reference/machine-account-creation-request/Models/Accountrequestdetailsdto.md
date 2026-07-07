---
id: accountrequestdetailsdto
title: Accountrequestdetailsdto
pagination_label: Accountrequestdetailsdto
sidebar_label: Accountrequestdetailsdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountrequestdetailsdto', 'Accountrequestdetailsdto'] 
slug: /tools/sdk/powershell/machineaccountcreationrequest/models/accountrequestdetailsdto
tags: ['SDK', 'Software Development Kit', 'Accountrequestdetailsdto', 'Accountrequestdetailsdto']
---


# Accountrequestdetailsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountRequestId** | **String** | Account request ID. | [optional] 
**RequestType** | **String** | Type of the account request. | [optional] 
**CreatedAt** | **System.DateTime** | Machine account creation request creation date and time. | [optional] [readonly] 
**CompletedAt** | **System.DateTime** | Machine account creation request completion date and time. | [optional] [readonly] 
**OverallStatus** | **String** | Overall status of the creation request. | [optional] 
**Requester** | [**AccountrequestdetailsdtoRequester**](accountrequestdetailsdto-requester) |  | [optional] 
**AccountRequestPhases** | [**[]Accountrequestphase**](accountrequestphase) | List of account request phases. | [optional] 
**ErrorDetails** | **String** | Detailed error information. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountrequestdetailsdto = Initialize-Accountrequestdetailsdto  -AccountRequestId 2d8180a46faadee4016fb4e018c20648 `
 -RequestType CREATE_MACHINE_ACCOUNT `
 -CreatedAt 2026-01-20T21:30Z `
 -CompletedAt 2026-01-20T21:35Z `
 -OverallStatus SUCCESS `
 -Requester null `
 -AccountRequestPhases [{"name":"APPROVAL_PHASE","state":"APPROVED","started":"2026-01-14T08:08:28.644090559Z","finished":"2026-01-14T08:38:42.707043142Z"},{"name":"PROVISIONING_PHASE","state":"PASSED","started":"2026-01-14T08:38:42.785577841Z","finished":"2026-01-14T08:38:45.932606296Z"}] `
 -ErrorDetails Detailed error message.
```

- Convert the resource to JSON
```powershell
$Accountrequestdetailsdto | ConvertTo-JSON
```


[[Back to top]](#) 

