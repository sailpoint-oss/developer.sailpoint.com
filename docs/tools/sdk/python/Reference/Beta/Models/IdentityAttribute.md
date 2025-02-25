---
id: beta-identity-attribute
title: IdentityAttribute
pagination_label: IdentityAttribute
sidebar_label: IdentityAttribute
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttribute', 'BetaIdentityAttribute'] 
slug: /tools/sdk/python/beta/models/identity-attribute
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute', 'BetaIdentityAttribute']
---

# IdentityAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Identity attribute's technical name. | [required]
**display_name** | **str** | Identity attribute's business-friendly name. | [optional] 
**standard** | **bool** | Indicates whether the attribute is 'standard' or 'default'. | [optional] [default to False]
**type** | **str** | Identity attribute's type. | [optional] 
**multi** | **bool** | Indicates whether the identity attribute is multi-valued. | [optional] [default to False]
**searchable** | **bool** | Indicates whether the identity attribute is searchable. | [optional] [default to False]
**system** | **bool** | Indicates whether the identity attribute is 'system', meaning that it doesn't have a source and isn't configurable. | [optional] [default to False]
**sources** | [**[]Source1**](source1) | Identity attribute's list of sources - this specifies how the rule's value is derived. | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_attribute import IdentityAttribute

identity_attribute = IdentityAttribute(
name='costCenter',
display_name='Cost Center',
standard=False,
type='string',
multi=False,
searchable=False,
system=False,
sources=[
                    sailpoint.beta.models.source_1.Source_1(
                        type = 'rule', 
                        properties = {ruleType=IdentityAttribute, ruleName=Cloud Promote Identity Attribute}, )
                    ]
)

```
[[Back to top]](#) 

