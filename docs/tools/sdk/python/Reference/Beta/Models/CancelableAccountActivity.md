---
id: beta-cancelable-account-activity
title: CancelableAccountActivity
pagination_label: CancelableAccountActivity
sidebar_label: CancelableAccountActivity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CancelableAccountActivity', 'BetaCancelableAccountActivity'] 
slug: /tools/sdk/python/beta/models/cancelable-account-activity
tags: ['SDK', 'Software Development Kit', 'CancelableAccountActivity', 'BetaCancelableAccountActivity']
---

# CancelableAccountActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the account activity itself | [optional] 
**name** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] 
**modified** | **datetime** |  | [optional] 
**completed** | **datetime** |  | [optional] 
**completion_status** | [**CompletionStatus**](completion-status) |  | [optional] 
**type** | **str** |  | [optional] 
**requester_identity_summary** | [**IdentitySummary**](identity-summary) |  | [optional] 
**target_identity_summary** | [**IdentitySummary**](identity-summary) |  | [optional] 
**errors** | **[]str** |  | [optional] 
**warnings** | **[]str** |  | [optional] 
**items** | [**[]AccountActivityItem**](account-activity-item) |  | [optional] 
**execution_status** | [**ExecutionStatus**](execution-status) |  | [optional] 
**client_metadata** | **map[string]str** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 
**cancelable** | **bool** | Whether the account activity can be canceled before completion | [optional] 
**cancel_comment** | [**Comment**](comment) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.cancelable_account_activity import CancelableAccountActivity

cancelable_account_activity = CancelableAccountActivity(
id='2c9180835d2e5168015d32f890ca1581',
name='2c9180835d2e5168015d32f890ca1581',
created='2017-07-11T18:45:37.098Z',
modified='2018-06-25T20:22:28.104Z',
completed='2018-10-19T13:49:37.385Z',
completion_status='SUCCESS',
type='appRequest',
requester_identity_summary=sailpoint.beta.models.identity_summary.Identity Summary(
                    id = 'ff80818155fe8c080155fe8d925b0316', 
                    name = 'SailPoint Services', 
                    identity_id = 'c15b9f5cca5a4e9599eaa0e64fa921bd', 
                    completed = True, ),
target_identity_summary=sailpoint.beta.models.identity_summary.Identity Summary(
                    id = 'ff80818155fe8c080155fe8d925b0316', 
                    name = 'SailPoint Services', 
                    identity_id = 'c15b9f5cca5a4e9599eaa0e64fa921bd', 
                    completed = True, ),
errors=[sailpoint.connector.ConnectorException: java.lang.InterruptedException: Timeout waiting for response to message 0 from client 57a4ab97-ab3f-4aef-9fe2-0eaf15c73d26 after 60 seconds.],
warnings=[
                    ''
                    ],
items=[
                    sailpoint.beta.models.account_activity_item.Account Activity Item(
                        id = '48c545831b264409a81befcabb0e3c5a', 
                        name = '48c545831b264409a81befcabb0e3c5a', 
                        requested = '2017-07-11T18:45:37.098Z', 
                        approval_status = 'PENDING', 
                        provisioning_status = 'PENDING', 
                        requester_comment = sailpoint.beta.models.comment.Comment(
                            commenter_id = '2c918084660f45d6016617daa9210584', 
                            commenter_name = 'Adam Kennedy', 
                            body = 'Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.', 
                            date = '2017-07-11T18:45:37.098Z', ), 
                        reviewer_identity_summary = sailpoint.beta.models.identity_summary.Identity Summary(
                            id = 'ff80818155fe8c080155fe8d925b0316', 
                            name = 'SailPoint Services', 
                            identity_id = 'c15b9f5cca5a4e9599eaa0e64fa921bd', 
                            completed = True, ), 
                        reviewer_comment = sailpoint.beta.models.comment.Comment(
                            commenter_id = '2c918084660f45d6016617daa9210584', 
                            commenter_name = 'Adam Kennedy', 
                            body = 'Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.', 
                            date = '2017-07-11T18:45:37.098Z', ), 
                        operation = 'ADD', 
                        attribute = 'detectedRoles', 
                        value = 'Treasury Analyst [AccessProfile-1529010191212]', 
                        native_identity = 'Sandie.Camero', 
                        source_id = '2c91808363ef85290164000587130c0c', 
                        account_request_info = sailpoint.beta.models.account_request_info.Account Request Info(
                            requested_object_id = '2c91808563ef85690164001c31140c0c', 
                            requested_object_name = 'Treasury Analyst', 
                            requested_object_type = 'ACCESS_PROFILE', ), 
                        client_metadata = {customKey1=custom value 1, customKey2=custom value 2}, 
                        remove_date = '2020-07-11T00:00Z', )
                    ],
execution_status='COMPLETED',
client_metadata={
                    'key' : ''
                    },
cancelable=True,
cancel_comment=sailpoint.beta.models.comment.Comment(
                    commenter_id = '2c918084660f45d6016617daa9210584', 
                    commenter_name = 'Adam Kennedy', 
                    body = 'Et quam massa maximus vivamus nisi ut urna tincidunt metus elementum erat.', 
                    date = '2017-07-11T18:45:37.098Z', )
)

```
[[Back to top]](#) 

