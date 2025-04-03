---
id: v2025-close-access-request
title: CloseAccessRequest
pagination_label: CloseAccessRequest
sidebar_label: CloseAccessRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CloseAccessRequest', 'V2025CloseAccessRequest'] 
slug: /tools/sdk/python/v2025/models/close-access-request
tags: ['SDK', 'Software Development Kit', 'CloseAccessRequest', 'V2025CloseAccessRequest']
---

# CloseAccessRequest

Request body payload for close access requests endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_ids** | **[]str** | Access Request IDs for the requests to be closed. Accepts 1-500 Identity Request IDs per request. | [required]
**message** | **str** | Reason for closing the access request. Displayed under Warnings in IdentityNow. | [optional] [default to 'The IdentityNow Administrator manually closed this request.']
**execution_status** |  **Enum** [  'Terminated',    'Completed' ] | The request's provisioning status. Displayed as Stage in IdentityNow. | [optional] [default to 'Terminated']
**completion_status** |  **Enum** [  'Success',    'Incomplete',    'Failure' ] | The request's overall status. Displayed as Status in IdentityNow. | [optional] [default to 'Failure']
}

## Example

```python
from sailpoint.v2025.models.close_access_request import CloseAccessRequest

close_access_request = CloseAccessRequest(
access_request_ids=[2c90ad2a70ace7d50170acf22ca90010],
message='The IdentityNow Administrator manually closed this request.',
execution_status='Terminated',
completion_status='Failure'
)

```
[[Back to top]](#) 

