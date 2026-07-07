---
id: identitycompareresponse
title: Identitycompareresponse
pagination_label: Identitycompareresponse
sidebar_label: Identitycompareresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitycompareresponse', 'Identitycompareresponse'] 
slug: /tools/sdk/python/identity-history/models/identitycompareresponse
tags: ['SDK', 'Software Development Kit', 'Identitycompareresponse', 'Identitycompareresponse']
---

# Identitycompareresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_item_diff** | **map[string]object** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.identitycompareresponse import Identitycompareresponse

identitycompareresponse = Identitycompareresponse(
access_item_diff={
                    'key' : None
                    }
)

```
[[Back to top]](#) 

