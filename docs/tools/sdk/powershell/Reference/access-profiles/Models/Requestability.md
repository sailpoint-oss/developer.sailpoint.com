---
id: requestability
title: Requestability
pagination_label: Requestability
sidebar_label: Requestability
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestability', 'Requestability'] 
slug: /tools/sdk/powershell/accessprofiles/models/requestability
tags: ['SDK', 'Software Development Kit', 'Requestability', 'Requestability']
---


# Requestability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | **Boolean** | Indicates whether the requester of the containing object must provide comments justifying the request. | [optional] [default to $false]
**DenialCommentsRequired** | **Boolean** | Indicates whether an approver must provide comments when denying the request. | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | Indicates whether reauthorization is required for the request. | [optional] [default to $false]
**RequireEndDate** | **Boolean** | Indicates whether the requester of the containing object must provide access end date. | [optional] [default to $false]
**MaxPermittedAccessDuration** | [**Accessduration**](accessduration) |  | [optional] 
**ApprovalSchemes** | [**[]Accessprofileapprovalscheme**](accessprofileapprovalscheme) | List describing the steps involved in approving the request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Requestability = Initialize-Requestability  -CommentsRequired true `
 -DenialCommentsRequired true `
 -ReauthorizationRequired true `
 -RequireEndDate true `
 -MaxPermittedAccessDuration null `
 -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Requestability | ConvertTo-JSON
```


[[Back to top]](#) 

