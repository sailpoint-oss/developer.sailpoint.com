---
id: role-mining-session-dto-created-by
title: RoleMiningSessionDtoCreatedBy
pagination_label: RoleMiningSessionDtoCreatedBy
sidebar_label: RoleMiningSessionDtoCreatedBy
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningSessionDtoCreatedBy'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-dto-created-by
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDtoCreatedBy']
---


# RoleMiningSessionDtoCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the creator | [optional] 
**DisplayName** |  Pointer to **String** | The display name of the creator | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionDtoCreatedBy = Initialize-PSSailpointBetaRoleMiningSessionDtoCreatedBy  -Id 2c918090761a5aac0176215c46a62d58 `
 -DisplayName Ashley.Pierce
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionDtoCreatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

