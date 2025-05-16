---
id: requestability-for-role
title: RequestabilityForRole
pagination_label: RequestabilityForRole
sidebar_label: RequestabilityForRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestabilityForRole', 'RequestabilityForRole'] 
slug: /tools/sdk/powershell/v3/models/requestability-for-role
tags: ['SDK', 'Software Development Kit', 'RequestabilityForRole', 'RequestabilityForRole']
---


# RequestabilityForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | **Boolean** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to $false]
**DenialCommentsRequired** | **Boolean** | Whether an approver must provide comments when denying the request | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | Indicates whether reauthorization is required for the request. | [optional] [default to $false]
**ApprovalSchemes** | [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the request | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestabilityForRole = Initialize-RequestabilityForRole  -CommentsRequired true `
 -DenialCommentsRequired true `
 -ReauthorizationRequired true `
 -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$RequestabilityForRole | ConvertTo-JSON
```


[[Back to top]](#) 

