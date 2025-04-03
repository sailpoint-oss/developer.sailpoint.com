---
id: v2025-account-source
title: AccountSource
pagination_label: AccountSource
sidebar_label: AccountSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountSource', 'V2025AccountSource'] 
slug: /tools/sdk/python/v2025/models/account-source
tags: ['SDK', 'Software Development Kit', 'AccountSource', 'V2025AccountSource']
---

# AccountSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**type** | **str** | Type of source returned. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.account_source import AccountSource

account_source = AccountSource(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
type='Delimited File'
)

```
[[Back to top]](#) 

