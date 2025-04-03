---
id: v2025-identity-compare-response
title: IdentityCompareResponse
pagination_label: IdentityCompareResponse
sidebar_label: IdentityCompareResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCompareResponse', 'V2025IdentityCompareResponse'] 
slug: /tools/sdk/python/v2025/models/identity-compare-response
tags: ['SDK', 'Software Development Kit', 'IdentityCompareResponse', 'V2025IdentityCompareResponse']
---

# IdentityCompareResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_item_diff** | **map[string]object** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.identity_compare_response import IdentityCompareResponse

identity_compare_response = IdentityCompareResponse(
access_item_diff={
                    'key' : None
                    }
)

```
[[Back to top]](#) 

