---
id: managed-client-status
title: ManagedClientStatus
pagination_label: ManagedClientStatus
sidebar_label: ManagedClientStatus
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManagedClientStatus'] 
slug: /tools/sdk/powershell/beta/models/managed-client-status
tags: ['SDK', 'Software Development Kit', 'ManagedClientStatus']
---


# ManagedClientStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** |  [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | ManagedClientStatus body information | 
**Status** |  [**ManagedClientStatusEnum**](managed-client-status-enum) |  | 
**Type** |  [**ManagedClientType**](managed-client-type) |  | 
**Timestamp** |  **System.DateTime** | timestamp on the Client Status update | 

## Examples

- Prepare the resource
```powershell
$ManagedClientStatus = Initialize-PSSailpointBetaManagedClientStatus  -Body {alertKey&#x3D;, id&#x3D;5678, clusterId&#x3D;1234, ccg_etag&#x3D;ccg_etag123xyz456, ccg_pin&#x3D;NONE, cookbook_etag&#x3D;20210420125956-20210511144538, hostname&#x3D;megapod-useast1-secret-hostname.sailpoint.com, internal_ip&#x3D;127.0.0.1, lastSeen&#x3D;1620843964604, sinceSeen&#x3D;14708, sinceSeenMillis&#x3D;14708, localDev&#x3D;false, stacktrace&#x3D;, state&#x3D;null, status&#x3D;NORMAL, uuid&#x3D;null, product&#x3D;idn, va_version&#x3D;null, platform_version&#x3D;2, os_version&#x3D;2345.3.1, os_type&#x3D;flatcar, hypervisor&#x3D;unknown} `
 -Status null `
 -Type null `
 -Timestamp 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$ManagedClientStatus | ConvertTo-JSON
```


[[Back to top]](#) 

