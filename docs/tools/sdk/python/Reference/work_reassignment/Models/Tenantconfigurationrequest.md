---
id: tenantconfigurationrequest
title: Tenantconfigurationrequest
pagination_label: Tenantconfigurationrequest
sidebar_label: Tenantconfigurationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenantconfigurationrequest', 'Tenantconfigurationrequest'] 
slug: /tools/sdk/python/work-reassignment/models/tenantconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationrequest', 'Tenantconfigurationrequest']
---

# Tenantconfigurationrequest

Tenant-wide Reassignment Configuration settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_details** | [**Tenantconfigurationdetails**](tenantconfigurationdetails) |  | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.tenantconfigurationrequest import Tenantconfigurationrequest

tenantconfigurationrequest = Tenantconfigurationrequest(
config_details=sailpoint.work_reassignment.models.tenantconfigurationdetails.tenantconfigurationdetails(
                    disabled = True, )
)

```
[[Back to top]](#) 

