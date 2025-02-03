---
id: beta-kba-question
title: KbaQuestion
pagination_label: KbaQuestion
sidebar_label: KbaQuestion
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'KbaQuestion', 'BetaKbaQuestion'] 
slug: /tools/sdk/powershell/beta/models/kba-question
tags: ['SDK', 'Software Development Kit', 'KbaQuestion', 'BetaKbaQuestion']
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
$KbaQuestion = Initialize-PSSailpoint.BetaKbaQuestion  -Id 143cfd3b-c23f-426b-ae5f-d3db06fa5919 `
 -Text [{&quot;text&quot;:&quot;Nouvelle question MFA -1 ?&quot;,&quot;locale&quot;:&quot;fr&quot;},{&quot;text&quot;:&quot;MFA new question -1 ?&quot;,&quot;locale&quot;:&quot;&quot;}] `
 -HasAnswer true `
 -NumAnswers 5
```

- Convert the resource to JSON
```powershell
$KbaQuestion | ConvertTo-JSON
```


[[Back to top]](#) 

