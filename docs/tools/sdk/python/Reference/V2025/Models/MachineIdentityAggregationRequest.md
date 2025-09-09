---
id: v2025-machine-identity-aggregation-request
title: MachineIdentityAggregationRequest
pagination_label: MachineIdentityAggregationRequest
sidebar_label: MachineIdentityAggregationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineIdentityAggregationRequest', 'V2025MachineIdentityAggregationRequest'] 
slug: /tools/sdk/python/v2025/models/machine-identity-aggregation-request
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAggregationRequest', 'V2025MachineIdentityAggregationRequest']
---

# MachineIdentityAggregationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_ids** | **[]str** | List of dataset Ids to aggregate machine identities | [required]
}

## Example

```python
from sailpoint.v2025.models.machine_identity_aggregation_request import MachineIdentityAggregationRequest

machine_identity_aggregation_request = MachineIdentityAggregationRequest(
dataset_ids=[
                    'source:datasetId12345'
                    ]
)

```
[[Back to top]](#) 

