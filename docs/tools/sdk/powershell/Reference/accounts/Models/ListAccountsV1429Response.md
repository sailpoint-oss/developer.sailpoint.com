---
id: list-accounts-v1429-response
title: ListAccountsV1429Response
pagination_label: ListAccountsV1429Response
sidebar_label: ListAccountsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccountsV1429Response', 'ListAccountsV1429Response'] 
slug: /tools/sdk/powershell/accounts/models/list-accounts-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListAccountsV1429Response', 'ListAccountsV1429Response']
---


# ListAccountsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccountsV1429Response = Initialize-ListAccountsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListAccountsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

