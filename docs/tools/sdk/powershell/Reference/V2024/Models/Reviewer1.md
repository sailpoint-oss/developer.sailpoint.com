---
id: v2024-reviewer1
title: Reviewer1
pagination_label: Reviewer1
sidebar_label: Reviewer1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reviewer1', 'V2024Reviewer1'] 
slug: /tools/sdk/powershell/v2024/models/reviewer1
tags: ['SDK', 'Software Development Kit', 'Reviewer1', 'V2024Reviewer1']
---


# Reviewer1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The reviewer's DTO type. | [required]
**Id** | **String** | The reviewer's ID. | [required]
**Name** | **String** | The reviewer's display name. | [required]
**Email** | **String** | The reviewing identity's email. Only applicable to `IDENTITY`. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reviewer1 = Initialize-PSSailpoint.V2024Reviewer1  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels `
 -Email reviewer@test.com
```

- Convert the resource to JSON
```powershell
$Reviewer1 | ConvertTo-JSON
```


[[Back to top]](#) 

