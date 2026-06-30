---
id: get-launchers-v1200-response
title: GetLaunchersV1200Response
pagination_label: GetLaunchersV1200Response
sidebar_label: GetLaunchersV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetLaunchersV1200Response', 'GetLaunchersV1200Response'] 
slug: /tools/sdk/powershell/launchers/models/get-launchers-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchersV1200Response', 'GetLaunchersV1200Response']
---


# GetLaunchersV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Next** | **String** | Pagination marker | [optional] 
**Items** | [**[]Launcher**](launcher) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$GetLaunchersV1200Response = Initialize-GetLaunchersV1200Response  -Next null `
 -Items null
```

- Convert the resource to JSON
```powershell
$GetLaunchersV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

