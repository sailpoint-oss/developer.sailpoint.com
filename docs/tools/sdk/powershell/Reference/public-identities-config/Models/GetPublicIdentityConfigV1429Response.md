---
id: get-public-identity-config-v1429-response
title: GetPublicIdentityConfigV1429Response
pagination_label: GetPublicIdentityConfigV1429Response
sidebar_label: GetPublicIdentityConfigV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPublicIdentityConfigV1429Response', 'GetPublicIdentityConfigV1429Response'] 
slug: /tools/sdk/powershell/publicidentitiesconfig/models/get-public-identity-config-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPublicIdentityConfigV1429Response', 'GetPublicIdentityConfigV1429Response']
---


# GetPublicIdentityConfigV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPublicIdentityConfigV1429Response = Initialize-GetPublicIdentityConfigV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPublicIdentityConfigV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

