---
id: v2025-role-insight
title: RoleInsight
pagination_label: RoleInsight
sidebar_label: RoleInsight
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleInsight', 'V2025RoleInsight'] 
slug: /tools/sdk/powershell/v2025/models/role-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsight', 'V2025RoleInsight']
---


# RoleInsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Insight id | [optional] 
**NumberOfUpdates** | **Int32** | Total number of updates for this role | [optional] 
**CreatedDate** | **System.DateTime** | The date-time insights were last created for this role. | [optional] 
**ModifiedDate** | **System.DateTime** | The date-time insights were last modified for this role. | [optional] 
**Role** | [**RoleInsightsRole**](role-insights-role) |  | [optional] 
**Insight** | [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsight = Initialize-PSSailpoint.V2025RoleInsight  -Id 1467e61e-f284-439c-ba2d-c6cc11cf0941 `
 -NumberOfUpdates 5 `
 -CreatedDate null `
 -ModifiedDate 2020-05-19T13:49:37.385Z `
 -Role null `
 -Insight null
```

- Convert the resource to JSON
```powershell
$RoleInsight | ConvertTo-JSON
```


[[Back to top]](#) 

