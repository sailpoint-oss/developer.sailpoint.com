---
id: sourceclassificationstatus-all-of-counts
title: SourceclassificationstatusAllOfCounts
pagination_label: SourceclassificationstatusAllOfCounts
sidebar_label: SourceclassificationstatusAllOfCounts
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceclassificationstatusAllOfCounts', 'SourceclassificationstatusAllOfCounts'] 
slug: /tools/sdk/powershell/classifysource/models/sourceclassificationstatus-all-of-counts
tags: ['SDK', 'Software Development Kit', 'SourceclassificationstatusAllOfCounts', 'SourceclassificationstatusAllOfCounts']
---


# SourceclassificationstatusAllOfCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EXPECTED** | **Int64** | total number of source accounts | [required]
**RECEIVED** | **Int64** | number of accounts that have been sent for processing (should be the same as expected when all accounts are collected) | [required]
**COMPLETED** | **Int64** | number of accounts that have been classified | [required]

## Examples

- Prepare the resource
```powershell
$SourceclassificationstatusAllOfCounts = Initialize-SourceclassificationstatusAllOfCounts  -EXPECTED 1000 `
 -RECEIVED 800 `
 -COMPLETED 500
```

- Convert the resource to JSON
```powershell
$SourceclassificationstatusAllOfCounts | ConvertTo-JSON
```


[[Back to top]](#) 

