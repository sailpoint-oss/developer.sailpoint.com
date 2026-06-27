---
id: approvalbatch
title: Approvalbatch
pagination_label: Approvalbatch
sidebar_label: Approvalbatch
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalbatch', 'Approvalbatch'] 
slug: /tools/sdk/python/approvals/models/approvalbatch
tags: ['SDK', 'Software Development Kit', 'Approvalbatch', 'Approvalbatch']
---

# Approvalbatch

Batch properties if an approval is sent via batching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **str** | ID of the batch | [optional] 
**batch_size** | **int** | How many approvals are going to be in this batch. Defaults to 1 if not provided. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalbatch import Approvalbatch

approvalbatch = Approvalbatch(
batch_id='38453251-6be2-5f8f-df93-5ce19e295837',
batch_size=100
)

```
[[Back to top]](#) 

