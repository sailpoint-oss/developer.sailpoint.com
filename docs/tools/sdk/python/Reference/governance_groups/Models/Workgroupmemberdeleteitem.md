---
id: workgroupmemberdeleteitem
title: Workgroupmemberdeleteitem
pagination_label: Workgroupmemberdeleteitem
sidebar_label: Workgroupmemberdeleteitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Workgroupmemberdeleteitem', 'Workgroupmemberdeleteitem'] 
slug: /tools/sdk/python/governance-groups/models/workgroupmemberdeleteitem
tags: ['SDK', 'Software Development Kit', 'Workgroupmemberdeleteitem', 'Workgroupmemberdeleteitem']
---

# Workgroupmemberdeleteitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of identity in bulk member add /remove request. | [required]
**status** | **int** | The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  > 204   - Identity is removed from Governance Group members list.  > 404   - Identity is not member of Governance Group.  | [required]
**description** | **str** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 
}

## Example

```python
from sailpoint.governance_groups.models.workgroupmemberdeleteitem import Workgroupmemberdeleteitem

workgroupmemberdeleteitem = Workgroupmemberdeleteitem(
id='464ae7bf791e49fdb74606a2e4a89635',
status=204,
description='
> Identity deleted from Governance Group members list.

> Referenced Governance Group Member with Identity Id "bc3a744678534eb78a8002ee2085df64" was not found.
'
)

```
[[Back to top]](#) 

