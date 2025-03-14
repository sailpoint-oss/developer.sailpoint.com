---
id: beta-outlier
title: Outlier
pagination_label: Outlier
sidebar_label: Outlier
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Outlier', 'BetaOutlier'] 
slug: /tools/sdk/python/beta/models/outlier
tags: ['SDK', 'Software Development Kit', 'Outlier', 'BetaOutlier']
---

# Outlier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity's unique identifier for the outlier record | [optional] 
**identity_id** | **str** | The ID of the identity that is detected as an outlier | [optional] 
**type** |  **Enum** [  'LOW_SIMILARITY',    'STRUCTURAL' ] | The type of outlier summary | [optional] 
**first_detection_date** | **datetime** | The first date the outlier was detected | [optional] 
**latest_detection_date** | **datetime** | The most recent date the outlier was detected | [optional] 
**ignored** | **bool** | Flag whether or not the outlier has been ignored | [optional] 
**attributes** | **object** | Object containing mapped identity attributes | [optional] 
**score** | **float** | The outlier score determined by the detection engine ranging from 0..1 | [optional] 
**unignore_type** |  **Enum** [  'MANUAL',    'AUTOMATIC' ] | Enum value of if the outlier manually or automatically un-ignored. Will be NULL if outlier is not ignored | [optional] 
**unignore_date** | **datetime** | shows date when last time has been unignored outlier | [optional] 
**ignore_date** | **datetime** | shows date when last time has been ignored outlier | [optional] 
}

## Example

```python
from sailpoint.beta.models.outlier import Outlier

outlier = Outlier(
id='5be33d3e-c54d-4ed7-af73-2380543e8283',
identity_id='5be33d3e-c54d-4ed7-af73-2380543e8283',
type='LOW_SIMILARITY',
first_detection_date='2021-05-01T18:40:35.772Z',
latest_detection_date='2021-05-03T18:40:35.772Z',
ignored=False,
attributes={displayName=John Smith, jobTitle=Software Engineer, department=Engineering},
score=0.92,
unignore_type='MANUAL',
unignore_date='2021-06-01T18:40:35.772Z',
ignore_date='2021-06-01T18:40:35.772Z'
)

```
[[Back to top]](#) 

