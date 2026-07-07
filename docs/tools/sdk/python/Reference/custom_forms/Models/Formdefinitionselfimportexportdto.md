---
id: formdefinitionselfimportexportdto
title: Formdefinitionselfimportexportdto
pagination_label: Formdefinitionselfimportexportdto
sidebar_label: Formdefinitionselfimportexportdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formdefinitionselfimportexportdto', 'Formdefinitionselfimportexportdto'] 
slug: /tools/sdk/python/custom-forms/models/formdefinitionselfimportexportdto
tags: ['SDK', 'Software Development Kit', 'Formdefinitionselfimportexportdto', 'Formdefinitionselfimportexportdto']
---

# Formdefinitionselfimportexportdto

Self block for imported/exported object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'FORM_DEFINITION' ] | Imported/exported object's DTO type. | [optional] 
**id** | **str** | Imported/exported object's ID. | [optional] 
**name** | **str** | Imported/exported object's display name. | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formdefinitionselfimportexportdto import Formdefinitionselfimportexportdto

formdefinitionselfimportexportdto = Formdefinitionselfimportexportdto(
type='FORM_DEFINITION',
id='2c9180835d191a86015d28455b4b232a',
name='Temporary User Level Permissions - Requester'
)

```
[[Back to top]](#) 

