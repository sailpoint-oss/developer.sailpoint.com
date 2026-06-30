---
id: identity2
title: Identity2
pagination_label: Identity2
sidebar_label: Identity2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identity2', 'Identity2'] 
slug: /tools/sdk/powershell/workreassignment/models/identity2
tags: ['SDK', 'Software Development Kit', 'Identity2', 'Identity2']
---


# Identity2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the object | [optional] 
**Name** | **String** | Human-readable display name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$Identity2 = Initialize-Identity2  -Id 2c91808380aa05580180aaaaf1940410 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Identity2 | ConvertTo-JSON
```


[[Back to top]](#) 

