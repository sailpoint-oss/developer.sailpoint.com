---
id: get-search-attribute-config-v1429-response
title: GetSearchAttributeConfigV1429Response
pagination_label: GetSearchAttributeConfigV1429Response
sidebar_label: GetSearchAttributeConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetSearchAttributeConfigV1429Response', 'GetSearchAttributeConfigV1429Response'] 
slug: /tools/sdk/powershell/searchattributeconfiguration/models/get-search-attribute-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetSearchAttributeConfigV1429Response', 'GetSearchAttributeConfigV1429Response']
---


# GetSearchAttributeConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetSearchAttributeConfigV1429Response = Initialize-GetSearchAttributeConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetSearchAttributeConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

