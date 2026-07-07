---
id: sedapprovalstatus
title: Sedapprovalstatus
pagination_label: Sedapprovalstatus
sidebar_label: Sedapprovalstatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sedapprovalstatus', 'Sedapprovalstatus'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/sedapprovalstatus
tags: ['SDK', 'Software Development Kit', 'Sedapprovalstatus', 'Sedapprovalstatus']
---


# Sedapprovalstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FailedReason** | **String** | failed reason will be display if status is failed | [optional] 
**Id** | **String** | Sed id | [optional] 
**Status** | **String** | SUCCESS | FAILED | [optional] 

## Examples

- Prepare the resource
```powershell
$Sedapprovalstatus = Initialize-Sedapprovalstatus  -FailedReason invalid status `
 -Id 016629d1-1d25-463f-97f3-0c6686846650 `
 -Status SUCCESS
```

- Convert the resource to JSON
```powershell
$Sedapprovalstatus | ConvertTo-JSON
```


[[Back to top]](#) 

