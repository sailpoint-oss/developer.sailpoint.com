---
id: beta-role-mining-session-response-created-by
title: RoleMiningSessionResponseCreatedBy
pagination_label: RoleMiningSessionResponseCreatedBy
sidebar_label: RoleMiningSessionResponseCreatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionResponseCreatedBy', 'BetaRoleMiningSessionResponseCreatedBy'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-response-created-by
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionResponseCreatedBy', 'BetaRoleMiningSessionResponseCreatedBy']
---


# RoleMiningSessionResponseCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the creator | [optional] 
**DisplayName** |  Pointer to **String** | The display name of the creator | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionResponseCreatedBy = Initialize-PSSailpoint.BetaRoleMiningSessionResponseCreatedBy  -Id 2c918090761a5aac0176215c46a62d58 `
 -DisplayName Ashley.Pierce
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionResponseCreatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

