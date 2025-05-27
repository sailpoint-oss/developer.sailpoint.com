---
id: beta-get-launchers200-response
title: GetLaunchers200Response
pagination_label: GetLaunchers200Response
sidebar_label: GetLaunchers200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetLaunchers200Response', 'BetaGetLaunchers200Response'] 
slug: /tools/sdk/powershell/beta/models/get-launchers200-response
tags: ['SDK', 'Software Development Kit', 'GetLaunchers200Response', 'BetaGetLaunchers200Response']
---


# GetLaunchers200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Next** | **String** | Pagination marker | [optional] 
**Items** | [**[]Launcher**](launcher) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$GetLaunchers200Response = Initialize-BetaGetLaunchers200Response  -Next null `
 -Items null
```

- Convert the resource to JSON
```powershell
$GetLaunchers200Response | ConvertTo-JSON
```


[[Back to top]](#) 

