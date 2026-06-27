---
id: get-mfa-okta-config-v1429-response
title: GetMFAOktaConfigV1429Response
pagination_label: GetMFAOktaConfigV1429Response
sidebar_label: GetMFAOktaConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetMFAOktaConfigV1429Response', 'GetMFAOktaConfigV1429Response'] 
slug: /tools/sdk/powershell/mfaconfiguration/models/get-mfa-okta-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetMFAOktaConfigV1429Response', 'GetMFAOktaConfigV1429Response']
---


# GetMFAOktaConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetMFAOktaConfigV1429Response = Initialize-GetMFAOktaConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetMFAOktaConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

