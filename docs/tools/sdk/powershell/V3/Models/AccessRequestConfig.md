---
id: access-request-config
title: AccessRequestConfig
pagination_label: AccessRequestConfig
sidebar_label: AccessRequestConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestConfig'] 
slug: /tools/sdk/powershell/v3/models/access-request-config
tags: ['SDK', 'Software Development Kit', 'AccessRequestConfig']
---


# AccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** |  Pointer to **Boolean** | If true, then approvals must be processed by external system. | [optional] 
**AutoApprovalEnabled** |  Pointer to **Boolean** | If true and requester and reviewer are the same, then automatically approve the approval. | [optional] 
**RequestOnBehalfOfConfig** |  Pointer to [**RequestOnBehalfOfConfig**](request-on-behalf-of-config) |  | [optional] 
**ApprovalReminderAndEscalationConfig** |  Pointer to [**ApprovalReminderAndEscalationConfig**](approval-reminder-and-escalation-config) |  | [optional] 
**EntitlementRequestConfig** |  Pointer to [**EntitlementRequestConfig**](entitlement-request-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestConfig = Initialize-PSSailpointAccessRequestConfig  -ApprovalsMustBeExternal true `
 -AutoApprovalEnabled true `
 -RequestOnBehalfOfConfig null `
 -ApprovalReminderAndEscalationConfig null `
 -EntitlementRequestConfig null
```

- Convert the resource to JSON
```powershell
$AccessRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

