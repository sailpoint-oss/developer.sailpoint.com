---
id: roleminingpotentialrolesourceusage
title: Roleminingpotentialrolesourceusage
pagination_label: Roleminingpotentialrolesourceusage
sidebar_label: Roleminingpotentialrolesourceusage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialrolesourceusage', 'Roleminingpotentialrolesourceusage'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialrolesourceusage
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialrolesourceusage', 'Roleminingpotentialrolesourceusage']
---


# Roleminingpotentialrolesourceusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The identity ID | [optional] 
**DisplayName** | **String** | Display name for the identity | [optional] 
**Email** | **String** | Email address for the identity | [optional] 
**UsageCount** | **Int32** | The number of days there has been usage of the source by the identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialrolesourceusage = Initialize-Roleminingpotentialrolesourceusage  -Id 2c918089762475180176267f894b54dc `
 -DisplayName Kirk Koepp `
 -Email kirk.koepp@testmail.identitynow.com `
 -UsageCount 25
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialrolesourceusage | ConvertTo-JSON
```


[[Back to top]](#) 

