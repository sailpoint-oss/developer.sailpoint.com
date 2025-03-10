---
id: beta-managed-cluster
title: ManagedCluster
pagination_label: ManagedCluster
sidebar_label: ManagedCluster
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedCluster', 'BetaManagedCluster'] 
slug: /tools/sdk/python/beta/models/managed-cluster
tags: ['SDK', 'Software Development Kit', 'ManagedCluster', 'BetaManagedCluster']
---

# ManagedCluster

Managed Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ManagedCluster ID | [required]
**name** | **str** | ManagedCluster name | [optional] 
**pod** | **str** | ManagedCluster pod | [optional] 
**org** | **str** | ManagedCluster org | [optional] 
**type** | [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**configuration** | **map[string]str** | ManagedProcess configuration map | [optional] 
**key_pair** | [**ManagedClusterKeyPair**](managed-cluster-key-pair) |  | [optional] 
**attributes** | [**ManagedClusterAttributes**](managed-cluster-attributes) |  | [optional] 
**description** | **str** | ManagedCluster description | [optional] 
**redis** | [**ManagedClusterRedis**](managed-cluster-redis) |  | [optional] 
**client_type** | [**ManagedClientType**](managed-client-type) |  | [required]
**ccg_version** | **str** | CCG version used by the ManagedCluster | [required]
**pinned_config** | **bool** | boolean flag indiacting whether or not the cluster configuration is pinned | [optional] [default to False]
**log_configuration** | [**ClientLogConfiguration**](client-log-configuration) |  | [optional] 
**operational** | **bool** | Whether or not the cluster is operational or not | [optional] [default to False]
**status** | **str** | Cluster status | [optional] 
**public_key_certificate** | **str** | Public key certificate | [optional] 
**public_key_thumbprint** | **str** | Public key thumbprint | [optional] 
**public_key** | **str** | Public key | [optional] 
**alert_key** | **str** | Key describing any immediate cluster alerts | [optional] 
**client_ids** | **[]str** | List of clients in a cluster | [optional] 
**service_count** | **int** | Number of services bound to a cluster | [optional] [default to 0]
**cc_id** | **str** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to '0']
**created_at** | **datetime** | The date/time this cluster was created | [optional] 
**updated_at** | **datetime** | The date/time this cluster was last updated | [optional] 
}

## Example

```python
from sailpoint.beta.models.managed_cluster import ManagedCluster

managed_cluster = ManagedCluster(
id='aClusterId',
name='Managed Cluster Name',
pod='megapod-useast1',
org='denali',
type='idn',
configuration={clusterExternalId=externalId, ccgVersion=77.0.0},
key_pair=sailpoint.beta.models.managed_cluster_key_pair.ManagedClusterKeyPair(
                    public_key = '-----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY-----', 
                    public_key_thumbprint = '6CMlaJIV44-xJxcB3CJBjDUUn54', 
                    public_key_certificate = '-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----', ),
attributes=sailpoint.beta.models.managed_cluster_attributes.ManagedClusterAttributes(
                    queue = sailpoint.beta.models.managed_cluster_queue.ManagedClusterQueue(
                        name = 'megapod-useast1-denali-lwt-cluster-1533', 
                        region = 'us-east-1', ), 
                    keystore = '/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW', ),
description='A short description of the managed cluster.',
redis=sailpoint.beta.models.managed_cluster_redis.ManagedClusterRedis(
                    redis_host = 'megapod-useast1-shared-redis.cloud.sailpoint.com', 
                    redis_port = 6379, ),
client_type='CCG',
ccg_version='v01',
pinned_config=False,
log_configuration=sailpoint.beta.models.client_log_configuration.ClientLogConfiguration(
                    client_id = 'aClientId', 
                    duration_minutes = 120, 
                    expiration = '2020-12-15T19:13:36.079Z', 
                    root_level = 'INFO', 
                    log_levels = INFO, ),
operational=False,
status='NORMAL',
public_key_certificate='-----BEGIN CERTIFICATE-----TCCAb2gAwIBAgIBADANBgkqhkiG9w0BAQsFADAuMQ0wCwYDVQQD-----END CERTIFICATE-----',
public_key_thumbprint='obc6pLiulGbtZ',
public_key='-----BEGIN PUBLIC KEY-----jANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3WgnsxP52MDgBTfHR+5n4-----END PUBLIC KEY-----',
alert_key='LIMITED_RESOURCES',
client_ids=[1244, 1245],
service_count=6,
cc_id='0',
created_at='2023-08-04T20:48:01.865Z',
updated_at='2023-08-04T20:48:01.865Z'
)

```
[[Back to top]](#) 

