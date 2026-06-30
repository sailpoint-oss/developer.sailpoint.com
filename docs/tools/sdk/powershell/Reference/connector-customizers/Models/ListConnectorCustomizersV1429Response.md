---
id: list-connector-customizers-v1429-response
title: ListConnectorCustomizersV1429Response
pagination_label: ListConnectorCustomizersV1429Response
sidebar_label: ListConnectorCustomizersV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListConnectorCustomizersV1429Response', 'ListConnectorCustomizersV1429Response'] 
slug: /tools/sdk/powershell/connectorcustomizers/models/list-connector-customizers-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListConnectorCustomizersV1429Response', 'ListConnectorCustomizersV1429Response']
---


# ListConnectorCustomizersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListConnectorCustomizersV1429Response = Initialize-ListConnectorCustomizersV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListConnectorCustomizersV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

