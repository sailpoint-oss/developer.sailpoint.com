---
id: vaclusterstatuschangeevent-health-check-result
title: VaclusterstatuschangeeventHealthCheckResult
pagination_label: VaclusterstatuschangeeventHealthCheckResult
sidebar_label: VaclusterstatuschangeeventHealthCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VaclusterstatuschangeeventHealthCheckResult', 'VaclusterstatuschangeeventHealthCheckResult'] 
slug: /tools/sdk/powershell/triggers/models/vaclusterstatuschangeevent-health-check-result
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventHealthCheckResult', 'VaclusterstatuschangeeventHealthCheckResult']
---


# VaclusterstatuschangeeventHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Detailed message of the result of the health check. | [required]
**ResultType** | **String** | The type of the health check result. | [required]
**Status** |  **Enum** [  "Succeeded",    "Failed" ] | The status of the health check. | [required]

## Examples

- Prepare the resource
```powershell
$VaclusterstatuschangeeventHealthCheckResult = Initialize-VaclusterstatuschangeeventHealthCheckResult  -Message Test Connection failed with exception. Error message - java.lang Exception `
 -ResultType SOURCE_STATE_ERROR_CLUSTER `
 -Status Succeeded
```

- Convert the resource to JSON
```powershell
$VaclusterstatuschangeeventHealthCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

