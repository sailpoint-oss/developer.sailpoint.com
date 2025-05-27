---
id: beta-form-element-dynamic-data-source
title: FormElementDynamicDataSource
pagination_label: FormElementDynamicDataSource
sidebar_label: FormElementDynamicDataSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormElementDynamicDataSource', 'BetaFormElementDynamicDataSource'] 
slug: /tools/sdk/powershell/beta/models/form-element-dynamic-data-source
tags: ['SDK', 'Software Development Kit', 'FormElementDynamicDataSource', 'BetaFormElementDynamicDataSource']
---


# FormElementDynamicDataSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**FormElementDynamicDataSourceConfig**](form-element-dynamic-data-source-config) |  | [optional] 
**DataSourceType** |  **Enum** [  "STATIC",    "INTERNAL",    "SEARCH",    "FORM_INPUT" ] | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch FORM_INPUT FormElementDataSourceTypeFormInput | [optional] 

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

