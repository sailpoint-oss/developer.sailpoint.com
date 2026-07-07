---
id: accessrequestphases
title: Accessrequestphases
pagination_label: Accessrequestphases
sidebar_label: Accessrequestphases
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestphases', 'Accessrequestphases'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequestphases
tags: ['SDK', 'Software Development Kit', 'Accessrequestphases', 'Accessrequestphases']
---


# Accessrequestphases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Started** | **System.DateTime** | The time that this phase started. | [optional] 
**Finished** | **System.DateTime** | The time that this phase finished. | [optional] 
**Name** | **String** | The name of this phase. | [optional] 
**State** |  **Enum** [  "PENDING",    "EXECUTING",    "COMPLETED",    "CANCELLED",    "NOT_EXECUTED" ] | The state of this phase. | [optional] 
**Result** |  **Enum** [  "SUCCESSFUL",    "FAILED" ] | The state of this phase. | [optional] 
**PhaseReference** | **String** | A reference to another object on the RequestedItemStatus that contains more details about the phase. Note that for the Provisioning phase, this will be empty if there are no manual work items. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestphases = Initialize-Accessrequestphases  -Started 2020-07-11T00:00Z `
 -Finished 2020-07-12T00:00Z `
 -Name APPROVAL_PHASE `
 -State COMPLETED `
 -Result SUCCESSFUL `
 -PhaseReference approvalDetails
```

- Convert the resource to JSON
```powershell
$Accessrequestphases | ConvertTo-JSON
```


[[Back to top]](#) 

