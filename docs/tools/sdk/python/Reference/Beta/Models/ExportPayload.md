---
id: beta-export-payload
title: ExportPayload
pagination_label: ExportPayload
sidebar_label: ExportPayload
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExportPayload', 'BetaExportPayload'] 
slug: /tools/sdk/python/beta/models/export-payload
tags: ['SDK', 'Software Development Kit', 'ExportPayload', 'BetaExportPayload']
---

# ExportPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional user defined description/name for export job. | [optional] 
**exclude_types** | **[]str** | Object type names to be excluded from an sp-config export command. | [optional] 
**include_types** | **[]str** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**object_options** | [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 
}

## Example

```python
from sailpoint.beta.models.export_payload import ExportPayload

export_payload = ExportPayload(
description='Export Job 1 Test',
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

