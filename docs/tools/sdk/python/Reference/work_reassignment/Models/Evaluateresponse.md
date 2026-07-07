---
id: evaluateresponse
title: Evaluateresponse
pagination_label: Evaluateresponse
sidebar_label: Evaluateresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Evaluateresponse', 'Evaluateresponse'] 
slug: /tools/sdk/python/work-reassignment/models/evaluateresponse
tags: ['SDK', 'Software Development Kit', 'Evaluateresponse', 'Evaluateresponse']
---

# Evaluateresponse

The response body for Evaluate Reassignment Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassign_to_id** | **str** | The Identity ID which should be the recipient of any work items sent to a specific identity & work type | [optional] 
**lookup_trail** | [**[]Lookupstep**](lookupstep) | List of Reassignments found by looking up the next `TargetIdentity` in a ReassignmentConfiguration | [optional] 
}

## Example

```python
from sailpoint.work_reassignment.models.evaluateresponse import Evaluateresponse

evaluateresponse = Evaluateresponse(
reassign_to_id='869320b6b6f34a169b6178b1a865e66f',
lookup_trail=[
                    sailpoint.work_reassignment.models.lookupstep.lookupstep(
                        reassigned_to_id = '869320b6b6f34a169b6178b1a865e66f', 
                        reassigned_from_id = '51948a8f306a4e7a9a6f8f5d032fa59e', 
                        reassignment_type = 'AUTOMATIC_REASSIGNMENT', )
                    ]
)

```
[[Back to top]](#) 

