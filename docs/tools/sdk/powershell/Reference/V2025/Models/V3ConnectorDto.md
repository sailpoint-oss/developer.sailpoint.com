---
id: v2025-v3-connector-dto
title: V3ConnectorDto
pagination_label: V3ConnectorDto
sidebar_label: V3ConnectorDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'V3ConnectorDto', 'V2025V3ConnectorDto'] 
slug: /tools/sdk/powershell/v2025/models/v3-connector-dto
tags: ['SDK', 'Software Development Kit', 'V3ConnectorDto', 'V2025V3ConnectorDto']
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
**ConnectorMetadata** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map containing metadata pertinent to the connector | [optional] 
**Status** |  **Enum** [  "DEPRECATED",    "DEVELOPMENT",    "DEMO",    "RELEASED" ] | The connector status | [optional] 

## Examples

- Prepare the resource
```powershell
$V3ConnectorDto = Initialize-V2025V3ConnectorDto  -Name name `
 -Type ServiceNow `
 -ScriptName servicenow `
 -ClassName sailpoint.connector.OpenConnectorAdapter `
 -Features [PROVISIONING, SYNC_PROVISIONING, SEARCH, UNSTRUCTURED_TARGETS] `
 -DirectConnect true `
 -ConnectorMetadata {supportedUI=ANGULAR, platform=ccg, shortDesc=connector description} `
 -Status RELEASED
```

- Convert the resource to JSON
```powershell
$V3ConnectorDto | ConvertTo-JSON
```


[[Back to top]](#) 

