---
id: kba-answer-response-item
title: KbaAnswerResponseItem
pagination_label: KbaAnswerResponseItem
sidebar_label: KbaAnswerResponseItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'KbaAnswerResponseItem'] 
slug: /tools/sdk/powershell/v3/models/kba-answer-response-item
tags: ['SDK', 'Software Development Kit', 'KbaAnswerResponseItem']
---


# KbaAnswerResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Question Id | [required]
**Question** |  **String** | Question description | [required]
**HasAnswer** |  **Boolean** | Denotes whether the KBA question has an answer configured for the current user | [required]

## Examples

- Prepare the resource
```powershell
$KbaAnswerResponseItem = Initialize-PSSailpoint.V3KbaAnswerResponseItem  -Id c54fee53-2d63-4fc5-9259-3e93b9994135 `
 -Question [{&quot;text&quot;:&quot;Nouvelle question MFA -1 ?&quot;,&quot;locale&quot;:&quot;fr&quot;},{&quot;text&quot;:&quot;MFA new question -1 ?&quot;,&quot;locale&quot;:&quot;&quot;}] `
 -HasAnswer true
```

- Convert the resource to JSON
```powershell
$KbaAnswerResponseItem | ConvertTo-JSON
```


[[Back to top]](#) 

