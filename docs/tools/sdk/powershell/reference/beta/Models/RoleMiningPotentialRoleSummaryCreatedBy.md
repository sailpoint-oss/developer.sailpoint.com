---
id: role-mining-potential-role-summary-created-by
title: RoleMiningPotentialRoleSummaryCreatedBy
pagination_label: RoleMiningPotentialRoleSummaryCreatedBy
sidebar_label: RoleMiningPotentialRoleSummaryCreatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleSummaryCreatedBy'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-summary-created-by
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSummaryCreatedBy']
---


# RoleMiningPotentialRoleSummaryCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ID of the creator | [optional] 
**DisplayName** |  Pointer to **String** | The display name of the creator | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleSummaryCreatedBy = Initialize-PSSailpoint.BetaRoleMiningPotentialRoleSummaryCreatedBy  -Id 2c918090761a5aac0176215c46a62d58 `
 -DisplayName Ashley.Pierce
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleSummaryCreatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

