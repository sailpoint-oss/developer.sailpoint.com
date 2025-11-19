---
id: beta-managed-client
title: ManagedClient
pagination_label: ManagedClient
sidebar_label: ManagedClient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClient', 'BetaManagedClient'] 
slug: /tools/sdk/python/beta/models/managed-client
tags: ['SDK', 'Software Development Kit', 'ManagedClient', 'BetaManagedClient']
---

# ManagedClient

Managed Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ManagedClient ID | [optional] [readonly] 
**alert_key** | **str** | ManagedClient alert key | [optional] [readonly] 
**api_gateway_base_url** | **str** | ManagedClient gateway base url | [optional] [readonly] 
**cc_id** | **int** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] 
**client_id** | **str** | The client ID used in API management | [required]
**cluster_id** | **str** | Cluster ID that the ManagedClient is linked to | [required]
**cookbook** | **str** | VA cookbook | [optional] [readonly] 
**description** | **str** | ManagedClient description | [required]
**ip_address** | **str** | The public IP address of the ManagedClient | [optional] [readonly] 
**last_seen** | **datetime** | When the ManagedClient was last seen by the server | [optional] [readonly] 
**name** | **str** | ManagedClient name | [optional] 
**since_last_seen** | **str** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] 
**status** | [**ManagedClientStatusEnum**](managed-client-status-enum) | Status of the ManagedClient | [optional] [readonly] 
**type** | **str** | Type of the ManagedClient (VA, CCG) | [required]
**va_download_url** | **str** | ManagedClient VA download URL | [optional] [readonly] 
**va_version** | **str** | Version that the ManagedClient's VA is running | [optional] [readonly] 
**secret** | **str** | Client's apiKey | [optional] 
}

## Example

```python
from sailpoint.beta.models.managed_client import ManagedClient

managed_client = ManagedClient(
id='aClientId',
alert_key='anAlertKey',
api_gateway_base_url='https://example-tenant.api.identitynow.com',
cc_id=2248,
client_id='aClientApiId',
cluster_id='aClusterId',
cookbook='va-cookbook-info',
description='A short description of the ManagedClient',
ip_address='123.456.78.90',
last_seen='2020-01-01T00:00Z',
name='aName',
since_last_seen='15000',
status='NORMAL',
type='VA',
va_download_url='aUrl',
va_version='va-megapod-useast1-610-1621372012',
secret='ef878e15eaa8c8d3e2fa52f41125e2a0eeadadc6a14f931a33ad3e1b62d56381'
)

```
[[Back to top]](#) 

