---
id: v2024-role-metadata-bulk-update-by-id-request-values-inner
title: RoleMetadataBulkUpdateByIdRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByIdRequestValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2024RoleMetadataBulkUpdateByIdRequestValuesInner'] 
slug: /tools/sdk/python/v2024/models/role-metadata-bulk-update-by-id-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByIdRequestValuesInner', 'V2024RoleMetadataBulkUpdateByIdRequestValuesInner']
---

# RoleMetadataBulkUpdateByIdRequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | the key of metadata attribute | [required]
**values** | **[]str** | the values of attribute to be updated | [required]
}

## Example

```python
from sailpoint.v2024.models.role_metadata_bulk_update_by_id_request_values_inner import RoleMetadataBulkUpdateByIdRequestValuesInner

role_metadata_bulk_update_by_id_request_values_inner = RoleMetadataBulkUpdateByIdRequestValuesInner(
attribute='iscFederalClassifications',
values=[secret]
)

```
[[Back to top]](#) 

