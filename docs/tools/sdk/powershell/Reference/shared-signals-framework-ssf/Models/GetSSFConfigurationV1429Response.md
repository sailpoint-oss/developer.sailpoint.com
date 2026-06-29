---
id: get-ssf-configuration-v1429-response
title: GetSSFConfigurationV1429Response
pagination_label: GetSSFConfigurationV1429Response
sidebar_label: GetSSFConfigurationV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetSSFConfigurationV1429Response', 'GetSSFConfigurationV1429Response'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/models/get-ssf-configuration-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetSSFConfigurationV1429Response', 'GetSSFConfigurationV1429Response']
---


# GetSSFConfigurationV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetSSFConfigurationV1429Response = Initialize-GetSSFConfigurationV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetSSFConfigurationV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

