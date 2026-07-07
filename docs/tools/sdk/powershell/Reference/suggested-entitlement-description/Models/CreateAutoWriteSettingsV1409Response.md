---
id: create-auto-write-settings-v1409-response
title: CreateAutoWriteSettingsV1409Response
pagination_label: CreateAutoWriteSettingsV1409Response
sidebar_label: CreateAutoWriteSettingsV1409Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateAutoWriteSettingsV1409Response', 'CreateAutoWriteSettingsV1409Response'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/create-auto-write-settings-v1409-response
tags: ['SDK', 'Software Development Kit', 'CreateAutoWriteSettingsV1409Response', 'CreateAutoWriteSettingsV1409Response']
---


# CreateAutoWriteSettingsV1409Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 
**ErrorMessage** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Description of the error | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateAutoWriteSettingsV1409Response = Initialize-CreateAutoWriteSettingsV1409Response  -ErrorName ConflictException `
 -ErrorMessage Failed to store object `
 -TrackingId e7eab60924f64aa284175b9fa3309599
```

- Convert the resource to JSON
```powershell
$CreateAutoWriteSettingsV1409Response | ConvertTo-JSON
```


[[Back to top]](#) 

