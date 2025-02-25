---
id: beta-identity-compare-response
title: IdentityCompareResponse
pagination_label: IdentityCompareResponse
sidebar_label: IdentityCompareResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCompareResponse', 'BetaIdentityCompareResponse'] 
slug: /tools/sdk/python/beta/models/identity-compare-response
tags: ['SDK', 'Software Development Kit', 'IdentityCompareResponse', 'BetaIdentityCompareResponse']
---

# IdentityCompareResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_item_diff** | **map[string]object** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_compare_response import IdentityCompareResponse

identity_compare_response = IdentityCompareResponse(
access_item_diff={
                    'key' : None
                    }
)

```
[[Back to top]](#) 

