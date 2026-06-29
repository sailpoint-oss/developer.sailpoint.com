---
id: get-auth-user-v1429-response
title: GetAuthUserV1429Response
pagination_label: GetAuthUserV1429Response
sidebar_label: GetAuthUserV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetAuthUserV1429Response', 'GetAuthUserV1429Response'] 
slug: /tools/sdk/powershell/authusers/models/get-auth-user-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAuthUserV1429Response', 'GetAuthUserV1429Response']
---


# GetAuthUserV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAuthUserV1429Response = Initialize-GetAuthUserV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetAuthUserV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

