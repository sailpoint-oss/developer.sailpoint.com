---
id: accountsourcereference
title: Accountsourcereference
pagination_label: Accountsourcereference
sidebar_label: Accountsourcereference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountsourcereference', 'Accountsourcereference'] 
slug: /tools/sdk/python/triggers/models/accountsourcereference
tags: ['SDK', 'Software Development Kit', 'Accountsourcereference', 'Accountsourcereference']
---

# Accountsourcereference

Details about the account source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the source. | [required]
**name** | **str** | The name of the source. | [required]
**alias** | **str** | The alias of the source. | [required]
**owner** | [**AccountsourcereferenceOwner**](accountsourcereference-owner) |  | [required]
**governance_group** | [**AccountsourcereferenceGovernanceGroup**](accountsourcereference-governance-group) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.accountsourcereference import Accountsourcereference

accountsourcereference = Accountsourcereference(
id='2c918082814e693601816e09471b29b6',
name='Active Directory',
alias='AD',
owner=sailpoint.triggers.models.accountsourcereference_owner.accountsourcereference_owner(
                    id = 'owner-123', 
                    name = 'owner-name', ),
governance_group=sailpoint.triggers.models.accountsourcereference_governance_group.accountsourcereference_governanceGroup(
                    id = 'group-456', 
                    name = 'governance-group-name', )
)

```
[[Back to top]](#) 

