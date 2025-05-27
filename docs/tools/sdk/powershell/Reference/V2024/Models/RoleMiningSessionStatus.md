---
id: v2024-role-mining-session-status
title: RoleMiningSessionStatus
pagination_label: RoleMiningSessionStatus
sidebar_label: RoleMiningSessionStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionStatus', 'V2024RoleMiningSessionStatus'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-session-status
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionStatus', 'V2024RoleMiningSessionStatus']
---


# RoleMiningSessionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | [**RoleMiningSessionState**](role-mining-session-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionStatus = Initialize-V2024RoleMiningSessionStatus  -State null
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionStatus | ConvertTo-JSON
```


[[Back to top]](#) 

