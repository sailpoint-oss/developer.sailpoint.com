---
id: v2025-exception-criteria-criteria-list-inner
title: ExceptionCriteriaCriteriaListInner
pagination_label: ExceptionCriteriaCriteriaListInner
sidebar_label: ExceptionCriteriaCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExceptionCriteriaCriteriaListInner', 'V2025ExceptionCriteriaCriteriaListInner'] 
slug: /tools/sdk/python/v2025/models/exception-criteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaCriteriaListInner', 'V2025ExceptionCriteriaCriteriaListInner']
---

# ExceptionCriteriaCriteriaListInner

The types of objects supported for SOD violations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | The type of object that is referenced | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
**existing** | **bool** | Whether the subject identity already had that access or not | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.exception_criteria_criteria_list_inner import ExceptionCriteriaCriteriaListInner

exception_criteria_criteria_list_inner = ExceptionCriteriaCriteriaListInner(
type=ENTITLEMENT,
id='2c91808568c529c60168cca6f90c1313',
name='CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local',
existing=True
)

```
[[Back to top]](#) 

