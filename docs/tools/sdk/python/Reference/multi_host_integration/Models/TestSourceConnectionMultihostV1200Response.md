---
id: test-source-connection-multihost-v1200-response
title: TestSourceConnectionMultihostV1200Response
pagination_label: TestSourceConnectionMultihostV1200Response
sidebar_label: TestSourceConnectionMultihostV1200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TestSourceConnectionMultihostV1200Response', 'TestSourceConnectionMultihostV1200Response'] 
slug: /tools/sdk/python/multi-host-integration/models/test-source-connection-multihost-v1200-response
tags: ['SDK', 'Software Development Kit', 'TestSourceConnectionMultihostV1200Response', 'TestSourceConnectionMultihostV1200Response']
---

# TestSourceConnectionMultihostV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | Source's test connection status. | [optional] 
**message** | **str** | Source's test connection message. | [optional] 
**timing** | **int** | Source's test connection timing. | [optional] 
**result_type** |  **Enum** [  'SOURCE_STATE_ERROR_CLUSTER',    'SOURCE_STATE_ERROR_SOURCE',    'SOURCE_STATE_ERROR_VA',    'SOURCE_STATE_FAILURE_CLUSTER',    'SOURCE_STATE_FAILURE_SOURCE',    'SOURCE_STATE_HEALTHY',    'SOURCE_STATE_UNCHECKED_CLUSTER',    'SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES',    'SOURCE_STATE_UNCHECKED_SOURCE',    'SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS',    'SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT' ] | Source's human-readable result type. | [optional] 
**test_connection_details** | **str** | Source's human-readable test connection details. | [optional] 
}

## Example

```python
from sailpoint.multi_host_integration.models.test_source_connection_multihost_v1200_response import TestSourceConnectionMultihostV1200Response

test_source_connection_multihost_v1200_response = TestSourceConnectionMultihostV1200Response(
success=True,
message='Tes.',
timing=30437,
result_type='SOURCE_STATE_HEALTHY',
test_connection_details=''
)

```
[[Back to top]](#) 

