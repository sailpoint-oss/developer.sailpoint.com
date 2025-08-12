---
id: v2025-identity-account-selections
title: IdentityAccountSelections
pagination_label: IdentityAccountSelections
sidebar_label: IdentityAccountSelections
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAccountSelections', 'V2025IdentityAccountSelections'] 
slug: /tools/sdk/python/v2025/models/identity-account-selections
tags: ['SDK', 'Software Development Kit', 'IdentityAccountSelections', 'V2025IdentityAccountSelections']
---

# IdentityAccountSelections


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_items** | [**[]RequestedItemAccountSelections**](requested-item-account-selections) | Available account selections for the identity, per requested item | [optional] 
**accounts_selection_required** | **bool** | A boolean indicating whether any account selections will be required for the user to raise an access request | [optional] [default to False]
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | The identity id for the user | [optional] 
**name** | **str** | The name of the identity | [optional] 
}

## Example

```python
from sailpoint.v2025.models.identity_account_selections import IdentityAccountSelections

identity_account_selections = IdentityAccountSelections(
requested_items=[
                    sailpoint.v2025.models.requested_item_account_selections.RequestedItemAccountSelections(
                        description = 'An access profile for the admins', 
                        accounts_selection_blocked = False, 
                        accounts_selection_blocked_reason = 'ACCESS_PROFILE_ALREADY_ASSIGNED_TO_AN_ACCOUNT', 
                        type = 'ACCESS_PROFILE', 
                        id = '720fd239701344aea76c93ba91376aec', 
                        name = 'Test Access Profile', 
                        sources = [
                            sailpoint.v2025.models.source_account_selections.SourceAccountSelections(
                                type = 'IDENTITY', 
                                id = '3ac3c43785a845fa9820b0c1ac767cd5', 
                                name = 'Test Source_Name', 
                                accounts = [
                                    sailpoint.v2025.models.account_info_ref.AccountInfoRef(
                                        uuid = '{fab7119e-004f-4822-9c33-b8d570d6c6a6}', 
                                        native_identity = 'CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local', 
                                        id = 'f19d168c27374fd1aff3b483573f997f', 
                                        name = 'UserAccount.761a2248b', )
                                    ], )
                            ], )
                    ],
accounts_selection_required=False,
type='IDENTITY',
id='70016590f2df4b879bdb1313a9e4e19e',
name='User name'
)

```
[[Back to top]](#) 

