---
id: v2025-source1
title: Source1
pagination_label: Source1
sidebar_label: Source1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Source1', 'V2025Source1'] 
slug: /tools/sdk/python/v2025/models/source1
tags: ['SDK', 'Software Development Kit', 'Source1', 'V2025Source1']
---

# Source1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Attribute mapping type. | [optional] 
**properties** | **object** | Attribute mapping properties. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.source1 import Source1

source1 = Source1(
type='rule',
properties={ruleType=IdentityAttribute, ruleName=Cloud Promote Identity Attribute}
)

```
[[Back to top]](#) 

