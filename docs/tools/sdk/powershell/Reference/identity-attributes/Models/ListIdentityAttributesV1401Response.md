---
id: list-identity-attributes-v1401-response
title: ListIdentityAttributesV1401Response
pagination_label: ListIdentityAttributesV1401Response
sidebar_label: ListIdentityAttributesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListIdentityAttributesV1401Response', 'ListIdentityAttributesV1401Response'] 
slug: /tools/sdk/powershell/identityattributes/models/list-identity-attributes-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListIdentityAttributesV1401Response', 'ListIdentityAttributesV1401Response']
---


# ListIdentityAttributesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListIdentityAttributesV1401Response = Initialize-ListIdentityAttributesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListIdentityAttributesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

