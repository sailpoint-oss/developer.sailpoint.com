---
id: approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approval'] 
slug: /tools/sdk/powershell/v3/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval']
---


# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** |  Pointer to [**[]ApprovalComment**](approval-comment) |  | [optional] 
**Created** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Modified** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Owner** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**Result** |  Pointer to **String** | The result of the approval | [optional] 
**Type** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval = Initialize-PSSailpoint.V3Approval  -Comments null `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Owner null `
 -Result Finished `
 -Type null
```

- Convert the resource to JSON
```powershell
$Approval | ConvertTo-JSON
```


[[Back to top]](#) 

