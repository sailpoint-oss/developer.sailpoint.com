---
id: v2024-report-config-dto
title: ReportConfigDTO
pagination_label: ReportConfigDTO
sidebar_label: ReportConfigDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportConfigDTO'] 
slug: /tools/sdk/powershell/v2024/models/report-config-dto
tags: ['SDK', 'Software Development Kit', 'ReportConfigDTO']
---


# ReportConfigDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ColumnName** |  Pointer to **String** | Name of column in report | [optional] 
**Required** |  Pointer to **Boolean** | If true, column is required in all reports, and this entry is immutable. A 400 error will result from any attempt to modify the column's definition. | [optional] [default to $false]
**Included** |  Pointer to **Boolean** | If true, column is included in the report. A 400 error will be thrown if an attempt is made to set included=false if required==true. | [optional] [default to $false]
**Order** |  Pointer to **Int32** | Relative sort order for the column. Columns will be displayed left-to-right in nondecreasing order. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportConfigDTO = Initialize-PSSailpoint.V2024ReportConfigDTO  -ColumnName SOD Business Name `
 -Required true `
 -Included false `
 -Order 2
```

- Convert the resource to JSON
```powershell
$ReportConfigDTO | ConvertTo-JSON
```


[[Back to top]](#) 

