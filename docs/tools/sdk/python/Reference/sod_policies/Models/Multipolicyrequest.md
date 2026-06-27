---
id: multipolicyrequest
title: Multipolicyrequest
pagination_label: Multipolicyrequest
sidebar_label: Multipolicyrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Multipolicyrequest', 'Multipolicyrequest'] 
slug: /tools/sdk/python/sod-policies/models/multipolicyrequest
tags: ['SDK', 'Software Development Kit', 'Multipolicyrequest', 'Multipolicyrequest']
---

# Multipolicyrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filtered_policy_list** | **[]str** | Multi-policy report will be run for this list of ids | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.multipolicyrequest import Multipolicyrequest

multipolicyrequest = Multipolicyrequest(
filtered_policy_list=[
                    '["b868cd40-ffa4-4337-9c07-1a51846cfa94","63a07a7b-39a4-48aa-956d-50c827deba2a"]'
                    ]
)

```
[[Back to top]](#) 

