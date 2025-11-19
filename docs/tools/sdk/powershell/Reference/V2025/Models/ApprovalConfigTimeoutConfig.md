---
id: v2025-approval-config-timeout-config
title: ApprovalConfigTimeoutConfig
pagination_label: ApprovalConfigTimeoutConfig
sidebar_label: ApprovalConfigTimeoutConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalConfigTimeoutConfig', 'V2025ApprovalConfigTimeoutConfig'] 
slug: /tools/sdk/powershell/v2025/models/approval-config-timeout-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigTimeoutConfig', 'V2025ApprovalConfigTimeoutConfig']
---


# ApprovalConfigTimeoutConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if timeout is enabled. | [optional] [default to $false]
**DaysUntilTimeout** | **Int64** | Number of days until approval request times out. Max value is 90. | [optional] 
**TimeoutResult** |  **Enum** [  "EXPIRED",    "APPROVED" ] | Result of timeout. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalConfigTimeoutConfig = Initialize-V2025ApprovalConfigTimeoutConfig  -Enabled true `
 -DaysUntilTimeout 2 `
 -TimeoutResult EXPIRED
```

- Convert the resource to JSON
```powershell
$ApprovalConfigTimeoutConfig | ConvertTo-JSON
```


[[Back to top]](#) 

