---
id: configurationresponse
title: Configurationresponse
pagination_label: Configurationresponse
sidebar_label: Configurationresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Configurationresponse', 'Configurationresponse'] 
slug: /tools/sdk/powershell/workreassignment/models/configurationresponse
tags: ['SDK', 'Software Development Kit', 'Configurationresponse', 'Configurationresponse']
---


# Configurationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**Identity2**](identity2) |  | [optional] 
**ConfigDetails** | [**[]Configurationdetailsresponse**](configurationdetailsresponse) | Details of how work should be reassigned for an Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Configurationresponse = Initialize-Configurationresponse  -Identity null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$Configurationresponse | ConvertTo-JSON
```


[[Back to top]](#) 

