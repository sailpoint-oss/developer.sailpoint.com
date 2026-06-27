---
id: importoptions
title: Importoptions
pagination_label: Importoptions
sidebar_label: Importoptions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Importoptions', 'Importoptions'] 
slug: /tools/sdk/python/sp-config/models/importoptions
tags: ['SDK', 'Software Development Kit', 'Importoptions', 'Importoptions']
---

# Importoptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_types** | **[]str** | Object type names to be excluded from an sp-config export command. | [optional] 
**include_types** | **[]str** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**object_options** | [**map[string]Objectexportimportoptions**](objectexportimportoptions) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 
**default_references** | **[]str** | List of object types that can be used to resolve references on import. | [optional] 
**exclude_backup** | **bool** | By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed. | [optional] [default to False]
}

## Example

```python
from sailpoint.sp_config.models.importoptions import Importoptions

importoptions = Importoptions(
exclude_types=[
                    'SOURCE'
                    ],
include_types=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
object_options={"TRIGGER_SUBSCRIPTION":{"includedIds":["be9e116d-08e1-49fc-ab7f-fa585e96c9e4"],"includedNames":["Test 2"]}},
default_references=[
                    'TRIGGER_SUBSCRIPTION'
                    ],
exclude_backup=False
)

```
[[Back to top]](#) 

