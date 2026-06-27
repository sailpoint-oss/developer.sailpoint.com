---
id: update-multi-host-sources-v1-request-inner
title: UpdateMultiHostSourcesV1RequestInner
pagination_label: UpdateMultiHostSourcesV1RequestInner
sidebar_label: UpdateMultiHostSourcesV1RequestInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'UpdateMultiHostSourcesV1RequestInner', 'UpdateMultiHostSourcesV1RequestInner'] 
slug: /tools/sdk/python/multi-host-integration/models/update-multi-host-sources-v1-request-inner
tags: ['SDK', 'Software Development Kit', 'UpdateMultiHostSourcesV1RequestInner', 'UpdateMultiHostSourcesV1RequestInner']
---

# UpdateMultiHostSourcesV1RequestInner

A JSONPatch Operation as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'add',    'replace' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**UpdateMultiHostSourcesV1RequestInnerValue**](update-multi-host-sources-v1-request-inner-value) |  | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.update_multi_host_sources_v1_request_inner import UpdateMultiHostSourcesV1RequestInner

update_multi_host_sources_v1_request_inner = UpdateMultiHostSourcesV1RequestInner(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

