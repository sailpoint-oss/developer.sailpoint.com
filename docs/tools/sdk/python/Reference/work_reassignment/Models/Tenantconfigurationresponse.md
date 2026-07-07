---
id: tenantconfigurationresponse
title: Tenantconfigurationresponse
pagination_label: Tenantconfigurationresponse
sidebar_label: Tenantconfigurationresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenantconfigurationresponse', 'Tenantconfigurationresponse'] 
slug: /tools/sdk/python/work-reassignment/models/tenantconfigurationresponse
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationresponse', 'Tenantconfigurationresponse']
---

# Tenantconfigurationresponse

Tenant-wide Reassignment Configuration settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_details** | [**Auditdetails**](auditdetails) |  | [optional] 
**config_details** | [**Tenantconfigurationdetails**](tenantconfigurationdetails) |  | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.tenantconfigurationresponse import Tenantconfigurationresponse

tenantconfigurationresponse = Tenantconfigurationresponse(
audit_details=sailpoint.work_reassignment.models.auditdetails.auditdetails(
                    created = '2022-07-21T11:13:12.345Z', 
                    created_by = sailpoint.work_reassignment.models.identity_2.identity-2(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), 
                    modified = '2022-07-21T11:13:12.345Z', 
                    modified_by = sailpoint.work_reassignment.models.identity_2.identity-2(
                        id = '2c91808380aa05580180aaaaf1940410', 
                        name = 'William Wilson', ), ),
config_details=sailpoint.work_reassignment.models.tenantconfigurationdetails.tenantconfigurationdetails(
                    disabled = True, )
)

```
[[Back to top]](#) 

