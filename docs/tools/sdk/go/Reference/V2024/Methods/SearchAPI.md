---
id: v2024-search
title: Search
pagination_label: Search
sidebar_label: Search
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Search', 'V2024Search'] 
slug: /tools/sdk/go/v2024/methods/search
tags: ['SDK', 'Software Development Kit', 'Search', 'V2024Search']
---

# SearchAPI
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search-aggregate**](#search-aggregate) | **Post** `/search/aggregate` | Perform a Search Query Aggregation
[**search-count**](#search-count) | **Post** `/search/count` | Count Documents Satisfying a Query
[**search-get**](#search-get) | **Get** `/search/{index}/{id}` | Get a Document by ID
[**search-post**](#search-post) | **Post** `/search` | Perform Search


## search-aggregate
Perform a Search Query Aggregation
Performs a search query aggregation and returns the aggregation result. By default, you can page a maximum of 10,000 search result records.  To page past 10,000 records, you can use searchAfter paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement searchAfter paging. 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/search-aggregate)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchAggregateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**Search**](../models/search) |  | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**AggregationResult**](../models/aggregation-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    search := []byte(`{
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
        }`) // Search | 
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    var search v2024.Search
    if err := json.Unmarshal(search, &search); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SearchAPI.SearchAggregate(context.Background()).Search(search).Execute()
	  //resp, r, err := apiClient.V2024.SearchAPI.SearchAggregate(context.Background()).Search(search).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAPI.SearchAggregate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchAggregate`: AggregationResult
    fmt.Fprintf(os.Stdout, "Response from `SearchAPI.SearchAggregate`: %v\n", resp)
}
```

[[Back to top]](#)

## search-count
Count Documents Satisfying a Query
Performs a search with a provided query and returns the count of results in the X-Total-Count header.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/search-count)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchCountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**Search**](../models/search) |  | 

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    search := []byte(`{
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
        }`) // Search | 

    var search v2024.Search
    if err := json.Unmarshal(search, &search); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.SearchAPI.SearchCount(context.Background()).Search(search).Execute()
	  //r, err := apiClient.V2024.SearchAPI.SearchCount(context.Background()).Search(search).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAPI.SearchCount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## search-get
Get a Document by ID
Fetches a single document from the specified index, using the specified document ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/search-get)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**index** | **string** | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*.  | 
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSearchGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**map[string]interface{}**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    index := `identities` // string | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*.  # string | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*. 
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SearchAPI.SearchGet(context.Background(), index, id).Execute()
	  //resp, r, err := apiClient.V2024.SearchAPI.SearchGet(context.Background(), index, id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAPI.SearchGet``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchGet`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `SearchAPI.SearchGet`: %v\n", resp)
}
```

[[Back to top]](#)

## search-post
Perform Search
Perform a search with the provided query and return a matching result collection. To page past 10,000 records, you can use `searchAfter` paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging. 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/search-post)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | [**Search**](../models/search) |  | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

**[]map[string]interface{}**

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    search := []byte(`{
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
        }`) // Search | 
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 10000 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    var search v2024.Search
    if err := json.Unmarshal(search, &search); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.SearchAPI.SearchPost(context.Background()).Search(search).Execute()
	  //resp, r, err := apiClient.V2024.SearchAPI.SearchPost(context.Background()).Search(search).Offset(offset).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAPI.SearchPost``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchPost`: []map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `SearchAPI.SearchPost`: %v\n", resp)
}
```

[[Back to top]](#)

