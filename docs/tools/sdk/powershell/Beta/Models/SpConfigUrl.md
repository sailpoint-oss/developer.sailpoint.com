---
id: sp-config-url
title: SpConfigUrl
pagination_label: SpConfigUrl
sidebar_label: SpConfigUrl
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SpConfigUrl'] 
slug: /tools/sdk/powershell/beta/models/sp-config-url
tags: ['SDK', 'Software Development Kit', 'SpConfigUrl']
---


# SpConfigUrl

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** |  Pointer to **String** | URL for the target object endpoint. | [optional] 
**Query** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Any query parameters that are needed for the URL. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigUrl = Initialize-BetaSpConfigUrl  -Url ets://trigger-subscriptions/$id `
 -Query null
```

- Convert the resource to JSON
```powershell
$SpConfigUrl | ConvertTo-JSON
```


[[Back to top]](#) 

