---
id: approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approval', 'Approval'] 
slug: /tools/sdk/powershell/v3/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'Approval']
---


# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | [**[]ApprovalComment**](approval-comment) |  | [optional] 
**Created** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Modified** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Owner** | [**AccountSource**](account-source) |  | [optional] 
**Result** | **String** | The result of the approval | [optional] 
**Type** | **String** |  | [optional] 

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

