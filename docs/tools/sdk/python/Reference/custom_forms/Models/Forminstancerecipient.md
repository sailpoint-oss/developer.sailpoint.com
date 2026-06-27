---
id: forminstancerecipient
title: Forminstancerecipient
pagination_label: Forminstancerecipient
sidebar_label: Forminstancerecipient
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Forminstancerecipient', 'Forminstancerecipient'] 
slug: /tools/sdk/python/custom-forms/models/forminstancerecipient
tags: ['SDK', 'Software Development Kit', 'Forminstancerecipient', 'Forminstancerecipient']
---

# Forminstancerecipient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID is a unique identifier | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | Type is a FormInstanceRecipientType value IDENTITY FormInstanceRecipientIdentity | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.forminstancerecipient import Forminstancerecipient

forminstancerecipient = Forminstancerecipient(
id='00000000-0000-0000-0000-000000000000',
type='IDENTITY'
)

```
[[Back to top]](#) 

