---
id: beta-comment
title: Comment
pagination_label: Comment
sidebar_label: Comment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Comment', 'BetaComment'] 
slug: /tools/sdk/powershell/beta/models/comment
tags: ['SDK', 'Software Development Kit', 'Comment', 'BetaComment']
---


# Comment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommenterId** | **String** | Id of the identity making the comment | [optional] 
**CommenterName** | **String** | Human-readable display name of the identity making the comment | [optional] 
**Body** | **String** | Content of the comment | [optional] 
**Date** | **System.DateTime** | Date and time comment was made | [optional] 

## Examples

- Prepare the resource
```powershell
$Comment = Initialize-BetaComment  -CommenterId 2c918084660f45d6016617daa9210584 `
 -CommenterName Adam Kennedy `
 -Body Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat. `
 -Date 2017-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$Comment | ConvertTo-JSON
```


[[Back to top]](#) 

