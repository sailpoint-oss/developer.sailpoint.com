---
id: sourcecreationerrors
title: Sourcecreationerrors
pagination_label: Sourcecreationerrors
sidebar_label: Sourcecreationerrors
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sourcecreationerrors', 'Sourcecreationerrors'] 
slug: /tools/sdk/python/multi-host-integration/models/sourcecreationerrors
tags: ['SDK', 'Software Development Kit', 'Sourcecreationerrors', 'Sourcecreationerrors']
---

# Sourcecreationerrors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multihost_id** | **str** | Multi-Host Integration ID. | [optional] [readonly] 
**source_name** | **str** | Source's human-readable name. | [optional] 
**source_error** | **str** | Source's human-readable description. | [optional] 
**created** | **datetime** | Date-time when the source was created | [optional] 
**modified** | **datetime** | Date-time when the source was last modified. | [optional] 
**operation** | **str** | operation category (e.g. DELETE). | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.sourcecreationerrors import Sourcecreationerrors

sourcecreationerrors = Sourcecreationerrors(
multihost_id='2c91808568c529c60168cca6f90c1324',
source_name='My Source',
source_error='Source with internal name "My Source [source]" already exists.',
created='2022-02-08T14:50:03.827Z',
modified='2024-01-23T18:08:50.897Z',
operation='DELETE'
)

```
[[Back to top]](#) 

