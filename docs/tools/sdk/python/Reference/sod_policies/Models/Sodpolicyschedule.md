---
id: sodpolicyschedule
title: Sodpolicyschedule
pagination_label: Sodpolicyschedule
sidebar_label: Sodpolicyschedule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodpolicyschedule', 'Sodpolicyschedule'] 
slug: /tools/sdk/python/sod-policies/models/sodpolicyschedule
tags: ['SDK', 'Software Development Kit', 'Sodpolicyschedule', 'Sodpolicyschedule']
---

# Sodpolicyschedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | SOD Policy schedule name | [optional] 
**created** | **datetime** | The time when this SOD policy schedule is created. | [optional] [readonly] 
**modified** | **datetime** | The time when this SOD policy schedule is modified. | [optional] [readonly] 
**description** | **str** | SOD Policy schedule description | [optional] 
**schedule** | [**Schedule**](schedule) |  | [optional] 
**recipients** | [**[]Sodrecipient**](sodrecipient) |  | [optional] 
**email_empty_results** | **bool** | Indicates if empty results need to be emailed | [optional] [default to False]
**creator_id** | **str** | Policy's creator ID | [optional] [readonly] 
**modifier_id** | **str** | Policy's modifier ID | [optional] [readonly] 
}

## Example

```python
from sailpoint.sod_policies.models.sodpolicyschedule import Sodpolicyschedule

sodpolicyschedule = Sodpolicyschedule(
name='SCH-1584312283015',
created='2020-01-01T00:00Z',
modified='2020-01-01T00:00Z',
description='Schedule for policy xyz',
schedule=sailpoint.sod_policies.models.schedule.schedule(
                    type = 'WEEKLY', 
                    months = null, 
                    days = null, 
                    hours = null, 
                    expiration = '2018-06-25T20:22:28.104Z', 
                    time_zone_id = 'America/Chicago', ),
recipients=[
                    sailpoint.sod_policies.models.sod_recipient.Sod Recipient(
                        type = 'IDENTITY', 
                        id = '2c7180a46faadee4016fb4e018c20642', 
                        name = 'Michael Michaels', )
                    ],
email_empty_results=False,
creator_id='0f11f2a47c944bf3a2bd742580fe3bde',
modifier_id='0f11f2a47c944bf3a2bd742580fe3bde'
)

```
[[Back to top]](#) 

