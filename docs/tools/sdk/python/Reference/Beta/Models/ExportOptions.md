---
id: beta-export-options
title: ExportOptions
pagination_label: ExportOptions
sidebar_label: ExportOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExportOptions', 'BetaExportOptions'] 
slug: /tools/sdk/python/beta/models/export-options
tags: ['SDK', 'Software Development Kit', 'ExportOptions', 'BetaExportOptions']
---

# ExportOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_types** | **[]str** | Object type names to be excluded from an sp-config export command. | [optional] 
**include_types** | **[]str** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**object_options** | [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 
}

## Example

```python
from sailpoint.beta.models.export_options import ExportOptions

export_options = ExportOptions(
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

