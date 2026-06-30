---
id: updatestreamstatusrequest
title: Updatestreamstatusrequest
pagination_label: Updatestreamstatusrequest
sidebar_label: Updatestreamstatusrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Updatestreamstatusrequest', 'Updatestreamstatusrequest'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/models/updatestreamstatusrequest
tags: ['SDK', 'Software Development Kit', 'Updatestreamstatusrequest', 'Updatestreamstatusrequest']
---

# Updatestreamstatusrequest

Request body for POST /ssf/streams/status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | ID of the stream whose status to update. | [required]
**status** |  **Enum** [  'enabled',    'paused',    'disabled' ] | Desired stream status. | [required]
**reason** | **str** | Optional reason for the status change. | [optional] 
}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.updatestreamstatusrequest import Updatestreamstatusrequest

updatestreamstatusrequest = Updatestreamstatusrequest(
stream_id='550e8400-e29b-41d4-a716-446655440000',
status='paused',
reason='manually paused'
)

```
[[Back to top]](#) 

