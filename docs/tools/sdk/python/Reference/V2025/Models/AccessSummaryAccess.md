---
id: v2025-access-summary-access
title: AccessSummaryAccess
pagination_label: AccessSummaryAccess
sidebar_label: AccessSummaryAccess
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessSummaryAccess', 'V2025AccessSummaryAccess'] 
slug: /tools/sdk/python/v2025/models/access-summary-access
tags: ['SDK', 'Software Development Kit', 'AccessSummaryAccess', 'V2025AccessSummaryAccess']
---

# AccessSummaryAccess


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | The ID of the item being certified | [optional] 
**name** | **str** | The name of the item being certified | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_summary_access import AccessSummaryAccess

access_summary_access = AccessSummaryAccess(
type='IDENTITY',
id='2c9180867160846801719932c5153fb7',
name='Entitlement for Company Database'
)

```
[[Back to top]](#) 

