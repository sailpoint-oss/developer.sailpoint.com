---
id: accesssummary-access
title: AccesssummaryAccess
pagination_label: AccesssummaryAccess
sidebar_label: AccesssummaryAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccesssummaryAccess', 'AccesssummaryAccess'] 
slug: /tools/sdk/python/certifications/models/accesssummary-access
tags: ['SDK', 'Software Development Kit', 'AccesssummaryAccess', 'AccesssummaryAccess']
---

# AccesssummaryAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | The ID of the item being certified | [optional] 
**name** | **str** | The name of the item being certified | [optional] 
}

## Example

```python
from sailpoint.certifications.models.accesssummary_access import AccesssummaryAccess

accesssummary_access = AccesssummaryAccess(
type='IDENTITY',
id='2c9180867160846801719932c5153fb7',
name='Entitlement for Company Database'
)

```
[[Back to top]](#) 

