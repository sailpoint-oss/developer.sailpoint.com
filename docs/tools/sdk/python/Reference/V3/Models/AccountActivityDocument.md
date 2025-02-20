---
id: account-activity-document
title: AccountActivityDocument
pagination_label: AccountActivityDocument
sidebar_label: AccountActivityDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountActivityDocument', 'AccountActivityDocument'] 
slug: /tools/sdk/python/v3/models/account-activity-document
tags: ['SDK', 'Software Development Kit', 'AccountActivityDocument', 'AccountActivityDocument']
---

# AccountActivityDocument

AccountActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [required]
**name** | **str** |  | [required]
**type** | [**DocumentType**](document-type) |  | [required]
**action** | **str** | Type of action performed in the activity. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**modified** | **datetime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**stage** | **str** | Activity's current stage. | [optional] 
**origin** | **str** | Activity's origin. | [optional] 
**status** | **str** | Activity's current status. | [optional] 
**requester** | [**AccountSource**](account-source) |  | [optional] 
**recipient** | [**AccountSource**](account-source) |  | [optional] 
**tracking_number** | **str** | Account activity's tracking number. | [optional] 
**errors** | **[]str** | Errors provided by the source while completing account actions. | [optional] 
**warnings** | **[]str** | Warnings provided by the source while completing account actions. | [optional] 
**approvals** | [**[]Approval**](approval) | Approvals performed on an item during activity. | [optional] 
**original_requests** | [**[]OriginalRequest**](original-request) | Original actions that triggered all individual source actions related to the account action. | [optional] 
**expansion_items** | [**[]ExpansionItem**](expansion-item) | Controls that translated the attribute requests into actual provisioning actions on the source. | [optional] 
**account_requests** | [**[]AccountRequest**](account-request) | Account data for each individual source action triggered by the original requests. | [optional] 
**sources** | **str** | Sources involved in the account activity. | [optional] 
}

## Example

```python
from sailpoint.v3.models.account_activity_document import AccountActivityDocument

account_activity_document = AccountActivityDocument(
id='2c91808375d8e80a0175e1f88a575222',
name='john.doe',
type='identity',
action='Identity Refresh.',
created='2018-06-25T20:22:28.104Z',
modified='2018-06-25T20:22:28.104Z',
stage='Completed',
origin='',
status='Complete',
requester=,
recipient=,
tracking_number='61aad0c9e8134eca89e76a35e0cabe3f',
errors=[
                    ''
                    ],
warnings=[
                    ''
                    ],
approvals=[
                    sailpoint.v3.models.approval.Approval(
                        comments = [
                            sailpoint.v3.models.approval_comment.ApprovalComment(
                                comment = 'This request was autoapproved by our automated ETS subscriber.', 
                                commenter = 'Automated AR Approval', 
                                date = '2018-06-25T20:22:28.104Z', )
                            ], 
                        created = '2018-06-25T20:22:28.104Z', 
                        modified = '2018-06-25T20:22:28.104Z', 
                        owner = null, 
                        result = 'Finished', 
                        type = '', )
                    ],
original_requests=[
                    sailpoint.v3.models.original_request.OriginalRequest(
                        account_id = 'CN=Abby Smith,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                        attribute_requests = [
                            sailpoint.v3.models.attribute_request.AttributeRequest(
                                name = 'groups', 
                                op = 'Add', 
                                value = '3203537556531076', )
                            ], 
                        op = 'add', 
                        source = null, )
                    ],
expansion_items=[
                    sailpoint.v3.models.expansion_item.ExpansionItem(
                        account_id = '2c91808981f58ea601821c3e93482e6f', 
                        cause = 'Role', 
                        name = 'smartsheet-role', 
                        attribute_requests = [
                            sailpoint.v3.models.attribute_request.AttributeRequest(
                                name = 'groups', 
                                op = 'Add', 
                                value = '3203537556531076', )
                            ], 
                        source = null, )
                    ],
account_requests=[
                    sailpoint.v3.models.account_request.AccountRequest(
                        account_id = 'John.Doe', 
                        attribute_requests = [
                            sailpoint.v3.models.attribute_request.AttributeRequest(
                                name = 'groups', 
                                op = 'Add', 
                                value = '3203537556531076', )
                            ], 
                        op = 'Modify', 
                        provisioning_target = null, 
                        result = sailpoint.v3.models.account_request_result.AccountRequest_result(
                            errors = [
                                '[ConnectorError] [
  {
    "code": "unrecognized_keys",
    "keys": [
      "groups"
    ],
    "path": [],
    "message": "Unrecognized key(s) in object: 'groups'"
  }
] (requestId: 5e9d6df5-9b1b-47d9-9bf1-dc3a2893299e)'
                                ], 
                            status = 'failed', 
                            ticket_id = '', ), 
                        source = null, )
                    ],
sources='smartsheet-test, airtable-v4, IdentityNow'
)

```
[[Back to top]](#) 

