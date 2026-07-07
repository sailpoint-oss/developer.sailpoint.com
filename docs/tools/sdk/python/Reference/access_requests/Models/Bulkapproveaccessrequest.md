---
id: bulkapproveaccessrequest
title: Bulkapproveaccessrequest
pagination_label: Bulkapproveaccessrequest
sidebar_label: Bulkapproveaccessrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bulkapproveaccessrequest', 'Bulkapproveaccessrequest'] 
slug: /tools/sdk/python/access-requests/models/bulkapproveaccessrequest
tags: ['SDK', 'Software Development Kit', 'Bulkapproveaccessrequest', 'Bulkapproveaccessrequest']
---

# Bulkapproveaccessrequest

Request body payload for bulk approve access request endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | List of approval ids to approve the pending requests | [required]
**comment** | **str** | Reason for approving the pending access request. | [required]
}

## Example

```python
from sailpoint.access_requests.models.bulkapproveaccessrequest import Bulkapproveaccessrequest

bulkapproveaccessrequest = Bulkapproveaccessrequest(
approval_ids=["2c9180835d2e5168015d32f890ca1581","2c9180835d2e5168015d32f890ca1582"],
comment='I approve these request items'
)

```
[[Back to top]](#) 

