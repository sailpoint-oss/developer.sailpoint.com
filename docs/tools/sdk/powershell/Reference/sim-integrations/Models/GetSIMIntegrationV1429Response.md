---
id: get-sim-integration-v1429-response
title: GetSIMIntegrationV1429Response
pagination_label: GetSIMIntegrationV1429Response
sidebar_label: GetSIMIntegrationV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetSIMIntegrationV1429Response', 'GetSIMIntegrationV1429Response'] 
slug: /tools/sdk/powershell/simintegrations/models/get-sim-integration-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetSIMIntegrationV1429Response', 'GetSIMIntegrationV1429Response']
---


# GetSIMIntegrationV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetSIMIntegrationV1429Response = Initialize-GetSIMIntegrationV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetSIMIntegrationV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

