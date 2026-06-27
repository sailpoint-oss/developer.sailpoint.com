---
id: activityinsights
title: Activityinsights
pagination_label: Activityinsights
sidebar_label: Activityinsights
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Activityinsights', 'Activityinsights'] 
slug: /tools/sdk/python/certification-summaries/models/activityinsights
tags: ['SDK', 'Software Development Kit', 'Activityinsights', 'Activityinsights']
---

# Activityinsights

Insights into account activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | UUID of the account | [optional] 
**usage_days** | **int** | The number of days of activity | [optional] 
**usage_days_state** |  **Enum** [  'COMPLETE',    'UNKNOWN' ] | Status indicating if the activity is complete or unknown | [optional] 
}

## Example

```python
from sailpoint.certification_summaries.models.activityinsights import Activityinsights

activityinsights = Activityinsights(
account_id='c4ddd5421d8549f0abd309162cafd3b1',
usage_days=45,
usage_days_state='COMPLETE'
)

```
[[Back to top]](#) 

