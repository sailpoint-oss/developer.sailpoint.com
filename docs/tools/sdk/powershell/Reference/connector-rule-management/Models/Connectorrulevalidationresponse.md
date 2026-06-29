---
id: connectorrulevalidationresponse
title: Connectorrulevalidationresponse
pagination_label: Connectorrulevalidationresponse
sidebar_label: Connectorrulevalidationresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectorrulevalidationresponse', 'Connectorrulevalidationresponse'] 
slug: /tools/sdk/powershell/connectorrulemanagement/models/connectorrulevalidationresponse
tags: ['SDK', 'Software Development Kit', 'Connectorrulevalidationresponse', 'Connectorrulevalidationresponse']
---


# Connectorrulevalidationresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "OK",    "ERROR" ] |  | [required]
**Details** | [**[]ConnectorrulevalidationresponseDetailsInner**](connectorrulevalidationresponse-details-inner) |  | [required]

## Examples

- Prepare the resource
```powershell
$Connectorrulevalidationresponse = Initialize-Connectorrulevalidationresponse  -State ERROR `
 -Details null
```

- Convert the resource to JSON
```powershell
$Connectorrulevalidationresponse | ConvertTo-JSON
```


[[Back to top]](#) 

