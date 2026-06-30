---
id: get-peer-group-outliers-v1429-response
title: GetPeerGroupOutliersV1429Response
pagination_label: GetPeerGroupOutliersV1429Response
sidebar_label: GetPeerGroupOutliersV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPeerGroupOutliersV1429Response', 'GetPeerGroupOutliersV1429Response'] 
slug: /tools/sdk/powershell/iaipeergroupstrategies/models/get-peer-group-outliers-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPeerGroupOutliersV1429Response', 'GetPeerGroupOutliersV1429Response']
---


# GetPeerGroupOutliersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPeerGroupOutliersV1429Response = Initialize-GetPeerGroupOutliersV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPeerGroupOutliersV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

