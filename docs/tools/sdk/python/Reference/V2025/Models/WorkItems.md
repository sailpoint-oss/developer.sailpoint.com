---
id: v2025-work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkItems', 'V2025WorkItems'] 
slug: /tools/sdk/python/v2025/models/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems', 'V2025WorkItems']
---

# WorkItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the work item | [optional] 
**requester_id** | **str** | ID of the requester | [optional] 
**requester_display_name** | **str** | The displayname of the requester | [optional] 
**owner_id** | **str** | The ID of the owner | [optional] 
**owner_name** | **str** | The name of the owner | [optional] 
**created** | **datetime** | Time when the work item was created | [optional] 
**modified** | **datetime** | Time when the work item was last updated | [optional] 
**description** | **str** | The description of the work item | [optional] 
**state** | [**WorkItemStateManualWorkItems**](work-item-state-manual-work-items) |  | [optional] 
**type** | [**WorkItemTypeManualWorkItems**](work-item-type-manual-work-items) |  | [optional] 
**remediation_items** | [**[]RemediationItemDetails**](remediation-item-details) | A list of remediation items | [optional] 
**approval_items** | [**[]ApprovalItemDetails**](approval-item-details) | A list of items that need to be approved | [optional] 
**name** | **str** | The work item name | [optional] 
**completed** | **datetime** | The time at which the work item completed | [optional] 
**num_items** | **int** | The number of items in the work item | [optional] 
**form** | [**WorkItemsForm**](work-items-form) |  | [optional] 
**errors** | **[]str** | An array of errors that ocurred during the work item | [optional] 
}

## Example

```python
from sailpoint.v2025.models.work_items import WorkItems

work_items = WorkItems(
id='2c9180835d2e5168015d32f890ca1581',
requester_id='2c9180835d2e5168015d32f890ca1581',
requester_display_name='John Smith',
owner_id='2c9180835d2e5168015d32f890ca1581',
owner_name='Jason Smith',
created='2017-07-11T18:45:37.098Z',
modified='2018-06-25T20:22:28.104Z',
description='Create account on source 'AD'',
state='Finished',
type='Generic',
remediation_items=[
                    sailpoint.v2025.models.remediation_item_details.Remediation Item Details(
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        target_id = '2c9180835d2e5168015d32f890ca1581', 
                        target_name = 'john.smith', 
                        target_display_name = 'emailAddress', 
                        application_name = 'Active Directory', 
                        attribute_name = 'phoneNumber', 
                        attribute_operation = 'update', 
                        attribute_value = '512-555-1212', 
                        native_identity = 'jason.smith2', )
                    ],
approval_items=[
                    sailpoint.v2025.models.approval_item_details.Approval Item Details(
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        account = 'john.smith', 
                        application = 'Active Directory', 
                        name = 'emailAddress', 
                        operation = 'update', 
                        value = 'a@b.com', 
                        state = null, )
                    ],
name='Account Create',
completed='2018-10-19T13:49:37.385Z',
num_items=19,
form=,
errors=[The work item ID that was specified was not found.]
)

```
[[Back to top]](#) 

