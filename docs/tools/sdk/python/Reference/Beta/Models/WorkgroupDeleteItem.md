---
id: beta-workgroup-delete-item
title: WorkgroupDeleteItem
pagination_label: WorkgroupDeleteItem
sidebar_label: WorkgroupDeleteItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkgroupDeleteItem', 'BetaWorkgroupDeleteItem'] 
slug: /tools/sdk/python/beta/models/workgroup-delete-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupDeleteItem', 'BetaWorkgroupDeleteItem']
---

# WorkgroupDeleteItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the Governance Group. | [required]
**status** | **int** |  The HTTP response status code returned for an individual Governance Group that is requested for deletion during a bulk delete operation.  > 204   -  Governance Group deleted successfully.  > 409   - Governance Group is in use,hence can not be deleted.  > 404   - Governance Group not found.  | [required]
**description** | **str** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 
}

## Example

```python
from sailpoint.beta.models.workgroup_delete_item import WorkgroupDeleteItem

workgroup_delete_item = WorkgroupDeleteItem(
id='464ae7bf791e49fdb74606a2e4a89635',
status=204,
description='
> Governance Group deleted successfully.

> Unable to delete Governance Group f80bba83-98c4-4ec2-81c8-373c00e9663b because it is in use.

> Referenced Governance Group 2b711763-ed35-42a2-a80c-8f1ce0dc4a7f was not found.
'
)

```
[[Back to top]](#) 

