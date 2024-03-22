---
id: kba-answer-request
title: KbaAnswerRequest
pagination_label: KbaAnswerRequest
sidebar_label: KbaAnswerRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'KbaAnswerRequest'] 
slug: /tools/sdk/powershell/beta/models/kba-answer-request
tags: ['SDK', 'Software Development Kit', 'KbaAnswerRequest']
---


# KbaAnswerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Answers** |  [**[]KbaAnswerRequestItem**](kba-answer-request-item) | Kba answers | 

## Examples

- Prepare the resource
```powershell
$KbaAnswerRequest = Initialize-PSSailpointBetaKbaAnswerRequest  -Answers [{questionId&#x3D;089899f13a8f4da7824996191587bab9, answer&#x3D;Your answer}, {questionId&#x3D;067899f13a8f4da7824996191587bab9, answer&#x3D;Your answer1}]
```

- Convert the resource to JSON
```powershell
$KbaAnswerRequest | ConvertTo-JSON
```


[[Back to top]](#) 

