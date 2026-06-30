---
id: errorresponsedto
title: Errorresponsedto
pagination_label: Errorresponsedto
sidebar_label: Errorresponsedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Errorresponsedto', 'Errorresponsedto'] 
slug: /tools/sdk/powershell/apiusage/models/errorresponsedto
tags: ['SDK', 'Software Development Kit', 'Errorresponsedto', 'Errorresponsedto']
---


# Errorresponsedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | Fine-grained error code providing more detail of the error. | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 
**Messages** | [**[]Errormessagedto**](errormessagedto) | Generic localized reason for error | [optional] 
**Causes** | [**[]Errormessagedto**](errormessagedto) | Plain-text descriptive reasons to provide additional detail to the text provided in the messages field | [optional] 

## Examples

- Prepare the resource
```powershell
$Errorresponsedto = Initialize-Errorresponsedto  -DetailCode 400.1 Bad Request Content `
 -TrackingId e7eab60924f64aa284175b9fa3309599 `
 -Messages null `
 -Causes null
```

- Convert the resource to JSON
```powershell
$Errorresponsedto | ConvertTo-JSON
```


[[Back to top]](#) 

