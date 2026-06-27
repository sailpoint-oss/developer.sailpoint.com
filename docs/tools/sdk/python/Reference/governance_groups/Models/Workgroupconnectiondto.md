---
id: workgroupconnectiondto
title: Workgroupconnectiondto
pagination_label: Workgroupconnectiondto
sidebar_label: Workgroupconnectiondto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workgroupconnectiondto', 'Workgroupconnectiondto'] 
slug: /tools/sdk/python/governance-groups/models/workgroupconnectiondto
tags: ['SDK', 'Software Development Kit', 'Workgroupconnectiondto', 'Workgroupconnectiondto']
---

# Workgroupconnectiondto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | [**WorkgroupconnectiondtoObject**](workgroupconnectiondto-object) |  | [optional] 
**connection_type** |  **Enum** [  'AccessRequestReviewer',    'Owner',    'ManagementWorkgroup' ] | Connection Type. | [optional] 
}

## Example

```python
from sailpoint.governance_groups.models.workgroupconnectiondto import Workgroupconnectiondto

workgroupconnectiondto = Workgroupconnectiondto(
object=,
connection_type='AccessRequestReviewer'
)

```
[[Back to top]](#) 

