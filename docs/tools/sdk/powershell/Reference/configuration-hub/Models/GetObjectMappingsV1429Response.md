---
id: get-object-mappings-v1429-response
title: GetObjectMappingsV1429Response
pagination_label: GetObjectMappingsV1429Response
sidebar_label: GetObjectMappingsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetObjectMappingsV1429Response', 'GetObjectMappingsV1429Response'] 
slug: /tools/sdk/powershell/configurationhub/models/get-object-mappings-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetObjectMappingsV1429Response', 'GetObjectMappingsV1429Response']
---


# GetObjectMappingsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetObjectMappingsV1429Response = Initialize-GetObjectMappingsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetObjectMappingsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

