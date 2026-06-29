---
id: kbaanswerresponseitem
title: Kbaanswerresponseitem
pagination_label: Kbaanswerresponseitem
sidebar_label: Kbaanswerresponseitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Kbaanswerresponseitem', 'Kbaanswerresponseitem'] 
slug: /tools/sdk/powershell/mfaconfiguration/models/kbaanswerresponseitem
tags: ['SDK', 'Software Development Kit', 'Kbaanswerresponseitem', 'Kbaanswerresponseitem']
---


# Kbaanswerresponseitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Question Id | [required]
**Question** | **String** | Question description | [required]
**HasAnswer** | **Boolean** | Denotes whether the KBA question has an answer configured for the current user | [required]

## Examples

- Prepare the resource
```powershell
$Kbaanswerresponseitem = Initialize-Kbaanswerresponseitem  -Id c54fee53-2d63-4fc5-9259-3e93b9994135 `
 -Question [{"text":"Nouvelle question MFA -1 ?","locale":"fr"},{"text":"MFA new question -1 ?","locale":""}] `
 -HasAnswer true
```

- Convert the resource to JSON
```powershell
$Kbaanswerresponseitem | ConvertTo-JSON
```


[[Back to top]](#) 

