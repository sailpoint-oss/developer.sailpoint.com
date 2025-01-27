---
id: v2024-queued-check-config-details
title: QueuedCheckConfigDetails
pagination_label: QueuedCheckConfigDetails
sidebar_label: QueuedCheckConfigDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'QueuedCheckConfigDetails'] 
slug: /tools/sdk/powershell/v2024/models/queued-check-config-details
tags: ['SDK', 'Software Development Kit', 'QueuedCheckConfigDetails']
---


# QueuedCheckConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProvisioningStatusCheckIntervalMinutes** |  **String** | Interval in minutes between status checks | [required]
**ProvisioningMaxStatusCheckDays** |  **String** | Maximum number of days to check | [required]

## Examples

- Prepare the resource
```powershell
$QueuedCheckConfigDetails = Initialize-PSSailpoint.V2024QueuedCheckConfigDetails  -ProvisioningStatusCheckIntervalMinutes 30 `
 -ProvisioningMaxStatusCheckDays 2
```

- Convert the resource to JSON
```powershell
$QueuedCheckConfigDetails | ConvertTo-JSON
```


[[Back to top]](#) 

