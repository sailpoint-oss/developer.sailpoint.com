---
id: streamstatusresponse
title: Streamstatusresponse
pagination_label: Streamstatusresponse
sidebar_label: Streamstatusresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Streamstatusresponse', 'Streamstatusresponse'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/streamstatusresponse
tags: ['SDK', 'Software Development Kit', 'Streamstatusresponse', 'Streamstatusresponse']
---

# Streamstatusresponse

Stream status returned by GET/POST /ssf/streams/status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | Stream identifier. | [optional] 
**status** |  **Enum** [  'enabled',    'paused',    'disabled' ] | Operational status of the stream (enabled, paused, or disabled). | [optional] 
**reason** | **str** | Optional reason for the current status (e.g. set when status is updated). | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.streamstatusresponse import Streamstatusresponse

streamstatusresponse = Streamstatusresponse(
stream_id='550e8400-e29b-41d4-a716-446655440000',
status='enabled',
reason=''
)

```
[[Back to top]](#) 

