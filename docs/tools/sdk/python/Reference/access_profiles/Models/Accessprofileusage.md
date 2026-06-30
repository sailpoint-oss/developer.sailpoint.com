---
id: accessprofileusage
title: Accessprofileusage
pagination_label: Accessprofileusage
sidebar_label: Accessprofileusage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessprofileusage', 'Accessprofileusage'] 
slug: /tools/sdk/python/access-profiles/models/accessprofileusage
tags: ['SDK', 'Software Development Kit', 'Accessprofileusage', 'Accessprofileusage']
---

# Accessprofileusage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_profile_id** | **str** | ID of the Access Profile that is in use | [optional] 
**used_by** | [**[]AccessprofileusageUsedByInner**](accessprofileusage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.accessprofileusage import Accessprofileusage

accessprofileusage = Accessprofileusage(
access_profile_id='2c91808876438bbb017668c21919ecca',
used_by=[
                    sailpoint.access_profiles.models.accessprofileusage_used_by_inner.accessprofileusage_usedBy_inner(
                        type = 'ROLE', 
                        id = '2c8180857a9b3da0017aa03418480f9d', 
                        name = 'Manager Role', )
                    ]
)

```
[[Back to top]](#) 

