---
id: list-entitlements-v1429-response
title: ListEntitlementsV1429Response
pagination_label: ListEntitlementsV1429Response
sidebar_label: ListEntitlementsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListEntitlementsV1429Response', 'ListEntitlementsV1429Response'] 
slug: /tools/sdk/powershell/entitlements/models/list-entitlements-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListEntitlementsV1429Response', 'ListEntitlementsV1429Response']
---


# ListEntitlementsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListEntitlementsV1429Response = Initialize-ListEntitlementsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$ListEntitlementsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

