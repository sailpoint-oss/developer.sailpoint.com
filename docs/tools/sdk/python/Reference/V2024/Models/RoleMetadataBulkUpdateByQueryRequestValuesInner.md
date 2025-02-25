---
id: v2024-role-metadata-bulk-update-by-query-request-values-inner
title: RoleMetadataBulkUpdateByQueryRequestValuesInner
pagination_label: RoleMetadataBulkUpdateByQueryRequestValuesInner
sidebar_label: RoleMetadataBulkUpdateByQueryRequestValuesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMetadataBulkUpdateByQueryRequestValuesInner', 'V2024RoleMetadataBulkUpdateByQueryRequestValuesInner'] 
slug: /tools/sdk/python/v2024/models/role-metadata-bulk-update-by-query-request-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByQueryRequestValuesInner', 'V2024RoleMetadataBulkUpdateByQueryRequestValuesInner']
---

# RoleMetadataBulkUpdateByQueryRequestValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_key** | **str** | the key of metadata attribute | [optional] 
**attribute_value** | **[]str** | the values of attribute to be updated | [optional] 
}

## Example

```python
from sailpoint.v2024.models.role_metadata_bulk_update_by_query_request_values_inner import RoleMetadataBulkUpdateByQueryRequestValuesInner

role_metadata_bulk_update_by_query_request_values_inner = RoleMetadataBulkUpdateByQueryRequestValuesInner(
attribute_key='iscFederalClassifications',
attribute_value=[topSecret]
)

```
[[Back to top]](#) 

