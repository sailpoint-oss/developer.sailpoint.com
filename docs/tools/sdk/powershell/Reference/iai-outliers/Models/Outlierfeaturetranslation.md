---
id: outlierfeaturetranslation
title: Outlierfeaturetranslation
pagination_label: Outlierfeaturetranslation
sidebar_label: Outlierfeaturetranslation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Outlierfeaturetranslation', 'Outlierfeaturetranslation'] 
slug: /tools/sdk/powershell/iaioutliers/models/outlierfeaturetranslation
tags: ['SDK', 'Software Development Kit', 'Outlierfeaturetranslation', 'Outlierfeaturetranslation']
---


# Outlierfeaturetranslation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayName** | [**Translationmessage**](translationmessage) |  | [optional] 
**Description** | [**Translationmessage**](translationmessage) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Outlierfeaturetranslation = Initialize-Outlierfeaturetranslation  -DisplayName null `
 -Description null
```

- Convert the resource to JSON
```powershell
$Outlierfeaturetranslation | ConvertTo-JSON
```


[[Back to top]](#) 

