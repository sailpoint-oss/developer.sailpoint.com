---
id: beta-sod-policy-schedule
title: SodPolicySchedule
pagination_label: SodPolicySchedule
sidebar_label: SodPolicySchedule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodPolicySchedule', 'BetaSodPolicySchedule'] 
slug: /tools/sdk/python/beta/models/sod-policy-schedule
tags: ['SDK', 'Software Development Kit', 'SodPolicySchedule', 'BetaSodPolicySchedule']
---

# SodPolicySchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | SOD Policy schedule name | [optional] 
**created** | **datetime** | The time when this SOD policy schedule is created. | [optional] 
**modified** | **datetime** | The time when this SOD policy schedule is modified. | [optional] 
**description** | **str** | SOD Policy schedule description | [optional] 
**schedule** | [**Schedule1**](schedule1) |  | [optional] 
**recipients** | [**[]SodRecipient**](sod-recipient) |  | [optional] 
**email_empty_results** | **bool** | Indicates if empty results need to be emailed | [optional] 
**creator_id** | **str** | Policy's creator ID | [optional] 
**modifier_id** | **str** | Policy's modifier ID | [optional] 
}

## Example

```python
from sailpoint.beta.models.sod_policy_schedule import SodPolicySchedule

sod_policy_schedule = SodPolicySchedule(
name='SCH-1584312283015',
created='2020-01-01T00:00Z',
modified='2020-01-01T00:00Z',
description='Schedule for policy xyz',
schedule=sailpoint.beta.models.schedule_1.Schedule_1(
                    type = 'WEEKLY', 
                    months = null, 
                    days = null, 
                    hours = null, 
                    expiration = '2018-06-25T20:22:28.104Z', 
                    time_zone_id = 'America/Chicago', ),
recipients=[
                    sailpoint.beta.models.sod_recipient.SodRecipient(
                        type = 'IDENTITY', 
                        id = '2c7180a46faadee4016fb4e018c20642', 
                        name = 'Michael Michaels', )
                    ],
email_empty_results=False,
creator_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
modifier_id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde'
)

```
[[Back to top]](#) 

