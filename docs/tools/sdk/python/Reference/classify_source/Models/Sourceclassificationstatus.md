---
id: sourceclassificationstatus
title: Sourceclassificationstatus
pagination_label: Sourceclassificationstatus
sidebar_label: Sourceclassificationstatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourceclassificationstatus', 'Sourceclassificationstatus'] 
slug: /tools/sdk/python/classify-source/models/sourceclassificationstatus
tags: ['SDK', 'Software Development Kit', 'Sourceclassificationstatus', 'Sourceclassificationstatus']
---

# Sourceclassificationstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'STARTED',    'COLLECTED',    'COMPLETED',    'CANCELLED',    'TERMINATED' ] | Status of Classification Process | [optional] 
**started** | **datetime** | Time when the process was started | [optional] 
**updated** | **datetime** | Time when the process status was last updated | [optional] 
**counts** | [**SourceclassificationstatusAllOfCounts**](sourceclassificationstatus-all-of-counts) |  | [optional] 
}

## Example

```python
from sailpoint.classify_source.models.sourceclassificationstatus import Sourceclassificationstatus

sourceclassificationstatus = Sourceclassificationstatus(
status='COMPLETED',
started='2017-07-11T18:45:37.098Z',
updated='2018-06-25T20:22:28.104Z',
counts=sailpoint.classify_source.models.sourceclassificationstatus_all_of_counts.sourceclassificationstatus_allOf_counts(
                    expected = 1000, 
                    received = 800, 
                    completed = 500, )
)

```
[[Back to top]](#) 

