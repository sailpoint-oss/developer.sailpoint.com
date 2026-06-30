---
id: queuedcheckconfigdetails
title: Queuedcheckconfigdetails
pagination_label: Queuedcheckconfigdetails
sidebar_label: Queuedcheckconfigdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Queuedcheckconfigdetails', 'Queuedcheckconfigdetails'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/queuedcheckconfigdetails
tags: ['SDK', 'Software Development Kit', 'Queuedcheckconfigdetails', 'Queuedcheckconfigdetails']
---


# Queuedcheckconfigdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProvisioningStatusCheckIntervalMinutes** | **String** | Interval in minutes between status checks | [required]
**ProvisioningMaxStatusCheckDays** | **String** | Maximum number of days to check | [required]

## Examples

- Prepare the resource
```powershell
$Queuedcheckconfigdetails = Initialize-Queuedcheckconfigdetails  -ProvisioningStatusCheckIntervalMinutes 30 `
 -ProvisioningMaxStatusCheckDays 2
```

- Convert the resource to JSON
```powershell
$Queuedcheckconfigdetails | ConvertTo-JSON
```


[[Back to top]](#) 

