---
id: get-password-org-config-v1401-response
title: GetPasswordOrgConfigV1401Response
pagination_label: GetPasswordOrgConfigV1401Response
sidebar_label: GetPasswordOrgConfigV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPasswordOrgConfigV1401Response', 'GetPasswordOrgConfigV1401Response'] 
slug: /tools/sdk/powershell/passwordconfiguration/models/get-password-org-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordOrgConfigV1401Response', 'GetPasswordOrgConfigV1401Response']
---


# GetPasswordOrgConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordOrgConfigV1401Response = Initialize-GetPasswordOrgConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPasswordOrgConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

