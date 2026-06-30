---
id: taskresultdetails
title: Taskresultdetails
pagination_label: Taskresultdetails
sidebar_label: Taskresultdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taskresultdetails', 'Taskresultdetails'] 
slug: /tools/sdk/python/reports-data-extraction/models/taskresultdetails
tags: ['SDK', 'Software Development Kit', 'Taskresultdetails', 'Taskresultdetails']
---

# Taskresultdetails

Details about job or task type, state and lifecycle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'QUARTZ',    'QPOC',    'MENTOS',    'QUEUED_TASK' ] | Type of the job or task underlying in the report processing. It could be a quartz task, QPOC or MENTOS jobs or a refresh/sync task. | [optional] 
**id** | **str** | Unique task definition identifier. | [optional] 
**report_type** |  **Enum** [  'ACCOUNTS',    'IDENTITIES_DETAILS',    'IDENTITIES',    'IDENTITY_PROFILE_IDENTITY_ERROR',    'ORPHAN_IDENTITIES',    'SEARCH_EXPORT',    'UNCORRELATED_ACCOUNTS' ] | Use this property to define what report should be processed in the RDE service. | [optional] 
**description** | **str** | Description of the report purpose and/or contents. | [optional] 
**parent_name** | **str** | Name of the parent task/report if exists. | [optional] 
**launcher** | **str** | Name of the report processing initiator. | [optional] 
**created** | **datetime** | Report creation date | [optional] 
**launched** | **datetime** | Report start date | [optional] 
**completed** | **datetime** | Report completion date | [optional] 
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMP_ERROR' ] | Report completion status. | [optional] 
**messages** | [**[]TaskresultdetailsMessagesInner**](taskresultdetails-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**returns** | [**[]TaskresultdetailsReturnsInner**](taskresultdetails-returns-inner) | Task definition results, if necessary. | [optional] 
**attributes** | **object** | Extra attributes map(dictionary) needed for the report. | [optional] 
**progress** | **str** | Current report state. | [optional] 
}

## Example

```python
from sailpoint.reports_data_extraction.models.taskresultdetails import Taskresultdetails

taskresultdetails = Taskresultdetails(
type='MENTOS',
id='a248c16fe22222b2bd49615481311111',
report_type='IDENTITIES_DETAILS',
description='A detailed view of the identities in the system.',
parent_name='Audit Report',
launcher='cloudadmin',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
launched=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
completed=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
completion_status='Success',
messages=[],
returns=[],
attributes={"org":"an-org"},
progress='Initializing...'
)

```
[[Back to top]](#) 

