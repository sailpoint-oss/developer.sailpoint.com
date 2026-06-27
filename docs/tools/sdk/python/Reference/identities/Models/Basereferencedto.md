---
id: basereferencedto
title: Basereferencedto
pagination_label: Basereferencedto
sidebar_label: Basereferencedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Basereferencedto', 'Basereferencedto'] 
slug: /tools/sdk/python/identities/models/basereferencedto
tags: ['SDK', 'Software Development Kit', 'Basereferencedto', 'Basereferencedto']
---

# Basereferencedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
}

## Example

```python
from sailpoint.identities.models.basereferencedto import Basereferencedto

basereferencedto = Basereferencedto(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

