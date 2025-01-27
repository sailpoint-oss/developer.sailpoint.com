---
id: beta-completed-approval-reviewed-by
title: CompletedApprovalReviewedBy
pagination_label: CompletedApprovalReviewedBy
sidebar_label: CompletedApprovalReviewedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedApprovalReviewedBy'] 
slug: /tools/sdk/powershell/beta/models/completed-approval-reviewed-by
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalReviewedBy']
---


# CompletedApprovalReviewedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of identity who reviewed the access item request. | [optional] 
**Id** |  Pointer to **String** | ID of identity who reviewed the access item request. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApprovalReviewedBy = Initialize-PSSailpoint.BetaCompletedApprovalReviewedBy  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$CompletedApprovalReviewedBy | ConvertTo-JSON
```


[[Back to top]](#) 

