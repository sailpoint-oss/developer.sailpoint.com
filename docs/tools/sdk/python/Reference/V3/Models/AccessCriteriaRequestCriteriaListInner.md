---
id: access-criteria-request-criteria-list-inner
title: AccessCriteriaRequestCriteriaListInner
pagination_label: AccessCriteriaRequestCriteriaListInner
sidebar_label: AccessCriteriaRequestCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessCriteriaRequestCriteriaListInner', 'AccessCriteriaRequestCriteriaListInner'] 
slug: /tools/sdk/python/v3/models/access-criteria-request-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaRequestCriteriaListInner', 'AccessCriteriaRequestCriteriaListInner']
---

# AccessCriteriaRequestCriteriaListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | Type of the property to which this reference applies to | [optional] 
**id** | **str** | ID of the object to which this reference applies to | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_criteria_request_criteria_list_inner import AccessCriteriaRequestCriteriaListInner

access_criteria_request_criteria_list_inner = AccessCriteriaRequestCriteriaListInner(
type='ENTITLEMENT',
id='2c91808568c529c60168cca6f90c1313'
)

```
[[Back to top]](#) 

