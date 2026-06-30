---
id: get-profile-config-list-v1401-response
title: GetProfileConfigListV1401Response
pagination_label: GetProfileConfigListV1401Response
sidebar_label: GetProfileConfigListV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetProfileConfigListV1401Response', 'GetProfileConfigListV1401Response'] 
slug: /tools/sdk/powershell/authprofile/models/get-profile-config-list-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetProfileConfigListV1401Response', 'GetProfileConfigListV1401Response']
---


# GetProfileConfigListV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetProfileConfigListV1401Response = Initialize-GetProfileConfigListV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetProfileConfigListV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

