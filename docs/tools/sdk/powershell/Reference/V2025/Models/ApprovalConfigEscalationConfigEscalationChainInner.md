---
id: v2025-approval-config-escalation-config-escalation-chain-inner
title: ApprovalConfigEscalationConfigEscalationChainInner
pagination_label: ApprovalConfigEscalationConfigEscalationChainInner
sidebar_label: ApprovalConfigEscalationConfigEscalationChainInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalConfigEscalationConfigEscalationChainInner', 'V2025ApprovalConfigEscalationConfigEscalationChainInner'] 
slug: /tools/sdk/powershell/v2025/models/approval-config-escalation-config-escalation-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfigEscalationChainInner', 'V2025ApprovalConfigEscalationConfigEscalationChainInner']
---


# ApprovalConfigEscalationConfigEscalationChainInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainId** | **String** | ID of the escalation chain. | [optional] 
**Tier** | **Int64** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**IdentityId** | **String** | Identity ID in the escalation chain. | [optional] 
**IdentityType** | **String** | Type of identity in the escalation chain. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfigEscalationConfigEscalationChainInner = Initialize-V2025ApprovalConfigEscalationConfigEscalationChainInner  -ChainId ef85d1a8-41ef-433a-8153-0b1f59e7b26a `
 -Tier 1 `
 -IdentityId fdfda352157d4cc79bb749953131b457 `
 -IdentityType IDENTITY
```

- Convert the resource to JSON
```powershell
$ApprovalConfigEscalationConfigEscalationChainInner | ConvertTo-JSON
```


[[Back to top]](#) 

