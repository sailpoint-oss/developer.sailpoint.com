---
id: v2025-approval-config-escalation-config
title: ApprovalConfigEscalationConfig
pagination_label: ApprovalConfigEscalationConfig
sidebar_label: ApprovalConfigEscalationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalConfigEscalationConfig', 'V2025ApprovalConfigEscalationConfig'] 
slug: /tools/sdk/powershell/v2025/models/approval-config-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfig', 'V2025ApprovalConfigEscalationConfig']
---


# ApprovalConfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if escalations are enabled. | [optional] [default to $false]
**DaysUntilFirstEscalation** | **Int64** | Number of days until the first escalation. | [optional] 
**EscalationCronSchedule** | **String** | Cron schedule for escalations. | [optional] 
**EscalationChain** | [**[]ApprovalConfigEscalationConfigEscalationChainInner**](approval-config-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfigEscalationConfig = Initialize-V2025ApprovalConfigEscalationConfig  -Enabled true `
 -DaysUntilFirstEscalation 2 `
 -EscalationCronSchedule */5 * * * * `
 -EscalationChain null
```

- Convert the resource to JSON
```powershell
$ApprovalConfigEscalationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

