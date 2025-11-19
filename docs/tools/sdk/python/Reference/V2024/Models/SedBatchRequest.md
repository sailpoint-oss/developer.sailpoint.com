---
id: v2024-sed-batch-request
title: SedBatchRequest
pagination_label: SedBatchRequest
sidebar_label: SedBatchRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SedBatchRequest', 'V2024SedBatchRequest'] 
slug: /tools/sdk/python/v2024/models/sed-batch-request
tags: ['SDK', 'Software Development Kit', 'SedBatchRequest', 'V2024SedBatchRequest']
---

# SedBatchRequest

Sed Batch Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **[]str** | list of entitlement ids | [optional] 
**seds** | **[]str** | list of sed ids | [optional] 
**search_criteria** | [**map[string]SearchCriteria**](search-criteria) | Search criteria for the batch request. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.sed_batch_request import SedBatchRequest

sed_batch_request = SedBatchRequest(
entitlements=[
                    '016629d1-1d25-463f-97f3-c6686846650'
                    ],
seds=[
                    '016629d1-1d25-463f-97f3-c6686846650'
                    ],
search_criteria={
                    'key' : sailpoint.v2024.models.search_criteria.Search Criteria(
                        indices = [entitlements], 
                        filters = {status={type=TERMS, terms=[active, inactive]}}, 
                        query = sailpoint.v2024.models.search_criteria_query.SearchCriteria_query(), 
                        query_type = 'TEXT', 
                        text_query = sailpoint.v2024.models.search_criteria_text_query.SearchCriteria_textQuery(
                            terms = [admin, user], 
                            fields = [role, name], 
                            match_any = True, ), 
                        include_nested = True, 
                        sort = [name:asc, createdAt:desc], 
                        search_after = [12345, 67890], )
                    }
)

```
[[Back to top]](#) 

