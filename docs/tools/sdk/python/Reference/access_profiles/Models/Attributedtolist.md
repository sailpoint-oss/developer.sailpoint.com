---
id: attributedtolist
title: Attributedtolist
pagination_label: Attributedtolist
sidebar_label: Attributedtolist
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attributedtolist', 'Attributedtolist'] 
slug: /tools/sdk/python/access-profiles/models/attributedtolist
tags: ['SDK', 'Software Development Kit', 'Attributedtolist', 'Attributedtolist']
---

# Attributedtolist


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]Attributedto**](attributedto) |  | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.attributedtolist import Attributedtolist

attributedtolist = Attributedtolist(
attributes=[{"key":"iscPrivacy","name":"Privacy","multiselect":false,"status":"active","type":"governance","objectTypes":["all"],"description":"Specifies the level of privacy associated with an access item.","values":[{"value":"public","name":"Public","status":"active"}]}]
)

```
[[Back to top]](#) 

