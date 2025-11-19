---
id: kba-auth-response-item
title: KbaAuthResponseItem
pagination_label: KbaAuthResponseItem
sidebar_label: KbaAuthResponseItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'KbaAuthResponseItem', 'KbaAuthResponseItem'] 
slug: /tools/sdk/powershell/v3/models/kba-auth-response-item
tags: ['SDK', 'Software Development Kit', 'KbaAuthResponseItem', 'KbaAuthResponseItem']
---


# KbaAuthResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QuestionId** | **String** | The KBA question id | [optional] 
**IsVerified** | **Boolean** | Return true if verified | [optional] 

## Examples

- Prepare the resource
```powershell
$KbaAuthResponseItem = Initialize-KbaAuthResponseItem  -QuestionId 089899f13a8f4da7824996191587bab9 `
 -IsVerified true
```

- Convert the resource to JSON
```powershell
$KbaAuthResponseItem | ConvertTo-JSON
```


[[Back to top]](#) 

