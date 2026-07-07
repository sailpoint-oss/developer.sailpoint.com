---
id: get-object-mappings-v1401-response
title: GetObjectMappingsV1401Response
pagination_label: GetObjectMappingsV1401Response
sidebar_label: GetObjectMappingsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetObjectMappingsV1401Response', 'GetObjectMappingsV1401Response'] 
slug: /tools/sdk/powershell/configurationhub/models/get-object-mappings-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetObjectMappingsV1401Response', 'GetObjectMappingsV1401Response']
---


# GetObjectMappingsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetObjectMappingsV1401Response = Initialize-GetObjectMappingsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetObjectMappingsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

