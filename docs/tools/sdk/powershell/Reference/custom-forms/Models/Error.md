---
id: model-error
title: ModelError
pagination_label: ModelError
sidebar_label: ModelError
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ModelError', 'ModelError'] 
slug: /tools/sdk/powershell/customforms/models/model-error
tags: ['SDK', 'Software Development Kit', 'ModelError', 'ModelError']
---


# ModelError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | DetailCode is the text of the status code returned | [optional] 
**Messages** | [**[]Errormessage**](errormessage) |  | [optional] 
**TrackingId** | **String** | TrackingID is the request tracking unique identifier | [optional] 

## Examples

- Prepare the resource
```powershell
$ModelError = Initialize-ModelError  -DetailCode Internal Server Error `
 -Messages null `
 -TrackingId 9cd03ef80e6a425eb6b11bdbb057cdb4
```

- Convert the resource to JSON
```powershell
$ModelError | ConvertTo-JSON
```


[[Back to top]](#) 

