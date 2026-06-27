---
id: accountsourcereference-governance-group
title: AccountsourcereferenceGovernanceGroup
pagination_label: AccountsourcereferenceGovernanceGroup
sidebar_label: AccountsourcereferenceGovernanceGroup
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountsourcereferenceGovernanceGroup', 'AccountsourcereferenceGovernanceGroup'] 
slug: /tools/sdk/python/triggers/models/accountsourcereference-governance-group
tags: ['SDK', 'Software Development Kit', 'AccountsourcereferenceGovernanceGroup', 'AccountsourcereferenceGovernanceGroup']
---

# AccountsourcereferenceGovernanceGroup

Details about the governance group of the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the governance group. | [required]
**name** | **str** | Name of the governance group. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountsourcereference_governance_group import AccountsourcereferenceGovernanceGroup

accountsourcereference_governance_group = AccountsourcereferenceGovernanceGroup(
id='group-456',
name='governance-group-name'
)

```
[[Back to top]](#) 

