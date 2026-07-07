---
id: requesteditemstatus-provisioning-details
title: RequesteditemstatusProvisioningDetails
pagination_label: RequesteditemstatusProvisioningDetails
sidebar_label: RequesteditemstatusProvisioningDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RequesteditemstatusProvisioningDetails', 'RequesteditemstatusProvisioningDetails'] 
slug: /tools/sdk/python/access-requests/models/requesteditemstatus-provisioning-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusProvisioningDetails', 'RequesteditemstatusProvisioningDetails']
---

# RequesteditemstatusProvisioningDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ordered_sub_phase_references** | **str** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.requesteditemstatus_provisioning_details import RequesteditemstatusProvisioningDetails

requesteditemstatus_provisioning_details = RequesteditemstatusProvisioningDetails(
ordered_sub_phase_references='manualWorkItemDetails'
)

```
[[Back to top]](#) 

