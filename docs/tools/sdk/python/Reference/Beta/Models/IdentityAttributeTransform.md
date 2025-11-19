---
id: beta-identity-attribute-transform
title: IdentityAttributeTransform
pagination_label: IdentityAttributeTransform
sidebar_label: IdentityAttributeTransform
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributeTransform', 'BetaIdentityAttributeTransform'] 
slug: /tools/sdk/python/beta/models/identity-attribute-transform
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeTransform', 'BetaIdentityAttributeTransform']
---

# IdentityAttributeTransform

Transform definition for an identity attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attribute_name** | **str** | Identity attribute's name. | [optional] 
**transform_definition** | [**TransformDefinition**](transform-definition) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_attribute_transform import IdentityAttributeTransform

identity_attribute_transform = IdentityAttributeTransform(
identity_attribute_name='email',
transform_definition=sailpoint.beta.models.transform_definition.Transform Definition(
                    type = 'accountAttribute', 
                    attributes = {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}, )
)

```
[[Back to top]](#) 

