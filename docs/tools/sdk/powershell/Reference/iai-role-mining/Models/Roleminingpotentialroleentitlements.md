---
id: roleminingpotentialroleentitlements
title: Roleminingpotentialroleentitlements
pagination_label: Roleminingpotentialroleentitlements
sidebar_label: Roleminingpotentialroleentitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialroleentitlements', 'Roleminingpotentialroleentitlements'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialroleentitlements
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleentitlements', 'Roleminingpotentialroleentitlements']
---


# Roleminingpotentialroleentitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the entitlement | [optional] 
**Name** | **String** | Name of the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialroleentitlements = Initialize-Roleminingpotentialroleentitlements  -Id {"id":"2c9180877212632a017228d5a796292c"} `
 -Name {"name":"LauncherTest2"}
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialroleentitlements | ConvertTo-JSON
```


[[Back to top]](#) 

