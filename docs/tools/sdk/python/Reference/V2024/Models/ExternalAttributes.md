---
id: v2024-external-attributes
title: ExternalAttributes
pagination_label: ExternalAttributes
sidebar_label: ExternalAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExternalAttributes', 'V2024ExternalAttributes'] 
slug: /tools/sdk/python/v2024/models/external-attributes
tags: ['SDK', 'Software Development Kit', 'ExternalAttributes', 'V2024ExternalAttributes']
---

# ExternalAttributes

Attributes related to an external trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A unique name for the external trigger | [optional] 
**description** | **str** | Additional context about the external trigger | [optional] 
**client_id** | **str** | OAuth Client ID to authenticate with this trigger | [optional] 
**url** | **str** | URL to invoke this workflow | [optional] 
}

## Example

```python
from sailpoint.v2024.models.external_attributes import ExternalAttributes

external_attributes = ExternalAttributes(
name='search-and-notify',
description='Run a search and notify the results',
client_id='87e239b2-b85b-4bde-b9a7-55bf304ddcdc',
url='https://tenant.api.identitynow.com/beta/workflows/execute/external/c79e0079-562c-4df5-aa73-60a9e25c916d'
)

```
[[Back to top]](#) 

