---
id: search
title: Search
pagination_label: Search
sidebar_label: Search
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Search', 'Search'] 
slug: /tools/sdk/powershell/v3/methods/search
tags: ['SDK', 'Software Development Kit', 'Search', 'Search']
---

# Search
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
[**Search-Aggregate**](#search-aggregate) | **POST** `/search/aggregate` | Perform a Search Query Aggregation
[**Search-Count**](#search-count) | **POST** `/search/count` | Count Documents Satisfying a Query
[**Search-Get**](#search-get) | **GET** `/search/{index}/{id}` | Get a Document by ID
[**Search-Post**](#search-post) | **POST** `/search` | Perform Search

## search-aggregate
Performs a search query aggregation and returns the aggregation result. By default, you can page a maximum of 10,000 search result records.  To page past 10,000 records, you can use searchAfter paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement searchAfter paging. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Search | [**Search**](../models/search) | True  | 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AggregationResult**](../models/aggregation-result)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Aggregation results. | AggregationResult
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json, text/csv

### Example
```powershell
$Search = @"{
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
}"@
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Perform a Search Query Aggregation

try {
    $Result = ConvertFrom-JsonToSearch -Json $Search
    Search-Aggregate -Search $Result
    
    # Below is a request that includes all optional parameters
    # Search-Aggregate -Search $Search -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-Aggregate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## search-count
Performs a search with a provided query and returns the count of results in the X-Total-Count header.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Search | [**Search**](../models/search) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Search = @"{
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
}"@

# Count Documents Satisfying a Query

try {
    $Result = ConvertFrom-JsonToSearch -Json $Search
    Search-Count -Search $Result
    
    # Below is a request that includes all optional parameters
    # Search-Count -Search $Search  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-Count"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## search-get
Fetches a single document from the specified index, using the specified document ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Index | **String** | True  | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*. 
Path   | Id | **String** | True  | ID of the requested document.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The requested document. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Index = "accessprofiles" # String | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*. 
$Id = "2c91808568c529c60168cca6f90c1313" # String | ID of the requested document.

# Get a Document by ID

try {
    Search-Get -Index $Index  -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Search-Get -Index $Index -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-Get"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## search-post
Perform a search with the provided query and return a matching result collection. To page past 10,000 records, you can use `searchAfter` paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging. 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Search | [**Search**](../models/search) | True  | 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**SystemCollectionsHashtable[]**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of matching documents. | SystemCollectionsHashtable[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Search = @"{
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
}"@
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 10000 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Perform Search

try {
    $Result = ConvertFrom-JsonToSearch -Json $Search
    Search-Post -Search $Result
    
    # Below is a request that includes all optional parameters
    # Search-Post -Search $Search -Offset $Offset -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Search-Post"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
