---
id: reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewer', 'Reviewer'] 
slug: /tools/sdk/powershell/v3/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer', 'Reviewer']
---


# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the reviewer. | [optional] 
**Name** | **String** | The name of the reviewer. | [optional] 
**Email** | **String** | The email of the reviewing identity. | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of the reviewing identity. | [optional] 
**Created** | **System.DateTime** | The created date of the reviewing identity. | [optional] 
**Modified** | **System.DateTime** | The modified date of the reviewing identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewer = Initialize-Reviewer  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Name Reviewer Name `
 -Email reviewer@test.com `
 -Type IDENTITY `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$Reviewer | ConvertTo-JSON
```


[[Back to top]](#) 

