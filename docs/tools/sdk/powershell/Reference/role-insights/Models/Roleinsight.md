---
id: roleinsight
title: Roleinsight
pagination_label: Roleinsight
sidebar_label: Roleinsight
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleinsight', 'Roleinsight'] 
slug: /tools/sdk/powershell/roleinsights/models/roleinsight
tags: ['SDK', 'Software Development Kit', 'Roleinsight', 'Roleinsight']
---


# Roleinsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Insight id | [optional] 
**NumberOfUpdates** | **Int32** | Total number of updates for this role | [optional] 
**CreatedDate** | **System.DateTime** | The date-time insights were last created for this role. | [optional] 
**ModifiedDate** | **System.DateTime** | The date-time insights were last modified for this role. | [optional] 
**Role** | [**Roleinsightsrole**](roleinsightsrole) |  | [optional] 
**Insight** | [**Roleinsightsinsight**](roleinsightsinsight) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleinsight = Initialize-Roleinsight  -Id 1467e61e-f284-439c-ba2d-c6cc11cf0941 `
 -NumberOfUpdates 5 `
 -CreatedDate null `
 -ModifiedDate 2020-05-19T13:49:37.385Z `
 -Role null `
 -Insight null
```

- Convert the resource to JSON
```powershell
$Roleinsight | ConvertTo-JSON
```


[[Back to top]](#) 

