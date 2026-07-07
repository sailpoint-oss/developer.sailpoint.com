---
id: featurevaluedto
title: Featurevaluedto
pagination_label: Featurevaluedto
sidebar_label: Featurevaluedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Featurevaluedto', 'Featurevaluedto'] 
slug: /tools/sdk/powershell/iairecommendations/models/featurevaluedto
tags: ['SDK', 'Software Development Kit', 'Featurevaluedto', 'Featurevaluedto']
---


# Featurevaluedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Feature** | **String** | The type of feature | [optional] 
**Numerator** | **Int32** | The number of identities that have access to the feature | [optional] 
**Denominator** | **Int32** | The number of identities with the corresponding feature | [optional] 

## Examples

- Prepare the resource
```powershell
$Featurevaluedto = Initialize-Featurevaluedto  -Feature department `
 -Numerator 14 `
 -Denominator 14
```

- Convert the resource to JSON
```powershell
$Featurevaluedto | ConvertTo-JSON
```


[[Back to top]](#) 

