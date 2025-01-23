---
id: test-source-connection-multihost200-response
title: TestSourceConnectionMultihost200Response
pagination_label: TestSourceConnectionMultihost200Response
sidebar_label: TestSourceConnectionMultihost200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestSourceConnectionMultihost200Response'] 
slug: /tools/sdk/powershell/beta/models/test-source-connection-multihost200-response
tags: ['SDK', 'Software Development Kit', 'TestSourceConnectionMultihost200Response']
---


# TestSourceConnectionMultihost200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** |  Pointer to **Boolean** | Source's test connection status. | [optional] 
**Message** |  Pointer to **String** | Source's test connection message. | [optional] 
**Timing** |  Pointer to **Int32** | Source's test connection timing. | [optional] 
**ResultType** |  Pointer to  **Enum** [  "SOURCE_STATE_ERROR_CLUSTER",    "SOURCE_STATE_ERROR_SOURCE",    "SOURCE_STATE_ERROR_VA",    "SOURCE_STATE_FAILURE_CLUSTER",    "SOURCE_STATE_FAILURE_SOURCE",    "SOURCE_STATE_HEALTHY",    "SOURCE_STATE_UNCHECKED_CLUSTER",    "SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES",    "SOURCE_STATE_UNCHECKED_SOURCE",    "SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS",    "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT" ] | Source's human-readable result type. | [optional] 
**TestConnectionDetails** |  Pointer to **String** | Source's human-readable test connection details. | [optional] 

## Examples

- Prepare the resource
```powershell
$TestSourceConnectionMultihost200Response = Initialize-PSSailpoint.BetaTestSourceConnectionMultihost200Response  -Success true `
 -Message Tes. `
 -Timing null `
 -ResultType SOURCE_STATE_HEALTHY `
 -TestConnectionDetails null
```

- Convert the resource to JSON
```powershell
$TestSourceConnectionMultihost200Response | ConvertTo-JSON
```


[[Back to top]](#) 

