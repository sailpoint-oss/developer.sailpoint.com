---
id: promptinsightsmetrics
title: Promptinsightsmetrics
pagination_label: Promptinsightsmetrics
sidebar_label: Promptinsightsmetrics
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Promptinsightsmetrics', 'Promptinsightsmetrics'] 
slug: /tools/sdk/python/prompt-insights/models/promptinsightsmetrics
tags: ['SDK', 'Software Development Kit', 'Promptinsightsmetrics', 'Promptinsightsmetrics']
---

# Promptinsightsmetrics

Aggregate prompt insights metrics for the requested time window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompts_scanned** | **int** | Count of prompts scanned in the interval. | [optional] 
**prompts_redacted** | **int** | Count of prompts redacted in the interval. | [optional] 
}

## Example

```python
from sailpoint.prompt_insights.models.promptinsightsmetrics import Promptinsightsmetrics

promptinsightsmetrics = Promptinsightsmetrics(
prompts_scanned=125000,
prompts_redacted=89
)

```
[[Back to top]](#) 

