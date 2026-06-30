---
id: accessrequestconfig
title: Accessrequestconfig
pagination_label: Accessrequestconfig
sidebar_label: Accessrequestconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestconfig', 'Accessrequestconfig'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequestconfig
tags: ['SDK', 'Software Development Kit', 'Accessrequestconfig', 'Accessrequestconfig']
---


# Accessrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** | **Boolean** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to $false]
**AutoApprovalEnabled** | **Boolean** | If this is true and the requester and reviewer are the same, the request is automatically approved. | [optional] [default to $false]
**ReauthorizationEnabled** | **Boolean** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to $false]
**RequestOnBehalfOfConfig** | [**Requestonbehalfofconfig**](requestonbehalfofconfig) |  | [optional] 
**ApprovalReminderAndEscalationConfig** | [**Approvalreminderandescalationconfig**](approvalreminderandescalationconfig) |  | [optional] 
**EntitlementRequestConfig** | [**Entitlementrequestconfig**](entitlementrequestconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestconfig = Initialize-Accessrequestconfig  -ApprovalsMustBeExternal true `
 -AutoApprovalEnabled true `
 -ReauthorizationEnabled true `
 -RequestOnBehalfOfConfig null `
 -ApprovalReminderAndEscalationConfig null `
 -EntitlementRequestConfig null
```

- Convert the resource to JSON
```powershell
$Accessrequestconfig | ConvertTo-JSON
```


[[Back to top]](#) 

