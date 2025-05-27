---
id: v2024-account-all-of-recommendation
title: AccountAllOfRecommendation
pagination_label: AccountAllOfRecommendation
sidebar_label: AccountAllOfRecommendation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAllOfRecommendation', 'V2024AccountAllOfRecommendation'] 
slug: /tools/sdk/powershell/v2024/models/account-all-of-recommendation
tags: ['SDK', 'Software Development Kit', 'AccountAllOfRecommendation', 'V2024AccountAllOfRecommendation']
---


# AccountAllOfRecommendation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "HUMAN",    "MACHINE" ] | Recommended type of account. | [required]
**Method** |  **Enum** [  "DISCOVERY",    "SOURCE",    "CRITERIA" ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [required]

## Examples

- Prepare the resource
```powershell
$AccountAllOfRecommendation = Initialize-V2024AccountAllOfRecommendation  -Type MACHINE `
 -Method DISCOVERY
```

- Convert the resource to JSON
```powershell
$AccountAllOfRecommendation | ConvertTo-JSON
```


[[Back to top]](#) 

