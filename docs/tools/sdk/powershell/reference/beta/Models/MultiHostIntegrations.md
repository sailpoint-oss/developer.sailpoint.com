---
id: beta-multi-host-integrations
title: MultiHostIntegrations
pagination_label: MultiHostIntegrations
sidebar_label: MultiHostIntegrations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrations'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrations']
---


# MultiHostIntegrations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Multi-Host Integration ID. | [required][readonly] 
**Name** |  **String** | Multi-Host Integration's human-readable name. | [required]
**Description** |  **String** | Multi-Host Integration's human-readable description. | [required]
**Owner** |  [**MultiHostIntegrationsOwner**](multi-host-integrations-owner) |  | [required]
**Cluster** |  Pointer to [**MultiHostIntegrationsCluster**](multi-host-integrations-cluster) |  | [optional] 
**Type** |  Pointer to **String** | Specifies the type of system being managed e.g. Workday, Multi-Host - Microsoft SQL Server, etc.. If you are creating a delimited file source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Connector** |  **String** | Connector script name. | [required]
**LastSourceUploadSuccessCount** |  Pointer to **Int32** | Last successfully uploaded source count of given Multi-Host Integration. | [optional] 
**MaxSourcesPerAggGroup** |  Pointer to **Int32** | Maximum sources that can contain in a aggregation group of Multi-Host Integration. | [optional] 
**ConnectorClass** |  Pointer to **String** | Fully qualified name of the Java class that implements the connector interface. | [optional] 
**ConnectorAttributes** |  Pointer to [**MultiHostIntegrationsConnectorAttributes**](multi-host-integrations-connector-attributes) |  | [optional] 
**DeleteThreshold** |  Pointer to **Int32** | Number from 0 to 100 that specifies when to skip the delete phase. | [optional] 
**Authoritative** |  Pointer to **Boolean** | When this is true, it indicates that the source is referenced by an identity profile. | [optional] [default to $false]
**ManagementWorkgroup** |  Pointer to [**MultiHostIntegrationsManagementWorkgroup**](multi-host-integrations-management-workgroup) |  | [optional] 
**Healthy** |  Pointer to **Boolean** | When this is true, it indicates that the source is healthy. | [optional] [default to $false]
**Status** |  Pointer to  **Enum** [  "SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT",    "SOURCE_STATE_ERROR_CLUSTER",    "SOURCE_STATE_ERROR_SOURCE",    "SOURCE_STATE_ERROR_VA",    "SOURCE_STATE_FAILURE_CLUSTER",    "SOURCE_STATE_FAILURE_SOURCE",    "SOURCE_STATE_HEALTHY",    "SOURCE_STATE_UNCHECKED_CLUSTER",    "SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES",    "SOURCE_STATE_UNCHECKED_SOURCE",    "SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS" ] | Status identifier that gives specific information about why a source is or isn't healthy.  | [optional] 
**Since** |  Pointer to **System.DateTime** | Timestamp that shows when a source health check was last performed. | [optional] 
**ConnectorId** |  Pointer to **String** | Connector ID | [optional] 
**ConnectorName** |  Pointer to **String** | Name of the connector that was chosen during source creation. | [optional] 
**ConnectionType** |  Pointer to  **Enum** [  "direct",    "file" ] | Type of connection (direct or file). | [optional] 
**ConnectorImplementationId** |  Pointer to **String** | Connector implementation ID. | [optional] 
**Created** |  Pointer to **System.DateTime** | Date-time when the source was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Date-time when the source was last modified. | [optional] 
**CredentialProviderEnabled** |  Pointer to **Boolean** | If this is true, it enables a credential provider for the source. If credentialProvider is turned on,  then the source can use credential provider(s) to fetch credentials. | [optional] [default to $false]
**Category** |  Pointer to **String** | Source category (e.g. null, CredentialProvider). | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrations = Initialize-PSSailpoint.BetaMultiHostIntegrations  -Id 2c91808568c529c60168cca6f90c1324 `
 -Name My Multi-Host Integration `
 -Description This is a Multi-Host Integration. `
 -Owner null `
 -Cluster null `
 -Type Multi-Host - Microsoft SQL Server `
 -Connector multihost-microsoft-sql-server `
 -LastSourceUploadSuccessCount 50 `
 -MaxSourcesPerAggGroup 10 `
 -ConnectorClass sailpoint.connector.OpenConnectorAdapter `
 -ConnectorAttributes null `
 -DeleteThreshold 10 `
 -Authoritative false `
 -ManagementWorkgroup null `
 -Healthy true `
 -Status SOURCE_STATE_HEALTHY `
 -Since null `
 -ConnectorId multihost-microsoft-sql-server `
 -ConnectorName Multi-Host Microsoft SQL Server `
 -ConnectionType direct `
 -ConnectorImplementationId multihost-microsoft-sql-server `
 -Created 2022-02-08T14:50:03.827Z `
 -Modified 2024-01-23T18:08:50.897Z `
 -CredentialProviderEnabled false `
 -Category CredentialProvider
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrations | ConvertTo-JSON
```


[[Back to top]](#) 

