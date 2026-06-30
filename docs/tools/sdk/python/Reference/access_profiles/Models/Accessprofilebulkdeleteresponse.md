---
id: accessprofilebulkdeleteresponse
title: Accessprofilebulkdeleteresponse
pagination_label: Accessprofilebulkdeleteresponse
sidebar_label: Accessprofilebulkdeleteresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessprofilebulkdeleteresponse', 'Accessprofilebulkdeleteresponse'] 
slug: /tools/sdk/python/access-profiles/models/accessprofilebulkdeleteresponse
tags: ['SDK', 'Software Development Kit', 'Accessprofilebulkdeleteresponse', 'Accessprofilebulkdeleteresponse']
---

# Accessprofilebulkdeleteresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **str** | ID of the task which is executing the bulk deletion. This can be passed to the **/task-status** API to track status. | [optional] 
**pending** | **[]str** | List of IDs of Access Profiles which are pending deletion. | [optional] 
**in_use** | [**[]Accessprofileusage**](accessprofileusage) | List of usages of Access Profiles targeted for deletion. | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.accessprofilebulkdeleteresponse import Accessprofilebulkdeleteresponse

accessprofilebulkdeleteresponse = Accessprofilebulkdeleteresponse(
task_id='2c9180867817ac4d017817c491119a20',
pending=["2c91808876438bbb017668c21919ecca","2c91808876438bb201766e129f151816"],
in_use=[
                    sailpoint.access_profiles.models.accessprofileusage.accessprofileusage(
                        access_profile_id = '2c91808876438bbb017668c21919ecca', 
                        used_by = [
                            sailpoint.access_profiles.models.accessprofileusage_used_by_inner.accessprofileusage_usedBy_inner(
                                type = 'ROLE', 
                                id = '2c8180857a9b3da0017aa03418480f9d', 
                                name = 'Manager Role', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

