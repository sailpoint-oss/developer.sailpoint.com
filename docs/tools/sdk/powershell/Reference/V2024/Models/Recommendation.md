---
id: v2024-recommendation
title: Recommendation
pagination_label: Recommendation
sidebar_label: Recommendation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Recommendation', 'V2024Recommendation'] 
slug: /tools/sdk/powershell/v2024/models/recommendation
tags: ['SDK', 'Software Development Kit', 'Recommendation', 'V2024Recommendation']
---


# Recommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "HUMAN",    "MACHINE" ] | Recommended type of account. | [required]
**Method** |  **Enum** [  "DISCOVERY",    "SOURCE",    "CRITERIA" ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [required]

## Examples

- Prepare the resource
```powershell
$Recommendation = Initialize-V2024Recommendation  -Type MACHINE `
 -Method DISCOVERY
```

- Convert the resource to JSON
```powershell
$Recommendation | ConvertTo-JSON
```


[[Back to top]](#) 

