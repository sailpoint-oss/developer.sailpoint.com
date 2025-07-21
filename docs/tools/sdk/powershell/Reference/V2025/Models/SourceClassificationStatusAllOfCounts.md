---
id: v2025-source-classification-status-all-of-counts
title: SourceClassificationStatusAllOfCounts
pagination_label: SourceClassificationStatusAllOfCounts
sidebar_label: SourceClassificationStatusAllOfCounts
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceClassificationStatusAllOfCounts', 'V2025SourceClassificationStatusAllOfCounts'] 
slug: /tools/sdk/powershell/v2025/models/source-classification-status-all-of-counts
tags: ['SDK', 'Software Development Kit', 'SourceClassificationStatusAllOfCounts', 'V2025SourceClassificationStatusAllOfCounts']
---


# SourceClassificationStatusAllOfCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EXPECTED** | **Int64** | total number of source accounts | [required]
**RECEIVED** | **Int64** | number of accounts that have been sent for processing (should be the same as expected when all accounts are collected) | [required]
**COMPLETED** | **Int64** | number of accounts that have been classified | [required]

## Examples

- Prepare the resource
```powershell
$SourceClassificationStatusAllOfCounts = Initialize-V2025SourceClassificationStatusAllOfCounts  -EXPECTED 1000 `
 -RECEIVED 800 `
 -COMPLETED 500
```

- Convert the resource to JSON
```powershell
$SourceClassificationStatusAllOfCounts | ConvertTo-JSON
```


[[Back to top]](#) 

