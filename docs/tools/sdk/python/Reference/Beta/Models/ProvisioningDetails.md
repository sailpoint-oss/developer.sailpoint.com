---
id: beta-provisioning-details
title: ProvisioningDetails
pagination_label: ProvisioningDetails
sidebar_label: ProvisioningDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProvisioningDetails', 'BetaProvisioningDetails'] 
slug: /tools/sdk/python/beta/models/provisioning-details
tags: ['SDK', 'Software Development Kit', 'ProvisioningDetails', 'BetaProvisioningDetails']
---

# ProvisioningDetails

Provides additional details about provisioning for this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ordered_sub_phase_references** | **str** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 
}

## Example

```python
from sailpoint.beta.models.provisioning_details import ProvisioningDetails

provisioning_details = ProvisioningDetails(
ordered_sub_phase_references='manualWorkItemDetails'
)

```
[[Back to top]](#) 

