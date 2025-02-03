---
id: beta-approval-name
title: ApprovalName
pagination_label: ApprovalName
sidebar_label: ApprovalName
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalName', 'BetaApprovalName'] 
slug: /tools/sdk/powershell/beta/models/approval-name
tags: ['SDK', 'Software Development Kit', 'ApprovalName', 'BetaApprovalName']
---


# ApprovalName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | Name of the approval | [optional] 
**Locale** | **String** | What locale the name of the approval is using | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalName = Initialize-PSSailpoint.BetaApprovalName  -Value Audit DB Access `
 -Locale en_US
```

- Convert the resource to JSON
```powershell
$ApprovalName | ConvertTo-JSON
```


[[Back to top]](#) 

