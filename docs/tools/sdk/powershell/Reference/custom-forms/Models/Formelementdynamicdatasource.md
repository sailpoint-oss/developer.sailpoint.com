---
id: formelementdynamicdatasource
title: Formelementdynamicdatasource
pagination_label: Formelementdynamicdatasource
sidebar_label: Formelementdynamicdatasource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formelementdynamicdatasource', 'Formelementdynamicdatasource'] 
slug: /tools/sdk/powershell/customforms/models/formelementdynamicdatasource
tags: ['SDK', 'Software Development Kit', 'Formelementdynamicdatasource', 'Formelementdynamicdatasource']
---


# Formelementdynamicdatasource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | [**Formelementdynamicdatasourceconfig**](formelementdynamicdatasourceconfig) |  | [optional] 
**DataSourceType** |  **Enum** [  "STATIC",    "INTERNAL",    "SEARCH",    "FORM_INPUT" ] | DataSourceType is a FormElementDataSourceType value STATIC FormElementDataSourceTypeStatic INTERNAL FormElementDataSourceTypeInternal SEARCH FormElementDataSourceTypeSearch FORM_INPUT FormElementDataSourceTypeFormInput | [optional] 

## Examples

- Prepare the resource
```powershell
$Formelementdynamicdatasource = Initialize-Formelementdynamicdatasource  -Config null `
 -DataSourceType STATIC
```

- Convert the resource to JSON
```powershell
$Formelementdynamicdatasource | ConvertTo-JSON
```


[[Back to top]](#) 

