---
id: v2025-data-access-impact-score
title: DataAccessImpactScore
pagination_label: DataAccessImpactScore
sidebar_label: DataAccessImpactScore
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccessImpactScore', 'V2025DataAccessImpactScore'] 
slug: /tools/sdk/powershell/v2025/models/data-access-impact-score
tags: ['SDK', 'Software Development Kit', 'DataAccessImpactScore', 'V2025DataAccessImpactScore']
---


# DataAccessImpactScore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Impact Score for this data | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccessImpactScore = Initialize-PSSailpoint.V2025DataAccessImpactScore  -Value Medium
```

- Convert the resource to JSON
```powershell
$DataAccessImpactScore | ConvertTo-JSON
```


[[Back to top]](#) 

