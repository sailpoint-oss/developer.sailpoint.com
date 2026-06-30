---
id: get-sim-integration-v1401-response
title: GetSIMIntegrationV1401Response
pagination_label: GetSIMIntegrationV1401Response
sidebar_label: GetSIMIntegrationV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetSIMIntegrationV1401Response', 'GetSIMIntegrationV1401Response'] 
slug: /tools/sdk/powershell/simintegrations/models/get-sim-integration-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetSIMIntegrationV1401Response', 'GetSIMIntegrationV1401Response']
---


# GetSIMIntegrationV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetSIMIntegrationV1401Response = Initialize-GetSIMIntegrationV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetSIMIntegrationV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

