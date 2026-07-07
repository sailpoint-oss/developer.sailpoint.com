---
id: approvalconfig-escalation-config
title: ApprovalconfigEscalationConfig
pagination_label: ApprovalconfigEscalationConfig
sidebar_label: ApprovalconfigEscalationConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalconfigEscalationConfig', 'ApprovalconfigEscalationConfig'] 
slug: /tools/sdk/powershell/sources/models/approvalconfig-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigEscalationConfig', 'ApprovalconfigEscalationConfig']
---


# ApprovalconfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if escalations are enabled. | [optional] [default to $false]
**DaysUntilFirstEscalation** | **Int64** | Number of days until the first escalation. | [optional] 
**EscalationCronSchedule** | **String** | Cron schedule for escalations. | [optional] 
**EscalationChain** | [**[]ApprovalconfigEscalationConfigEscalationChainInner**](approvalconfig-escalation-config-escalation-chain-inner) | Escalation chain configuration. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalconfigEscalationConfig = Initialize-ApprovalconfigEscalationConfig  -Enabled true `
 -DaysUntilFirstEscalation 2 `
 -EscalationCronSchedule */5 * * * * `
 -EscalationChain null
```

- Convert the resource to JSON
```powershell
$ApprovalconfigEscalationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

