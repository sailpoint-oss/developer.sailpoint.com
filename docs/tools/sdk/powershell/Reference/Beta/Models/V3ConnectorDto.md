---
id: beta-v3-connector-dto
title: V3ConnectorDto
pagination_label: V3ConnectorDto
sidebar_label: V3ConnectorDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'V3ConnectorDto', 'BetaV3ConnectorDto'] 
slug: /tools/sdk/powershell/beta/models/v3-connector-dto
tags: ['SDK', 'Software Development Kit', 'V3ConnectorDto', 'BetaV3ConnectorDto']
---


# V3ConnectorDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The connector name | [optional] 
**Type** | **String** | The connector type | [optional] 
**ScriptName** | **String** | The connector script name | [optional] 
**ClassName** | **String** | The connector class name. | [optional] 
**Features** | **[]String** | The list of features supported by the connector | [optional] 
**DirectConnect** | **Boolean** | true if the source is a direct connect source | [optional] [default to $false]
**ConnectorMetadata** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Object containing metadata pertinent to the UI to be used | [optional] 
**Status** | **String** | The connector status | [optional] 

## Examples

- Prepare the resource
```powershell
$V3ConnectorDto = Initialize-PSSailpoint.BetaV3ConnectorDto  -Name name `
 -Type ServiceNow `
 -ScriptName servicenow `
 -ClassName sailpoint.connector.OpenConnectorAdapter `
 -Features [PROVISIONING, SYNC_PROVISIONING, SEARCH, UNSTRUCTURED_TARGETS] `
 -DirectConnect true `
 -ConnectorMetadata {supportedUI&#x3D;EXTJS, platform&#x3D;ccg, shortDesc&#x3D;connector description} `
 -Status RELEASED
```

- Convert the resource to JSON
```powershell
$V3ConnectorDto | ConvertTo-JSON
```


[[Back to top]](#) 

