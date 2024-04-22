---
id: queued-check-config-details
title: QueuedCheckConfigDetails
pagination_label: QueuedCheckConfigDetails
sidebar_label: QueuedCheckConfigDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'QueuedCheckConfigDetails'] 
slug: /tools/sdk/powershell/beta/models/queued-check-config-details
tags: ['SDK', 'Software Development Kit', 'QueuedCheckConfigDetails']
---


# QueuedCheckConfigDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProvisioningStatusCheckIntervalMinutes** |  **String** | interval in minutes between status checks | 
**ProvisioningMaxStatusCheckDays** |  **String** | maximum number of days to check | 

## Examples

- Prepare the resource
```powershell
$QueuedCheckConfigDetails = Initialize-BetaQueuedCheckConfigDetails  -ProvisioningStatusCheckIntervalMinutes 30 `
 -ProvisioningMaxStatusCheckDays 2
```

- Convert the resource to JSON
```powershell
$QueuedCheckConfigDetails | ConvertTo-JSON
```


[[Back to top]](#) 

