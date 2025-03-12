---
id: v2024-role-mining-session-scope
title: RoleMiningSessionScope
pagination_label: RoleMiningSessionScope
sidebar_label: RoleMiningSessionScope
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMiningSessionScope', 'V2024RoleMiningSessionScope'] 
slug: /tools/sdk/python/v2024/models/role-mining-session-scope
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionScope', 'V2024RoleMiningSessionScope']
---

# RoleMiningSessionScope


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_ids** | **[]str** | The list of identities for this role mining session. | [optional] 
**criteria** | **str** | The \"search\" criteria that produces the list of identities for this role mining session. | [optional] 
**attribute_filter_criteria** | **[]object** | The filter criteria for this role mining session. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_mining_session_scope import RoleMiningSessionScope

role_mining_session_scope = RoleMiningSessionScope(
identity_ids=[2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42],
criteria='source.name:DataScienceDataset',
attribute_filter_criteria={displayName={untranslated=Location: Miami}, ariaLabel={untranslated=Location: Miami}, data={displayName={translateKey=IDN.IDENTITY_ATTRIBUTES.LOCATION}, name=location, operator=EQUALS, values=[Miami]}}
)

```
[[Back to top]](#) 

