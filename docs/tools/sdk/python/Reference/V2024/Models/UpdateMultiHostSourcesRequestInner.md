---
id: v2024-update-multi-host-sources-request-inner
title: UpdateMultiHostSourcesRequestInner
pagination_label: UpdateMultiHostSourcesRequestInner
sidebar_label: UpdateMultiHostSourcesRequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UpdateMultiHostSourcesRequestInner', 'V2024UpdateMultiHostSourcesRequestInner'] 
slug: /tools/sdk/python/v2024/models/update-multi-host-sources-request-inner
tags: ['SDK', 'Software Development Kit', 'UpdateMultiHostSourcesRequestInner', 'V2024UpdateMultiHostSourcesRequestInner']
---

# UpdateMultiHostSourcesRequestInner

A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'replace' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.update_multi_host_sources_request_inner import UpdateMultiHostSourcesRequestInner

update_multi_host_sources_request_inner = UpdateMultiHostSourcesRequestInner(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

