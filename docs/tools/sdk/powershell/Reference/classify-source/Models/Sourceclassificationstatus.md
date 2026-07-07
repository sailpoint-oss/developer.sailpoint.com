---
id: sourceclassificationstatus
title: Sourceclassificationstatus
pagination_label: Sourceclassificationstatus
sidebar_label: Sourceclassificationstatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceclassificationstatus', 'Sourceclassificationstatus'] 
slug: /tools/sdk/powershell/classifysource/models/sourceclassificationstatus
tags: ['SDK', 'Software Development Kit', 'Sourceclassificationstatus', 'Sourceclassificationstatus']
---


# Sourceclassificationstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "STARTED",    "COLLECTED",    "COMPLETED",    "CANCELLED",    "TERMINATED" ] | Status of Classification Process | [optional] 
**Started** | **System.DateTime** | Time when the process was started | [optional] 
**Updated** | **System.DateTime** | Time when the process status was last updated | [optional] 
**Counts** | [**SourceclassificationstatusAllOfCounts**](sourceclassificationstatus-all-of-counts) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceclassificationstatus = Initialize-Sourceclassificationstatus  -Status COMPLETED `
 -Started 2017-07-11T18:45:37.098Z `
 -Updated 2018-06-25T20:22:28.104Z `
 -Counts null
```

- Convert the resource to JSON
```powershell
$Sourceclassificationstatus | ConvertTo-JSON
```


[[Back to top]](#) 

