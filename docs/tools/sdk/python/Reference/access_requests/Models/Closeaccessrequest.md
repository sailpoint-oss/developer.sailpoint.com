---
id: closeaccessrequest
title: Closeaccessrequest
pagination_label: Closeaccessrequest
sidebar_label: Closeaccessrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Closeaccessrequest', 'Closeaccessrequest'] 
slug: /tools/sdk/python/access-requests/models/closeaccessrequest
tags: ['SDK', 'Software Development Kit', 'Closeaccessrequest', 'Closeaccessrequest']
---

# Closeaccessrequest

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
from sailpoint.access_requests.models.closeaccessrequest import Closeaccessrequest

closeaccessrequest = Closeaccessrequest(
access_request_ids=["2c90ad2a70ace7d50170acf22ca90010"],
message='The IdentityNow Administrator manually closed this request.',
execution_status='Terminated',
completion_status='Failure'
)

```
[[Back to top]](#) 

