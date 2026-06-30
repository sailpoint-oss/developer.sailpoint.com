---
id: auditdetails
title: Auditdetails
pagination_label: Auditdetails
sidebar_label: Auditdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Auditdetails', 'Auditdetails'] 
slug: /tools/sdk/python/work-reassignment/models/auditdetails
tags: ['SDK', 'Software Development Kit', 'Auditdetails', 'Auditdetails']
---

# Auditdetails

Audit details for the reassignment configuration of an identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Initial date and time when the record was created | [optional] 
**created_by** | [**Identity2**](identity2) |  | [optional] 
**modified** | **datetime** | Last modified date and time for the record | [optional] 
**modified_by** | [**Identity2**](identity2) |  | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.auditdetails import Auditdetails

auditdetails = Auditdetails(
created='2022-07-21T11:13:12.345Z',
created_by=sailpoint.work_reassignment.models.identity_2.identity-2(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', ),
modified='2022-07-21T11:13:12.345Z',
modified_by=sailpoint.work_reassignment.models.identity_2.identity-2(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

