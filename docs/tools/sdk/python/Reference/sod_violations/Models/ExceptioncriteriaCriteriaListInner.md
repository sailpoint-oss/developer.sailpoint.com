---
id: exceptioncriteria-criteria-list-inner
title: ExceptioncriteriaCriteriaListInner
pagination_label: ExceptioncriteriaCriteriaListInner
sidebar_label: ExceptioncriteriaCriteriaListInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExceptioncriteriaCriteriaListInner', 'ExceptioncriteriaCriteriaListInner'] 
slug: /tools/sdk/python/sod-violations/models/exceptioncriteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'ExceptioncriteriaCriteriaListInner', 'ExceptioncriteriaCriteriaListInner']
---

# ExceptioncriteriaCriteriaListInner

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
from sailpoint.sod_violations.models.exceptioncriteria_criteria_list_inner import ExceptioncriteriaCriteriaListInner

exceptioncriteria_criteria_list_inner = ExceptioncriteriaCriteriaListInner(
type='ENTITLEMENT',
id='2c91808568c529c60168cca6f90c1313',
name='CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local',
existing=True
)

```
[[Back to top]](#) 

