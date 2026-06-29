---
id: approvalconfig-timeout-config
title: ApprovalconfigTimeoutConfig
pagination_label: ApprovalconfigTimeoutConfig
sidebar_label: ApprovalconfigTimeoutConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalconfigTimeoutConfig', 'ApprovalconfigTimeoutConfig'] 
slug: /tools/sdk/powershell/sources/models/approvalconfig-timeout-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigTimeoutConfig', 'ApprovalconfigTimeoutConfig']
---


# ApprovalconfigTimeoutConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Indicates if timeout is enabled. | [optional] [default to $false]
**DaysUntilTimeout** | **Int64** | Number of days until approval request times out. Max value is 90. | [optional] 
**TimeoutResult** |  **Enum** [  "EXPIRED",    "APPROVED" ] | Result of timeout. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalconfigTimeoutConfig = Initialize-ApprovalconfigTimeoutConfig  -Enabled true `
 -DaysUntilTimeout 2 `
 -TimeoutResult EXPIRED
```

- Convert the resource to JSON
```powershell
$ApprovalconfigTimeoutConfig | ConvertTo-JSON
```


[[Back to top]](#) 

