---
id: attributedtolist
title: Attributedtolist
pagination_label: Attributedtolist
sidebar_label: Attributedtolist
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attributedtolist', 'Attributedtolist'] 
slug: /tools/sdk/powershell/roles/models/attributedtolist
tags: ['SDK', 'Software Development Kit', 'Attributedtolist', 'Attributedtolist']
---


# Attributedtolist

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**[]Attributedto**](attributedto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Attributedtolist = Initialize-Attributedtolist  -Attributes [{"key":"iscPrivacy","name":"Privacy","multiselect":false,"status":"active","type":"governance","objectTypes":["all"],"description":"Specifies the level of privacy associated with an access item.","values":[{"value":"public","name":"Public","status":"active"}]}]
```

- Convert the resource to JSON
```powershell
$Attributedtolist | ConvertTo-JSON
```


[[Back to top]](#) 

