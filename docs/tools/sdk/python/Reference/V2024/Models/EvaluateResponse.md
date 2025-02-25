---
id: v2024-evaluate-response
title: EvaluateResponse
pagination_label: EvaluateResponse
sidebar_label: EvaluateResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EvaluateResponse', 'V2024EvaluateResponse'] 
slug: /tools/sdk/python/v2024/models/evaluate-response
tags: ['SDK', 'Software Development Kit', 'EvaluateResponse', 'V2024EvaluateResponse']
---

# EvaluateResponse

The response body for Evaluate Reassignment Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassign_to_id** | **str** | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [optional] 
**lookup_trail** | [**[]LookupStep**](lookup-step) | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [optional] 
}

## Example

```python
from sailpoint.v2024.models.evaluate_response import EvaluateResponse

evaluate_response = EvaluateResponse(
reassign_to_id='869320b6b6f34a169b6178b1a865e66f',
lookup_trail=[
                    sailpoint.v2024.models.lookup_step.LookupStep(
                        reassigned_to_id = '869320b6b6f34a169b6178b1a865e66f', 
                        reassigned_from_id = '51948a8f306a4e7a9a6f8f5d032fa59e', 
                        reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                    ]
)

```
[[Back to top]](#) 

