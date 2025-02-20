---
id: beta-identity-attribute-transform1
title: IdentityAttributeTransform1
pagination_label: IdentityAttributeTransform1
sidebar_label: IdentityAttributeTransform1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributeTransform1', 'BetaIdentityAttributeTransform1'] 
slug: /tools/sdk/python/beta/models/identity-attribute-transform1
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeTransform1', 'BetaIdentityAttributeTransform1']
---

# IdentityAttributeTransform1

Defines a transformation definition for an identity attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attribute_name** | **str** | Name of the identity attribute. | [optional] 
**transform_definition** | [**TransformDefinition1**](transform-definition1) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_attribute_transform1 import IdentityAttributeTransform1

identity_attribute_transform1 = IdentityAttributeTransform1(
identity_attribute_name='email',
transform_definition=sailpoint.beta.models.transform_definition_1.TransformDefinition_1(
                    type = 'accountAttribute', 
                    attributes = {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}, )
)

```
[[Back to top]](#) 

