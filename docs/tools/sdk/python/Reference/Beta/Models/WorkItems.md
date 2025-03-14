---
id: beta-work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'WorkItems', 'BetaWorkItems'] 
slug: /tools/sdk/python/beta/models/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems', 'BetaWorkItems']
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
**created** | **datetime** |  | [optional] 
**modified** | **datetime** |  | [optional] 
**description** | **str** | The description of the work item | [optional] 
**state** | [**WorkItemState**](work-item-state) |  | [optional] 
**type** | [**WorkItemType**](work-item-type) |  | [optional] 
**remediation_items** | [**[]RemediationItemDetails**](remediation-item-details) |  | [optional] 
**approval_items** | [**[]ApprovalItemDetails**](approval-item-details) |  | [optional] 
**name** | **str** | The work item name | [optional] 
**completed** | **datetime** |  | [optional] 
**num_items** | **int** | The number of items in the work item | [optional] 
**errors** | **[]str** |  | [optional] 
**form** | [**FormDetails**](form-details) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.work_items import WorkItems

work_items = WorkItems(
id='2c9180835d2e5168015d32f890ca1581',
requester_id='2c9180835d2e5168015d32f890ca1581',
requester_display_name='John Smith',
owner_id='2c9180835d2e5168015d32f890ca1581',
owner_name='Jason Smith',
created='2017-07-11T18:45:37.098Z',
modified='2018-06-25T20:22:28.104Z',
description='Create account on source 'AD'',
state='Pending',
type='Generic',
remediation_items=[
                    sailpoint.beta.models.remediation_item_details.RemediationItemDetails(
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
                    sailpoint.beta.models.approval_item_details.ApprovalItemDetails(
                        id = '2c9180835d2e5168015d32f890ca1581', 
                        account = 'john.smith', 
                        application = 'Active Directory', 
                        name = 'emailAddress', 
                        operation = 'update', 
                        value = 'a@b.com', 
                        state = 'Pending', )
                    ],
name='Account Create',
completed='2018-10-19T13:49:37.385Z',
num_items=19,
errors=[The work item ID that was specified was not found.],
form=sailpoint.beta.models.form_details.FormDetails(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'AccountSelection Form', 
                    title = 'Account Selection for John.Doe', 
                    subtitle = 'Please select from the following', 
                    target_user = 'Jane.Doe', 
                    sections = [
                        sailpoint.beta.models.section_details.SectionDetails()
                        ], )
)

```
[[Back to top]](#) 

