---
id: kba-answer-request-item
title: KbaAnswerRequestItem
pagination_label: KbaAnswerRequestItem
sidebar_label: KbaAnswerRequestItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'KbaAnswerRequestItem'] 
slug: /tools/sdk/powershell/beta/models/kba-answer-request-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerRequestItem']
---


# KbaAnswerRequestItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Question Id | 
**Answer** |  **String** | An answer for the KBA question | 

## Examples

- Prepare the resource
```powershell
$KbaAnswerRequestItem = Initialize-BetaKbaAnswerRequestItem  -Id c54fee53-2d63-4fc5-9259-3e93b9994135 `
 -Answer Your answer
```

- Convert the resource to JSON
```powershell
$KbaAnswerRequestItem | ConvertTo-JSON
```


[[Back to top]](#) 

