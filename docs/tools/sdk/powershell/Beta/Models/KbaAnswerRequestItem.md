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
**QuestionId** |  **String** | Question Id | 
**Answer** |  **String** | An answer for the KBA question | 

## Examples

- Prepare the resource
```powershell
$KbaAnswerRequestItem = Initialize-PSSailpointBetaKbaAnswerRequestItem  -QuestionId 089899f13a8f4da7824996191587bab9 `
 -Answer Your answer
```

- Convert the resource to JSON
```powershell
$KbaAnswerRequestItem | ConvertTo-JSON
```


[[Back to top]](#) 

