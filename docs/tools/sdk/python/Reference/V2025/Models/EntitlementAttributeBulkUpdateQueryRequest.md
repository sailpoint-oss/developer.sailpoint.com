---
id: v2025-entitlement-attribute-bulk-update-query-request
title: EntitlementAttributeBulkUpdateQueryRequest
pagination_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_label: EntitlementAttributeBulkUpdateQueryRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementAttributeBulkUpdateQueryRequest', 'V2025EntitlementAttributeBulkUpdateQueryRequest'] 
slug: /tools/sdk/python/v2025/models/entitlement-attribute-bulk-update-query-request
tags: ['SDK', 'Software Development Kit', 'EntitlementAttributeBulkUpdateQueryRequest', 'V2025EntitlementAttributeBulkUpdateQueryRequest']
---

# EntitlementAttributeBulkUpdateQueryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**Search**](search) |  | [optional] 
**operation** |  **Enum** [  'ADD',    'REMOVE',    'REPLACE' ] | Operation to perform on the attributes in the bulk update request. | [optional] 
**replace_scope** |  **Enum** [  'ALL',    'ATTRIBUTE' ] | The choice of update scope. | [optional] 
**values** | [**[]RoleMetadataBulkUpdateByIdRequestValuesInner**](role-metadata-bulk-update-by-id-request-values-inner) | The metadata to be updated, including attribute and values. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.entitlement_attribute_bulk_update_query_request import EntitlementAttributeBulkUpdateQueryRequest

entitlement_attribute_bulk_update_query_request = EntitlementAttributeBulkUpdateQueryRequest(
query=sailpoint.v2025.models.search.Search(
                    indices = [identities], 
                    query_type = 'SAILPOINT', 
                    query_version = null, 
                    query = sailpoint.v2025.models.query.Query(
                        fields = '[firstName,lastName,email]', 
                        time_zone = 'America/Chicago', 
                        inner_hit = sailpoint.v2025.models.inner_hit.InnerHit(
                            query = 'source.name:\"Active Directory\"', 
                            type = 'access', ), ), 
                    query_dsl = {match={name=john.doe}}, 
                    text_query = sailpoint.v2025.models.text_query.TextQuery(
                        terms = [The quick brown fox, 3141592, 7], 
                        fields = [displayName, employeeNumber, roleCount], 
                        match_any = False, 
                        contains = True, ), 
                    type_ahead_query = sailpoint.v2025.models.type_ahead_query.TypeAheadQuery(
                        query = 'Work', 
                        field = 'source.name', 
                        nested_type = 'access', 
                        max_expansions = 10, 
                        size = 100, 
                        sort = 'desc', 
                        sort_by_value = True, ), 
                    include_nested = True, 
                    query_result_filter = sailpoint.v2025.models.query_result_filter.QueryResultFilter(
                        includes = [name, displayName], 
                        excludes = [stacktrace], ), 
                    aggregation_type = 'DSL', 
                    aggregations_version = null, 
                    aggregations_dsl = {}, 
                    aggregations = null, 
                    sort = [displayName, +id], 
                    search_after = [John Doe, 2c91808375d8e80a0175e1f88a575221], 
                    filters = {}, ),
operation='add',
replace_scope='attribute',
values=[{attribute=iscFederalClassifications, values=[topSecret]}]
)

```
[[Back to top]](#) 

