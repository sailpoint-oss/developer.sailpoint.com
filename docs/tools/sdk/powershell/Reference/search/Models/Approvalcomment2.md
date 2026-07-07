---
id: approvalcomment2
title: Approvalcomment2
pagination_label: Approvalcomment2
sidebar_label: Approvalcomment2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalcomment2', 'Approvalcomment2'] 
slug: /tools/sdk/powershell/search/models/approvalcomment2
tags: ['SDK', 'Software Development Kit', 'Approvalcomment2', 'Approvalcomment2']
---


# Approvalcomment2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | The comment text | [optional] 
**Commenter** | **String** | The name of the commenter | [optional] 
**Date** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalcomment2 = Initialize-Approvalcomment2  -Comment This request was autoapproved by our automated ETS subscriber. `
 -Commenter Automated AR Approval `
 -Date 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$Approvalcomment2 | ConvertTo-JSON
```


[[Back to top]](#) 

