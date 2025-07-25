---
id: v2025-config-object
title: ConfigObject
pagination_label: ConfigObject
sidebar_label: ConfigObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConfigObject', 'V2025ConfigObject'] 
slug: /tools/sdk/python/v2025/models/config-object
tags: ['SDK', 'Software Development Kit', 'ConfigObject', 'V2025ConfigObject']
---

# ConfigObject

Config export and import format for individual object configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** | Current version of configuration object. | [optional] 
**var_self** | [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**object** | **map[string]object** | Object details. Format dependant on the object type. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.config_object import ConfigObject

config_object = ConfigObject(
version=1,
var_self=sailpoint.v2025.models.self_import_export_dto.Self Import Export Dto(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
object={ }
)

```
[[Back to top]](#) 

