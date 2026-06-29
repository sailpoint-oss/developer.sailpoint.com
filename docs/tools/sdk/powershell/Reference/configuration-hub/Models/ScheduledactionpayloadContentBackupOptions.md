---
id: scheduledactionpayload-content-backup-options
title: ScheduledactionpayloadContentBackupOptions
pagination_label: ScheduledactionpayloadContentBackupOptions
sidebar_label: ScheduledactionpayloadContentBackupOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledactionpayloadContentBackupOptions', 'ScheduledactionpayloadContentBackupOptions'] 
slug: /tools/sdk/powershell/configurationhub/models/scheduledactionpayload-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContentBackupOptions', 'ScheduledactionpayloadContentBackupOptions']
---


# ScheduledactionpayloadContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | [**map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue**](scheduledactionresponse-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledactionpayloadContentBackupOptions = Initialize-ScheduledactionpayloadContentBackupOptions  -IncludeTypes ["ROLE","IDENTITY_PROFILE"] `
 -ObjectOptions {"SOURCE":{"includedNames":["Source1","Source2"]},"ROLE":{"includedNames":["Admin Role","User Role"]}}
```

- Convert the resource to JSON
```powershell
$ScheduledactionpayloadContentBackupOptions | ConvertTo-JSON
```


[[Back to top]](#) 

