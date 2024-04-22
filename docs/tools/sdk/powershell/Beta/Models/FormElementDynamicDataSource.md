---
id: form-element-dynamic-data-source
title: FormElementDynamicDataSource
pagination_label: FormElementDynamicDataSource
sidebar_label: FormElementDynamicDataSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormElementDynamicDataSource'] 
slug: /tools/sdk/powershell/beta/models/form-element-dynamic-data-source
tags: ['SDK', 'Software Development Kit', 'FormElementDynamicDataSource']
---


# FormElementDynamicDataSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** |  Pointer to [**FormElementDynamicDataSourceConfig**](form-element-dynamic-data-source-config) |  | [optional] 
**DataSourceType** |  Pointer to  **Enum** [  "STATIC",    "INTERNAL",    "SEARCH" ] | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch | [optional] 

## Examples

- Prepare the resource
```powershell
$FormElementDynamicDataSource = Initialize-BetaFormElementDynamicDataSource  -Config null `
 -DataSourceType STATIC
```

- Convert the resource to JSON
```powershell
$FormElementDynamicDataSource | ConvertTo-JSON
```


[[Back to top]](#) 

