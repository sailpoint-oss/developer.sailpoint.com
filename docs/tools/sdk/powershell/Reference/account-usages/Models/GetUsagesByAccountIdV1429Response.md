---
id: get-usages-by-account-id-v1429-response
title: GetUsagesByAccountIdV1429Response
pagination_label: GetUsagesByAccountIdV1429Response
sidebar_label: GetUsagesByAccountIdV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetUsagesByAccountIdV1429Response', 'GetUsagesByAccountIdV1429Response'] 
slug: /tools/sdk/powershell/accountusages/models/get-usages-by-account-id-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetUsagesByAccountIdV1429Response', 'GetUsagesByAccountIdV1429Response']
---


# GetUsagesByAccountIdV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetUsagesByAccountIdV1429Response = Initialize-GetUsagesByAccountIdV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetUsagesByAccountIdV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

