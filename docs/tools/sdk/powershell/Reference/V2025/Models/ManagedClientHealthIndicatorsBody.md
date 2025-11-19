---
id: v2025-managed-client-health-indicators-body
title: ManagedClientHealthIndicatorsBody
pagination_label: ManagedClientHealthIndicatorsBody
sidebar_label: ManagedClientHealthIndicatorsBody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClientHealthIndicatorsBody', 'V2025ManagedClientHealthIndicatorsBody'] 
slug: /tools/sdk/powershell/v2025/models/managed-client-health-indicators-body
tags: ['SDK', 'Software Development Kit', 'ManagedClientHealthIndicatorsBody', 'V2025ManagedClientHealthIndicatorsBody']
---


# ManagedClientHealthIndicatorsBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertKey** | **String** | Health indicator alert key | [optional] [readonly] 
**Id** | **String** | Unique identifier for the health report | [required]
**ClusterId** | **String** | Cluster ID the health report belongs to | [required]
**ApiUser** | **String** | API user ID sending the health data | [required]
**CcgEtag** | **String** | ETag value for CCG version control | [optional] 
**CcgPin** | **String** | PIN value for CCG validation | [optional] 
**CookbookEtag** | **String** | ETag for cookbook version | [optional] 
**Hostname** | **String** | Hostname of the Managed Client | [required]
**InternalIp** | **String** | Internal IP address of the Managed Client | [optional] 
**LastSeen** | **String** | Epoch timestamp (in millis) when last seen | [optional] 
**SinceSeen** | **String** | Seconds since last seen | [optional] 
**SinceSeenMillis** | **String** | Milliseconds since last seen | [optional] 
**LocalDev** | **Boolean** | Indicates if this is a local development instance | [optional] [default to $false]
**VarStacktrace** | **String** | Stacktrace associated with any error, if available | [optional] 
**State** | **String** | Optional state value from the client | [optional] 
**Status** |  **Enum** [  "NORMAL",    "UNDEFINED",    "WARNING",    "ERROR",    "FAILED" ] | Status of the client at the time of report | [required]
**Uuid** | **String** | Optional UUID from the client | [optional] 
**Product** | **String** | Product type (e.g., idn) | [required]
**VaVersion** | **String** | VA version installed on the client | [optional] 
**PlatformVersion** | **String** | Version of the platform on which VA is running | [required]
**OsVersion** | **String** | Operating system version | [required]
**OsType** | **String** | Operating system type | [required]
**Hypervisor** | **String** | Virtualization platform used | [required]
**ConsolidatedHealthIndicatorsStatus** |  **Enum** [  "NORMAL",    "WARNING",    "ERROR" ] | Consolidated health indicator status | [required]
**LastNotifiedCcgVersion** | **String** | The last CCG version for which notification was sent | [optional] 
**DeployedProcesses** | **String** | Information about deployed processes | [optional] 
**HealthIndicators** | [**ManagedClientHealthIndicatorsBodyHealthIndicators**](managed-client-health-indicators-body-health-indicators) |  | [required]

## Examples

- Prepare the resource
```powershell
$ManagedClientHealthIndicatorsBody = Initialize-V2025ManagedClientHealthIndicatorsBody  -AlertKey  `
 -Id 9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2 `
 -ClusterId c2a2139cbc754e42b4279a69ec5f58ec `
 -ApiUser 9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2 `
 -CcgEtag c95e5c4417952dbcc9b4974999ece14e `
 -CcgPin NONE `
 -CookbookEtag 3018-master-2ce6ac16-20250717124641-3077-master-a101b5fe-20250722162527 `
 -Hostname Testing1 `
 -InternalIp 172.18.54.5 `
 -LastSeen 1754465728720 `
 -SinceSeen 23195 `
 -SinceSeenMillis 23195 `
 -LocalDev false `
 -VarStacktrace null `
 -State null `
 -Status NORMAL `
 -Uuid null `
 -Product idn `
 -VaVersion null `
 -PlatformVersion 2 `
 -OsVersion 4230.2.1 `
 -OsType flatcar `
 -Hypervisor vmware `
 -ConsolidatedHealthIndicatorsStatus ERROR `
 -LastNotifiedCcgVersion 1068 `
 -DeployedProcesses null `
 -HealthIndicators null
```

- Convert the resource to JSON
```powershell
$ManagedClientHealthIndicatorsBody | ConvertTo-JSON
```


[[Back to top]](#) 

