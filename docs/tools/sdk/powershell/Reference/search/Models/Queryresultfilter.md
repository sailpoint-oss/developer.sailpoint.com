---
id: queryresultfilter
title: Queryresultfilter
pagination_label: Queryresultfilter
sidebar_label: Queryresultfilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Queryresultfilter', 'Queryresultfilter'] 
slug: /tools/sdk/powershell/search/models/queryresultfilter
tags: ['SDK', 'Software Development Kit', 'Queryresultfilter', 'Queryresultfilter']
---


# Queryresultfilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Includes** | **[]String** | The list of field names to include in the result documents. | [optional] 
**Excludes** | **[]String** | The list of field names to exclude from the result documents. | [optional] 

## Examples

- Prepare the resource
```powershell
$Queryresultfilter = Initialize-Queryresultfilter  -Includes ["name","displayName"] `
 -Excludes ["stacktrace"]
```

- Convert the resource to JSON
```powershell
$Queryresultfilter | ConvertTo-JSON
```


[[Back to top]](#) 

