---
id: recommendation
title: Recommendation
pagination_label: Recommendation
sidebar_label: Recommendation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Recommendation', 'Recommendation'] 
slug: /tools/sdk/python/v3/models/recommendation
tags: ['SDK', 'Software Development Kit', 'Recommendation', 'Recommendation']
---

# Recommendation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'HUMAN',    'MACHINE' ] | Recommended type of account. | [required]
**method** |  **Enum** [  'DISCOVERY',    'SOURCE',    'CRITERIA' ] | Method used to produce the recommendation. DISCOVERY - suggested by AI, SOURCE - the account comes from a source flagged as containing machine accounts, CRITERIA - the account satisfies classification criteria. | [required]
}

## Example

```python
from sailpoint.v3.models.recommendation import Recommendation

recommendation = Recommendation(
type='MACHINE',
method='DISCOVERY'
)

```
[[Back to top]](#) 

