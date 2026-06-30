---
id: baseaccessprofile
title: Baseaccessprofile
pagination_label: Baseaccessprofile
sidebar_label: Baseaccessprofile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Baseaccessprofile', 'Baseaccessprofile'] 
slug: /tools/sdk/powershell/search/models/baseaccessprofile
tags: ['SDK', 'Software Development Kit', 'Baseaccessprofile', 'Baseaccessprofile']
---


# Baseaccessprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access profile's unique ID. | [optional] 
**Name** | **String** | Access profile's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Baseaccessprofile = Initialize-Baseaccessprofile  -Id 2c91809c6faade77016fb4f0b63407ae `
 -Name Admin Access
```

- Convert the resource to JSON
```powershell
$Baseaccessprofile | ConvertTo-JSON
```


[[Back to top]](#) 

