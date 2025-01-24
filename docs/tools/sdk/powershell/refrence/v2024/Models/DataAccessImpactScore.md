---
id: data-access-impact-score
title: DataAccessImpactScore
pagination_label: DataAccessImpactScore
sidebar_label: DataAccessImpactScore
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccessImpactScore'] 
slug: /tools/sdk/powershell/v2024/models/data-access-impact-score
tags: ['SDK', 'Software Development Kit', 'DataAccessImpactScore']
---


# DataAccessImpactScore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** |  Pointer to **String** | Impact Score for this data | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccessImpactScore = Initialize-PSSailpoint.V2024DataAccessImpactScore  -Value Medium
```

- Convert the resource to JSON
```powershell
$DataAccessImpactScore | ConvertTo-JSON
```


[[Back to top]](#) 

