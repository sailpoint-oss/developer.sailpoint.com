---
id: v2025-approval1
title: Approval1
pagination_label: Approval1
sidebar_label: Approval1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approval1', 'V2025Approval1'] 
slug: /tools/sdk/powershell/v2025/models/approval1
tags: ['SDK', 'Software Development Kit', 'Approval1', 'V2025Approval1']
---


# Approval1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | [**[]ApprovalComment2**](approval-comment2) |  | [optional] 
**Modified** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Owner** | [**ActivityIdentity**](activity-identity) |  | [optional] 
**Result** | **String** | The result of the approval | [optional] 
**AttributeRequest** | [**AttributeRequest**](attribute-request) |  | [optional] 
**Source** | [**AccountSource**](account-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval1 = Initialize-PSSailpoint.V2025Approval1  -Comments null `
 -Modified 2018-06-25T20:22:28.104Z `
 -Owner null `
 -Result Finished `
 -AttributeRequest null `
 -Source null
```

- Convert the resource to JSON
```powershell
$Approval1 | ConvertTo-JSON
```


[[Back to top]](#) 

