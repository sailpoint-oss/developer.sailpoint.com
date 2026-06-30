---
id: accountactionrequestdto
title: Accountactionrequestdto
pagination_label: Accountactionrequestdto
sidebar_label: Accountactionrequestdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountactionrequestdto', 'Accountactionrequestdto'] 
slug: /tools/sdk/python/account-deletion-requests/models/accountactionrequestdto
tags: ['SDK', 'Software Development Kit', 'Accountactionrequestdto', 'Accountactionrequestdto']
---

# Accountactionrequestdto

Represents a request to perform an action on an account, such as deletion or modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_request_id** | **str** | Account requester ID. | [optional] 
**request_type** | **str** | Access item requester's identity ID. | [optional] 
**created_at** | **datetime** | Creation date and time of account deletion request date. | [optional] [readonly] 
**completed_at** | **datetime** | Account deletion request completion date and time. | [optional] [readonly] 
**overall_status** | **str** | Overall status of deletion request. | [optional] 
**requester** | [**AccountactionrequestdtoRequester**](accountactionrequestdto-requester) |  | [optional] 
**requester_comments** | **str** | Comments added by the requester while creating the account deletion request. | [optional] 
**account_details** | [**AccountactionrequestdtoAccountDetails**](accountactionrequestdto-account-details) |  | [optional] 
**correlated_identity** | [**AccountactionrequestdtoCorrelatedIdentity**](accountactionrequestdto-correlated-identity) |  | [optional] 
**manager_reference** | [**Identityreference**](identityreference) |  | [optional] 
**approval_request_id** | **str** | ID of the approval request associated with the account deletion action. | [optional] 
**account_request_phases** | [**[]Accountrequestphase**](accountrequestphase) | List of account request phases. | [optional] 
**approval_details** | [**[]Approvaldetails**](approvaldetails) | List approval details | [optional] 
**error_details** | **str** | Detailed error information. | [optional] 
}

## Example

```python
from sailpoint.account_deletion_requests.models.accountactionrequestdto import Accountactionrequestdto

accountactionrequestdto = Accountactionrequestdto(
account_request_id='2d8180a46faadee4016fb4e018c20648',
request_type='2c7180a46faadee4016fb4e018c20648',
created_at='2026-01-20T21:30Z',
completed_at='2026-01-20T21:35Z',
overall_status='SUCCESS',
requester=,
requester_comments='User requested account deletion due to inactivity.',
account_details=,
correlated_identity={"id":"c2353ef10dd54a8e9725beff360c0be2","name":"machine102","email":"machine.102@testmail.identitysoon.com","status":"ACTIVE"},
manager_reference=sailpoint.account_deletion_requests.models.identity_reference.Identity Reference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Thomas Edison', ),
approval_request_id='06cc946d58bb4422bbd094cf78667d42',
account_request_phases=[{"name":"APPROVAL_PHASE","state":"APPROVED","started":"2026-01-14T08:08:28.644090559Z","finished":"2026-01-14T08:38:42.707043142Z"},{"name":"PROVISIONING_PHASE","state":"PASSED","started":"2026-01-14T08:38:42.785577841Z","finished":"2026-01-14T08:38:45.932606296Z"}],
approval_details=[{"identityID":"85131bd73fdc423599e57f40b29f01fe","id":"85131bd73fdc423599e57f40b29f01fe","name":"SailPoint Support","email":"support@testmail.identitysoon.com","type":"IDENTITY","ownerOf":{"email":"Alfred.255e71dfc6e@testmail.identitysoon.com","type":"IDENTITY","id":"7ec252acbd4245548bc25df22348cb75","name":"Alfred"},"actionedAs":{"email":"Alfred.255e71dfc6e@testmail.identitysoon.com","type":"IDENTITY","id":"7ec252acbd4245548bc25df22348cb75","name":"Alfred"},"members":{"email":"Alfred.255e71dfc6e@testmail.identitysoon.com","type":"IDENTITY","id":"7ec252acbd4245548bc25df22348cb75","name":"Alfred"}}],
error_details='Detailed error message.'
)

```
[[Back to top]](#) 

