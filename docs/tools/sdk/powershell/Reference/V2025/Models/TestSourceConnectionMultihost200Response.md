---
id: v2025-test-source-connection-multihost200-response
title: TestSourceConnectionMultihost200Response
pagination_label: TestSourceConnectionMultihost200Response
sidebar_label: TestSourceConnectionMultihost200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestSourceConnectionMultihost200Response', 'V2025TestSourceConnectionMultihost200Response'] 
slug: /tools/sdk/powershell/v2025/models/test-source-connection-multihost200-response
tags: ['SDK', 'Software Development Kit', 'TestSourceConnectionMultihost200Response', 'V2025TestSourceConnectionMultihost200Response']
---


# TestSourceConnectionMultihost200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **Boolean** | Source's test connection status. | [optional] 
**Message** | **String** | Source's test connection message. | [optional] 
**Timing** | **Int32** | Source's test connection timing. | [optional] 
**ResultType** |  **Enum** [  "SOURCE_STATE_ERROR_CLUSTER",    "SOURCE_STATE_ERROR_SOURCE",    "SOURCE_STATE_ERROR_VA",    "SOURCE_STATE_FAILURE_CLUSTER",    "SOURCE_STATE_FAILURE_SOURCE",    "SOURCE_STATE_HEALTHY",    "SOURCE_STATE_UNCHECKED_CLUSTER",    "SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES",    "SOURCE_STATE_UNCHECKED_SOURCE",    "SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS",    "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT" ] | Source's human-readable result type. | [optional] 
**TestConnectionDetails** | **String** | Source's human-readable test connection details. | [optional] 

## Examples

- Prepare the resource
```powershell
$TestSourceConnectionMultihost200Response = Initialize-V2025TestSourceConnectionMultihost200Response  -Success true `
 -Message Tes. `
 -Timing 30437 `
 -ResultType SOURCE_STATE_HEALTHY `
 -TestConnectionDetails null
```

- Convert the resource to JSON
```powershell
$TestSourceConnectionMultihost200Response | ConvertTo-JSON
```


[[Back to top]](#) 

