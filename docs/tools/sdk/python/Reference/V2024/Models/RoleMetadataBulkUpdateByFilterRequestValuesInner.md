---
id: v2024-role-metadata-bulk-update-by-filter-request-values-inner
title: RoleMetadataBulkUpdateByFilterRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByFilterRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByFilterRequestValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMetadataBulkUpdateByFilterRequestValuesInner', 'V2024RoleMetadataBulkUpdateByFilterRequestValuesInner'] 
slug: /tools/sdk/python/v2024/models/role-metadata-bulk-update-by-filter-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByFilterRequestValuesInner', 'V2024RoleMetadataBulkUpdateByFilterRequestValuesInner']
---

# RoleMetadataBulkUpdateByFilterRequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_key** | **str** | the key of metadata attribute | [optional] 
**values** | **[]str** | the values of attribute to be updated | [required]
}

## Example

```python
from sailpoint.v2024.models.role_metadata_bulk_update_by_filter_request_values_inner import RoleMetadataBulkUpdateByFilterRequestValuesInner

role_metadata_bulk_update_by_filter_request_values_inner = RoleMetadataBulkUpdateByFilterRequestValuesInner(
attribute_key='iscFederalClassifications',
values=[secret]
)

```
[[Back to top]](#) 

