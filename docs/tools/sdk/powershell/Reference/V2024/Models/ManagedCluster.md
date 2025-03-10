---
id: v2024-managed-cluster
title: ManagedCluster
pagination_label: ManagedCluster
sidebar_label: ManagedCluster
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedCluster', 'V2024ManagedCluster'] 
slug: /tools/sdk/powershell/v2024/models/managed-cluster
tags: ['SDK', 'Software Development Kit', 'ManagedCluster', 'V2024ManagedCluster']
---


# ManagedCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ManagedCluster ID | [required]
**Name** | **String** | ManagedCluster name | [optional] 
**Pod** | **String** | ManagedCluster pod | [optional] 
**Org** | **String** | ManagedCluster org | [optional] 
**Type** | [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**Configuration** | **map[string]String** | ManagedProcess configuration map | [optional] 
**KeyPair** | [**ManagedClusterKeyPair**](managed-cluster-key-pair) |  | [optional] 
**Attributes** | [**ManagedClusterAttributes**](managed-cluster-attributes) |  | [optional] 
**Description** | **String** | ManagedCluster description | [optional] [default to "q"]
**Redis** | [**ManagedClusterRedis**](managed-cluster-redis) |  | [optional] 
**ClientType** | [**ManagedClientType**](managed-client-type) |  | [required]
**CcgVersion** | **String** | CCG version used by the ManagedCluster | [required]
**PinnedConfig** | **Boolean** | boolean flag indiacting whether or not the cluster configuration is pinned | [optional] [default to $false]
**LogConfiguration** | [**ClientLogConfiguration**](client-log-configuration) |  | [optional] 
**Operational** | **Boolean** | Whether or not the cluster is operational or not | [optional] [default to $false]
**Status** | **String** | Cluster status | [optional] 
**PublicKeyCertificate** | **String** | Public key certificate | [optional] 
**PublicKeyThumbprint** | **String** | Public key thumbprint | [optional] 
**PublicKey** | **String** | Public key | [optional] 
**AlertKey** | **String** | Key describing any immediate cluster alerts | [optional] 
**ClientIds** | **[]String** | List of clients in a cluster | [optional] 
**ServiceCount** | **Int32** | Number of services bound to a cluster | [optional] [default to 0]
**CcId** | **String** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to "0"]
**CreatedAt** | **System.DateTime** | The date/time this cluster was created | [optional] 
**UpdatedAt** | **System.DateTime** | The date/time this cluster was last updated | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedCluster = Initialize-PSSailpoint.V2024ManagedCluster  -Id e1ff7bb24c934240bbf55e1aa39e41c5 `
 -Name Managed Cluster Name `
 -Pod megapod-useast1 `
 -Org denali `
 -Type null `
 -Configuration {clusterExternalId=e1ff7bb24c934240bbf55e1aa39e41c5, clusterType=sqsCluster, gmtOffset=-5} `
 -KeyPair null `
 -Attributes null `
 -Description A short description of the managed cluster. `
 -Redis null `
 -ClientType null `
 -CcgVersion v01 `
 -PinnedConfig false `
 -LogConfiguration null `
 -Operational false `
 -Status NORMAL `
 -PublicKeyCertificate -----BEGIN CERTIFICATE-----TCCAb2gAwIBAgIBADANBgkqhkiG9w0BAQsFADAuMQ0wCwYDVQQD-----END CERTIFICATE----- `
 -PublicKeyThumbprint obc6pLiulGbtZ `
 -PublicKey -----BEGIN PUBLIC KEY-----jANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3WgnsxP52MDgBTfHR+5n4-----END PUBLIC KEY----- `
 -AlertKey LIMITED_RESOURCES `
 -ClientIds [1244, 1245] `
 -ServiceCount 6 `
 -CcId 1533 `
 -CreatedAt 2023-08-04T20:48:01.865Z `
 -UpdatedAt 2023-08-04T20:48:01.865Z
```

- Convert the resource to JSON
```powershell
$ManagedCluster | ConvertTo-JSON
```


[[Back to top]](#) 

