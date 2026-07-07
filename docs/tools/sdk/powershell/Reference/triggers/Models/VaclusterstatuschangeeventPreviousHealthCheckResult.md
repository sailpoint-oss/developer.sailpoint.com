---
id: vaclusterstatuschangeevent-previous-health-check-result
title: VaclusterstatuschangeeventPreviousHealthCheckResult
pagination_label: VaclusterstatuschangeeventPreviousHealthCheckResult
sidebar_label: VaclusterstatuschangeeventPreviousHealthCheckResult
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VaclusterstatuschangeeventPreviousHealthCheckResult', 'VaclusterstatuschangeeventPreviousHealthCheckResult'] 
slug: /tools/sdk/powershell/triggers/models/vaclusterstatuschangeevent-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VaclusterstatuschangeeventPreviousHealthCheckResult', 'VaclusterstatuschangeeventPreviousHealthCheckResult']
---


# VaclusterstatuschangeeventPreviousHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | Detailed message of the result of the health check. | [required]
**ResultType** | **String** | The type of the health check result. | [required]
**Status** |  **Enum** [  "Succeeded",    "Failed" ] | The status of the health check. | [required]

## Examples

- Prepare the resource
```powershell
$VaclusterstatuschangeeventPreviousHealthCheckResult = Initialize-VaclusterstatuschangeeventPreviousHealthCheckResult  -Message Test Connection failed with exception. Error message - java.lang Exception `
 -ResultType SOURCE_STATE_ERROR_CLUSTER `
 -Status Failed
```

- Convert the resource to JSON
```powershell
$VaclusterstatuschangeeventPreviousHealthCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

