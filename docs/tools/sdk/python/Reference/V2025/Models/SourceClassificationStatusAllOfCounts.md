---
id: v2025-source-classification-status-all-of-counts
title: SourceClassificationStatusAllOfCounts
pagination_label: SourceClassificationStatusAllOfCounts
sidebar_label: SourceClassificationStatusAllOfCounts
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceClassificationStatusAllOfCounts', 'V2025SourceClassificationStatusAllOfCounts'] 
slug: /tools/sdk/python/v2025/models/source-classification-status-all-of-counts
tags: ['SDK', 'Software Development Kit', 'SourceClassificationStatusAllOfCounts', 'V2025SourceClassificationStatusAllOfCounts']
---

# SourceClassificationStatusAllOfCounts

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
from sailpoint.v2025.models.source_classification_status_all_of_counts import SourceClassificationStatusAllOfCounts

source_classification_status_all_of_counts = SourceClassificationStatusAllOfCounts(
expected=1000,
received=800,
completed=500
)

```
[[Back to top]](#) 

