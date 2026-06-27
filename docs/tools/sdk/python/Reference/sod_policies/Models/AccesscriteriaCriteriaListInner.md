---
id: accesscriteria-criteria-list-inner
title: AccesscriteriaCriteriaListInner
pagination_label: AccesscriteriaCriteriaListInner
sidebar_label: AccesscriteriaCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccesscriteriaCriteriaListInner', 'AccesscriteriaCriteriaListInner'] 
slug: /tools/sdk/python/sod-policies/models/accesscriteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'AccesscriteriaCriteriaListInner', 'AccesscriteriaCriteriaListInner']
---

# AccesscriteriaCriteriaListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | Type of the propery to which this reference applies to | [optional] 
**id** | **str** | ID of the object to which this reference applies to | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies to | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.accesscriteria_criteria_list_inner import AccesscriteriaCriteriaListInner

accesscriteria_criteria_list_inner = AccesscriteriaCriteriaListInner(
type='ENTITLEMENT',
id='2c91808568c529c60168cca6f90c1313',
name='Administrator'
)

```
[[Back to top]](#) 

