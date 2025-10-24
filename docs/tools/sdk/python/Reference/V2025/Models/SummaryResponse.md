---
id: v2025-summary-response
title: SummaryResponse
pagination_label: SummaryResponse
sidebar_label: SummaryResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SummaryResponse', 'V2025SummaryResponse'] 
slug: /tools/sdk/python/v2025/models/summary-response
tags: ['SDK', 'Software Development Kit', 'SummaryResponse', 'V2025SummaryResponse']
---

# SummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_uri** | **str** | The endpoint of a SailPoint API | [optional] 
**number_of_calls** | **int** | Number of calls made to a specific SailPoint API | [optional] 
}

## Example

```python
from sailpoint.v2025.models.summary_response import SummaryResponse

summary_response = SummaryResponse(
requested_uri='/v2024/auth-org/session-config',
number_of_calls=10
)

```
[[Back to top]](#) 

