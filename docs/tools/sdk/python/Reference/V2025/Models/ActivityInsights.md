---
id: v2025-activity-insights
title: ActivityInsights
pagination_label: ActivityInsights
sidebar_label: ActivityInsights
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ActivityInsights', 'V2025ActivityInsights'] 
slug: /tools/sdk/python/v2025/models/activity-insights
tags: ['SDK', 'Software Development Kit', 'ActivityInsights', 'V2025ActivityInsights']
---

# ActivityInsights

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
from sailpoint.v2025.models.activity_insights import ActivityInsights

activity_insights = ActivityInsights(
account_id='c4ddd5421d8549f0abd309162cafd3b1',
usage_days=45,
usage_days_state='COMPLETE'
)

```
[[Back to top]](#) 

