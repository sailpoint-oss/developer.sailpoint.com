---
id: v2025-kba-question
title: KbaQuestion
pagination_label: KbaQuestion
sidebar_label: KbaQuestion
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'KbaQuestion', 'V2025KbaQuestion'] 
slug: /tools/sdk/powershell/v2025/models/kba-question
tags: ['SDK', 'Software Development Kit', 'KbaQuestion', 'V2025KbaQuestion']
---


# KbaQuestion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | KBA Question Id | [required]
**Text** | **String** | KBA Question description | [required]
**HasAnswer** | **Boolean** | Denotes whether the KBA question has an answer configured for any user in the tenant | [required]
**NumAnswers** | **Int32** | Denotes the number of KBA configurations for this question | [required]

## Examples

- Prepare the resource
```powershell
$KbaQuestion = Initialize-PSSailpoint.V2025KbaQuestion  -Id 143cfd3b-c23f-426b-ae5f-d3db06fa5919 `
 -Text [{"text":"Nouvelle question MFA -1 ?","locale":"fr"},{"text":"MFA new question -1 ?","locale":""}] `
 -HasAnswer true `
 -NumAnswers 5
```

- Convert the resource to JSON
```powershell
$KbaQuestion | ConvertTo-JSON
```


[[Back to top]](#) 

