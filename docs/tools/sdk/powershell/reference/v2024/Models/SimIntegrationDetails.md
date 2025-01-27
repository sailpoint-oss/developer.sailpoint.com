---
id: sim-integration-details
title: SimIntegrationDetails
pagination_label: SimIntegrationDetails
sidebar_label: SimIntegrationDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SimIntegrationDetails'] 
slug: /tools/sdk/powershell/v2024/models/sim-integration-details
tags: ['SDK', 'Software Development Kit', 'SimIntegrationDetails']
---


# SimIntegrationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | [required]
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** |  Pointer to **String** | The description of the integration | [optional] 
**Type** |  Pointer to **String** | The integration type | [optional] 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The attributes map containing the credentials used to configure the integration. | [optional] 
**Sources** |  Pointer to **[]String** | The list of sources (managed resources) | [optional] 
**Cluster** |  Pointer to **String** | The cluster/proxy | [optional] 
**StatusMap** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Custom mapping between the integration result and the provisioning result | [optional] 
**Request** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Request data to customize desc and body of the created ticket | [optional] 
**BeforeProvisioningRule** |  Pointer to [**SimIntegrationDetailsAllOfBeforeProvisioningRule**](sim-integration-details-all-of-before-provisioning-rule) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SimIntegrationDetails = Initialize-PSSailpoint.V2024SimIntegrationDetails  -Id id12345 `
 -Name aName `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z `
 -Description Integration description `
 -Type ServiceNow Service Desk `
 -Attributes {&quot;uid&quot;:&quot;Walter White&quot;,&quot;firstname&quot;:&quot;walter&quot;,&quot;cloudStatus&quot;:&quot;UNREGISTERED&quot;,&quot;displayName&quot;:&quot;Walter White&quot;,&quot;identificationNumber&quot;:&quot;942&quot;,&quot;lastSyncDate&quot;:1470348809380,&quot;email&quot;:&quot;walter@gmail.com&quot;,&quot;lastname&quot;:&quot;white&quot;} `
 -Sources [2c9180835d191a86015d28455b4a2329, 2c5680835d191a85765d28455b4a9823] `
 -Cluster xyzzy999 `
 -StatusMap {closed_cancelled&#x3D;Failed, closed_complete&#x3D;Committed, closed_incomplete&#x3D;Failed, closed_rejected&#x3D;Failed, in_process&#x3D;Queued, requested&#x3D;Queued} `
 -Request {description&#x3D;SailPoint Access Request,, req_description&#x3D;The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description&#x3D;SailPoint New Access Request Created from IdentityNow,, short_description&#x3D;SailPoint Access Request $!plan.arguments.identityRequestId} `
 -BeforeProvisioningRule null
```

- Convert the resource to JSON
```powershell
$SimIntegrationDetails | ConvertTo-JSON
```


[[Back to top]](#) 

