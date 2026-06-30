---
id: roleminingidentity
title: Roleminingidentity
pagination_label: Roleminingidentity
sidebar_label: Roleminingidentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleminingidentity', 'Roleminingidentity'] 
slug: /tools/sdk/python/iai-role-mining/models/roleminingidentity
tags: ['SDK', 'Software Development Kit', 'Roleminingidentity', 'Roleminingidentity']
---

# Roleminingidentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the identity | [optional] 
**name** | **str** | Name of the identity | [optional] 
**attributes** | **map[string]str** |  | [optional] 
}

## Example

```python
from sailpoint.iai_role_mining.models.roleminingidentity import Roleminingidentity

roleminingidentity = Roleminingidentity(
id='2c9180877212632a017228d5934525e6',
name='Allene Abernathy-Welch',
attributes={"jobTitle":"SQL Developer","department":"IT","location":"NYC","firstName":"Allene"}
)

```
[[Back to top]](#) 

