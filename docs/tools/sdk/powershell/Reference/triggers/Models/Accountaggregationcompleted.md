---
id: accountaggregationcompleted
title: Accountaggregationcompleted
pagination_label: Accountaggregationcompleted
sidebar_label: Accountaggregationcompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountaggregationcompleted', 'Accountaggregationcompleted'] 
slug: /tools/sdk/powershell/triggers/models/accountaggregationcompleted
tags: ['SDK', 'Software Development Kit', 'Accountaggregationcompleted', 'Accountaggregationcompleted']
---


# Accountaggregationcompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountaggregationcompletedSource**](accountaggregationcompleted-source) |  | [required]
**Status** |  **Enum** [  "Success",    "Failed",    "Terminated" ] | The overall status of the aggregation. | [required]
**Started** | **System.DateTime** | The date and time when the account aggregation started. | [required]
**Completed** | **System.DateTime** | The date and time when the account aggregation finished. | [required]
**Errors** | **[]String** | A list of errors that occurred during the aggregation. | [required]
**Warnings** | **[]String** | A list of warnings that occurred during the aggregation. | [required]
**Stats** | [**AccountaggregationcompletedStats**](accountaggregationcompleted-stats) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accountaggregationcompleted = Initialize-Accountaggregationcompleted  -Source null `
 -Status Success `
 -Started 2020-06-29T22:01:50.474Z `
 -Completed 2020-06-29T22:02:04.090Z `
 -Errors null `
 -Warnings null `
 -Stats null
```

- Convert the resource to JSON
```powershell
$Accountaggregationcompleted | ConvertTo-JSON
```


[[Back to top]](#) 

