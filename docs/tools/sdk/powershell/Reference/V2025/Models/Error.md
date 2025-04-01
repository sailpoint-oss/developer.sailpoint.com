---
id: v2025-model-error
title: ModelError
pagination_label: ModelError
sidebar_label: ModelError
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ModelError', 'V2025ModelError'] 
slug: /tools/sdk/powershell/v2025/models/model-error
tags: ['SDK', 'Software Development Kit', 'ModelError', 'V2025ModelError']
---


# ModelError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **String** | DetailCode is the text of the status code returned | [optional] 
**Messages** | [**[]ErrorMessage**](error-message) |  | [optional] 
**TrackingId** | **String** | TrackingID is the request tracking unique identifier | [optional] 

## Examples

- Prepare the resource
```powershell
$ModelError = Initialize-PSSailpoint.V2025ModelError  -DetailCode Internal Server Error `
 -Messages null `
 -TrackingId 9cd03ef80e6a425eb6b11bdbb057cdb4
```

- Convert the resource to JSON
```powershell
$ModelError | ConvertTo-JSON
```


[[Back to top]](#) 

