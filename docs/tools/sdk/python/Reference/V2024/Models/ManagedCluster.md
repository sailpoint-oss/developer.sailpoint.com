---
id: v2024-managed-cluster
title: ManagedCluster
pagination_label: ManagedCluster
sidebar_label: ManagedCluster
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ManagedCluster', 'V2024ManagedCluster'] 
slug: /tools/sdk/python/v2024/models/managed-cluster
tags: ['SDK', 'Software Development Kit', 'ManagedCluster', 'V2024ManagedCluster']
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
**description** | **str** | ManagedCluster description | [optional] [default to 'q']
**redis** | [**ManagedClusterRedis**](managed-cluster-redis) |  | [optional] 
**client_type** | [**ManagedClientType**](managed-client-type) |  | [required]
**ccg_version** | **str** | CCG version used by the ManagedCluster | [required]
**pinned_config** | **bool** | boolean flag indicating whether or not the cluster configuration is pinned | [optional] [default to False]
**log_configuration** | [**ClientLogConfiguration**](client-log-configuration) |  | [optional] 
**operational** | **bool** | Whether or not the cluster is operational or not | [optional] [default to False]
**status** |  **Enum** [  'CONFIGURING',    'FAILED',    'NO_CLIENTS',    'NORMAL',    'WARNING' ] | Cluster status | [optional] 
**public_key_certificate** | **str** | Public key certificate | [optional] 
**public_key_thumbprint** | **str** | Public key thumbprint | [optional] 
**public_key** | **str** | Public key | [optional] 
**encryption_configuration** | [**ManagedClusterEncryptionConfig**](managed-cluster-encryption-config) |  | [optional] 
**alert_key** | **str** | Key describing any immediate cluster alerts | [optional] 
**client_ids** | **[]str** | List of clients in a cluster | [optional] 
**service_count** | **int** | Number of services bound to a cluster | [optional] [default to 0]
**cc_id** | **str** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to '0']
**created_at** | **datetime** | The date/time this cluster was created | [optional] 
**updated_at** | **datetime** | The date/time this cluster was last updated | [optional] 
**last_release_notified_at** | **datetime** | The date/time this cluster was notified for the last release | [optional] 
**update_preferences** | [**ManagedClusterUpdatePreferences**](managed-cluster-update-preferences) |  | [optional] 
**current_installed_release_version** | **str** | The current installed release on the Managed cluster | [optional] 
**update_package** | **str** | New available updates for the Managed cluster | [optional] 
**is_out_of_date_notified_at** | **datetime** | The time at which out of date notification was sent for the Managed cluster | [optional] 
**consolidated_health_indicators_status** |  **Enum** [  'NORMAL',    'WARNING',    'ERROR' ] | The consolidated Health Status for the Managed cluster | [optional] 
}

## Example

```python
from sailpoint.v2024.models.managed_cluster import ManagedCluster

managed_cluster = ManagedCluster(
id='e1ff7bb24c934240bbf55e1aa39e41c5',
name='Managed Cluster Name',
pod='megapod-useast1',
org='denali',
type='idn',
configuration={clusterExternalId=e1ff7bb24c934240bbf55e1aa39e41c5, clusterType=sqsCluster, gmtOffset=-5},
key_pair=sailpoint.v2024.models.managed_cluster_key_pair.Managed Cluster Key Pair(
                    public_key = '-----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY-----', 
                    public_key_thumbprint = '6CMlaJIV44-xJxcB3CJBjDUUn54', 
                    public_key_certificate = '-----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----', ),
attributes=sailpoint.v2024.models.managed_cluster_attributes.Managed Cluster Attributes(
                    queue = sailpoint.v2024.models.managed_cluster_queue.Managed Cluster Queue(
                        name = 'megapod-useast1-denali-lwt-cluster-1533', 
                        region = 'us-east-1', ), 
                    keystore = '/u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW', ),
description='q',
redis=sailpoint.v2024.models.managed_cluster_redis.Managed Cluster Redis(
                    redis_host = 'megapod-useast1-shared-redis.cloud.sailpoint.com', 
                    redis_port = 6379, ),
client_type='CCG',
ccg_version='v01',
pinned_config=False,
log_configuration=sailpoint.v2024.models.client_log_configuration.Client Log Configuration(
                    client_id = '3a38a51992e8445ab51a549c0a70ee66', 
                    duration_minutes = 120, 
                    expiration = '2024-11-06T01:31:08.013164Z', 
                    root_level = 'INFO', 
                    log_levels = INFO, ),
operational=False,
status='NORMAL',
public_key_certificate='-----BEGIN CERTIFICATE-----TCCAb2gAwIBAgIBADANBgkqhkiG9w0BAQsFADAuMQ0wCwYDVQQD-----END CERTIFICATE-----',
public_key_thumbprint='obc6pLiulGbtZ',
public_key='-----BEGIN PUBLIC KEY-----jANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3WgnsxP52MDgBTfHR+5n4-----END PUBLIC KEY-----',
encryption_configuration=sailpoint.v2024.models.managed_cluster_encryption_configuration.Managed Cluster Encryption Configuration(
                    format = 'V3', ),
alert_key='LIMITED_RESOURCES',
client_ids=[1244, 1245],
service_count=6,
cc_id='0',
created_at='2023-08-04T20:48:01.865Z',
updated_at='2023-08-04T20:48:01.865Z',
last_release_notified_at='2025-03-11T07:00:13.729721Z',
update_preferences=sailpoint.v2024.models.managed_cluster_update_preferences.ManagedCluster_updatePreferences(
                    process_groups = '', 
                    update_state = 'DISABLED', 
                    notification_email = 'test@mail.com', ),
current_installed_release_version='123.1',
update_package='',
is_out_of_date_notified_at='2025-03-11T07:00:13.734393Z',
consolidated_health_indicators_status='ERROR'
)

```
[[Back to top]](#) 

