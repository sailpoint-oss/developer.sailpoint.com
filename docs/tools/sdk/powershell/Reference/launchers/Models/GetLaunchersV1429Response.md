---
id: get-launchers-v1429-response
title: GetLaunchersV1429Response
pagination_label: GetLaunchersV1429Response
sidebar_label: GetLaunchersV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetLaunchersV1429Response', 'GetLaunchersV1429Response'] 
slug: /tools/sdk/powershell/launchers/models/get-launchers-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchersV1429Response', 'GetLaunchersV1429Response']
---


# GetLaunchersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetLaunchersV1429Response = Initialize-GetLaunchersV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetLaunchersV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

