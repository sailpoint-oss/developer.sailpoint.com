---
id: preapprovaltriggerdetails
title: Preapprovaltriggerdetails
pagination_label: Preapprovaltriggerdetails
sidebar_label: Preapprovaltriggerdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Preapprovaltriggerdetails', 'Preapprovaltriggerdetails'] 
slug: /tools/sdk/powershell/accessrequests/models/preapprovaltriggerdetails
tags: ['SDK', 'Software Development Kit', 'Preapprovaltriggerdetails', 'Preapprovaltriggerdetails']
---


# Preapprovaltriggerdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | **String** | The reviewer of the pre-approval decision | [optional] 
**Decision** |  **Enum** [  "APPROVED",    "REJECTED" ] | The decision of the pre-approval trigger | [optional] 

## Examples

- Prepare the resource
```powershell
$Preapprovaltriggerdetails = Initialize-Preapprovaltriggerdetails  -Comment Access is Approved `
 -Reviewer John Doe `
 -Decision APPROVED
```

- Convert the resource to JSON
```powershell
$Preapprovaltriggerdetails | ConvertTo-JSON
```


[[Back to top]](#) 

