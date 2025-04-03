---
id: v2024-managed-client-status
title: ManagedClientStatus
pagination_label: ManagedClientStatus
sidebar_label: ManagedClientStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClientStatus', 'V2024ManagedClientStatus'] 
slug: /tools/sdk/python/v2024/models/managed-client-status
tags: ['SDK', 'Software Development Kit', 'ManagedClientStatus', 'V2024ManagedClientStatus']
---

# ManagedClientStatus

Managed Client Status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **object** | ManagedClientStatus body information | [required]
**status** | [**ManagedClientStatusCode**](managed-client-status-code) |  | [required]
**type** | [**ManagedClientType**](managed-client-type) |  | [required]
**timestamp** | **datetime** | timestamp on the Client Status update | [required]
}

## Example

```python
from sailpoint.v2024.models.managed_client_status import ManagedClientStatus

managed_client_status = ManagedClientStatus(
body={alertKey=, id=5678, clusterId=1234, ccg_etag=ccg_etag123xyz456, ccg_pin=NONE, cookbook_etag=20210420125956-20210511144538, hostname=megapod-useast1-secret-hostname.sailpoint.com, internal_ip=127.0.0.1, lastSeen=1620843964604, sinceSeen=14708, sinceSeenMillis=14708, localDev=false, stacktrace=, state=null, status=NORMAL, uuid=null, product=idn, va_version=null, platform_version=2, os_version=2345.3.1, os_type=flatcar, hypervisor=unknown},
status='NORMAL',
type='CCG',
timestamp='2020-01-01T00:00Z'
)

```
[[Back to top]](#) 

