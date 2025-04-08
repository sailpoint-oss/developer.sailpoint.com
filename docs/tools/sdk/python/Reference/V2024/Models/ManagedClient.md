---
id: v2024-managed-client
title: ManagedClient
pagination_label: ManagedClient
sidebar_label: ManagedClient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedClient', 'V2024ManagedClient'] 
slug: /tools/sdk/python/v2024/models/managed-client
tags: ['SDK', 'Software Development Kit', 'ManagedClient', 'V2024ManagedClient']
---

# ManagedClient

Managed Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ManagedClient ID | [optional] [readonly] 
**alert_key** | **str** | ManagedClient alert key | [optional] [readonly] 
**api_gateway_base_url** | **str** | apiGatewayBaseUrl for the Managed client | [optional] 
**cookbook** | **str** | cookbook id for the Managed client | [optional] 
**cc_id** | **int** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] 
**client_id** | **str** | The client ID used in API management | [required]
**cluster_id** | **str** | Cluster ID that the ManagedClient is linked to | [required]
**description** | **str** | ManagedClient description | [required][default to '']
**ip_address** | **str** | The public IP address of the ManagedClient | [optional] [readonly] 
**last_seen** | **datetime** | When the ManagedClient was last seen by the server | [optional] [readonly] 
**name** | **str** | ManagedClient name | [optional] [default to 'VA-$clientId']
**since_last_seen** | **str** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] 
**status** |  **Enum** [  'NORMAL',    'UNDEFINED',    'NOT_CONFIGURED',    'CONFIGURING',    'WARNING',    'ERROR',    'FAILED' ] | Status of the ManagedClient | [optional] [readonly] 
**type** | **str** | Type of the ManagedClient (VA, CCG) | [required]
**cluster_type** |  **Enum** [  'idn',    'iai',    'spConnectCluster',    'sqsCluster',    'das-rc',    'das-pc',    'das-dc' ] | Cluster Type of the ManagedClient | [optional] [readonly] 
**va_download_url** | **str** | ManagedClient VA download URL | [optional] [readonly] 
**va_version** | **str** | Version that the ManagedClient's VA is running | [optional] [readonly] 
**secret** | **str** | Client's apiKey | [optional] 
**created_at** | **datetime** | The date/time this ManagedClient was created | [optional] 
**updated_at** | **datetime** | The date/time this ManagedClient was last updated | [optional] 
**provision_status** |  **Enum** [  'PROVISIONED',    'DRAFT' ] | The provisioning status of the ManagedClient | [optional] [readonly] 
**health_indicators** | **object** | The health indicators of the ManagedClient | [optional] 
}

## Example

```python
from sailpoint.v2024.models.managed_client import ManagedClient

managed_client = ManagedClient(
id='2c9180878eaf4204018eb019c3570003',
alert_key='CLIENT_STATUS_NOT_CONFIGURED',
api_gateway_base_url='',
cookbook='',
cc_id=2248,
client_id='00be54a2-bb6d-402f-9159-beb2d5319347',
cluster_id='e1ff7bb24c934240bbf55e1aa39e41c5',
description='',
ip_address='123.456.78.90',
last_seen='2020-01-01T00:00Z',
name='VA-$clientId',
since_last_seen='15000',
status='NORMAL',
type='VA',
cluster_type='idn',
va_download_url='aUrl',
va_version='va-megapod-useast1-610-1621372012',
secret='ef878e15eaa8c8d3e2fa52f41125e2a0eeadadc6a14f931a33ad3e1b62d56381',
created_at='2023-08-04T20:48:01.865Z',
updated_at='2023-08-04T20:48:01.865Z',
provision_status='PROVISIONED',
health_indicators={ "network": { "errors": [], "warnings": [] }, "memory": { "errors": [], "warnings": [] }, "cpu": { "errors": [], "warnings": [] } }
)

```
[[Back to top]](#) 

