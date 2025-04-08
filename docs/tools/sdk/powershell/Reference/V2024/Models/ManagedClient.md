---
id: v2024-managed-client
title: ManagedClient
pagination_label: ManagedClient
sidebar_label: ManagedClient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClient', 'V2024ManagedClient'] 
slug: /tools/sdk/powershell/v2024/models/managed-client
tags: ['SDK', 'Software Development Kit', 'ManagedClient', 'V2024ManagedClient']
---


# ManagedClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ManagedClient ID | [optional] [readonly] 
**AlertKey** | **String** | ManagedClient alert key | [optional] [readonly] 
**ApiGatewayBaseUrl** | **String** | apiGatewayBaseUrl for the Managed client | [optional] 
**Cookbook** | **String** | cookbook id for the Managed client | [optional] 
**CcId** | **Int64** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] 
**ClientId** | **String** | The client ID used in API management | [required]
**ClusterId** | **String** | Cluster ID that the ManagedClient is linked to | [required]
**Description** | **String** | ManagedClient description | [required][default to ""]
**IpAddress** | **String** | The public IP address of the ManagedClient | [optional] [readonly] 
**LastSeen** | **System.DateTime** | When the ManagedClient was last seen by the server | [optional] [readonly] 
**Name** | **String** | ManagedClient name | [optional] [default to "VA-$clientId"]
**SinceLastSeen** | **String** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] 
**Status** |  **Enum** [  "NORMAL",    "UNDEFINED",    "NOT_CONFIGURED",    "CONFIGURING",    "WARNING",    "ERROR",    "FAILED" ] | Status of the ManagedClient | [optional] [readonly] 
**Type** | **String** | Type of the ManagedClient (VA, CCG) | [required]
**ClusterType** |  **Enum** [  "idn",    "iai",    "spConnectCluster",    "sqsCluster",    "das-rc",    "das-pc",    "das-dc" ] | Cluster Type of the ManagedClient | [optional] [readonly] 
**VaDownloadUrl** | **String** | ManagedClient VA download URL | [optional] [readonly] 
**VaVersion** | **String** | Version that the ManagedClient's VA is running | [optional] [readonly] 
**Secret** | **String** | Client's apiKey | [optional] 
**CreatedAt** | **System.DateTime** | The date/time this ManagedClient was created | [optional] 
**UpdatedAt** | **System.DateTime** | The date/time this ManagedClient was last updated | [optional] 
**ProvisionStatus** |  **Enum** [  "PROVISIONED",    "DRAFT" ] | The provisioning status of the ManagedClient | [optional] [readonly] 
**HealthIndicators** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The health indicators of the ManagedClient | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClient = Initialize-PSSailpoint.V2024ManagedClient  -Id 2c9180878eaf4204018eb019c3570003 `
 -AlertKey CLIENT_STATUS_NOT_CONFIGURED `
 -ApiGatewayBaseUrl null `
 -Cookbook null `
 -CcId 2248 `
 -ClientId 00be54a2-bb6d-402f-9159-beb2d5319347 `
 -ClusterId e1ff7bb24c934240bbf55e1aa39e41c5 `
 -Description A short description of the ManagedClient `
 -IpAddress 123.456.78.90 `
 -LastSeen 2020-01-01T00:00Z `
 -Name aName `
 -SinceLastSeen 15000 `
 -Status NORMAL `
 -Type VA `
 -ClusterType idn `
 -VaDownloadUrl aUrl `
 -VaVersion va-megapod-useast1-610-1621372012 `
 -Secret ef878e15eaa8c8d3e2fa52f41125e2a0eeadadc6a14f931a33ad3e1b62d56381 `
 -CreatedAt 2023-08-04T20:48:01.865Z `
 -UpdatedAt 2023-08-04T20:48:01.865Z `
 -ProvisionStatus PROVISIONED `
 -HealthIndicators { "network": { "errors": [], "warnings": [] }, "memory": { "errors": [], "warnings": [] }, "cpu": { "errors": [], "warnings": [] } }
```

- Convert the resource to JSON
```powershell
$ManagedClient | ConvertTo-JSON
```


[[Back to top]](#) 

