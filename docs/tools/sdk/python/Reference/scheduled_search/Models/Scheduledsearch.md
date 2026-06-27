---
id: scheduledsearch
title: Scheduledsearch
pagination_label: Scheduledsearch
sidebar_label: Scheduledsearch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Scheduledsearch', 'Scheduledsearch'] 
slug: /tools/sdk/python/scheduled-search/models/scheduledsearch
tags: ['SDK', 'Software Development Kit', 'Scheduledsearch', 'Scheduledsearch']
---

# Scheduledsearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the scheduled search.  | [optional] 
**description** | **str** | The description of the scheduled search.  | [optional] 
**saved_search_id** | **str** | The ID of the saved search that will be executed. | [required]
**created** | **datetime** | The date the scheduled search was initially created. | [optional] [readonly] 
**modified** | **datetime** | The last date the scheduled search was modified. | [optional] [readonly] 
**schedule** | [**Schedule**](schedule) |  | [required]
**recipients** | [**[]SearchscheduleRecipientsInner**](searchschedule-recipients-inner) | A list of identities that should receive the scheduled search report via email. | [required]
**enabled** | **bool** | Indicates if the scheduled search is enabled.  | [optional] [default to False]
**email_empty_results** | **bool** | Indicates if email generation should occur when search returns no results.  | [optional] [default to False]
**display_query_details** | **bool** | Indicates if the generated email should include the query and search results preview (which could include PII).  | [optional] [default to False]
**id** | **str** | The scheduled search ID. | [required][readonly] 
**owner** | [**ScheduledsearchAllOfOwner**](scheduledsearch-all-of-owner) |  | [required]
**owner_id** | **str** | The ID of the scheduled search owner.  Please use the `id` in the `owner` object instead.  | [required][readonly] 
}

## Example

```python
from sailpoint.scheduled_search.models.scheduledsearch import Scheduledsearch

scheduledsearch = Scheduledsearch(
name='Daily disabled accounts',
description='Daily disabled accounts',
saved_search_id='554f1511-f0a1-4744-ab14-599514d3e57c',
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
schedule=sailpoint.scheduled_search.models.schedule.schedule(
                    type = 'WEEKLY', 
                    months = null, 
                    days = null, 
                    hours = null, 
                    expiration = '2018-06-25T20:22:28.104Z', 
                    time_zone_id = 'America/Chicago', ),
recipients=[
                    sailpoint.scheduled_search.models.searchschedule_recipients_inner.searchschedule_recipients_inner(
                        type = 'IDENTITY', 
                        id = '2c9180867624cbd7017642d8c8c81f67', )
                    ],
enabled=False,
email_empty_results=False,
display_query_details=False,
id='0de46054-fe90-434a-b84e-c6b3359d0c64',
owner=sailpoint.scheduled_search.models.scheduledsearch_all_of_owner.scheduledsearch_allOf_owner(
                    type = 'IDENTITY', 
                    id = '2c9180867624cbd7017642d8c8c81f67', ),
owner_id='2c9180867624cbd7017642d8c8c81f67'
)

```
[[Back to top]](#) 

