---
id: beta-provisioning-completed
title: ProvisioningCompleted
pagination_label: ProvisioningCompleted
sidebar_label: ProvisioningCompleted
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningCompleted', 'BetaProvisioningCompleted'] 
slug: /tools/sdk/python/beta/models/provisioning-completed
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompleted', 'BetaProvisioningCompleted']
---

# ProvisioningCompleted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tracking_number** | **str** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [required]
**sources** | **str** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [required]
**action** | **str** | Origin of where the provisioning request came from. | [optional] 
**errors** | **[]str** | A list of any accumulated error messages that occurred during provisioning. | [optional] 
**warnings** | **[]str** | A list of any accumulated warning messages that occurred during provisioning. | [optional] 
**recipient** | [**ProvisioningCompletedRecipient**](provisioning-completed-recipient) |  | [required]
**requester** | [**ProvisioningCompletedRequester**](provisioning-completed-requester) |  | [optional] 
**account_requests** | [**[]ProvisioningCompletedAccountRequestsInner**](provisioning-completed-account-requests-inner) | A list of provisioning instructions to perform on an account-by-account basis. | [required]
}

## Example

```python
from sailpoint.beta.models.provisioning_completed import ProvisioningCompleted

provisioning_completed = ProvisioningCompleted(
tracking_number='4b4d982dddff4267ab12f0f1e72b5a6d',
sources='Corp AD, Corp LDAP, Corp Salesforce',
action='IdentityRefresh',
errors=[
                    'Connector AD Failed'
                    ],
warnings=[
                    'Notification Skipped due to invalid email'
                    ],
recipient=sailpoint.beta.models.provisioning_completed_recipient.ProvisioningCompleted_recipient(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
requester=sailpoint.beta.models.provisioning_completed_requester.ProvisioningCompleted_requester(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
account_requests=[
                    sailpoint.beta.models.provisioning_completed_account_requests_inner.ProvisioningCompleted_accountRequests_inner(
                        source = sailpoint.beta.models.provisioning_completed_account_requests_inner_source.ProvisioningCompleted_accountRequests_inner_source(
                            id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                            type = 'SOURCE', 
                            name = 'Corporate Active Directory', ), 
                        account_id = 'CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com', 
                        account_operation = 'Modify', 
                        provisioning_result = SUCCESS, 
                        provisioning_target = 'Corp AD', 
                        ticket_id = '72619262', 
                        attribute_requests = [
                            sailpoint.beta.models.provisioning_completed_account_requests_inner_attribute_requests_inner.ProvisioningCompleted_accountRequests_inner_attributeRequests_inner(
                                attribute_name = 'memberOf', 
                                attribute_value = 'CN=jedi,DC=starwars,DC=com', 
                                operation = Add, )
                            ], )
                    ]
)

```
[[Back to top]](#) 

