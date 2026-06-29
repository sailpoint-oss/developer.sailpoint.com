---
id: accessrequestitemresponse
title: Accessrequestitemresponse
pagination_label: Accessrequestitemresponse
sidebar_label: Accessrequestitemresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestitemresponse', 'Accessrequestitemresponse'] 
slug: /tools/sdk/python/identity-history/models/accessrequestitemresponse
tags: ['SDK', 'Software Development Kit', 'Accessrequestitemresponse', 'Accessrequestitemresponse']
---

# Accessrequestitemresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | the access request item operation | [optional] 
**access_item_type** | **str** | the access item type | [optional] 
**name** | **str** | the name of access request item | [optional] 
**decision** |  **Enum** [  'APPROVED',    'REJECTED' ] | the final decision for the access request | [optional] 
**description** | **str** | the description of access request item | [optional] 
**source_id** | **str** | the source id | [optional] 
**source_name** | **str** | the source Name | [optional] 
**approval_infos** | [**[]Approvalinforesponse**](approvalinforesponse) |  | [optional] 
}

## Example

```python
from sailpoint.identity_history.models.accessrequestitemresponse import Accessrequestitemresponse

accessrequestitemresponse = Accessrequestitemresponse(
operation='Add',
access_item_type='role',
name='Role-1',
decision='APPROVED',
description='The role descrition',
source_id='8a80828f643d484f01643e14202e206f',
source_name='Source1',
approval_infos=[{"name":"John Snow","id":"8a80828f643d484f01643e14202e2000","status":"Approved"}]
)

```
[[Back to top]](#) 

