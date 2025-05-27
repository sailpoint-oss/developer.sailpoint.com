---
id: beta-access-request-config
title: AccessRequestConfig
pagination_label: AccessRequestConfig
sidebar_label: AccessRequestConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestConfig', 'BetaAccessRequestConfig'] 
slug: /tools/sdk/powershell/beta/models/access-request-config
tags: ['SDK', 'Software Development Kit', 'AccessRequestConfig', 'BetaAccessRequestConfig']
---


# AccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** | **Boolean** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to $false]
**AutoApprovalEnabled** | **Boolean** | If this is true and the requester and reviewer are the same, the request is automatically approved. | [optional] [default to $false]
**ReauthorizationEnabled** | **Boolean** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to $false]
**RequestOnBehalfOfConfig** | [**RequestOnBehalfOfConfig**](request-on-behalf-of-config) |  | [optional] 
**ApprovalReminderAndEscalationConfig** | [**ApprovalReminderAndEscalationConfig**](approval-reminder-and-escalation-config) |  | [optional] 
**EntitlementRequestConfig** | [**EntitlementRequestConfig1**](entitlement-request-config1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestConfig = Initialize-BetaAccessRequestConfig  -ApprovalsMustBeExternal true `
 -AutoApprovalEnabled true `
 -ReauthorizationEnabled true `
 -RequestOnBehalfOfConfig null `
 -ApprovalReminderAndEscalationConfig null `
 -EntitlementRequestConfig null
```

- Convert the resource to JSON
```powershell
$AccessRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

