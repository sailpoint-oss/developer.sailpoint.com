---
id: v2024-v3-connector-dto
title: V3ConnectorDto
pagination_label: V3ConnectorDto
sidebar_label: V3ConnectorDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'V3ConnectorDto', 'V2024V3ConnectorDto'] 
slug: /tools/sdk/powershell/v2024/models/v3-connector-dto
tags: ['SDK', 'Software Development Kit', 'V3ConnectorDto', 'V2024V3ConnectorDto']
---


# V3ConnectorDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The connector name | [optional] 
**Type** |  Pointer to **String** | The connector type | [optional] 
**ScriptName** |  Pointer to **String** | The connector script name | [optional] 
**ClassName** |  Pointer to **String** | The connector class name. | [optional] 
**Features** |  Pointer to **[]String** | The list of features supported by the connector | [optional] 
**DirectConnect** |  Pointer to **Boolean** | true if the source is a direct connect source | [optional] [default to $false]
**ConnectorMetadata** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map containing metadata pertinent to the connector | [optional] 
**Status** |  Pointer to  **Enum** [  "DEPRECATED",    "DEVELOPMENT",    "DEMO",    "RELEASED" ] | The connector status | [optional] 

## Examples

- Prepare the resource
```powershell
$V3ConnectorDto = Initialize-PSSailpoint.V2024V3ConnectorDto  -Name name `
 -Type ServiceNow `
 -ScriptName servicenow `
 -ClassName sailpoint.connector.OpenConnectorAdapter `
 -Features [PROVISIONING, SYNC_PROVISIONING, SEARCH, UNSTRUCTURED_TARGETS] `
 -DirectConnect true `
 -ConnectorMetadata {supportedUI&#x3D;ANGULAR, platform&#x3D;ccg, shortDesc&#x3D;connector description} `
 -Status RELEASED
```

- Convert the resource to JSON
```powershell
$V3ConnectorDto | ConvertTo-JSON
```


[[Back to top]](#) 

