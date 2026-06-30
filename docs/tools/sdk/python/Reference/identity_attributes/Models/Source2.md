---
id: source2
title: Source2
pagination_label: Source2
sidebar_label: Source2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Source2', 'Source2'] 
slug: /tools/sdk/python/identity-attributes/models/source2
tags: ['SDK', 'Software Development Kit', 'Source2', 'Source2']
---

# Source2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Attribute mapping type. | [optional] 
**properties** | **object** | Attribute mapping properties. | [optional] 
}

## Example

```python
from sailpoint.identity_attributes.models.source2 import Source2

source2 = Source2(
type='rule',
properties={"ruleType":"IdentityAttribute","ruleName":"Cloud Promote Identity Attribute"}
)

```
[[Back to top]](#) 

