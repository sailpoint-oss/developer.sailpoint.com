---
id: access-criteria-criteria-list-inner
title: AccessCriteriaCriteriaListInner
pagination_label: AccessCriteriaCriteriaListInner
sidebar_label: AccessCriteriaCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessCriteriaCriteriaListInner', 'AccessCriteriaCriteriaListInner'] 
slug: /tools/sdk/python/v3/models/access-criteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaCriteriaListInner', 'AccessCriteriaCriteriaListInner']
---

# AccessCriteriaCriteriaListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | Type of the property to which this reference applies to | [optional] 
**id** | **str** | ID of the object to which this reference applies to | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies to | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_criteria_criteria_list_inner import AccessCriteriaCriteriaListInner

access_criteria_criteria_list_inner = AccessCriteriaCriteriaListInner(
type='ENTITLEMENT',
id='2c91808568c529c60168cca6f90c1313',
name='Administrator'
)

```
[[Back to top]](#) 

