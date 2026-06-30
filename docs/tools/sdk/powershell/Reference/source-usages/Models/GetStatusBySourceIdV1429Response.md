---
id: get-status-by-source-id-v1429-response
title: GetStatusBySourceIdV1429Response
pagination_label: GetStatusBySourceIdV1429Response
sidebar_label: GetStatusBySourceIdV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetStatusBySourceIdV1429Response', 'GetStatusBySourceIdV1429Response'] 
slug: /tools/sdk/powershell/sourceusages/models/get-status-by-source-id-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetStatusBySourceIdV1429Response', 'GetStatusBySourceIdV1429Response']
---


# GetStatusBySourceIdV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetStatusBySourceIdV1429Response = Initialize-GetStatusBySourceIdV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetStatusBySourceIdV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

