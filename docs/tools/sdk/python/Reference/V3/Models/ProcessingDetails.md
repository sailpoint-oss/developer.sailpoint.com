---
id: processing-details
title: ProcessingDetails
pagination_label: ProcessingDetails
sidebar_label: ProcessingDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProcessingDetails', 'ProcessingDetails'] 
slug: /tools/sdk/python/v3/models/processing-details
tags: ['SDK', 'Software Development Kit', 'ProcessingDetails', 'ProcessingDetails']
---

# ProcessingDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | A date-time in ISO-8601 format | [optional] 
**stage** | **str** |  | [optional] 
**retry_count** | **int** |  | [optional] 
**stack_trace** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.processing_details import ProcessingDetails

processing_details = ProcessingDetails(
var_date='2018-06-25T20:22:28.104Z',
stage='In Process',
retry_count=0,
stack_trace='<stack trace>',
message='<message>'
)

```
[[Back to top]](#) 

