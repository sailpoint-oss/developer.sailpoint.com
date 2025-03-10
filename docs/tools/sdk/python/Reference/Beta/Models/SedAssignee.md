---
id: beta-sed-assignee
title: SedAssignee
pagination_label: SedAssignee
sidebar_label: SedAssignee
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SedAssignee', 'BetaSedAssignee'] 
slug: /tools/sdk/python/beta/models/sed-assignee
tags: ['SDK', 'Software Development Kit', 'SedAssignee', 'BetaSedAssignee']
---

# SedAssignee

Sed Assignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GROUP',    'SOURCE_OWNER',    'ENTITLEMENT_OWNER' ] | Type of assignment When value is PERSONA, the value MUST be SOURCE_OWNER or ENTITLEMENT_OWNER IDENTITY SED_ASSIGNEE_IDENTITY_TYPE GROUP SED_ASSIGNEE_GROUP_TYPE SOURCE_OWNER SED_ASSIGNEE_SOURCE_OWNER_TYPE ENTITLEMENT_OWNER SED_ASSIGNEE_ENTITLEMENT_OWNER_TYPE | [required]
**value** | **str** | Identity or Group identifier Empty when using source/entitlement owner personas | [optional] 
}

## Example

```python
from sailpoint.beta.models.sed_assignee import SedAssignee

sed_assignee = SedAssignee(
type='SOURCE_OWNER',
value='016629d1-1d25-463f-97f3-c6686846650'
)

```
[[Back to top]](#) 

