---
id: v2024-exception-criteria-access
title: ExceptionCriteriaAccess
pagination_label: ExceptionCriteriaAccess
sidebar_label: ExceptionCriteriaAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExceptionCriteriaAccess', 'V2024ExceptionCriteriaAccess'] 
slug: /tools/sdk/python/v2024/models/exception-criteria-access
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaAccess', 'V2024ExceptionCriteriaAccess']
---

# ExceptionCriteriaAccess

Access reference with addition of boolean existing flag to indicate whether the access was extant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
**existing** | **bool** | Whether the subject identity already had that access or not | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.exception_criteria_access import ExceptionCriteriaAccess

exception_criteria_access = ExceptionCriteriaAccess(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local',
existing=True
)

```
[[Back to top]](#) 

