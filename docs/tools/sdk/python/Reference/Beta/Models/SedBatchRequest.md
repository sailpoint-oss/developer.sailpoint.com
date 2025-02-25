---
id: beta-sed-batch-request
title: SedBatchRequest
pagination_label: SedBatchRequest
sidebar_label: SedBatchRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SedBatchRequest', 'BetaSedBatchRequest'] 
slug: /tools/sdk/python/beta/models/sed-batch-request
tags: ['SDK', 'Software Development Kit', 'SedBatchRequest', 'BetaSedBatchRequest']
---

# SedBatchRequest

Sed Batch Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **[]str** | list of entitlement ids | [optional] 
**seds** | **[]str** | list of sed ids | [optional] 
}

## Example

```python
from sailpoint.beta.models.sed_batch_request import SedBatchRequest

sed_batch_request = SedBatchRequest(
entitlements=[
                    '016629d1-1d25-463f-97f3-c6686846650'
                    ],
seds=[
                    '016629d1-1d25-463f-97f3-c6686846650'
                    ]
)

```
[[Back to top]](#) 

