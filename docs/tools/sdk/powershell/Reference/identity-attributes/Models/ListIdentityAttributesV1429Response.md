---
id: list-identity-attributes-v1429-response
title: ListIdentityAttributesV1429Response
pagination_label: ListIdentityAttributesV1429Response
sidebar_label: ListIdentityAttributesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListIdentityAttributesV1429Response', 'ListIdentityAttributesV1429Response'] 
slug: /tools/sdk/powershell/identityattributes/models/list-identity-attributes-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListIdentityAttributesV1429Response', 'ListIdentityAttributesV1429Response']
---


# ListIdentityAttributesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListIdentityAttributesV1429Response = Initialize-ListIdentityAttributesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListIdentityAttributesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

