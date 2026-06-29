---
id: start-application-discovery-v1401-response
title: StartApplicationDiscoveryV1401Response
pagination_label: StartApplicationDiscoveryV1401Response
sidebar_label: StartApplicationDiscoveryV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartApplicationDiscoveryV1401Response', 'StartApplicationDiscoveryV1401Response'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/start-application-discovery-v1401-response
tags: ['SDK', 'Software Development Kit', 'StartApplicationDiscoveryV1401Response', 'StartApplicationDiscoveryV1401Response']
---


# StartApplicationDiscoveryV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$StartApplicationDiscoveryV1401Response = Initialize-StartApplicationDiscoveryV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$StartApplicationDiscoveryV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

