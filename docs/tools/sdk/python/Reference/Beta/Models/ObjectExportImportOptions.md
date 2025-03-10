---
id: beta-object-export-import-options
title: ObjectExportImportOptions
pagination_label: ObjectExportImportOptions
sidebar_label: ObjectExportImportOptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ObjectExportImportOptions', 'BetaObjectExportImportOptions'] 
slug: /tools/sdk/python/beta/models/object-export-import-options
tags: ['SDK', 'Software Development Kit', 'ObjectExportImportOptions', 'BetaObjectExportImportOptions']
---

# ObjectExportImportOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**included_ids** | **[]str** | Object ids to be included in an import or export. | [optional] 
**included_names** | **[]str** | Object names to be included in an import or export. | [optional] 
}

## Example

```python
from sailpoint.beta.models.object_export_import_options import ObjectExportImportOptions

object_export_import_options = ObjectExportImportOptions(
included_ids=[
                    'be9e116d-08e1-49fc-ab7f-fa585e96c9e4'
                    ],
included_names=[
                    'Test Object'
                    ]
)

```
[[Back to top]](#) 

