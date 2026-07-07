---
id: recommendationconfigdto
title: Recommendationconfigdto
pagination_label: Recommendationconfigdto
sidebar_label: Recommendationconfigdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Recommendationconfigdto', 'Recommendationconfigdto'] 
slug: /tools/sdk/powershell/iairecommendations/models/recommendationconfigdto
tags: ['SDK', 'Software Development Kit', 'Recommendationconfigdto', 'Recommendationconfigdto']
---


# Recommendationconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecommenderFeatures** | **[]String** | List of identity attributes to use for calculating certification recommendations | [optional] 
**PeerGroupPercentageThreshold** | **Double** | The percent value that the recommendation calculation must surpass to produce a YES recommendation | [optional] 
**RunAutoSelectOnce** | **Boolean** | If true, rulesRecommenderConfig will be refreshed with new programatically selected attribute and threshold values on the next pipeline run | [optional] [default to $false]
**OnlyTuneThreshold** | **Boolean** | If true, rulesRecommenderConfig will be refreshed with new programatically selected threshold values on the next pipeline run | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Recommendationconfigdto = Initialize-Recommendationconfigdto  -RecommenderFeatures ["jobTitle","location","peer_group","department","active"] `
 -PeerGroupPercentageThreshold 0.5 `
 -RunAutoSelectOnce false `
 -OnlyTuneThreshold false
```

- Convert the resource to JSON
```powershell
$Recommendationconfigdto | ConvertTo-JSON
```


[[Back to top]](#) 

