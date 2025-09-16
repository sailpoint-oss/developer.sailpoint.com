---
id: beta-managed-client
title: ManagedClient
pagination_label: ManagedClient
sidebar_label: ManagedClient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClient', 'BetaManagedClient'] 
slug: /tools/sdk/powershell/beta/models/managed-client
tags: ['SDK', 'Software Development Kit', 'ManagedClient', 'BetaManagedClient']
---


# ManagedClient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ManagedClient ID | [optional] [readonly] 
**AlertKey** | **String** | ManagedClient alert key | [optional] [readonly] 
**ApiGatewayBaseUrl** | **String** | ManagedClient gateway base url | [optional] [readonly] 
**CcId** | **Int64** | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [optional] 
**ClientId** | **String** | The client ID used in API management | [required]
**ClusterId** | **String** | Cluster ID that the ManagedClient is linked to | [required]
**Cookbook** | **String** | VA cookbook | [optional] [readonly] 
**Description** | **String** | ManagedClient description | [required]
**IpAddress** | **String** | The public IP address of the ManagedClient | [optional] [readonly] 
**LastSeen** | **System.DateTime** | When the ManagedClient was last seen by the server | [optional] [readonly] 
**Name** | **String** | ManagedClient name | [optional] 
**SinceLastSeen** | **String** | Milliseconds since the ManagedClient has polled the server | [optional] [readonly] 
**Status** | [**ManagedClientStatusEnum**](managed-client-status-enum) | Status of the ManagedClient | [optional] [readonly] 
**Type** | **String** | Type of the ManagedClient (VA, CCG) | [required]
**VaDownloadUrl** | **String** | ManagedClient VA download URL | [optional] [readonly] 
**VaVersion** | **String** | Version that the ManagedClient's VA is running | [optional] [readonly] 
**Secret** | **String** | Client's apiKey | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClient = Initialize-BetaManagedClient  -Id aClientId `
 -AlertKey anAlertKey `
 -ApiGatewayBaseUrl https://denali-example.api.cloud.sailpoint.com `
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

