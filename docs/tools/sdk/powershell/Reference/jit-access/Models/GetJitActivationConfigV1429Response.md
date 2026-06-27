---
id: get-jit-activation-config-v1429-response
title: GetJitActivationConfigV1429Response
pagination_label: GetJitActivationConfigV1429Response
sidebar_label: GetJitActivationConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetJitActivationConfigV1429Response', 'GetJitActivationConfigV1429Response'] 
slug: /tools/sdk/powershell/jitaccess/models/get-jit-activation-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetJitActivationConfigV1429Response', 'GetJitActivationConfigV1429Response']
---


# GetJitActivationConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetJitActivationConfigV1429Response = Initialize-GetJitActivationConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetJitActivationConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

