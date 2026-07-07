---
id: formelementdynamicdatasourceconfig
title: Formelementdynamicdatasourceconfig
pagination_label: Formelementdynamicdatasourceconfig
sidebar_label: Formelementdynamicdatasourceconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formelementdynamicdatasourceconfig', 'Formelementdynamicdatasourceconfig'] 
slug: /tools/sdk/powershell/customforms/models/formelementdynamicdatasourceconfig
tags: ['SDK', 'Software Development Kit', 'Formelementdynamicdatasourceconfig', 'Formelementdynamicdatasourceconfig']
---


# Formelementdynamicdatasourceconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AggregationBucketField** | **String** | AggregationBucketField is the aggregation bucket field name | [optional] 
**Indices** | **[]String** | Indices is a list of indices to use | [optional] 
**ObjectType** |  **Enum** [  "IDENTITY",    "ACCESS_PROFILE",    "SOURCES",    "ROLE",    "ENTITLEMENT" ] | ObjectType is a PreDefinedSelectOption value IDENTITY PreDefinedSelectOptionIdentity ACCESS_PROFILE PreDefinedSelectOptionAccessProfile SOURCES PreDefinedSelectOptionSources ROLE PreDefinedSelectOptionRole ENTITLEMENT PreDefinedSelectOptionEntitlement | [optional] 
**Query** | **String** | Query is a text | [optional] 

## Examples

- Prepare the resource
```powershell
$Formelementdynamicdatasourceconfig = Initialize-Formelementdynamicdatasourceconfig  -AggregationBucketField attributes.cloudStatus.exact `
 -Indices ["identities"] `
 -ObjectType IDENTITY `
 -Query *
```

- Convert the resource to JSON
```powershell
$Formelementdynamicdatasourceconfig | ConvertTo-JSON
```


[[Back to top]](#) 

