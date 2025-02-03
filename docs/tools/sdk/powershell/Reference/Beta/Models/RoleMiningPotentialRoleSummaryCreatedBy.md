---
id: beta-role-mining-potential-role-summary-created-by
title: RoleMiningPotentialRoleSummaryCreatedBy
pagination_label: RoleMiningPotentialRoleSummaryCreatedBy
sidebar_label: RoleMiningPotentialRoleSummaryCreatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleSummaryCreatedBy', 'BetaRoleMiningPotentialRoleSummaryCreatedBy'] 
slug: /tools/sdk/powershell/beta/models/role-mining-potential-role-summary-created-by
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSummaryCreatedBy', 'BetaRoleMiningPotentialRoleSummaryCreatedBy']
---


# RoleMiningPotentialRoleSummaryCreatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the creator | [optional] 
**DisplayName** | **String** | The display name of the creator | [optional] 

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

