---
id: get-source-app-v1429-response
title: GetSourceAppV1429Response
pagination_label: GetSourceAppV1429Response
sidebar_label: GetSourceAppV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetSourceAppV1429Response', 'GetSourceAppV1429Response'] 
slug: /tools/sdk/powershell/apps/models/get-source-app-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetSourceAppV1429Response', 'GetSourceAppV1429Response']
---


# GetSourceAppV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetSourceAppV1429Response = Initialize-GetSourceAppV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetSourceAppV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

