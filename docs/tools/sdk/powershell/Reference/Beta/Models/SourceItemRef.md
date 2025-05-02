---
id: beta-source-item-ref
title: SourceItemRef
pagination_label: SourceItemRef
sidebar_label: SourceItemRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceItemRef', 'BetaSourceItemRef'] 
slug: /tools/sdk/powershell/beta/models/source-item-ref
tags: ['SDK', 'Software Development Kit', 'SourceItemRef', 'BetaSourceItemRef']
---


# SourceItemRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | The id for the source on which account selections are made | [optional] 
**Accounts** | [**[]AccountItemRef**](account-item-ref) | A list of account selections on the source. Currently, only one selection per source is supported. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceItemRef = Initialize-PSSailpoint.BetaSourceItemRef  -SourceId cb89bc2f1ee6445fbea12224c526ba3a `
 -Accounts null
```

- Convert the resource to JSON
```powershell
$SourceItemRef | ConvertTo-JSON
```


[[Back to top]](#) 

