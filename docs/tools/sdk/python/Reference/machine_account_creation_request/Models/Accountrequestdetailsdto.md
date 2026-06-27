---
id: accountrequestdetailsdto
title: Accountrequestdetailsdto
pagination_label: Accountrequestdetailsdto
sidebar_label: Accountrequestdetailsdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountrequestdetailsdto', 'Accountrequestdetailsdto'] 
slug: /tools/sdk/python/machine-account-creation-request/models/accountrequestdetailsdto
tags: ['SDK', 'Software Development Kit', 'Accountrequestdetailsdto', 'Accountrequestdetailsdto']
---

# Accountrequestdetailsdto

Represents a request to create a machine account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_request_id** | **str** | Account request ID. | [optional] 
**request_type** | **str** | Type of the account request. | [optional] 
**created_at** | **datetime** | Machine account creation request creation date and time. | [optional] [readonly] 
**completed_at** | **datetime** | Machine account creation request completion date and time. | [optional] [readonly] 
**overall_status** | **str** | Overall status of the creation request. | [optional] 
**requester** | [**AccountrequestdetailsdtoRequester**](accountrequestdetailsdto-requester) |  | [optional] 
**account_request_phases** | [**[]Accountrequestphase**](accountrequestphase) | List of account request phases. | [optional] 
**error_details** | **str** | Detailed error information. | [optional] 
}

## Example

```python
from sailpoint.machine_account_creation_request.models.accountrequestdetailsdto import Accountrequestdetailsdto

accountrequestdetailsdto = Accountrequestdetailsdto(
account_request_id='2d8180a46faadee4016fb4e018c20648',
request_type='CREATE_MACHINE_ACCOUNT',
created_at='2026-01-20T21:30Z',
completed_at='2026-01-20T21:35Z',
overall_status='SUCCESS',
requester=,
account_request_phases=[{"name":"APPROVAL_PHASE","state":"APPROVED","started":"2026-01-14T08:08:28.644090559Z","finished":"2026-01-14T08:38:42.707043142Z"},{"name":"PROVISIONING_PHASE","state":"PASSED","started":"2026-01-14T08:38:42.785577841Z","finished":"2026-01-14T08:38:45.932606296Z"}],
error_details='Detailed error message.'
)

```
[[Back to top]](#) 

