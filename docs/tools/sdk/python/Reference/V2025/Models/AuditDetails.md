---
id: v2025-audit-details
title: AuditDetails
pagination_label: AuditDetails
sidebar_label: AuditDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AuditDetails', 'V2025AuditDetails'] 
slug: /tools/sdk/python/v2025/models/audit-details
tags: ['SDK', 'Software Development Kit', 'AuditDetails', 'V2025AuditDetails']
---

# AuditDetails

Audit details for the reassignment configuration of an identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Initial date and time when the record was created | [optional] 
**created_by** | [**Identity1**](identity1) |  | [optional] 
**modified** | **datetime** | Last modified date and time for the record | [optional] 
**modified_by** | [**Identity1**](identity1) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.audit_details import AuditDetails

audit_details = AuditDetails(
created='2022-07-21T11:13:12.345Z',
created_by=sailpoint.v2025.models.identity_1.Identity_1(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', ),
modified='2022-07-21T11:13:12.345Z',
modified_by=sailpoint.v2025.models.identity_1.Identity_1(
                    id = '2c91808380aa05580180aaaaf1940410', 
                    name = 'William Wilson', )
)

```
[[Back to top]](#) 

