---
id: v2025-bulk-approve-access-request
title: BulkApproveAccessRequest
pagination_label: BulkApproveAccessRequest
sidebar_label: BulkApproveAccessRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkApproveAccessRequest', 'V2025BulkApproveAccessRequest'] 
slug: /tools/sdk/python/v2025/models/bulk-approve-access-request
tags: ['SDK', 'Software Development Kit', 'BulkApproveAccessRequest', 'V2025BulkApproveAccessRequest']
---

# BulkApproveAccessRequest

Request body payload for bulk approve access request endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_ids** | **[]str** | List of approval ids to approve the pending requests | [required]
**comment** | **str** | Reason for approving the pending access request. | [required]
}

## Example

```python
from sailpoint.v2025.models.bulk_approve_access_request import BulkApproveAccessRequest

bulk_approve_access_request = BulkApproveAccessRequest(
approval_ids=[2c9180835d2e5168015d32f890ca1581, 2c9180835d2e5168015d32f890ca1582],
comment='I approve these request items'
)

```
[[Back to top]](#) 

