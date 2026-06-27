---
id: patowner
title: Patowner
pagination_label: Patowner
sidebar_label: Patowner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Patowner', 'Patowner'] 
slug: /tools/sdk/python/personal-access-tokens/models/patowner
tags: ['SDK', 'Software Development Kit', 'Patowner', 'Patowner']
---

# Patowner

Personal access token owner's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Personal access token owner's DTO type. | [optional] 
**id** | **str** | Personal access token owner's identity ID. | [optional] 
**name** | **str** | Personal access token owner's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.personal_access_tokens.models.patowner import Patowner

patowner = Patowner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 

