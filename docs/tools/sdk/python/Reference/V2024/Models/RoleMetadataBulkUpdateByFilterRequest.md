---
id: v2024-role-metadata-bulk-update-by-filter-request
title: RoleMetadataBulkUpdateByFilterRequest
pagination_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_label: RoleMetadataBulkUpdateByFilterRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMetadataBulkUpdateByFilterRequest', 'V2024RoleMetadataBulkUpdateByFilterRequest'] 
slug: /tools/sdk/python/v2024/models/role-metadata-bulk-update-by-filter-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByFilterRequest', 'V2024RoleMetadataBulkUpdateByFilterRequest']
---

# RoleMetadataBulkUpdateByFilterRequest

This API initialize a a Bulk update by filter request of Role metadata. The maximum meta data values that one single role assigned can not exceed 25. Custom metadata need suit licensed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **str** | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]RoleMetadataBulkUpdateByFilterRequestValuesInner**](role-metadata-bulk-update-by-filter-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]
}

## Example

```python
from sailpoint.v2024.models.role_metadata_bulk_update_by_filter_request import RoleMetadataBulkUpdateByFilterRequest

role_metadata_bulk_update_by_filter_request = RoleMetadataBulkUpdateByFilterRequest(
filters=' requestable eq false',
operation='REPLACE',
replace_scope='ALL',
values=[{attribute=iscFederalClassifications, values=[topSecret]}]
)

```
[[Back to top]](#) 

