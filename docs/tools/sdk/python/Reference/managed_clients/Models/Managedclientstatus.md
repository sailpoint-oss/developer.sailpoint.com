---
id: managedclientstatus
title: Managedclientstatus
pagination_label: Managedclientstatus
sidebar_label: Managedclientstatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managedclientstatus', 'Managedclientstatus'] 
slug: /tools/sdk/python/managed-clients/models/managedclientstatus
tags: ['SDK', 'Software Development Kit', 'Managedclientstatus', 'Managedclientstatus']
---

# Managedclientstatus

Managed Client Status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **object** | ManagedClientStatus body information | [required]
**status** | [**Managedclientstatuscode**](managedclientstatuscode) |  | [required]
**type** | [**Managedclienttype**](managedclienttype) |  | [required]
**timestamp** | **datetime** | timestamp on the Client Status update | [required]
}

## Example

```python
from sailpoint.managed_clients.models.managedclientstatus import Managedclientstatus

managedclientstatus = Managedclientstatus(
body={"alertKey":"","id":"5678","clusterId":"1234","ccg_etag":"ccg_etag123xyz456","ccg_pin":"NONE","cookbook_etag":"20210420125956-20210511144538","hostname":"megapod-useast1-secret-hostname.sailpoint.com","internal_ip":"127.0.0.1","lastSeen":"1620843964604","sinceSeen":"14708","sinceSeenMillis":"14708","localDev":false,"stacktrace":"","state":null,"status":"NORMAL","uuid":null,"product":"idn","va_version":null,"platform_version":"2","os_version":"2345.3.1","os_type":"flatcar","hypervisor":"unknown"},
status='NORMAL',
type='CCG',
timestamp='2020-01-01T00:00Z'
)

```
[[Back to top]](#) 

