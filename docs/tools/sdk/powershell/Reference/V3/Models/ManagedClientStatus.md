---
id: managed-client-status
title: ManagedClientStatus
pagination_label: ManagedClientStatus
sidebar_label: ManagedClientStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClientStatus', 'ManagedClientStatus'] 
slug: /tools/sdk/powershell/v3/models/managed-client-status
tags: ['SDK', 'Software Development Kit', 'ManagedClientStatus', 'ManagedClientStatus']
---


# ManagedClientStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | ManagedClientStatus body information | [required]
**Status** | [**ManagedClientStatusCode**](managed-client-status-code) |  | [required]
**Type** | [**ManagedClientType**](managed-client-type) |  | [required]
**Timestamp** | **System.DateTime** | timestamp on the Client Status update | [required]

## Examples

- Prepare the resource
```powershell
$ManagedClientStatus = Initialize-PSSailpoint.V3ManagedClientStatus  -Body {alertKey=, id=5678, clusterId=1234, ccg_etag=ccg_etag123xyz456, ccg_pin=NONE, cookbook_etag=20210420125956-20210511144538, hostname=megapod-useast1-secret-hostname.sailpoint.com, internal_ip=127.0.0.1, lastSeen=1620843964604, sinceSeen=14708, sinceSeenMillis=14708, localDev=false, stacktrace=, state=null, status=NORMAL, uuid=null, product=idn, va_version=null, platform_version=2, os_version=2345.3.1, os_type=flatcar, hypervisor=unknown} `
 -Status null `
 -Type null `
 -Timestamp 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$ManagedClientStatus | ConvertTo-JSON
```


[[Back to top]](#) 

