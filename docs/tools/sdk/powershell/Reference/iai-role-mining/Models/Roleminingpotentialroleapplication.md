---
id: roleminingpotentialroleapplication
title: Roleminingpotentialroleapplication
pagination_label: Roleminingpotentialroleapplication
sidebar_label: Roleminingpotentialroleapplication
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialroleapplication', 'Roleminingpotentialroleapplication'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialroleapplication
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleapplication', 'Roleminingpotentialroleapplication']
---


# Roleminingpotentialroleapplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the application | [optional] 
**Name** | **String** | Name of the application | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialroleapplication = Initialize-Roleminingpotentialroleapplication  -Id {"id":"2c9180877212632a017228d5a796292b"} `
 -Name {"name":"Slack"}
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialroleapplication | ConvertTo-JSON
```


[[Back to top]](#) 

