---
id: exceptioncriteriaaccess
title: Exceptioncriteriaaccess
pagination_label: Exceptioncriteriaaccess
sidebar_label: Exceptioncriteriaaccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Exceptioncriteriaaccess', 'Exceptioncriteriaaccess'] 
slug: /tools/sdk/python/sod-violations/models/exceptioncriteriaaccess
tags: ['SDK', 'Software Development Kit', 'Exceptioncriteriaaccess', 'Exceptioncriteriaaccess']
---

# Exceptioncriteriaaccess

Access reference with addition of boolean existing flag to indicate whether the access was extant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
**existing** | **bool** | Whether the subject identity already had that access or not | [optional] [default to False]
}

## Example

```python
from sailpoint.sod_violations.models.exceptioncriteriaaccess import Exceptioncriteriaaccess

exceptioncriteriaaccess = Exceptioncriteriaaccess(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local',
existing=True
)

```
[[Back to top]](#) 

