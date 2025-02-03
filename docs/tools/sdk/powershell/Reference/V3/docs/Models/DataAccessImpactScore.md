---
id: data-access-impact-score
title: DataAccessImpactScore
pagination_label: DataAccessImpactScore
sidebar_label: DataAccessImpactScore
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccessImpactScore', 'DataAccessImpactScore'] 
slug: /tools/sdk/powershell/v3/models/data-access-impact-score
tags: ['SDK', 'Software Development Kit', 'DataAccessImpactScore', 'DataAccessImpactScore']
---


# DataAccessImpactScore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** |  Pointer to **String** | Impact Score for this data | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccessImpactScore = Initialize-PSSailpoint.V3DataAccessImpactScore  -Value Medium
```

- Convert the resource to JSON
```powershell
$DataAccessImpactScore | ConvertTo-JSON
```


[[Back to top]](#) 

