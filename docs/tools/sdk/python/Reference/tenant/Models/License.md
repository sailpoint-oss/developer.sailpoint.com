---
id: license
title: License
pagination_label: License
sidebar_label: License
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'License', 'License'] 
slug: /tools/sdk/python/tenant/models/license
tags: ['SDK', 'Software Development Kit', 'License', 'License']
---

# License


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license_id** | **str** | Name of the license | [optional] 
**legacy_feature_name** | **str** | Legacy name of the license | [optional] 
}

## Example

```python
from sailpoint.tenant.models.license import License

license = License(
license_id='idn:access-request',
legacy_feature_name='ACCESS_REQUEST'
)

```
[[Back to top]](#) 

