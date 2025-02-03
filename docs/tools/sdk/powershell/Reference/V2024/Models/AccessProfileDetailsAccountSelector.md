---
id: v2024-access-profile-details-account-selector
title: AccessProfileDetailsAccountSelector
pagination_label: AccessProfileDetailsAccountSelector
sidebar_label: AccessProfileDetailsAccountSelector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileDetailsAccountSelector', 'V2024AccessProfileDetailsAccountSelector'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-details-account-selector
tags: ['SDK', 'Software Development Kit', 'AccessProfileDetailsAccountSelector', 'V2024AccessProfileDetailsAccountSelector']
---


# AccessProfileDetailsAccountSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Selectors** | [**[]Selector**](selector) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileDetailsAccountSelector = Initialize-PSSailpoint.V2024AccessProfileDetailsAccountSelector  -Selectors null
```

- Convert the resource to JSON
```powershell
$AccessProfileDetailsAccountSelector | ConvertTo-JSON
```


[[Back to top]](#) 

