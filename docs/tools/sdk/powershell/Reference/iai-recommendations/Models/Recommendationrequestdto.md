---
id: recommendationrequestdto
title: Recommendationrequestdto
pagination_label: Recommendationrequestdto
sidebar_label: Recommendationrequestdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Recommendationrequestdto', 'Recommendationrequestdto'] 
slug: /tools/sdk/powershell/iairecommendations/models/recommendationrequestdto
tags: ['SDK', 'Software Development Kit', 'Recommendationrequestdto', 'Recommendationrequestdto']
---


# Recommendationrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requests** | [**[]Recommendationrequest**](recommendationrequest) |  | [optional] 
**ExcludeInterpretations** | **Boolean** | Exclude interpretations in the response if ""true"". Return interpretations in the response if this attribute is not specified. | [optional] [default to $false]
**IncludeTranslationMessages** | **Boolean** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to $false]
**IncludeDebugInformation** | **Boolean** | Returns the recommender calculations if set to true | [optional] [default to $false]
**PrescribeMode** | **Boolean** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Recommendationrequestdto = Initialize-Recommendationrequestdto  -Requests null `
 -ExcludeInterpretations false `
 -IncludeTranslationMessages false `
 -IncludeDebugInformation true `
 -PrescribeMode false
```

- Convert the resource to JSON
```powershell
$Recommendationrequestdto | ConvertTo-JSON
```


[[Back to top]](#) 

