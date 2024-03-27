---
id: managed-client
title: ManagedClient
pagination_label: ManagedClient
sidebar_label: ManagedClient
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ManagedClient'] 
slug: /tools/sdk/powershell/beta/models/managed-client
tags: ['SDK', 'Software Development Kit', 'ManagedClient']
---


# ManagedClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | ManagedClient ID | [optional] [readonly] 
**AlertKey** |  Pointer to **String** | ManagedClient alert key | [optional] [readonly] 
**ApiGatewayBaseUrl** |  Pointer to **String** | ManagedClient gateway base url | [optional] [readonly] 
**CcId** |  Pointer to **Int64** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] 
**ClientId** |  **String** | The client ID used in API management | 
**ClusterId** |  **String** | Cluster ID that the ManagedClient is linked to | 
**Cookbook** |  Pointer to **String** | VA cookbook | [optional] [readonly] 
**Description** |  **String** | ManagedClient description | 
**IpAddress** |  Pointer to **String** | The public IP address of the ManagedClient | [optional] [readonly] 
**LastSeen** |  Pointer to **System.DateTime** | When the ManagedClient was last seen by the server | [optional] [readonly] 
**Name** |  Pointer to **String** | ManagedClient name | [optional] 
**SinceLastSeen** |  Pointer to **String** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] 
**Status** |  Pointer to [**ManagedClientStatusEnum**](managed-client-status-enum) | Status of the ManagedClient | [optional] [readonly] 
**Type** |  **String** | Type of the ManagedClient (VA, CCG) | 
**VaDownloadUrl** |  Pointer to **String** | ManagedClient VA download URL | [optional] [readonly] 
**VaVersion** |  Pointer to **String** | Version that the ManagedClient&#39;s VA is running | [optional] [readonly] 
**Secret** |  Pointer to **String** | Client&#39;s apiKey | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClient = Initialize-PSSailpointBetaManagedClient  -Id aClientId `
 -AlertKey anAlertKey `
 -ApiGatewayBaseUrl https://denali-xxx.api.cloud.sailpoint.com `
 -CcId 2248 `
 -ClientId aClientApiId `
 -ClusterId aClusterId `
 -Cookbook va-cookbook-info `
 -Description A short description of the ManagedClient `
 -IpAddress 123.456.78.90 `
 -LastSeen 2020-01-01T00:00Z `
 -Name aName `
 -SinceLastSeen 15000 `
 -Status null `
 -Type VA `
 -VaDownloadUrl aUrl `
 -VaVersion va-megapod-useast1-610-1621372012 `
 -Secret ef878e15eaa8c8d3e2fa52f41125e2a0eeadadc6a14f931a33ad3e1b62d56381
```

- Convert the resource to JSON
```powershell
$ManagedClient | ConvertTo-JSON
```


[[Back to top]](#) 

