---
id: v2024-role-metadata-bulk-update-by-query-request
title: RoleMetadataBulkUpdateByQueryRequest
pagination_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_label: RoleMetadataBulkUpdateByQueryRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMetadataBulkUpdateByQueryRequest', 'V2024RoleMetadataBulkUpdateByQueryRequest'] 
slug: /tools/sdk/python/v2024/models/role-metadata-bulk-update-by-query-request
tags: ['SDK', 'Software Development Kit', 'RoleMetadataBulkUpdateByQueryRequest', 'V2024RoleMetadataBulkUpdateByQueryRequest']
---

# RoleMetadataBulkUpdateByQueryRequest

Bulk update by query request of Role metadata. The maximum meta data values that one single role assigned can not exceed 25. Custom metadata need suit licensed. For more information about the query could refer to  [V3 API Perform Search](https://developer.sailpoint.com/docs/api/v3/search-post)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **object** | query the identities to be updated | [required]
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | The operation to be performed | [required]
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]RoleMetadataBulkUpdateByQueryRequestValuesInner**](role-metadata-bulk-update-by-query-request-values-inner) | The metadata to be updated, including attribute key and value. | [required]
}

## Example

```python
from sailpoint.v2024.models.role_metadata_bulk_update_by_query_request import RoleMetadataBulkUpdateByQueryRequest

role_metadata_bulk_update_by_query_request = RoleMetadataBulkUpdateByQueryRequest(
query={query"={indices=[roles], queryType=TEXT, textQuery={terms=[test123], fields=[id], matchAny=false, contains=true}, includeNested=false}},
operation='REPLACE',
replace_scope='ALL',
values=[
                    sailpoint.v2024.models.role_metadata_bulk_update_by_query_request_values_inner.RoleMetadataBulkUpdateByQueryRequest_values_inner(
                        attribute_key = 'iscFederalClassifications', 
                        attribute_value = [topSecret], )
                    ]
)

```
[[Back to top]](#) 

