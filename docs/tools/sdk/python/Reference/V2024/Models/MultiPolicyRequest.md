---
id: v2024-multi-policy-request
title: MultiPolicyRequest
pagination_label: MultiPolicyRequest
sidebar_label: MultiPolicyRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiPolicyRequest', 'V2024MultiPolicyRequest'] 
slug: /tools/sdk/python/v2024/models/multi-policy-request
tags: ['SDK', 'Software Development Kit', 'MultiPolicyRequest', 'V2024MultiPolicyRequest']
---

# MultiPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filtered_policy_list** | **[]str** | Multi-policy report will be run for this list of ids | [optional] 
}

## Example

```python
from sailpoint.v2024.models.multi_policy_request import MultiPolicyRequest

multi_policy_request = MultiPolicyRequest(
filtered_policy_list=[
                    '[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]'
                    ]
)

```
[[Back to top]](#) 

