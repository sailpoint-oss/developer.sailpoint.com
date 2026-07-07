---
id: roleinsightsresponse
title: Roleinsightsresponse
pagination_label: Roleinsightsresponse
sidebar_label: Roleinsightsresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleinsightsresponse', 'Roleinsightsresponse'] 
slug: /tools/sdk/python/role-insights/models/roleinsightsresponse
tags: ['SDK', 'Software Development Kit', 'Roleinsightsresponse', 'Roleinsightsresponse']
---

# Roleinsightsresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Request Id for a role insight generation request | [optional] 
**created_date** | **datetime** | The date-time role insights request was created. | [optional] 
**last_generated** | **datetime** | The date-time role insights request was completed. | [optional] 
**number_of_updates** | **int** | Total number of updates for this request. Starts with 0 and will have correct number when request is COMPLETED. | [optional] 
**role_ids** | **[]str** | The role IDs that are in this request. | [optional] 
**status** |  **Enum** [  'CREATED',    'IN PROGRESS',    'COMPLETED',    'FAILED' ] | Request status | [optional] 
}

## Example

```python
from sailpoint.role_insights.models.roleinsightsresponse import Roleinsightsresponse

roleinsightsresponse = Roleinsightsresponse(
id='8c190e67-87aa-4ed9-a90b-d9d5344523fb',
created_date='2020-09-16T18:49:32.150Z',
last_generated='2020-09-16T18:50:12.150Z',
number_of_updates=0,
role_ids=[
                    ''
                    ],
status='CREATED'
)

```
[[Back to top]](#) 

