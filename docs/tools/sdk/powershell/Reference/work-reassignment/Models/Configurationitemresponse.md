---
id: configurationitemresponse
title: Configurationitemresponse
pagination_label: Configurationitemresponse
sidebar_label: Configurationitemresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Configurationitemresponse', 'Configurationitemresponse'] 
slug: /tools/sdk/powershell/workreassignment/models/configurationitemresponse
tags: ['SDK', 'Software Development Kit', 'Configurationitemresponse', 'Configurationitemresponse']
---


# Configurationitemresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**Identity2**](identity2) |  | [optional] 
**ConfigDetails** | [**[]Configurationdetailsresponse**](configurationdetailsresponse) | Details of how work should be reassigned for an Identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Configurationitemresponse = Initialize-Configurationitemresponse  -Identity null `
 -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$Configurationitemresponse | ConvertTo-JSON
```


[[Back to top]](#) 

