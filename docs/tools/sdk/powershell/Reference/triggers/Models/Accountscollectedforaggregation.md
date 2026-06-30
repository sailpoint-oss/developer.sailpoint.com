---
id: accountscollectedforaggregation
title: Accountscollectedforaggregation
pagination_label: Accountscollectedforaggregation
sidebar_label: Accountscollectedforaggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountscollectedforaggregation', 'Accountscollectedforaggregation'] 
slug: /tools/sdk/powershell/triggers/models/accountscollectedforaggregation
tags: ['SDK', 'Software Development Kit', 'Accountscollectedforaggregation', 'Accountscollectedforaggregation']
---


# Accountscollectedforaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountscollectedforaggregationSource**](accountscollectedforaggregation-source) |  | [required]
**Status** |  **Enum** [  "Success",    "Failed",    "Terminated" ] | The overall status of the collection. | [required]
**Started** | **System.DateTime** | The date and time when the account collection started. | [required]
**Completed** | **System.DateTime** | The date and time when the account collection finished. | [required]
**Errors** | **[]String** | A list of errors that occurred during the collection. | [required]
**Warnings** | **[]String** | A list of warnings that occurred during the collection. | [required]
**Stats** | [**AccountscollectedforaggregationStats**](accountscollectedforaggregation-stats) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accountscollectedforaggregation = Initialize-Accountscollectedforaggregation  -Source null `
 -Status Success `
 -Started 2020-06-29T22:01:50.474Z `
 -Completed 2020-06-29T22:02:04.090Z `
 -Errors null `
 -Warnings null `
 -Stats null
```

- Convert the resource to JSON
```powershell
$Accountscollectedforaggregation | ConvertTo-JSON
```


[[Back to top]](#) 

