---
id: requestability
title: Requestability
pagination_label: Requestability
sidebar_label: Requestability
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestability'] 
slug: /tools/sdk/powershell/beta/models/requestability
tags: ['SDK', 'Software Development Kit', 'Requestability']
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
$Requestability = Initialize-PSSailpoint.BetaRequestability  -CommentsRequired true `
 -DenialCommentsRequired true `
 -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Requestability | ConvertTo-JSON
```


[[Back to top]](#) 

