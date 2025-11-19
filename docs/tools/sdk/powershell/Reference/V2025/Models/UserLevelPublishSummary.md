---
id: v2025-user-level-publish-summary
title: UserLevelPublishSummary
pagination_label: UserLevelPublishSummary
sidebar_label: UserLevelPublishSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserLevelPublishSummary', 'V2025UserLevelPublishSummary'] 
slug: /tools/sdk/powershell/v2025/models/user-level-publish-summary
tags: ['SDK', 'Software Development Kit', 'UserLevelPublishSummary', 'V2025UserLevelPublishSummary']
---


# UserLevelPublishSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserLevelId** | **String** | The unique identifier of the UserLevel. | [optional] 
**Publish** | **Boolean** | Indicates whether the API call triggered a publish operation. | [optional] [default to $false]
**Status** | **String** | The status of the UserLevel publish operation. | [optional] 
**Modified** | **System.DateTime** | The last modification timestamp of the UserLevel. | [optional] 

## Examples

- Prepare the resource
```powershell
$UserLevelPublishSummary = Initialize-V2025UserLevelPublishSummary  -UserLevelId 6e110911-5984-491b-be74-2707980a46a7 `
 -Publish true `
 -Status ACTIVE `
 -Modified 2023-01-02T12:00Z
```

- Convert the resource to JSON
```powershell
$UserLevelPublishSummary | ConvertTo-JSON
```


[[Back to top]](#) 

