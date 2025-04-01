---
id: v2025-sed-approval
title: SedApproval
pagination_label: SedApproval
sidebar_label: SedApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedApproval', 'V2025SedApproval'] 
slug: /tools/sdk/powershell/v2025/models/sed-approval
tags: ['SDK', 'Software Development Kit', 'SedApproval', 'V2025SedApproval']
---


# SedApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]String** | List of SED id's | [optional] 

## Examples

- Prepare the resource
```powershell
$SedApproval = Initialize-PSSailpoint.V2025SedApproval  -Items 016629d1-1d25-463f-97f3-c6686846650
```

- Convert the resource to JSON
```powershell
$SedApproval | ConvertTo-JSON
```


[[Back to top]](#) 

