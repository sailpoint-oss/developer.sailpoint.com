---
id: kba-question
title: KbaQuestion
pagination_label: KbaQuestion
sidebar_label: KbaQuestion
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'KbaQuestion'] 
slug: /tools/sdk/powershell/beta/models/kba-question
tags: ['SDK', 'Software Development Kit', 'KbaQuestion']
---


# KbaQuestion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | KBA Question Id | 
**Text** |  **String** | KBA Question description | 
**HasAnswer** |  **Boolean** | Denotes whether the KBA question has an answer configured for any user in the tenant | 
**NumAnswers** |  **Int32** | Denotes the number of KBA configurations for this question | 

## Examples

- Prepare the resource
```powershell
$KbaQuestion = Initialize-BetaKbaQuestion  -Id 143cfd3b-c23f-426b-ae5f-d3db06fa5919 `
 -Text [{"text":"Nouvelle question MFA -1 ?","locale":"fr"},{"text":"MFA new question -1 ?","locale":""}] `
 -HasAnswer true `
 -NumAnswers 5
```

- Convert the resource to JSON
```powershell
$KbaQuestion | ConvertTo-JSON
```


[[Back to top]](#) 

