---
id: managed-cluster
title: ManagedCluster
pagination_label: ManagedCluster
sidebar_label: ManagedCluster
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedCluster'] 
slug: /tools/sdk/powershell/beta/models/managed-cluster
tags: ['SDK', 'Software Development Kit', 'ManagedCluster']
---


# ManagedCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | ManagedCluster ID | [required]
**Name** |  Pointer to **String** | ManagedCluster name | [optional] 
**Pod** |  Pointer to **String** | ManagedCluster pod | [optional] 
**Org** |  Pointer to **String** | ManagedCluster org | [optional] 
**Type** |  Pointer to [**ManagedClusterTypes**](managed-cluster-types) |  | [optional] 
**Configuration** |  Pointer to **map[string]String** | ManagedProcess configuration map | [optional] 
**KeyPair** |  Pointer to [**ManagedClusterKeyPair**](managed-cluster-key-pair) |  | [optional] 
**Attributes** |  Pointer to [**ManagedClusterAttributes**](managed-cluster-attributes) |  | [optional] 
**Description** |  Pointer to **String** | ManagedCluster description | [optional] 
**Redis** |  Pointer to [**ManagedClusterRedis**](managed-cluster-redis) |  | [optional] 
**ClientType** |  [**ManagedClientType**](managed-client-type) |  | [required]
**CcgVersion** |  **String** | CCG version used by the ManagedCluster | [required]
**PinnedConfig** |  Pointer to **Boolean** | boolean flag indiacting whether or not the cluster configuration is pinned | [optional] [default to $false]
**LogConfiguration** |  Pointer to [**ClientLogConfiguration**](client-log-configuration) |  | [optional] 
**Operational** |  Pointer to **Boolean** | Whether or not the cluster is operational or not | [optional] [default to $false]
**Status** |  Pointer to **String** | Cluster status | [optional] 
**PublicKeyCertificate** |  Pointer to **String** | Public key certificate | [optional] 
**PublicKeyThumbprint** |  Pointer to **String** | Public key thumbprint | [optional] 
**PublicKey** |  Pointer to **String** | Public key | [optional] 
**AlertKey** |  Pointer to **String** | Key describing any immediate cluster alerts | [optional] 
**ClientIds** |  Pointer to **[]String** | List of clients in a cluster | [optional] 
**ServiceCount** |  Pointer to **Int32** | Number of services bound to a cluster | [optional] [default to 0]
**CcId** |  Pointer to **String** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to "0"]
**CreatedAt** |  Pointer to **System.DateTime** | The date/time this cluster was created | [optional] 
**UpdatedAt** |  Pointer to **System.DateTime** | The date/time this cluster was last updated | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedCluster = Initialize-PSSailpoint.BetaManagedCluster  -Id aClusterId `
 -Name Managed Cluster Name `
 -Pod megapod-useast1 `
 -Org denali `
 -Type null `
 -Configuration {clusterExternalId&#x3D;externalId, ccgVersion&#x3D;77.0.0} `
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

