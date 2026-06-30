---
id: identityattributetransform
title: Identityattributetransform
pagination_label: Identityattributetransform
sidebar_label: Identityattributetransform
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityattributetransform', 'Identityattributetransform'] 
slug: /tools/sdk/python/identity-profiles/models/identityattributetransform
tags: ['SDK', 'Software Development Kit', 'Identityattributetransform', 'Identityattributetransform']
---

# Identityattributetransform

Transform definition for an identity attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attribute_name** | **str** | Identity attribute's name. | [optional] 
**transform_definition** | [**Transformdefinition**](transformdefinition) |  | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.identityattributetransform import Identityattributetransform

identityattributetransform = Identityattributetransform(
identity_attribute_name='email',
transform_definition=sailpoint.identity_profiles.models.transform_definition.Transform Definition(
                    type = 'accountAttribute', 
                    attributes = {"attributeName":"e-mail","sourceName":"MySource","sourceId":"2c9180877a826e68017a8c0b03da1a53"}, )
)

```
[[Back to top]](#) 

