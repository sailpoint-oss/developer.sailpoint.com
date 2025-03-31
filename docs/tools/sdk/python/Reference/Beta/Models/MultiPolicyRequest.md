---
id: beta-multi-policy-request
title: MultiPolicyRequest
pagination_label: MultiPolicyRequest
sidebar_label: MultiPolicyRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MultiPolicyRequest', 'BetaMultiPolicyRequest'] 
slug: /tools/sdk/python/beta/models/multi-policy-request
tags: ['SDK', 'Software Development Kit', 'MultiPolicyRequest', 'BetaMultiPolicyRequest']
---

# MultiPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filtered_policy_list** | **[]str** | Multi-policy report will be run for this list of ids | [optional] 
}

## Example

```python
from sailpoint.beta.models.multi_policy_request import MultiPolicyRequest

multi_policy_request = MultiPolicyRequest(
filtered_policy_list=[
                    ''
                    ]
)

```
[[Back to top]](#) 

