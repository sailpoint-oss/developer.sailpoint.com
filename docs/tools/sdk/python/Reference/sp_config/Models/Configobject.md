---
id: configobject
title: Configobject
pagination_label: Configobject
sidebar_label: Configobject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Configobject', 'Configobject'] 
slug: /tools/sdk/python/sp-config/models/configobject
tags: ['SDK', 'Software Development Kit', 'Configobject', 'Configobject']
---

# Configobject

Config export and import format for individual object configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** | Current version of configuration object. | [optional] 
**var_self** | [**Selfimportexportdto**](selfimportexportdto) |  | [optional] 
**object** | **map[string]object** | Object details. Format dependant on the object type. | [optional] 
}

## Example

```python
from sailpoint.sp_config.models.configobject import Configobject

configobject = Configobject(
version=1,
var_self=sailpoint.sp_config.models.self_import_export_dto.Self Import Export Dto(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
object={ }
)

```
[[Back to top]](#) 

