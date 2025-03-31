---
id: beta-config-object
title: ConfigObject
pagination_label: ConfigObject
sidebar_label: ConfigObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConfigObject', 'BetaConfigObject'] 
slug: /tools/sdk/python/beta/models/config-object
tags: ['SDK', 'Software Development Kit', 'ConfigObject', 'BetaConfigObject']
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
from sailpoint.beta.models.config_object import ConfigObject

config_object = ConfigObject(
version=1,
var_self=sailpoint.beta.models.self_import_export_dto.SelfImportExportDto(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
object={ }
)

```
[[Back to top]](#) 

