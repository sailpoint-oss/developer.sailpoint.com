---
id: get-mfa-okta-config-v1401-response
title: GetMFAOktaConfigV1401Response
pagination_label: GetMFAOktaConfigV1401Response
sidebar_label: GetMFAOktaConfigV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetMFAOktaConfigV1401Response', 'GetMFAOktaConfigV1401Response'] 
slug: /tools/sdk/powershell/mfaconfiguration/models/get-mfa-okta-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetMFAOktaConfigV1401Response', 'GetMFAOktaConfigV1401Response']
---


# GetMFAOktaConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetMFAOktaConfigV1401Response = Initialize-GetMFAOktaConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetMFAOktaConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

