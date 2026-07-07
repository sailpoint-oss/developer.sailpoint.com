---
id: dimensionref
title: Dimensionref
pagination_label: Dimensionref
sidebar_label: Dimensionref
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensionref', 'Dimensionref'] 
slug: /tools/sdk/python/roles/models/dimensionref
tags: ['SDK', 'Software Development Kit', 'Dimensionref', 'Dimensionref']
---

# Dimensionref


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'DIMENSION' ] | The type of the object to which this reference applies | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.roles.models.dimensionref import Dimensionref

dimensionref = Dimensionref(
type='DIMENSION',
id='2c91808568c529c60168cca6f90c1313',
name='Role 2'
)

```
[[Back to top]](#) 

