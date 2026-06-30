---
id: approvalsummary
title: Approvalsummary
pagination_label: Approvalsummary
sidebar_label: Approvalsummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Approvalsummary', 'Approvalsummary'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/approvalsummary
tags: ['SDK', 'Software Development Kit', 'Approvalsummary', 'Approvalsummary']
---


# Approvalsummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pending** | **Int32** | The number of pending access requests approvals. | [optional] 
**Approved** | **Int32** | The number of approved access requests approvals. | [optional] 
**Rejected** | **Int32** | The number of rejected access requests approvals. | [optional] 

## Examples

- Prepare the resource
```powershell
$Approvalsummary = Initialize-Approvalsummary  -Pending 0 `
 -Approved 0 `
 -Rejected 0
```

- Convert the resource to JSON
```powershell
$Approvalsummary | ConvertTo-JSON
```


[[Back to top]](#) 

