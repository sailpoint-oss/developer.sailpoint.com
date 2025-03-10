---
id: v2024-role-metadata-bulk-update-by-id-request
title: RoleMetadataBulkUpdateByIdRequest
pagination_label: RoleMetadataBulkUpdateByIdRequest
sidebar_label: RoleMetadataBulkUpdateByIdRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMetadataBulkUpdateByIdRequest', 'V2024RoleMetadataBulkUpdateByIdRequest'] 
slug: /tools/sdk/python/v2024/models/role-metadata-bulk-update-by-id-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequest', 'V2024RoleMetadataBulkUpdateByIdRequest']
---

# RoleMetadataBulkUpdateByIdRequest

This API initialize a Bulk update by Id request of Role metadata. The maximum role count in a single update request is 3000. The maximum meta data values that one single role assigned can not exceed 25. Custom metadata need suit licensed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roles** | **[]str** | Roles' Id to be updated | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]
}

## Example

```python
from sailpoint.v2024.models.role_metadata_bulk_update_by_id_request import RoleMetadataBulkUpdateByIdRequest

role_metadata_bulk_update_by_id_request = RoleMetadataBulkUpdateByIdRequest(
roles=[b1db89554cfa431cb8b9921ea38d9367],
operation='REPLACE',
replace_scope='ALL',
values=[{attribute=iscFederalClassifications, values=[topSecret]}]
)

```
[[Back to top]](#) 

