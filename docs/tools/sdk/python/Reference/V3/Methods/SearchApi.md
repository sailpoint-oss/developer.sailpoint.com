---
id: search
title: Search
pagination_label: Search
sidebar_label: Search
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Search', 'Search'] 
slug: /tools/sdk/python/v3/methods/search
tags: ['SDK', 'Software Development Kit', 'Search', 'Search']
---

# sailpoint.v3.SearchApi
  Use this API to implement search functionality. 
With search functionality in place, users can search their tenants for nearly any information from throughout their organizations. 

Identity Security Cloud enables organizations to store user data from across all their connected sources and manage the users&#39; access, so the ability to query and filter that data is essential.  
Its search goes through all those sources and finds the results quickly and specifically. 

The search query is flexible - it can be very broad or very narrow. 
The search only returns results for searchable objects it is filtering for. 
The following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities. 
By default, no filter is applied, so a search for &quot;Ad&quot; returns both the identity &quot;Adam.Archer&quot; as well as the role &quot;Administrator.&quot;

Users can further narrow their results by using Identity Security Cloud&#39;s specific syntax and punctuation to structure their queries. 
For example, the query &quot;attributes.location:austin AND NOT manager.name:amanda.ross&quot; returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.
Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how to construct specific search queries. 

Refer to [Using Search](https://documentation.sailpoint.com/saas/help/search/index.html) for more information about Identity Security Cloud&#39;s search and its different possibilities. 

The search feature uses Elasticsearch as a datastore and query engine. 
The power of Elasticsearch makes this feature suitable for ad-hoc reporting.
However, data from the operational databases (ex. identities, roles, events, etc) has to be ingested into Elasticsearch. 
This ingestion process introduces a latency from when the operational data is created to when it is available in search. 
Depending on the system load, this can take a few seconds to a few minutes. 
Please keep this latency in mind when you use search.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search-aggregate**](#search-aggregate) | **POST** `/search/aggregate` | Perform a Search Query Aggregation
[**search-count**](#search-count) | **POST** `/search/count` | Count Documents Satisfying a Query
[**search-get**](#search-get) | **GET** `/search/{index}/{id}` | Get a Document by ID
[**search-post**](#search-post) | **POST** `/search` | Perform Search


## search-aggregate
Perform a Search Query Aggregation
Performs a search query aggregation and returns the aggregation result. By default, you can page a maximum of 10,000 search result records.  To page past 10,000 records, you can use searchAfter paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement searchAfter paging. 

[API Spec](https://developer.sailpoint.com/docs/api/v3/search-aggregate)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | search | [**Search**](../models/search) | True  | 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AggregationResult**](../models/aggregation-result)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Aggregation results. | AggregationResult |  * X-Total-Count - The total result count (returned only if the *count* parameter is specified as *true*).  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.search_api import SearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.aggregation_result import AggregationResult
from sailpoint.v3.models.search import Search
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    search = {
          "queryDsl" : {
            "match" : {
              "name" : "john.doe"
            }
          },
          "aggregationType" : "DSL",
          "aggregationsVersion" : "",
          "query" : {
            "query" : "name:a*",
            "timeZone" : "America/Chicago",
            "fields" : "[firstName,lastName,email]",
            "innerHit" : {
              "query" : "source.name:\\\"Active Directory\\\"",
              "type" : "access"
            }
          },
          "aggregationsDsl" : { },
          "sort" : [ "displayName", "+id" ],
          "filters" : { },
          "queryVersion" : "",
          "queryType" : "SAILPOINT",
          "includeNested" : true,
          "queryResultFilter" : {
            "excludes" : [ "stacktrace" ],
            "includes" : [ "name", "displayName" ]
          },
          "indices" : [ "identities" ],
          "typeAheadQuery" : {
            "field" : "source.name",
            "size" : 100,
            "query" : "Work",
            "sortByValue" : true,
            "nestedType" : "access",
            "sort" : "asc",
            "maxExpansions" : 10
          },
          "textQuery" : {
            "contains" : true,
            "terms" : [ "The quick brown fox", "3141592", "7" ],
            "matchAny" : false,
            "fields" : [ "displayName", "employeeNumber", "roleCount" ]
          },
          "searchAfter" : [ "John Doe", "2c91808375d8e80a0175e1f88a575221" ],
          "aggregations" : {
            "filter" : {
              "field" : "access.type",
              "name" : "Entitlements",
              "type" : "TERM",
              "value" : "ENTITLEMENT"
            },
            "bucket" : {
              "field" : "attributes.city",
              "size" : 100,
              "minDocCount" : 2,
              "name" : "Identity Locations",
              "type" : "TERMS"
            },
            "metric" : {
              "field" : "@access.name",
              "name" : "Access Name Count",
              "type" : "COUNT"
            },
            "subAggregation" : {
              "filter" : {
                "field" : "access.type",
                "name" : "Entitlements",
                "type" : "TERM",
                "value" : "ENTITLEMENT"
              },
              "bucket" : {
                "field" : "attributes.city",
                "size" : 100,
                "minDocCount" : 2,
                "name" : "Identity Locations",
                "type" : "TERMS"
              },
              "metric" : {
                "field" : "@access.name",
                "name" : "Access Name Count",
                "type" : "COUNT"
              },
              "subAggregation" : {
                "filter" : {
                  "field" : "access.type",
                  "name" : "Entitlements",
                  "type" : "TERM",
                  "value" : "ENTITLEMENT"
                },
                "bucket" : {
                  "field" : "attributes.city",
                  "size" : 100,
                  "minDocCount" : 2,
                  "name" : "Identity Locations",
                  "type" : "TERMS"
                },
                "metric" : {
                  "field" : "@access.name",
                  "name" : "Access Name Count",
                  "type" : "COUNT"
                },
                "nested" : {
                  "name" : "id",
                  "type" : "access"
                }
              },
              "nested" : {
                "name" : "id",
                "type" : "access"
              }
            },
            "nested" : {
              "name" : "id",
              "type" : "access"
            }
          }
        } # Search | 
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Perform a Search Query Aggregation
        new_search = Search()
        new_search.from_json(search)
        results =SearchApi(api_client).search_aggregate(new_search, )
        # Below is a request that includes all optional parameters
        # results = SearchApi(api_client).search_aggregate(new_search, offset, limit, count)
        print("The response of SearchApi->search_aggregate:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SearchApi->search_aggregate: %s\n" % e)
```



[[Back to top]](#) 

## search-count
Count Documents Satisfying a Query
Performs a search with a provided query and returns the count of results in the X-Total-Count header.

[API Spec](https://developer.sailpoint.com/docs/api/v3/search-count)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | search | [**Search**](../models/search) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  * X-Total-Count - The total result count (returned only if the *count* parameter is specified as *true*).  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.search_api import SearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.search import Search
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    search = {
          "queryDsl" : {
            "match" : {
              "name" : "john.doe"
            }
          },
          "aggregationType" : "DSL",
          "aggregationsVersion" : "",
          "query" : {
            "query" : "name:a*",
            "timeZone" : "America/Chicago",
            "fields" : "[firstName,lastName,email]",
            "innerHit" : {
              "query" : "source.name:\\\"Active Directory\\\"",
              "type" : "access"
            }
          },
          "aggregationsDsl" : { },
          "sort" : [ "displayName", "+id" ],
          "filters" : { },
          "queryVersion" : "",
          "queryType" : "SAILPOINT",
          "includeNested" : true,
          "queryResultFilter" : {
            "excludes" : [ "stacktrace" ],
            "includes" : [ "name", "displayName" ]
          },
          "indices" : [ "identities" ],
          "typeAheadQuery" : {
            "field" : "source.name",
            "size" : 100,
            "query" : "Work",
            "sortByValue" : true,
            "nestedType" : "access",
            "sort" : "asc",
            "maxExpansions" : 10
          },
          "textQuery" : {
            "contains" : true,
            "terms" : [ "The quick brown fox", "3141592", "7" ],
            "matchAny" : false,
            "fields" : [ "displayName", "employeeNumber", "roleCount" ]
          },
          "searchAfter" : [ "John Doe", "2c91808375d8e80a0175e1f88a575221" ],
          "aggregations" : {
            "filter" : {
              "field" : "access.type",
              "name" : "Entitlements",
              "type" : "TERM",
              "value" : "ENTITLEMENT"
            },
            "bucket" : {
              "field" : "attributes.city",
              "size" : 100,
              "minDocCount" : 2,
              "name" : "Identity Locations",
              "type" : "TERMS"
            },
            "metric" : {
              "field" : "@access.name",
              "name" : "Access Name Count",
              "type" : "COUNT"
            },
            "subAggregation" : {
              "filter" : {
                "field" : "access.type",
                "name" : "Entitlements",
                "type" : "TERM",
                "value" : "ENTITLEMENT"
              },
              "bucket" : {
                "field" : "attributes.city",
                "size" : 100,
                "minDocCount" : 2,
                "name" : "Identity Locations",
                "type" : "TERMS"
              },
              "metric" : {
                "field" : "@access.name",
                "name" : "Access Name Count",
                "type" : "COUNT"
              },
              "subAggregation" : {
                "filter" : {
                  "field" : "access.type",
                  "name" : "Entitlements",
                  "type" : "TERM",
                  "value" : "ENTITLEMENT"
                },
                "bucket" : {
                  "field" : "attributes.city",
                  "size" : 100,
                  "minDocCount" : 2,
                  "name" : "Identity Locations",
                  "type" : "TERMS"
                },
                "metric" : {
                  "field" : "@access.name",
                  "name" : "Access Name Count",
                  "type" : "COUNT"
                },
                "nested" : {
                  "name" : "id",
                  "type" : "access"
                }
              },
              "nested" : {
                "name" : "id",
                "type" : "access"
              }
            },
            "nested" : {
              "name" : "id",
              "type" : "access"
            }
          }
        } # Search | 

    try:
        # Count Documents Satisfying a Query
        new_search = Search()
        new_search.from_json(search)
        SearchApi(api_client).search_count(new_search)
        # Below is a request that includes all optional parameters
        # SearchApi(api_client).search_count(new_search)
        except Exception as e:
        print("Exception when calling SearchApi->search_count: %s\n" % e)
```



[[Back to top]](#) 

## search-get
Get a Document by ID
Fetches a single document from the specified index, using the specified document ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/search-get)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | index | **str** | True  | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*. 
Path   | id | **str** | True  | ID of the requested document.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The requested document. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.search_api import SearchApi
from sailpoint.v3.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    index = 'identities' # str | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*.  # str | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*. 
    id = '2c91808568c529c60168cca6f90c1313' # str | ID of the requested document. # str | ID of the requested document.

    try:
        # Get a Document by ID
        
        results =SearchApi(api_client).search_get(index, id)
        # Below is a request that includes all optional parameters
        # results = SearchApi(api_client).search_get(index, id)
        print("The response of SearchApi->search_get:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SearchApi->search_get: %s\n" % e)
```



[[Back to top]](#) 

## search-post
Perform Search
Perform a search with the provided query and return a matching result collection. To page past 10,000 records, you can use `searchAfter` paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging. 

[API Spec](https://developer.sailpoint.com/docs/api/v3/search-post)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | search | [**Search**](../models/search) | True  | 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
**List[object]**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of matching documents. | List[object] |  * X-Total-Count - The total result count (returned only if the *count* parameter is specified as *true*).  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.search_api import SearchApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.search import Search
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    search = {
          "queryDsl" : {
            "match" : {
              "name" : "john.doe"
            }
          },
          "aggregationType" : "DSL",
          "aggregationsVersion" : "",
          "query" : {
            "query" : "name:a*",
            "timeZone" : "America/Chicago",
            "fields" : "[firstName,lastName,email]",
            "innerHit" : {
              "query" : "source.name:\\\"Active Directory\\\"",
              "type" : "access"
            }
          },
          "aggregationsDsl" : { },
          "sort" : [ "displayName", "+id" ],
          "filters" : { },
          "queryVersion" : "",
          "queryType" : "SAILPOINT",
          "includeNested" : true,
          "queryResultFilter" : {
            "excludes" : [ "stacktrace" ],
            "includes" : [ "name", "displayName" ]
          },
          "indices" : [ "identities" ],
          "typeAheadQuery" : {
            "field" : "source.name",
            "size" : 100,
            "query" : "Work",
            "sortByValue" : true,
            "nestedType" : "access",
            "sort" : "asc",
            "maxExpansions" : 10
          },
          "textQuery" : {
            "contains" : true,
            "terms" : [ "The quick brown fox", "3141592", "7" ],
            "matchAny" : false,
            "fields" : [ "displayName", "employeeNumber", "roleCount" ]
          },
          "searchAfter" : [ "John Doe", "2c91808375d8e80a0175e1f88a575221" ],
          "aggregations" : {
            "filter" : {
              "field" : "access.type",
              "name" : "Entitlements",
              "type" : "TERM",
              "value" : "ENTITLEMENT"
            },
            "bucket" : {
              "field" : "attributes.city",
              "size" : 100,
              "minDocCount" : 2,
              "name" : "Identity Locations",
              "type" : "TERMS"
            },
            "metric" : {
              "field" : "@access.name",
              "name" : "Access Name Count",
              "type" : "COUNT"
            },
            "subAggregation" : {
              "filter" : {
                "field" : "access.type",
                "name" : "Entitlements",
                "type" : "TERM",
                "value" : "ENTITLEMENT"
              },
              "bucket" : {
                "field" : "attributes.city",
                "size" : 100,
                "minDocCount" : 2,
                "name" : "Identity Locations",
                "type" : "TERMS"
              },
              "metric" : {
                "field" : "@access.name",
                "name" : "Access Name Count",
                "type" : "COUNT"
              },
              "subAggregation" : {
                "filter" : {
                  "field" : "access.type",
                  "name" : "Entitlements",
                  "type" : "TERM",
                  "value" : "ENTITLEMENT"
                },
                "bucket" : {
                  "field" : "attributes.city",
                  "size" : 100,
                  "minDocCount" : 2,
                  "name" : "Identity Locations",
                  "type" : "TERMS"
                },
                "metric" : {
                  "field" : "@access.name",
                  "name" : "Access Name Count",
                  "type" : "COUNT"
                },
                "nested" : {
                  "name" : "id",
                  "type" : "access"
                }
              },
              "nested" : {
                "name" : "id",
                "type" : "access"
              }
            },
            "nested" : {
              "name" : "id",
              "type" : "access"
            }
          }
        } # Search | 
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Perform Search
        new_search = Search()
        new_search.from_json(search)
        results =SearchApi(api_client).search_post(new_search, )
        # Below is a request that includes all optional parameters
        # results = SearchApi(api_client).search_post(new_search, offset, limit, count)
        print("The response of SearchApi->search_post:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SearchApi->search_post: %s\n" % e)
```



[[Back to top]](#) 



