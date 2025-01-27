---
id: v2024-selector
title: Selector
pagination_label: Selector
sidebar_label: Selector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Selector'] 
slug: /tools/sdk/powershell/v2024/models/selector
tags: ['SDK', 'Software Development Kit', 'Selector']
---


# Selector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** |  Pointer to **String** | The application id | [optional] 
**AccountMatchConfig** |  Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Selector = Initialize-PSSailpoint.V2024Selector  -ApplicationId 2c91808874ff91550175097daaec161c&quot; `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$Selector | ConvertTo-JSON
```


[[Back to top]](#) 

