---
id: accountrequestinfo
title: Accountrequestinfo
pagination_label: Accountrequestinfo
sidebar_label: Accountrequestinfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountrequestinfo', 'Accountrequestinfo'] 
slug: /tools/sdk/python/account-activities/models/accountrequestinfo
tags: ['SDK', 'Software Development Kit', 'Accountrequestinfo', 'Accountrequestinfo']
---

# Accountrequestinfo

If an account activity item is associated with an access request, captures details of that request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_object_id** | **str** | Id of requested object | [optional] 
**requested_object_name** | **str** | Human-readable name of requested object | [optional] 
**requested_object_type** | [**Requestableobjecttype**](requestableobjecttype) |  | [optional] 
}

## Example

```python
from sailpoint.account_activities.models.accountrequestinfo import Accountrequestinfo

accountrequestinfo = Accountrequestinfo(
requested_object_id='2c91808563ef85690164001c31140c0c',
requested_object_name='Treasury Analyst',
requested_object_type='ACCESS_PROFILE'
)

```
[[Back to top]](#) 

