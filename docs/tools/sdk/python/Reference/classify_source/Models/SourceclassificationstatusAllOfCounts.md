---
id: sourceclassificationstatus-all-of-counts
title: SourceclassificationstatusAllOfCounts
pagination_label: SourceclassificationstatusAllOfCounts
sidebar_label: SourceclassificationstatusAllOfCounts
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceclassificationstatusAllOfCounts', 'SourceclassificationstatusAllOfCounts'] 
slug: /tools/sdk/python/classify-source/models/sourceclassificationstatus-all-of-counts
tags: ['SDK', 'Software Development Kit', 'SourceclassificationstatusAllOfCounts', 'SourceclassificationstatusAllOfCounts']
---

# SourceclassificationstatusAllOfCounts

A map containing numbers relevant to the source classification process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected** | **int** | total number of source accounts | [required]
**received** | **int** | number of accounts that have been sent for processing (should be the same as expected when all accounts are collected) | [required]
**completed** | **int** | number of accounts that have been classified | [required]
}

## Example

```python
from sailpoint.classify_source.models.sourceclassificationstatus_all_of_counts import SourceclassificationstatusAllOfCounts

sourceclassificationstatus_all_of_counts = SourceclassificationstatusAllOfCounts(
expected=1000,
received=800,
completed=500
)

```
[[Back to top]](#) 

