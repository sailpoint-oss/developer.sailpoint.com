---
id: accountaggregationcompleted
title: Accountaggregationcompleted
pagination_label: Accountaggregationcompleted
sidebar_label: Accountaggregationcompleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountaggregationcompleted', 'Accountaggregationcompleted'] 
slug: /tools/sdk/python/triggers/models/accountaggregationcompleted
tags: ['SDK', 'Software Development Kit', 'Accountaggregationcompleted', 'Accountaggregationcompleted']
---

# Accountaggregationcompleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**AccountaggregationcompletedSource**](accountaggregationcompleted-source) |  | [required]
**status** |  **Enum** [  'Success',    'Failed',    'Terminated' ] | The overall status of the aggregation. | [required]
**started** | **datetime** | The date and time when the account aggregation started. | [required]
**completed** | **datetime** | The date and time when the account aggregation finished. | [required]
**errors** | **[]str** | A list of errors that occurred during the aggregation. | [required]
**warnings** | **[]str** | A list of warnings that occurred during the aggregation. | [required]
**stats** | [**AccountaggregationcompletedStats**](accountaggregationcompleted-stats) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accountaggregationcompleted import Accountaggregationcompleted

accountaggregationcompleted = Accountaggregationcompleted(
source=sailpoint.triggers.models.accountaggregationcompleted_source.accountaggregationcompleted_source(
                    type = 'SOURCE', 
                    id = '2c9180835d191a86015d28455b4b232a', 
                    name = 'HR Active Directory', ),
status='Success',
started='2020-06-29T22:01:50.474Z',
completed='2020-06-29T22:02:04.090Z',
errors=[
                    'Accounts unable to be aggregated.'
                    ],
warnings=[
                    'Account Skipped'
                    ],
stats=sailpoint.triggers.models.accountaggregationcompleted_stats.accountaggregationcompleted_stats(
                    scanned = 200, 
                    unchanged = 190, 
                    changed = 6, 
                    added = 4, 
                    removed = 3, )
)

```
[[Back to top]](#) 

