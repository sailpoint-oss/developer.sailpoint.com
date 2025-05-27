---
id: v3-create-connector-dto
title: V3CreateConnectorDto
pagination_label: V3CreateConnectorDto
sidebar_label: V3CreateConnectorDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'V3CreateConnectorDto', 'V3CreateConnectorDto'] 
slug: /tools/sdk/powershell/v3/models/v3-create-connector-dto
tags: ['SDK', 'Software Development Kit', 'V3CreateConnectorDto', 'V3CreateConnectorDto']
---


# V3CreateConnectorDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The connector name. Need to be unique per tenant. The name will able be used to derive a url friendly unique scriptname that will be in response. Script name can then be used for all update endpoints | [required]
**Type** | **String** | The connector type. If not specified will be defaulted to 'custom '+name | [optional] 
**ClassName** | **String** | The connector class name. If you are implementing openconnector standard (what is recommended), then this need to be set to sailpoint.connector.OpenConnectorAdapter | [required]
**DirectConnect** | **Boolean** | true if the source is a direct connect source | [optional] [default to $true]
**Status** |  **Enum** [  "DEVELOPMENT",    "DEMO",    "RELEASED" ] | The connector status | [optional] 

## Examples

- Prepare the resource
```powershell
$V3CreateConnectorDto = Initialize-V3CreateConnectorDto  -Name custom connector `
 -Type custom connector type `
 -ClassName sailpoint.connector.OpenConnectorAdapter `
 -DirectConnect true `
 -Status RELEASED
```

- Convert the resource to JSON
```powershell
$V3CreateConnectorDto | ConvertTo-JSON
```


[[Back to top]](#) 

