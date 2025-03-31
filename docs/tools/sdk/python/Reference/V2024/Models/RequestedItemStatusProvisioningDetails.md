---
id: v2024-requested-item-status-provisioning-details
title: RequestedItemStatusProvisioningDetails
pagination_label: RequestedItemStatusProvisioningDetails
sidebar_label: RequestedItemStatusProvisioningDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequestedItemStatusProvisioningDetails', 'V2024RequestedItemStatusProvisioningDetails'] 
slug: /tools/sdk/python/v2024/models/requested-item-status-provisioning-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusProvisioningDetails', 'V2024RequestedItemStatusProvisioningDetails']
---

# RequestedItemStatusProvisioningDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ordered_sub_phase_references** | **str** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.requested_item_status_provisioning_details import RequestedItemStatusProvisioningDetails

requested_item_status_provisioning_details = RequestedItemStatusProvisioningDetails(
ordered_sub_phase_references='manualWorkItemDetails'
)

```
[[Back to top]](#) 

