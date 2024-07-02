---
id: va-cluster-status-change-event-previous-health-check-result
title: VAClusterStatusChangeEventPreviousHealthCheckResult
pagination_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_label: VAClusterStatusChangeEventPreviousHealthCheckResult
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'VAClusterStatusChangeEventPreviousHealthCheckResult'] 
slug: /tools/sdk/powershell/beta/models/va-cluster-status-change-event-previous-health-check-result
tags: ['SDK', 'Software Development Kit', 'VAClusterStatusChangeEventPreviousHealthCheckResult']
---


# VAClusterStatusChangeEventPreviousHealthCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  **String** | Detailed message of the result of the health check. | 
**ResultType** |  **String** | The type of the health check result. | 
**Status** |   **Enum** [  "Succeeded",    "Failed" ] | The status of the health check. | 

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventPreviousHealthCheckResult = Initialize-BetaVAClusterStatusChangeEventPreviousHealthCheckResult  -Message Test Connection failed with exception. Error message - java.lang Exception `
 -ResultType SOURCE_STATE_ERROR_CLUSTER `
 -Status Failed
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventPreviousHealthCheckResult | ConvertTo-JSON
```


[[Back to top]](#) 

