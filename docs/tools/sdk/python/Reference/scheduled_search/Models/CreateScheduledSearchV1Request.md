---
id: create-scheduled-search-v1-request
title: CreateScheduledSearchV1Request
pagination_label: CreateScheduledSearchV1Request
sidebar_label: CreateScheduledSearchV1Request
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateScheduledSearchV1Request', 'CreateScheduledSearchV1Request'] 
slug: /tools/sdk/python/scheduled-search/models/create-scheduled-search-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateScheduledSearchV1Request', 'CreateScheduledSearchV1Request']
---

# CreateScheduledSearchV1Request


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
}

## Example

```python
from sailpoint.scheduled_search.models.create_scheduled_search_v1_request import CreateScheduledSearchV1Request

create_scheduled_search_v1_request = CreateScheduledSearchV1Request(
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
display_query_details=False
)

```
[[Back to top]](#) 

