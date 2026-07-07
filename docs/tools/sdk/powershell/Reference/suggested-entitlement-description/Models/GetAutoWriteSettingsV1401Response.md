---
id: get-auto-write-settings-v1401-response
title: GetAutoWriteSettingsV1401Response
pagination_label: GetAutoWriteSettingsV1401Response
sidebar_label: GetAutoWriteSettingsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAutoWriteSettingsV1401Response', 'GetAutoWriteSettingsV1401Response'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/get-auto-write-settings-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAutoWriteSettingsV1401Response', 'GetAutoWriteSettingsV1401Response']
---


# GetAutoWriteSettingsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAutoWriteSettingsV1401Response = Initialize-GetAutoWriteSettingsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAutoWriteSettingsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

