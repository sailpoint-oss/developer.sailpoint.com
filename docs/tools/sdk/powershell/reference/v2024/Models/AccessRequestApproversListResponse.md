---
id: v2024-access-request-approvers-list-response
title: AccessRequestApproversListResponse
pagination_label: AccessRequestApproversListResponse
sidebar_label: AccessRequestApproversListResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestApproversListResponse', 'V2024AccessRequestApproversListResponse'] 
slug: /tools/sdk/powershell/v2024/models/access-request-approvers-list-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestApproversListResponse', 'V2024AccessRequestApproversListResponse']
---


# AccessRequestApproversListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Approver id. | [optional] 
**Email** |  Pointer to **String** | Email of the approver. | [optional] 
**Name** |  Pointer to **String** | Name of the approver. | [optional] 
**ApprovalId** |  Pointer to **String** | Id of the approval item. | [optional] 
**Type** |  Pointer to **String** | Type of the object returned. In this case, the value for this field will always Identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestApproversListResponse = Initialize-PSSailpoint.V2024AccessRequestApproversListResponse  -Id id12345 `
 -Email jdoe@sailpoint.com `
 -Name John Doe `
 -ApprovalId ap12345 `
 -Type Identity
```

- Convert the resource to JSON
```powershell
$AccessRequestApproversListResponse | ConvertTo-JSON
```


[[Back to top]](#) 

