---
id: get-public-identities-v1401-response
title: GetPublicIdentitiesV1401Response
pagination_label: GetPublicIdentitiesV1401Response
sidebar_label: GetPublicIdentitiesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPublicIdentitiesV1401Response', 'GetPublicIdentitiesV1401Response'] 
slug: /tools/sdk/powershell/publicidentities/models/get-public-identities-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPublicIdentitiesV1401Response', 'GetPublicIdentitiesV1401Response']
---


# GetPublicIdentitiesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPublicIdentitiesV1401Response = Initialize-GetPublicIdentitiesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPublicIdentitiesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

