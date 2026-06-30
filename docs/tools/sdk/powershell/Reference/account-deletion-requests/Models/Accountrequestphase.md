---
id: accountrequestphase
title: Accountrequestphase
pagination_label: Accountrequestphase
sidebar_label: Accountrequestphase
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountrequestphase', 'Accountrequestphase'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/accountrequestphase
tags: ['SDK', 'Software Development Kit', 'Accountrequestphase', 'Accountrequestphase']
---


# Accountrequestphase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **Enum** [  "APPROVAL_PHASE",    "PROVISIONING_PHASE" ] | Enum of account request phase type | [optional] 
**State** | [**Accountrequestphasestate**](accountrequestphasestate) |  | [optional] 
**Started** | **System.DateTime** | Start date of account request phase. | [optional] [readonly] 
**Finished** | **System.DateTime** | Finish date of account request phase. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Accountrequestphase = Initialize-Accountrequestphase  -Name APPROVAL_PHASE `
 -State null `
 -Started 2026-01-21T11:43:22.432Z `
 -Finished 2026-01-21T11:45:22.432Z
```

- Convert the resource to JSON
```powershell
$Accountrequestphase | ConvertTo-JSON
```


[[Back to top]](#) 

