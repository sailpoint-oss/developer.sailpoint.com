---
id: roleminingpotentialrolesourceusage
title: Roleminingpotentialrolesourceusage
pagination_label: Roleminingpotentialrolesourceusage
sidebar_label: Roleminingpotentialrolesourceusage
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingpotentialrolesourceusage', 'Roleminingpotentialrolesourceusage'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingpotentialrolesourceusage
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialrolesourceusage', 'Roleminingpotentialrolesourceusage']
---

# Roleminingpotentialrolesourceusage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**display_name** | **str** | Display name for the identity | [optional] 
**email** | **str** | Email address for the identity | [optional] 
**usage_count** | **int** | The number of days there has been usage of the source by the identity. | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingpotentialrolesourceusage import Roleminingpotentialrolesourceusage

roleminingpotentialrolesourceusage = Roleminingpotentialrolesourceusage(
id='2c918089762475180176267f894b54dc',
display_name='Kirk Koepp',
email='kirk.koepp@testmail.identitynow.com',
usage_count=25
)

```
[[Back to top]](#) 

