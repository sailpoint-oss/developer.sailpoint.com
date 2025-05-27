---
id: beta-revocability-for-role
title: RevocabilityForRole
pagination_label: RevocabilityForRole
sidebar_label: RevocabilityForRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RevocabilityForRole', 'BetaRevocabilityForRole'] 
slug: /tools/sdk/powershell/beta/models/revocability-for-role
tags: ['SDK', 'Software Development Kit', 'RevocabilityForRole', 'BetaRevocabilityForRole']
---


# RevocabilityForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | **Boolean** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to $false]
**DenialCommentsRequired** | **Boolean** | Whether an approver must provide comments when denying the request | [optional] [default to $false]
**ApprovalSchemes** | [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the revocation request | [optional] 

## Examples

- Prepare the resource
```powershell
$RevocabilityForRole = Initialize-BetaRevocabilityForRole  -CommentsRequired false `
 -DenialCommentsRequired false `
 -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$RevocabilityForRole | ConvertTo-JSON
```


[[Back to top]](#) 

