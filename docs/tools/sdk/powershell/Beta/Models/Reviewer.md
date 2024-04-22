---
id: reviewer
title: Reviewer
pagination_label: Reviewer
sidebar_label: Reviewer
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Reviewer'] 
slug: /tools/sdk/powershell/beta/models/reviewer
tags: ['SDK', 'Software Development Kit', 'Reviewer']
---


# Reviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The reviewer&#39;s DTO type. | 
**Id** |  **String** | The reviewer&#39;s ID. | 
**Name** |  **String** | The reviewer&#39;s display name. | 
**Email** |  Pointer to **String** | The reviewing identity&#39;s email. Only applicable to &#x60;IDENTITY&#x60;. | [optional] 

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

