---
id: v2024-kba-answer-request-item
title: KbaAnswerRequestItem
pagination_label: KbaAnswerRequestItem
sidebar_label: KbaAnswerRequestItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'KbaAnswerRequestItem', 'V2024KbaAnswerRequestItem'] 
slug: /tools/sdk/powershell/v2024/models/kba-answer-request-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerRequestItem', 'V2024KbaAnswerRequestItem']
---


# KbaAnswerRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Question Id | [required]
**Answer** |  **String** | An answer for the KBA question | [required]

## Examples

- Prepare the resource
```powershell
$KbaAnswerRequestItem = Initialize-PSSailpoint.V2024KbaAnswerRequestItem  -Id c54fee53-2d63-4fc5-9259-3e93b9994135 `
 -Answer Your answer
```

- Convert the resource to JSON
```powershell
$KbaAnswerRequestItem | ConvertTo-JSON
```


[[Back to top]](#) 

