---
id: v2024-source-app-bulk-update-request
title: SourceAppBulkUpdateRequest
pagination_label: SourceAppBulkUpdateRequest
sidebar_label: SourceAppBulkUpdateRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceAppBulkUpdateRequest', 'V2024SourceAppBulkUpdateRequest'] 
slug: /tools/sdk/python/v2024/models/source-app-bulk-update-request
tags: ['SDK', 'Software Development Kit', 'SourceAppBulkUpdateRequest', 'V2024SourceAppBulkUpdateRequest']
---

# SourceAppBulkUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_ids** | **[]str** | List of source app ids to update | [required]
**json_patch** | [**[]JsonPatchOperation**](json-patch-operation) | The JSONPatch payload used to update the source app. | [required]
}

## Example

```python
from sailpoint.v2024.models.source_app_bulk_update_request import SourceAppBulkUpdateRequest

source_app_bulk_update_request = SourceAppBulkUpdateRequest(
app_ids=[2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e, 2c91808a7624751a01762f19d692220f],
json_patch=[{op=replace, path=/enabled, value=false}, {op=replace, path=/matchAllAccounts, value=false}]
)

```
[[Back to top]](#) 

