---
id: v2024-approval-name
title: ApprovalName
pagination_label: ApprovalName
sidebar_label: ApprovalName
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalName', 'V2024ApprovalName'] 
slug: /tools/sdk/powershell/v2024/models/approval-name
tags: ['SDK', 'Software Development Kit', 'ApprovalName', 'V2024ApprovalName']
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
$ApprovalName = Initialize-V2024ApprovalName  -Value Audit DB Access `
 -Locale en_US
```

- Convert the resource to JSON
```powershell
$ApprovalName | ConvertTo-JSON
```


[[Back to top]](#) 

