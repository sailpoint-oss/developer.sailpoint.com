---
id: get-ssf-configuration-v1401-response
title: GetSSFConfigurationV1401Response
pagination_label: GetSSFConfigurationV1401Response
sidebar_label: GetSSFConfigurationV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetSSFConfigurationV1401Response', 'GetSSFConfigurationV1401Response'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/get-ssf-configuration-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetSSFConfigurationV1401Response', 'GetSSFConfigurationV1401Response']
---


# GetSSFConfigurationV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetSSFConfigurationV1401Response = Initialize-GetSSFConfigurationV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetSSFConfigurationV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

