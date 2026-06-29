---
id: get-total-count-v1429-response
title: GetTotalCountV1429Response
pagination_label: GetTotalCountV1429Response
sidebar_label: GetTotalCountV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetTotalCountV1429Response', 'GetTotalCountV1429Response'] 
slug: /tools/sdk/powershell/apiusage/models/get-total-count-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetTotalCountV1429Response', 'GetTotalCountV1429Response']
---


# GetTotalCountV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetTotalCountV1429Response = Initialize-GetTotalCountV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetTotalCountV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

