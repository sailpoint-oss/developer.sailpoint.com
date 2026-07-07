---
id: entitlementaccessrequestconfig
title: Entitlementaccessrequestconfig
pagination_label: Entitlementaccessrequestconfig
sidebar_label: Entitlementaccessrequestconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementaccessrequestconfig', 'Entitlementaccessrequestconfig'] 
slug: /tools/sdk/powershell/accessrequests/models/entitlementaccessrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementaccessrequestconfig', 'Entitlementaccessrequestconfig']
---


# Entitlementaccessrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]Entitlementapprovalscheme**](entitlementapprovalscheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**RequestCommentRequired** | **Boolean** | If the requester must provide a comment during access request. | [optional] [default to $false]
**DenialCommentRequired** | **Boolean** | If the reviewer must provide a comment when denying the access request. | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | Is Reauthorization Required | [optional] [default to $false]
**RequireEndDate** | **Boolean** | If true, then remove date or sunset date is required in access request of the entitlement. | [optional] [default to $false]
**MaxPermittedAccessDuration** | [**EntitlementaccessrequestconfigMaxPermittedAccessDuration**](entitlementaccessrequestconfig-max-permitted-access-duration) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementaccessrequestconfig = Initialize-Entitlementaccessrequestconfig  -ApprovalSchemes null `
 -RequestCommentRequired true `
 -DenialCommentRequired false `
 -ReauthorizationRequired false `
 -RequireEndDate true `
 -MaxPermittedAccessDuration null
```

- Convert the resource to JSON
```powershell
$Entitlementaccessrequestconfig | ConvertTo-JSON
```


[[Back to top]](#) 

