---
id: approvalstatusdto-current-owner
title: ApprovalstatusdtoCurrentOwner
pagination_label: ApprovalstatusdtoCurrentOwner
sidebar_label: ApprovalstatusdtoCurrentOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalstatusdtoCurrentOwner', 'ApprovalstatusdtoCurrentOwner'] 
slug: /tools/sdk/powershell/accessrequests/models/approvalstatusdto-current-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalstatusdtoCurrentOwner', 'ApprovalstatusdtoCurrentOwner']
---


# ApprovalstatusdtoCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | **String** | ID of identity who reviewed the access item request. | [optional] 
**Name** | **String** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalstatusdtoCurrentOwner = Initialize-ApprovalstatusdtoCurrentOwner  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$ApprovalstatusdtoCurrentOwner | ConvertTo-JSON
```


[[Back to top]](#) 

