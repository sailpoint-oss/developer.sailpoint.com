---
id: get-org-config-v1401-response
title: GetOrgConfigV1401Response
pagination_label: GetOrgConfigV1401Response
sidebar_label: GetOrgConfigV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetOrgConfigV1401Response', 'GetOrgConfigV1401Response'] 
slug: /tools/sdk/powershell/orgconfig/models/get-org-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetOrgConfigV1401Response', 'GetOrgConfigV1401Response']
---


# GetOrgConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetOrgConfigV1401Response = Initialize-GetOrgConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetOrgConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

