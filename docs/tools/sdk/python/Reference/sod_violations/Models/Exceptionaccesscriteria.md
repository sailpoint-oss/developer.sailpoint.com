---
id: exceptionaccesscriteria
title: Exceptionaccesscriteria
pagination_label: Exceptionaccesscriteria
sidebar_label: Exceptionaccesscriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Exceptionaccesscriteria', 'Exceptionaccesscriteria'] 
slug: /tools/sdk/python/sod-violations/models/exceptionaccesscriteria
tags: ['SDK', 'Software Development Kit', 'Exceptionaccesscriteria', 'Exceptionaccesscriteria']
---

# Exceptionaccesscriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**Exceptioncriteria**](exceptioncriteria) |  | [optional] 
**right_criteria** | [**Exceptioncriteria**](exceptioncriteria) |  | [optional] 
}

## Example

```python
from sailpoint.sod_violations.models.exceptionaccesscriteria import Exceptionaccesscriteria

exceptionaccesscriteria = Exceptionaccesscriteria(
left_criteria=sailpoint.sod_violations.models.exceptioncriteria.exceptioncriteria(
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], ),
right_criteria=sailpoint.sod_violations.models.exceptioncriteria.exceptioncriteria(
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}], )
)

```
[[Back to top]](#) 

