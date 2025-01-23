---
id: form-element-dynamic-data-source-config
title: FormElementDynamicDataSourceConfig
pagination_label: FormElementDynamicDataSourceConfig
sidebar_label: FormElementDynamicDataSourceConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElementDynamicDataSourceConfig'] 
slug: /tools/sdk/powershell/v2024/models/form-element-dynamic-data-source-config
tags: ['SDK', 'Software Development Kit', 'FormElementDynamicDataSourceConfig']
---


# FormElementDynamicDataSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AggregationBucketField** |  Pointer to **String** | AggregationBucketField is the aggregation bucket field name | [optional] 
**Indices** |  Pointer to **[]String** | Indices is a list of indices to use | [optional] 
**ObjectType** |  Pointer to  **Enum** [  "IDENTITY",    "ACCESS_PROFILE",    "SOURCES",    "ROLE",    "ENTITLEMENT" ] | ObjectType is a PreDefinedSelectOption value IDENTITY PreDefinedSelectOptionIdentity ACCESS_PROFILE PreDefinedSelectOptionAccessProfile SOURCES PreDefinedSelectOptionSources ROLE PreDefinedSelectOptionRole ENTITLEMENT PreDefinedSelectOptionEntitlement | [optional] 
**Query** |  Pointer to **String** | Query is a text | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementDynamicDataSourceConfig = Initialize-PSSailpoint.V2024FormElementDynamicDataSourceConfig  -AggregationBucketField attributes.cloudStatus.exact `
 -Indices [identities] `
 -ObjectType IDENTITY `
 -Query *
```

- Convert the resource to JSON
```powershell
$FormElementDynamicDataSourceConfig | ConvertTo-JSON
```


[[Back to top]](#) 

