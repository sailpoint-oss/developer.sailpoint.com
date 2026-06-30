---
id: multihostintegrationtemplatetype
title: Multihostintegrationtemplatetype
pagination_label: Multihostintegrationtemplatetype
sidebar_label: Multihostintegrationtemplatetype
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Multihostintegrationtemplatetype', 'Multihostintegrationtemplatetype'] 
slug: /tools/sdk/python/multi-host-integration/models/multihostintegrationtemplatetype
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationtemplatetype', 'Multihostintegrationtemplatetype']
---

# Multihostintegrationtemplatetype

This represents a Multi-Host Integration template type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the name of the type. | [optional] 
**type** | **str** | This is the type value for the type. | [required]
**script_name** | **str** | This is the scriptName attribute value for the type. | [required]
}

## Example

```python
from sailpoint.multi_host_integration.models.multihostintegrationtemplatetype import Multihostintegrationtemplatetype

multihostintegrationtemplatetype = Multihostintegrationtemplatetype(
name='aName',
type='aType',
script_name='aScriptName'
)

```
[[Back to top]](#) 

