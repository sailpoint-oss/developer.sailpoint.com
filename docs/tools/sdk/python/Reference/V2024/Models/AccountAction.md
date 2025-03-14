---
id: v2024-account-action
title: AccountAction
pagination_label: AccountAction
sidebar_label: AccountAction
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAction', 'V2024AccountAction'] 
slug: /tools/sdk/python/v2024/models/account-action
tags: ['SDK', 'Software Development Kit', 'AccountAction', 'V2024AccountAction']
---

# AccountAction

Object for specifying Actions to be performed on a specified list of sources' account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** |  **Enum** [  'ENABLE',    'DISABLE' ] | Describes if action will be enabled or disabled | [optional] 
**source_ids** | **[]str** | List of unique source IDs. The sources must have the ENABLE feature or flat file source. See \"/sources\" endpoint for source features. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.account_action import AccountAction

account_action = AccountAction(
action='ENABLE',
source_ids=[2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500]
)

```
[[Back to top]](#) 

