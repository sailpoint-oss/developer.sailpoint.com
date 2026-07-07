---
id: approvaldetails
title: Approvaldetails
pagination_label: Approvaldetails
sidebar_label: Approvaldetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvaldetails', 'Approvaldetails'] 
slug: /tools/sdk/python/account-deletion-requests/models/approvaldetails
tags: ['SDK', 'Software Development Kit', 'Approvaldetails', 'Approvaldetails']
---

# Approvaldetails

Contains comprehensive details about the approval process, including the approver's information, comments, decision date, serial order, and the current status of the approval request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approver** | [**Approverdto**](approverdto) |  | [optional] 
**approver_comments** | **str** | Comments added by approver while rejecting or approving the account deletion request. | [optional] 
**decision_date** | **datetime** | Decision date of approval rejected or approved. | [optional] [readonly] 
**serial_order** | **int** | SerialOrder of approval details. | [optional] 
**status** | [**Accountrequestphasestate**](accountrequestphasestate) |  | [optional] 
}

## Example

```python
from sailpoint.account_deletion_requests.models.approvaldetails import Approvaldetails

approvaldetails = Approvaldetails(
approver=sailpoint.account_deletion_requests.models.approver_dto.Approver Dto(
                    identity_id = '22efd140d88a4ceeab32c8829973244c', 
                    id = '', 
                    name = 'SailPoint Support', 
                    email = 'support@testmail.identitysoon.com', 
                    type = 'IDENTITY', 
                    owner_of = [
                        sailpoint.account_deletion_requests.models.approver_reference.ApproverReference(
                            id = '85131bd73fdc423599e57f40b29f01fe', 
                            type = 'IDENTITY', 
                            name = 'SailPoint Support', )
                        ], 
                    actioned_as = [
                        sailpoint.account_deletion_requests.models.approver_reference.ApproverReference(
                            id = '85131bd73fdc423599e57f40b29f01fe', 
                            type = 'IDENTITY', 
                            name = 'SailPoint Support', )
                        ], 
                    members = [
                        
                        ], ),
approver_comments='Approving account deletion request due to long term inactivity of account.',
decision_date='2026-01-21T11:43:22.432Z',
serial_order=12345,
status='APPROVED'
)

```
[[Back to top]](#) 

