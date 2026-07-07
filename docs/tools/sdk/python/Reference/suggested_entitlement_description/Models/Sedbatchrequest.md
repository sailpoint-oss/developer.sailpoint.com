---
id: sedbatchrequest
title: Sedbatchrequest
pagination_label: Sedbatchrequest
sidebar_label: Sedbatchrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sedbatchrequest', 'Sedbatchrequest'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/sedbatchrequest
tags: ['SDK', 'Software Development Kit', 'Sedbatchrequest', 'Sedbatchrequest']
---

# Sedbatchrequest

Sed Batch Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | **[]str** | list of entitlement ids | [optional] 
**seds** | **[]str** | list of sed ids | [optional] 
**search_criteria** | [**map[string]Searchcriteria**](searchcriteria) | Search criteria for the batch request. | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sedbatchrequest import Sedbatchrequest

sedbatchrequest = Sedbatchrequest(
entitlements=[
                    '016629d1-1d25-463f-97f3-c6686846650'
                    ],
seds=[
                    '016629d1-1d25-463f-97f3-c6686846650'
                    ],
search_criteria={
                    'key' : sailpoint.suggested_entitlement_description.models.search_criteria.Search Criteria(
                        indices = ["entitlements"], 
                        filters = {"status":{"type":"TERMS","terms":["active","inactive"]}}, 
                        query = sailpoint.suggested_entitlement_description.models.searchcriteria_query.searchcriteria_query(), 
                        query_type = 'TEXT', 
                        text_query = sailpoint.suggested_entitlement_description.models.searchcriteria_text_query.searchcriteria_textQuery(
                            terms = ["admin","user"], 
                            fields = ["role","name"], 
                            match_any = True, ), 
                        include_nested = True, 
                        sort = ["name:asc","createdAt:desc"], 
                        search_after = ["12345","67890"], )
                    }
)

```
[[Back to top]](#) 

