---
id: beta-test-source-connection-multihost200-response
title: TestSourceConnectionMultihost200Response
pagination_label: TestSourceConnectionMultihost200Response
sidebar_label: TestSourceConnectionMultihost200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TestSourceConnectionMultihost200Response', 'BetaTestSourceConnectionMultihost200Response'] 
slug: /tools/sdk/python/beta/models/test-source-connection-multihost200-response
tags: ['SDK', 'Software Development Kit', 'TestSourceConnectionMultihost200Response', 'BetaTestSourceConnectionMultihost200Response']
---

# TestSourceConnectionMultihost200Response


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
from sailpoint.beta.models.test_source_connection_multihost200_response import TestSourceConnectionMultihost200Response

test_source_connection_multihost200_response = TestSourceConnectionMultihost200Response(
success=True,
message='Tes.',
timing=56,
result_type=SOURCE_STATE_HEALTHY,
test_connection_details=''
)

```
[[Back to top]](#) 

