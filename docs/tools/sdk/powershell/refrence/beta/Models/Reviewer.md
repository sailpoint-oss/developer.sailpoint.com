---
id: reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewer'] 
slug: /tools/sdk/powershell/beta/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer']
---


# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The reviewer's DTO type. | [required]
**Id** |  **String** | The reviewer's ID. | [required]
**Name** |  **String** | The reviewer's display name. | [required]
**Email** |  Pointer to **String** | The reviewing identity's email. Only applicable to `IDENTITY`. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewer = Initialize-PSSailpoint.BetaReviewer  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels `
 -Email reviewer@test.com
```

- Convert the resource to JSON
```powershell
$Reviewer | ConvertTo-JSON
```


[[Back to top]](#) 

