---
id: accessrequestrecommendationconfigdto
title: Accessrequestrecommendationconfigdto
pagination_label: Accessrequestrecommendationconfigdto
sidebar_label: Accessrequestrecommendationconfigdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestrecommendationconfigdto', 'Accessrequestrecommendationconfigdto'] 
slug: /tools/sdk/powershell/iaiaccessrequestrecommendations/models/accessrequestrecommendationconfigdto
tags: ['SDK', 'Software Development Kit', 'Accessrequestrecommendationconfigdto', 'Accessrequestrecommendationconfigdto']
---


# Accessrequestrecommendationconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScoreThreshold** | **Double** | The value that internal calculations need to exceed for recommendations to be made. | [required]
**StartDateAttribute** | **String** | Use to map an attribute name for determining identities' start date. | [optional] 
**RestrictionAttribute** | **String** | Use to only give recommendations based on this attribute. | [optional] 
**MoverAttribute** | **String** | Use to map an attribute name for determining whether identities are movers. | [optional] 
**JoinerAttribute** | **String** | Use to map an attribute name for determining whether identities are joiners. | [optional] 
**UseRestrictionAttribute** | **Boolean** | Use only the attribute named in restrictionAttribute to make recommendations. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Accessrequestrecommendationconfigdto = Initialize-Accessrequestrecommendationconfigdto  -ScoreThreshold 0.5 `
 -StartDateAttribute startDate `
 -RestrictionAttribute location `
 -MoverAttribute isMover `
 -JoinerAttribute isJoiner `
 -UseRestrictionAttribute true
```

- Convert the resource to JSON
```powershell
$Accessrequestrecommendationconfigdto | ConvertTo-JSON
```


[[Back to top]](#) 

