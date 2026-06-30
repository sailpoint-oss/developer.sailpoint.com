---
id: list-personal-access-tokens-v1429-response
title: ListPersonalAccessTokensV1429Response
pagination_label: ListPersonalAccessTokensV1429Response
sidebar_label: ListPersonalAccessTokensV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListPersonalAccessTokensV1429Response', 'ListPersonalAccessTokensV1429Response'] 
slug: /tools/sdk/powershell/personalaccesstokens/models/list-personal-access-tokens-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListPersonalAccessTokensV1429Response', 'ListPersonalAccessTokensV1429Response']
---


# ListPersonalAccessTokensV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListPersonalAccessTokensV1429Response = Initialize-ListPersonalAccessTokensV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListPersonalAccessTokensV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

