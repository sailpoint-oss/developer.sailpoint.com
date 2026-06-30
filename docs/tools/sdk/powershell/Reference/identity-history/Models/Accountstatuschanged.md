---
id: accountstatuschanged
title: Accountstatuschanged
pagination_label: Accountstatuschanged
sidebar_label: Accountstatuschanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountstatuschanged', 'Accountstatuschanged'] 
slug: /tools/sdk/powershell/identityhistory/models/accountstatuschanged
tags: ['SDK', 'Software Development Kit', 'Accountstatuschanged', 'Accountstatuschanged']
---


# Accountstatuschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **String** | the event type | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**Account** | [**AccountstatuschangedAccount**](accountstatuschanged-account) |  | [required]
**StatusChange** | [**AccountstatuschangedStatusChange**](accountstatuschanged-status-change) |  | [required]

## Examples

- Prepare the resource
```powershell
$Accountstatuschanged = Initialize-Accountstatuschanged  -EventType AccountStatusChanged `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -DateTime 2019-03-08T22:37:33.901Z `
 -Account null `
 -StatusChange null
```

- Convert the resource to JSON
```powershell
$Accountstatuschanged | ConvertTo-JSON
```


[[Back to top]](#) 

