---
id: query-password-info-v1429-response
title: QueryPasswordInfoV1429Response
pagination_label: QueryPasswordInfoV1429Response
sidebar_label: QueryPasswordInfoV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'QueryPasswordInfoV1429Response', 'QueryPasswordInfoV1429Response'] 
slug: /tools/sdk/powershell/passwordmanagement/models/query-password-info-v1429-response
tags: ['SDK', 'Software Development Kit', 'QueryPasswordInfoV1429Response', 'QueryPasswordInfoV1429Response']
---


# QueryPasswordInfoV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$QueryPasswordInfoV1429Response = Initialize-QueryPasswordInfoV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$QueryPasswordInfoV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

