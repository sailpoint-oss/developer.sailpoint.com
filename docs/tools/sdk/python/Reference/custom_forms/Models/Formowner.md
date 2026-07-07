---
id: formowner
title: Formowner
pagination_label: Formowner
sidebar_label: Formowner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formowner', 'Formowner'] 
slug: /tools/sdk/python/custom-forms/models/formowner
tags: ['SDK', 'Software Development Kit', 'Formowner', 'Formowner']
---

# Formowner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**id** | **str** | Unique identifier of the form's owner. | [optional] 
**name** | **str** | Name of the form's owner. | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formowner import Formowner

formowner = Formowner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67',
name='Grant Smith'
)

```
[[Back to top]](#) 

