---
id: beta-access-profile-usage
title: AccessProfileUsage
pagination_label: AccessProfileUsage
sidebar_label: AccessProfileUsage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileUsage', 'BetaAccessProfileUsage'] 
slug: /tools/sdk/python/beta/models/access-profile-usage
tags: ['SDK', 'Software Development Kit', 'AccessProfileUsage', 'BetaAccessProfileUsage']
---

# AccessProfileUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_profile_id** | **str** | ID of the Access Profile that is in use | [optional] 
**used_by** | [**[]AccessProfileUsageUsedByInner**](access-profile-usage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_profile_usage import AccessProfileUsage

access_profile_usage = AccessProfileUsage(
access_profile_id='2c91808876438bbb017668c21919ecca',
used_by=[
                    sailpoint.beta.models.access_profile_usage_used_by_inner.AccessProfileUsage_usedBy_inner(
                        type = 'ROLE', 
                        id = '2c8180857a9b3da0017aa03418480f9d', 
                        name = 'Manager Role', )
                    ]
)

```
[[Back to top]](#) 

