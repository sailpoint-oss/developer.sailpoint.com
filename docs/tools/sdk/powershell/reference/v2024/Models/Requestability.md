---
id: v2024-requestability
title: Requestability
pagination_label: Requestability
sidebar_label: Requestability
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestability', 'V2024Requestability'] 
slug: /tools/sdk/powershell/v2024/models/requestability
tags: ['SDK', 'Software Development Kit', 'Requestability', 'V2024Requestability']
---


# Requestability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** |  Pointer to **Boolean** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to $false]
**DenialCommentsRequired** |  Pointer to **Boolean** | Whether an approver must provide comments when denying the request | [optional] [default to $false]
**ApprovalSchemes** |  Pointer to [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps in approving the request | [optional] 

## Examples

- Prepare the resource
```powershell
$Requestability = Initialize-PSSailpoint.V2024Requestability  -CommentsRequired true `
 -DenialCommentsRequired true `
 -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Requestability | ConvertTo-JSON
```


[[Back to top]](#) 

