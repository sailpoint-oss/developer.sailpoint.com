---
id: commentdto
title: Commentdto
pagination_label: Commentdto
sidebar_label: Commentdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Commentdto', 'Commentdto'] 
slug: /tools/sdk/powershell/accessrequests/models/commentdto
tags: ['SDK', 'Software Development Kit', 'Commentdto', 'Commentdto']
---


# Commentdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Commentdto = Initialize-Commentdto  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$Commentdto | ConvertTo-JSON
```


[[Back to top]](#) 

