---
id: start-application-discovery-v1429-response
title: StartApplicationDiscoveryV1429Response
pagination_label: StartApplicationDiscoveryV1429Response
sidebar_label: StartApplicationDiscoveryV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartApplicationDiscoveryV1429Response', 'StartApplicationDiscoveryV1429Response'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/start-application-discovery-v1429-response
tags: ['SDK', 'Software Development Kit', 'StartApplicationDiscoveryV1429Response', 'StartApplicationDiscoveryV1429Response']
---


# StartApplicationDiscoveryV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$StartApplicationDiscoveryV1429Response = Initialize-StartApplicationDiscoveryV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$StartApplicationDiscoveryV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

