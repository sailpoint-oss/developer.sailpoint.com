---
id: approval
title: Approval
pagination_label: Approval
sidebar_label: Approval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approval', 'Approval'] 
slug: /tools/sdk/powershell/search/models/approval
tags: ['SDK', 'Software Development Kit', 'Approval', 'Approval']
---


# Approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | [**[]Approvalcomment2**](approvalcomment2) |  | [optional] 
**Modified** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**Owner** | [**Activityidentity**](activityidentity) |  | [optional] 
**Result** | **String** | The result of the approval | [optional] 
**AttributeRequest** | [**Attributerequest**](attributerequest) |  | [optional] 
**Source** | [**Accountsource**](accountsource) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval = Initialize-Approval  -Comments null `
 -Modified 2018-06-25T20:22:28.104Z `
 -Owner null `
 -Result Finished `
 -AttributeRequest null `
 -Source null
```

- Convert the resource to JSON
```powershell
$Approval | ConvertTo-JSON
```


[[Back to top]](#) 

