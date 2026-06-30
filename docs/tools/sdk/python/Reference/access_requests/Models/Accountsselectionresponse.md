---
id: accountsselectionresponse
title: Accountsselectionresponse
pagination_label: Accountsselectionresponse
sidebar_label: Accountsselectionresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountsselectionresponse', 'Accountsselectionresponse'] 
slug: /tools/sdk/python/access-requests/models/accountsselectionresponse
tags: ['SDK', 'Software Development Kit', 'Accountsselectionresponse', 'Accountsselectionresponse']
---

# Accountsselectionresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identities** | [**[]Identityaccountselections**](identityaccountselections) | A list of available account selections per identity in the request, for all the requested items | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.accountsselectionresponse import Accountsselectionresponse

accountsselectionresponse = Accountsselectionresponse(
identities=[
                    sailpoint.access_requests.models.identityaccountselections.identityaccountselections(
                        requested_items = [
                            sailpoint.access_requests.models.requesteditemaccountselections.requesteditemaccountselections(
                                description = 'An access profile for the admins', 
                                accounts_selection_blocked = False, 
                                accounts_selection_blocked_reason = 'ACCESS_PROFILE_ALREADY_ASSIGNED_TO_AN_ACCOUNT', 
                                type = 'ACCESS_PROFILE', 
                                id = '720fd239701344aea76c93ba91376aec', 
                                name = 'Test Access Profile', 
                                sources = [
                                    sailpoint.access_requests.models.sourceaccountselections.sourceaccountselections(
                                        type = 'IDENTITY', 
                                        id = '3ac3c43785a845fa9820b0c1ac767cd5', 
                                        name = 'Test Source_Name', 
                                        accounts = [
                                            sailpoint.access_requests.models.accountinforef.accountinforef(
                                                uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                                native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', 
                                                id = 'f19d168c27374fd1aff3b483573f997f', 
                                                name = 'UserAccount.761a2248b', )
                                            ], )
                                    ], )
                            ], 
                        accounts_selection_required = False, 
                        type = 'IDENTITY', 
                        id = '70016590f2df4b879bdb1313a9e4e19e', 
                        name = 'User name', )
                    ]
)

```
[[Back to top]](#) 

