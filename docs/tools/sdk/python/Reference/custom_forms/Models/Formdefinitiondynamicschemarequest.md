---
id: formdefinitiondynamicschemarequest
title: Formdefinitiondynamicschemarequest
pagination_label: Formdefinitiondynamicschemarequest
sidebar_label: Formdefinitiondynamicschemarequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Formdefinitiondynamicschemarequest', 'Formdefinitiondynamicschemarequest'] 
slug: /tools/sdk/python/custom-forms/models/formdefinitiondynamicschemarequest
tags: ['SDK', 'Software Development Kit', 'Formdefinitiondynamicschemarequest', 'Formdefinitiondynamicschemarequest']
---

# Formdefinitiondynamicschemarequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**FormdefinitiondynamicschemarequestAttributes**](formdefinitiondynamicschemarequest-attributes) |  | [optional] 
**description** | **str** | Description is the form definition dynamic schema description text | [optional] 
**id** | **str** | ID is a unique identifier | [optional] 
**type** | **str** | Type is the form definition dynamic schema type | [optional] 
**version_number** | **int** | VersionNumber is the form definition dynamic schema version number | [optional] 
}

## Example

```python
from sailpoint.custom_forms.models.formdefinitiondynamicschemarequest import Formdefinitiondynamicschemarequest

formdefinitiondynamicschemarequest = Formdefinitiondynamicschemarequest(
attributes=sailpoint.custom_forms.models.formdefinitiondynamicschemarequest_attributes.formdefinitiondynamicschemarequest_attributes(
                    form_definition_id = '00000000-0000-0000-0000-000000000000', ),
description='A description',
id='00000000-0000-0000-0000-000000000000',
type='action',
version_number=1
)

```
[[Back to top]](#) 

