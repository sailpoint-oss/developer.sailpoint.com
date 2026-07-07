---
id: machineidentityaggregationrequest
title: Machineidentityaggregationrequest
pagination_label: Machineidentityaggregationrequest
sidebar_label: Machineidentityaggregationrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineidentityaggregationrequest', 'Machineidentityaggregationrequest'] 
slug: /tools/sdk/python/machine-identities/models/machineidentityaggregationrequest
tags: ['SDK', 'Software Development Kit', 'Machineidentityaggregationrequest', 'Machineidentityaggregationrequest']
---

# Machineidentityaggregationrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_ids** | **[]str** | List of dataset Ids to aggregate machine identities | [required]
**disable_optimization** | **bool** | Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time. | [optional] [default to False]
}

## Example

```python
from sailpoint.machine_identities.models.machineidentityaggregationrequest import Machineidentityaggregationrequest

machineidentityaggregationrequest = Machineidentityaggregationrequest(
dataset_ids=[
                    'source:datasetId12345'
                    ],
disable_optimization=False
)

```
[[Back to top]](#) 

