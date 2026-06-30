---
id: accessrequestapproverslistresponse
title: Accessrequestapproverslistresponse
pagination_label: Accessrequestapproverslistresponse
sidebar_label: Accessrequestapproverslistresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestapproverslistresponse', 'Accessrequestapproverslistresponse'] 
slug: /tools/sdk/python/access-request-approvals/models/accessrequestapproverslistresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestapproverslistresponse', 'Accessrequestapproverslistresponse']
---

# Accessrequestapproverslistresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Approver id. | [optional] 
**email** | **str** | Email of the approver. | [optional] 
**name** | **str** | Name of the approver. | [optional] 
**approval_id** | **str** | Id of the approval item. | [optional] 
**type** | **str** | Type of the object returned. In this case, the value for this field will always Identity. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.accessrequestapproverslistresponse import Accessrequestapproverslistresponse

accessrequestapproverslistresponse = Accessrequestapproverslistresponse(
id='id12345',
email='jdoe@sailpoint.com',
name='John Doe',
approval_id='ap12345',
type='Identity'
)

```
[[Back to top]](#) 

