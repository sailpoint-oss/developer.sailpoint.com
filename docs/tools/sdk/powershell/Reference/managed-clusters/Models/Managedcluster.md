---
id: managedcluster
title: Managedcluster
pagination_label: Managedcluster
sidebar_label: Managedcluster
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedcluster', 'Managedcluster'] 
slug: /tools/sdk/powershell/managedclusters/models/managedcluster
tags: ['SDK', 'Software Development Kit', 'Managedcluster', 'Managedcluster']
---


# Managedcluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ManagedCluster ID | [required]
**Name** | **String** | ManagedCluster name | [optional] 
**Pod** | **String** | ManagedCluster pod | [optional] 
**Org** | **String** | ManagedCluster org | [optional] 
**Type** | [**Managedclustertypes**](managedclustertypes) |  | [optional] 
**Configuration** | **map[string]String** | ManagedProcess configuration map | [optional] 
**KeyPair** | [**Managedclusterkeypair**](managedclusterkeypair) |  | [optional] 
**Attributes** | [**Managedclusterattributes**](managedclusterattributes) |  | [optional] 
**Description** | **String** | ManagedCluster description | [optional] [default to "q"]
**Redis** | [**Managedclusterredis**](managedclusterredis) |  | [optional] 
**ClientType** | [**Managedclienttype**](managedclienttype) |  | [required]
**CcgVersion** | **String** | CCG version used by the ManagedCluster | [required]
**PinnedConfig** | **Boolean** | boolean flag indicating whether or not the cluster configuration is pinned | [optional] [default to $false]
**LogConfiguration** | [**Clientlogconfiguration**](clientlogconfiguration) |  | [optional] 
**Operational** | **Boolean** | Whether or not the cluster is operational or not | [optional] [default to $false]
**Status** |  **Enum** [  "CONFIGURING",    "FAILED",    "NO_CLIENTS",    "NORMAL",    "WARNING" ] | Cluster status | [optional] 
**PublicKeyCertificate** | **String** | Public key certificate | [optional] 
**PublicKeyThumbprint** | **String** | Public key thumbprint | [optional] 
**PublicKey** | **String** | Public key | [optional] 
**EncryptionConfiguration** | [**Managedclusterencryptionconfig**](managedclusterencryptionconfig) |  | [optional] 
**AlertKey** | **String** | Key describing any immediate cluster alerts | [optional] 
**ClientIds** | **[]String** | List of clients in a cluster | [optional] 
**ServiceCount** | **Int32** | Number of services bound to a cluster | [optional] [default to 0]
**CcId** | **String** | CC ID only used in calling CC, will be removed without notice when Migration to CEGS is finished | [optional] [default to "0"]
**CreatedAt** | **System.DateTime** | The date/time this cluster was created | [optional] 
**UpdatedAt** | **System.DateTime** | The date/time this cluster was last updated | [optional] 
**LastReleaseNotifiedAt** | **System.DateTime** | The date/time this cluster was notified for the last release | [optional] 
**UpdatePreferences** | [**ManagedclusterUpdatePreferences**](managedcluster-update-preferences) |  | [optional] 
**CurrentInstalledReleaseVersion** | **String** | The current installed release on the Managed cluster | [optional] 
**UpdatePackage** | **String** | New available updates for the Managed cluster | [optional] 
**IsOutOfDateNotifiedAt** | **System.DateTime** | The time at which out of date notification was sent for the Managed cluster | [optional] 
**ConsolidatedHealthIndicatorsStatus** |  **Enum** [  "NORMAL",    "WARNING",    "ERROR" ] | The consolidated Health Status for the Managed cluster | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedcluster = Initialize-Managedcluster  -Id e1ff7bb24c934240bbf55e1aa39e41c5 `
 -Name Managed Cluster Name `
 -Pod megapod-useast1 `
 -Org denali `
 -Type null `
 -Configuration {"clusterExternalId":"e1ff7bb24c934240bbf55e1aa39e41c5","clusterType":"sqsCluster","gmtOffset":"-5"} `
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
 -EncryptionConfiguration null `
 -AlertKey LIMITED_RESOURCES `
 -ClientIds ["1244","1245"] `
 -ServiceCount 6 `
 -CcId 1533 `
 -CreatedAt 2023-08-04T20:48:01.865Z `
 -UpdatedAt 2023-08-04T20:48:01.865Z `
 -LastReleaseNotifiedAt 2025-03-11T07:00:13.729721Z `
 -UpdatePreferences null `
 -CurrentInstalledReleaseVersion 123.1 `
 -UpdatePackage 123.1.2 `
 -IsOutOfDateNotifiedAt 2025-03-11T07:00:13.734393Z `
 -ConsolidatedHealthIndicatorsStatus ERROR
```

- Convert the resource to JSON
```powershell
$Managedcluster | ConvertTo-JSON
```


[[Back to top]](#) 

