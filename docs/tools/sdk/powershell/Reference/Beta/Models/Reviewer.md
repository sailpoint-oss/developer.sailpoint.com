---
id: beta-reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewer', 'BetaReviewer'] 
slug: /tools/sdk/powershell/beta/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer', 'BetaReviewer']
---


# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | Reviewer's DTO type. | [required]
**Id** | **String** | Reviewer's ID. | [required]
**Name** | **String** | Reviewer's display name. | [required]
**Email** | **String** | Reviewing identity's email. This is only applicable to reviewers of the `IDENTITY` type. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewer = Initialize-BetaReviewer  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels `
 -Email reviewer@test.com
```

- Convert the resource to JSON
```powershell
$Reviewer | ConvertTo-JSON
```


[[Back to top]](#) 

