---
id: v2025-role-mining-session-response-created-by
title: RoleMiningSessionResponseCreatedBy
pagination_label: RoleMiningSessionResponseCreatedBy
sidebar_label: RoleMiningSessionResponseCreatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionResponseCreatedBy', 'V2025RoleMiningSessionResponseCreatedBy'] 
slug: /tools/sdk/powershell/v2025/models/role-mining-session-response-created-by
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionResponseCreatedBy', 'V2025RoleMiningSessionResponseCreatedBy']
---


# RoleMiningSessionResponseCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the creator | [optional] 
**DisplayName** | **String** | The display name of the creator | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionResponseCreatedBy = Initialize-V2025RoleMiningSessionResponseCreatedBy  -Id 2c918090761a5aac0176215c46a62d58 `
 -DisplayName Ashley.Pierce
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionResponseCreatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

