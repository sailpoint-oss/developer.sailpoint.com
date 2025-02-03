---
id: v2024-template-bulk-delete-dto
title: TemplateBulkDeleteDto
pagination_label: TemplateBulkDeleteDto
sidebar_label: TemplateBulkDeleteDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateBulkDeleteDto', 'V2024TemplateBulkDeleteDto'] 
slug: /tools/sdk/powershell/v2024/models/template-bulk-delete-dto
tags: ['SDK', 'Software Development Kit', 'TemplateBulkDeleteDto', 'V2024TemplateBulkDeleteDto']
---


# TemplateBulkDeleteDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** |  | [required]
**Medium** |  **Enum** [  "EMAIL",    "PHONE",    "SMS" ] |  | [optional] 
**Locale** | **String** | The locale for the message text, a BCP 47 language tag. | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateBulkDeleteDto = Initialize-PSSailpoint.V2024TemplateBulkDeleteDto  -Key cloud_manual_work_item_summary `
 -Medium EMAIL `
 -Locale en
```

- Convert the resource to JSON
```powershell
$TemplateBulkDeleteDto | ConvertTo-JSON
```


[[Back to top]](#) 

