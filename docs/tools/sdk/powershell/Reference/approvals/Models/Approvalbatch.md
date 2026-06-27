---
id: approvalbatch
title: Approvalbatch
pagination_label: Approvalbatch
sidebar_label: Approvalbatch
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalbatch', 'Approvalbatch'] 
slug: /tools/sdk/powershell/approvals/models/approvalbatch
tags: ['SDK', 'Software Development Kit', 'Approvalbatch', 'Approvalbatch']
---


# Approvalbatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | **String** | ID of the batch | [optional] 
**BatchSize** | **Int64** | How many approvals are going to be in this batch. Defaults to 1 if not provided. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalbatch = Initialize-Approvalbatch  -BatchId 38453251-6be2-5f8f-df93-5ce19e295837 `
 -BatchSize 100
```

- Convert the resource to JSON
```powershell
$Approvalbatch | ConvertTo-JSON
```


[[Back to top]](#) 

