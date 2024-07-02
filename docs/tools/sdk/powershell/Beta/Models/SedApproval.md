---
id: sed-approval
title: SedApproval
pagination_label: SedApproval
sidebar_label: SedApproval
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SedApproval'] 
slug: /tools/sdk/powershell/beta/models/sed-approval
tags: ['SDK', 'Software Development Kit', 'SedApproval']
---


# SedApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** |  Pointer to **[]String** | List of SED id&#39;s | [optional] 

## Examples

- Prepare the resource
```powershell
$SedApproval = Initialize-BetaSedApproval  -Items 016629d1-1d25-463f-97f3-c6686846650
```

- Convert the resource to JSON
```powershell
$SedApproval | ConvertTo-JSON
```


[[Back to top]](#) 

