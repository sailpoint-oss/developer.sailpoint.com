---
id: v2025-account-action
title: AccountAction
pagination_label: AccountAction
sidebar_label: AccountAction
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAction', 'V2025AccountAction'] 
slug: /tools/sdk/python/v2025/models/account-action
tags: ['SDK', 'Software Development Kit', 'AccountAction', 'V2025AccountAction']
---

# AccountAction

Object for specifying Actions to be performed on a specified list of sources' account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** |  **Enum** [  'ENABLE',    'DISABLE',    'DELETE' ] | Describes if action will be enable, disable or delete. | [optional] 
**source_ids** | **[]str** | A unique list of specific source IDs to apply the action to. The sources must have the ENABLE feature or flat file source. Required if allSources is not true. Must not be provided if allSources is true. Cannot be used together with excludeSourceIds See \"/sources\" endpoint for source features. | [optional] 
**exclude_source_ids** | **[]str** | A list of source IDs to exclude from the action. Cannot be used together with sourceIds. | [optional] 
**all_sources** | **bool** | If true, the action applies to all available sources. If true, sourceIds must not be provided. If false or not set, sourceIds is required. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.account_action import AccountAction

account_action = AccountAction(
action='ENABLE',
source_ids=[2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500],
exclude_source_ids=[3b551ccf5566478b9b77f37de25303aa],
all_sources=True
)

```
[[Back to top]](#) 

