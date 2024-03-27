---
id: role-insight
title: RoleInsight
pagination_label: RoleInsight
sidebar_label: RoleInsight
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleInsight'] 
slug: /tools/sdk/powershell/beta/models/role-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsight']
---


# RoleInsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Insight id | [optional] 
**NumberOfUpdates** |  Pointer to **Int32** | Total number of updates for this role | [optional] 
**CreatedDate** |  Pointer to **System.DateTime** | The date-time insights were last created for this role. | [optional] 
**Role** |  Pointer to [**RoleInsightsRole**](role-insights-role) |  | [optional] 
**Insight** |  Pointer to [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleInsight = Initialize-PSSailpointBetaRoleInsight  -Id 1467e61e-f284-439c-ba2d-c6cc11cf0941 `
 -NumberOfUpdates 5 `
 -CreatedDate 2020-05-19T13:49:37.385Z `
 -Role null `
 -Insight null
```

- Convert the resource to JSON
```powershell
$RoleInsight | ConvertTo-JSON
```


[[Back to top]](#) 

