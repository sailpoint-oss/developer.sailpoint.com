---
id: v2025-export-options1
title: ExportOptions1
pagination_label: ExportOptions1
sidebar_label: ExportOptions1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExportOptions1', 'V2025ExportOptions1'] 
slug: /tools/sdk/python/v2025/models/export-options1
tags: ['SDK', 'Software Development Kit', 'ExportOptions1', 'V2025ExportOptions1']
---

# ExportOptions1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_types** | **[]str** | Object type names to be excluded from an sp-config export command. | [optional] 
**include_types** | **[]str** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**object_options** | [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 
}

## Example

```python
from sailpoint.v2025.models.export_options1 import ExportOptions1

export_options1 = ExportOptions1(
exclude_types=[
                    'SOURCE'
                    ],
include_types=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
object_options={TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}}
)

```
[[Back to top]](#) 

