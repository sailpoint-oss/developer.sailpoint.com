---
id: beta-account-activity-item
title: AccountActivityItem
pagination_label: AccountActivityItem
sidebar_label: AccountActivityItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountActivityItem', 'BetaAccountActivityItem'] 
slug: /tools/sdk/python/beta/models/account-activity-item
tags: ['SDK', 'Software Development Kit', 'AccountActivityItem', 'BetaAccountActivityItem']
---

# AccountActivityItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Item id | [optional] 
**name** | **str** | Human-readable display name of item | [optional] 
**requested** | **datetime** | Date and time item was requested | [optional] 
**approval_status** | [**AccountActivityApprovalStatus**](account-activity-approval-status) |  | [optional] 
**provisioning_status** | [**ProvisioningState**](provisioning-state) |  | [optional] 
**requester_comment** | [**Comment**](comment) |  | [optional] 
**reviewer_identity_summary** | [**IdentitySummary**](identity-summary) |  | [optional] 
**reviewer_comment** | [**Comment**](comment) |  | [optional] 
**operation** | [**AccountActivityItemOperation**](account-activity-item-operation) |  | [optional] 
**attribute** | **str** | Attribute to which account activity applies | [optional] 
**value** | **str** | Value of attribute | [optional] 
**native_identity** | **str** | Native identity in the target system to which the account activity applies | [optional] 
**source_id** | **str** | Id of Source to which account activity applies | [optional] 
**account_request_info** | [**AccountRequestInfo**](account-request-info) |  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] 
**remove_date** | **datetime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
}

## Example

```python
from sailpoint.beta.models.account_activity_item import AccountActivityItem

account_activity_item = AccountActivityItem(
id='48c545831b264409a81befcabb0e3c5a',
name='48c545831b264409a81befcabb0e3c5a',
requested='2017-07-11T18:45:37.098Z',
approval_status='PENDING',
provisioning_status='PENDING',
requester_comment=sailpoint.beta.models.comment.Comment(
                    commenter_id = '2c918084660f45d6016617daa9210584', 
                    commenter_name = 'Adam Kennedy', 
                    body = 'Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.', 
                    date = '2017-07-11T18:45:37.098Z', ),
reviewer_identity_summary=sailpoint.beta.models.identity_summary.Identity Summary(
                    id = 'ff80818155fe8c080155fe8d925b0316', 
                    name = 'SailPoint Services', 
                    identity_id = 'c15b9f5cca5a4e9599eaa0e64fa921bd', 
                    completed = True, ),
reviewer_comment=sailpoint.beta.models.comment.Comment(
                    commenter_id = '2c918084660f45d6016617daa9210584', 
                    commenter_name = 'Adam Kennedy', 
                    body = 'Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.', 
                    date = '2017-07-11T18:45:37.098Z', ),
operation='ADD',
attribute='detectedRoles',
value='Treasury Analyst [AccessProfile-1529010191212]',
native_identity='Sandie.Camero',
source_id='2c91808363ef85290164000587130c0c',
account_request_info=sailpoint.beta.models.account_request_info.Account Request Info(
                    requested_object_id = '2c91808563ef85690164001c31140c0c', 
                    requested_object_name = 'Treasury Analyst', 
                    requested_object_type = 'ACCESS_PROFILE', ),
client_metadata={customKey1=custom value 1, customKey2=custom value 2},
remove_date='2020-07-11T00:00Z'
)

```
[[Back to top]](#) 

