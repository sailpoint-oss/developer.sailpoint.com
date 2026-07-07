---
id: conflictingaccesscriteria
title: Conflictingaccesscriteria
pagination_label: Conflictingaccesscriteria
sidebar_label: Conflictingaccesscriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Conflictingaccesscriteria', 'Conflictingaccesscriteria'] 
slug: /tools/sdk/python/sod-policies/models/conflictingaccesscriteria
tags: ['SDK', 'Software Development Kit', 'Conflictingaccesscriteria', 'Conflictingaccesscriteria']
---

# Conflictingaccesscriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 
**right_criteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.conflictingaccesscriteria import Conflictingaccesscriteria

conflictingaccesscriteria = Conflictingaccesscriteria(
left_criteria=sailpoint.sod_policies.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}], ),
right_criteria=sailpoint.sod_policies.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}], )
)

```
[[Back to top]](#) 

