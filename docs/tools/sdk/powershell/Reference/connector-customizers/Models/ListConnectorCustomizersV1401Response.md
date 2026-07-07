---
id: list-connector-customizers-v1401-response
title: ListConnectorCustomizersV1401Response
pagination_label: ListConnectorCustomizersV1401Response
sidebar_label: ListConnectorCustomizersV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListConnectorCustomizersV1401Response', 'ListConnectorCustomizersV1401Response'] 
slug: /tools/sdk/powershell/connectorcustomizers/models/list-connector-customizers-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListConnectorCustomizersV1401Response', 'ListConnectorCustomizersV1401Response']
---


# ListConnectorCustomizersV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListConnectorCustomizersV1401Response = Initialize-ListConnectorCustomizersV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListConnectorCustomizersV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

