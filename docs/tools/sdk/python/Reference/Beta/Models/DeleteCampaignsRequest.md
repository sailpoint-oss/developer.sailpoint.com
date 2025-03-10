---
id: beta-delete-campaigns-request
title: DeleteCampaignsRequest
pagination_label: DeleteCampaignsRequest
sidebar_label: DeleteCampaignsRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DeleteCampaignsRequest', 'BetaDeleteCampaignsRequest'] 
slug: /tools/sdk/python/beta/models/delete-campaigns-request
tags: ['SDK', 'Software Development Kit', 'DeleteCampaignsRequest', 'BetaDeleteCampaignsRequest']
---

# DeleteCampaignsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | The ids of the campaigns to delete | [optional] 
}

## Example

```python
from sailpoint.beta.models.delete_campaigns_request import DeleteCampaignsRequest

delete_campaigns_request = DeleteCampaignsRequest(
ids=[2c9180887335cee10173490db1776c26, 2c9180836a712436016a7125a90c0021]
)

```
[[Back to top]](#) 

