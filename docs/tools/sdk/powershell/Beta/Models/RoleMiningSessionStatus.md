---
id: role-mining-session-status
title: RoleMiningSessionStatus
pagination_label: RoleMiningSessionStatus
sidebar_label: RoleMiningSessionStatus
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningSessionStatus'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-status
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionStatus']
---


# RoleMiningSessionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  Pointer to [**RoleMiningSessionState**](role-mining-session-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionStatus = Initialize-PSSailpointBetaRoleMiningSessionStatus  -State null
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionStatus | ConvertTo-JSON
```


[[Back to top]](#) 

