---
id: revocability-for-role
title: RevocabilityForRole
pagination_label: RevocabilityForRole
sidebar_label: RevocabilityForRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RevocabilityForRole'] 
slug: /tools/sdk/powershell/v3/models/revocability-for-role
tags: ['SDK', 'Software Development Kit', 'RevocabilityForRole']
---


# RevocabilityForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** |  Pointer to **Boolean** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to $false]
**DenialCommentsRequired** |  Pointer to **Boolean** | Whether an approver must provide comments when denying the request | [optional] [default to $false]
**ApprovalSchemes** |  Pointer to [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the revocation request | [optional] 

## Examples

- Prepare the resource
```powershell
$RevocabilityForRole = Initialize-PSSailpoint.V3RevocabilityForRole  -CommentsRequired false `
 -DenialCommentsRequired false `
 -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$RevocabilityForRole | ConvertTo-JSON
```


[[Back to top]](#) 

