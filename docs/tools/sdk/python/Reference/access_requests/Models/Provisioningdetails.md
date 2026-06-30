---
id: provisioningdetails
title: Provisioningdetails
pagination_label: Provisioningdetails
sidebar_label: Provisioningdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Provisioningdetails', 'Provisioningdetails'] 
slug: /tools/sdk/python/access-requests/models/provisioningdetails
tags: ['SDK', 'Software Development Kit', 'Provisioningdetails', 'Provisioningdetails']
---

# Provisioningdetails

Provides additional details about provisioning for this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ordered_sub_phase_references** | **str** | Ordered CSV of sub phase references to objects that contain more information about provisioning. For example, this can contain \"manualWorkItemDetails\" which indicate that there is further information in that object for this phase. | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.provisioningdetails import Provisioningdetails

provisioningdetails = Provisioningdetails(
ordered_sub_phase_references='manualWorkItemDetails'
)

```
[[Back to top]](#) 

