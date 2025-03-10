---
id: v2024-sim-integration-details
title: SimIntegrationDetails
pagination_label: SimIntegrationDetails
sidebar_label: SimIntegrationDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SimIntegrationDetails', 'V2024SimIntegrationDetails'] 
slug: /tools/sdk/powershell/v2024/models/sim-integration-details
tags: ['SDK', 'Software Development Kit', 'SimIntegrationDetails', 'V2024SimIntegrationDetails']
---


# SimIntegrationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | The description of the integration | [optional] 
**Type** | **String** | The integration type | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The attributes map containing the credentials used to configure the integration. | [optional] 
**Sources** | **[]String** | The list of sources (managed resources) | [optional] 
**Cluster** | **String** | The cluster/proxy | [optional] 
**StatusMap** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Custom mapping between the integration result and the provisioning result | [optional] 
**Request** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Request data to customize desc and body of the created ticket | [optional] 
**BeforeProvisioningRule** | [**SimIntegrationDetailsAllOfBeforeProvisioningRule**](sim-integration-details-all-of-before-provisioning-rule) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SimIntegrationDetails = Initialize-PSSailpoint.V2024SimIntegrationDetails  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -Description Integration description `
 -Type ServiceNow Service Desk `
 -Attributes {"uid":"Walter White","firstname":"walter","cloudStatus":"UNREGISTERED","displayName":"Walter White","identificationNumber":"942","lastSyncDate":1470348809380,"email":"walter@gmail.com","lastname":"white"} `
 -Sources [2c9180835d191a86015d28455b4a2329, 2c5680835d191a85765d28455b4a9823] `
 -Cluster xyzzy999 `
 -StatusMap {closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued} `
 -Request {description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId} `
 -BeforeProvisioningRule null
```

- Convert the resource to JSON
```powershell
$SimIntegrationDetails | ConvertTo-JSON
```


[[Back to top]](#) 

