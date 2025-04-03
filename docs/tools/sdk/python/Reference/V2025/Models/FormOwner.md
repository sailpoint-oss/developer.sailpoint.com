---
id: v2025-form-owner
title: FormOwner
pagination_label: FormOwner
sidebar_label: FormOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormOwner', 'V2025FormOwner'] 
slug: /tools/sdk/python/v2025/models/form-owner
tags: ['SDK', 'Software Development Kit', 'FormOwner', 'V2025FormOwner']
---

# FormOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**id** | **str** | Unique identifier of the form's owner. | [optional] 
**name** | **str** | Name of the form's owner. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.form_owner import FormOwner

form_owner = FormOwner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67',
name='Grant Smith'
)

```
[[Back to top]](#) 

