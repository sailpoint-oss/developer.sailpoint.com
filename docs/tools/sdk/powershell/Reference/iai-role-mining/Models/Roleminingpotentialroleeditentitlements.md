---
id: roleminingpotentialroleeditentitlements
title: Roleminingpotentialroleeditentitlements
pagination_label: Roleminingpotentialroleeditentitlements
sidebar_label: Roleminingpotentialroleeditentitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialroleeditentitlements', 'Roleminingpotentialroleeditentitlements'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialroleeditentitlements
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleeditentitlements', 'Roleminingpotentialroleeditentitlements']
---


# Roleminingpotentialroleeditentitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The list of entitlement ids to be edited | [optional] 
**Exclude** | **Boolean** | If true, add ids to be exclusion list. If false, remove ids from the exclusion list. | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialroleeditentitlements = Initialize-Roleminingpotentialroleeditentitlements  -Ids null `
 -Exclude null
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialroleeditentitlements | ConvertTo-JSON
```


[[Back to top]](#) 

