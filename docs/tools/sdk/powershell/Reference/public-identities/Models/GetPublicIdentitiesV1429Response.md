---
id: get-public-identities-v1429-response
title: GetPublicIdentitiesV1429Response
pagination_label: GetPublicIdentitiesV1429Response
sidebar_label: GetPublicIdentitiesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPublicIdentitiesV1429Response', 'GetPublicIdentitiesV1429Response'] 
slug: /tools/sdk/powershell/publicidentities/models/get-public-identities-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPublicIdentitiesV1429Response', 'GetPublicIdentitiesV1429Response']
---


# GetPublicIdentitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPublicIdentitiesV1429Response = Initialize-GetPublicIdentitiesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPublicIdentitiesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

