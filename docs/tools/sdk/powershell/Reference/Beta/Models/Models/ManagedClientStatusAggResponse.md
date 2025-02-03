---
id: beta-managed-client-status-agg-response
title: ManagedClientStatusAggResponse
pagination_label: ManagedClientStatusAggResponse
sidebar_label: ManagedClientStatusAggResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClientStatusAggResponse', 'BetaManagedClientStatusAggResponse'] 
slug: /tools/sdk/powershell/beta/models/managed-client-status-agg-response
tags: ['SDK', 'Software Development Kit', 'ManagedClientStatusAggResponse', 'BetaManagedClientStatusAggResponse']
---


# ManagedClientStatusAggResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** |  [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | ManagedClientStatus body information | [required]
**Status** |  [**ManagedClientStatusEnum**](managed-client-status-enum) |  | [required]
**Type** |  [**ManagedClientType**](managed-client-type) |  | [required]
**Timestamp** |  **System.DateTime** | timestamp on the Client Status update | [required]

## Examples

- Prepare the resource
```powershell
$ManagedClientStatusAggResponse = Initialize-PSSailpoint.BetaManagedClientStatusAggResponse  -Body {body&#x3D;{id&#x3D;1528, clientId&#x3D;1528, clusterId&#x3D;1533, orgType&#x3D;test, vaDownloadUrl&#x3D;https://sptcbu-va-images.s3.amazonaws.com/va-latest.zip, clusterJobCount&#x3D;1, configuration&#x3D;{clusterType&#x3D;sqsCluster, clusterExternalId&#x3D;2c91808876dd79120176f758af765c58, debug&#x3D;false, failureThreshold&#x3D;0, gmtOffset&#x3D;-6, scheduleUpgrade&#x3D;false, va_version&#x3D;va-megapod-useast1-595-1627543540, jobType&#x3D;VA_UPGRADE, cookbook&#x3D;va-megapod-useast1-595-1627543540}, connectorServices&#x3D;[{id&#x3D;540696, name&#x3D;EndToEnd-ADSource, connector_host&#x3D;host.example.com, connector_port&#x3D;389, connector_(boolean)useSSL&#x3D;false, connectorFileUploadHistory&#x3D;null}, {id&#x3D;540698, name&#x3D;EndToEnd-AzureADSource, connector_host&#x3D;null, connector_port&#x3D;null, connector_(boolean)useSSL&#x3D;null, connectorFileUploadHistory&#x3D;null}, {id&#x3D;540710, name&#x3D;EndToEnd-OpenLDAP, connector_host&#x3D;10.0.2.64, connector_port&#x3D;389, connector_(boolean)useSSL&#x3D;false, connectorFileUploadHistory&#x3D;null}, {id&#x3D;540713, name&#x3D;Dynamic-ADSource, connector_host&#x3D;host.example.com, connector_port&#x3D;389, connector_(boolean)useSSL&#x3D;false, connectorFileUploadHistory&#x3D;null}, {id&#x3D;540716, name&#x3D;EndToEnd-JdbcADSource, connector_host&#x3D;10.0.5.187, connector_port&#x3D;389, connector_(boolean)useSSL&#x3D;false, connectorFileUploadHistory&#x3D;null}, {id&#x3D;540717, name&#x3D;EndToEnd-JdbcSource, connector_host&#x3D;null, connector_port&#x3D;null, connector_(boolean)useSSL&#x3D;null, connectorFileUploadHistory&#x3D;[{serviceId&#x3D;540717, date&#x3D;2021-02-05T22:58:15Z, file&#x3D;temp7081703651350031905mysql-connector-java-8.0.11.jar}]}], jobs&#x3D;[{uuid&#x3D;872b622f-5ab5-4836-9172-e3bb77f05b2c, cookbook&#x3D;872b622f-5ab5-4836-9172-e3bb77f05b2c, state&#x3D;FINISHED, type&#x3D;VA_UPGRADE, targetId&#x3D;1528, managedProcessConfiguration&#x3D;{charon&#x3D;{version&#x3D;345, path&#x3D;sailpoint/charon, description&#x3D;null, dependencies&#x3D;null}, ccg&#x3D;{version&#x3D;415_583_79.0.0, path&#x3D;sailpoint/ccg, description&#x3D;null, dependencies&#x3D;null}, toolbox&#x3D;{version&#x3D;6, path&#x3D;sailpoint/toolbox, description&#x3D;null, dependencies&#x3D;null}, fluent&#x3D;{version&#x3D;50, path&#x3D;fluent/va, description&#x3D;null, dependencies&#x3D;null}, va_agent&#x3D;{version&#x3D;89, path&#x3D;sailpoint/va_agent, description&#x3D;null, dependencies&#x3D;null}}}], queue&#x3D;{name&#x3D;megapod-useast1-denali-lwt-cluster-1533, region&#x3D;us-east-1}, maintenance&#x3D;{window&#x3D;true, windowStartTime&#x3D;2021-07-29T00:00:00Z, windowClusterTime&#x3D;2021-07-29T01:35:24Z, windowFinishTime&#x3D;2021-07-29T04:00:00Z}}} `
 -Status null `
 -Type null `
 -Timestamp 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$ManagedClientStatusAggResponse | ConvertTo-JSON
```


[[Back to top]](#) 

