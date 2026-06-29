---
id: summaryresponse
title: Summaryresponse
pagination_label: Summaryresponse
sidebar_label: Summaryresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Summaryresponse', 'Summaryresponse'] 
slug: /tools/sdk/python/api-usage/models/summaryresponse
tags: ['SDK', 'Software Development Kit', 'Summaryresponse', 'Summaryresponse']
---

# Summaryresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_uri** | **str** | The endpoint of a SailPoint API | [optional] 
**number_of_calls** | **int** | Number of calls made to a specific SailPoint API | [optional] 
}

## Example

```python
from sailpoint.api_usage.models.summaryresponse import Summaryresponse

summaryresponse = Summaryresponse(
requested_uri='/v2024/auth-org/session-config',
number_of_calls=10
)

```
[[Back to top]](#) 

