---
id: tenantconfigurationdetails
title: Tenantconfigurationdetails
pagination_label: Tenantconfigurationdetails
sidebar_label: Tenantconfigurationdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tenantconfigurationdetails', 'Tenantconfigurationdetails'] 
slug: /tools/sdk/python/work-reassignment/models/tenantconfigurationdetails
tags: ['SDK', 'Software Development Kit', 'Tenantconfigurationdetails', 'Tenantconfigurationdetails']
---

# Tenantconfigurationdetails

Details of any tenant-wide Reassignment Configurations (eg. enabled/disabled)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Flag to determine if Reassignment Configuration is enabled or disabled for a tenant.  When this flag is set to true, Reassignment Configuration is disabled. | [optional] [default to False]
}

## Example

```python
from sailpoint.work_reassignment.models.tenantconfigurationdetails import Tenantconfigurationdetails

tenantconfigurationdetails = Tenantconfigurationdetails(
disabled=True
)

```
[[Back to top]](#) 

