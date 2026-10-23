# PublicIdentities

# PublicIdentitiesAPI
  Use this API in conjunction with [Public Identites Config](https://developer.sailpoint.com/docs/api/public-identities-config) to enable non-administrators to view identities&#39; publicly visible attributes. 
With this functionality in place, non-administrators can view identity attributes other than the default attributes (email, lifecycle state, and manager), depending on which identity attributes their organization administrators have made public. 
This can be helpful for access approvers, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identities-v1**](#get-public-identities-v1) | **Get** `/public-identities/v1` | Get list of public identities
[**get-public-identities-visible-attributes-v2**](#get-public-identities-visible-attributes-v2) | **Get** `/public-identities/v2/visible-attributes` | Get public identity visible attributes
[**search-public-identities-v2**](#search-public-identities-v2) | **Post** `/public-identities/v2/search` | Search public identities


## get-public-identities-v1
Get list of public identities
Get a list of public identities.  Set `add-core-filters` to `true` to exclude incomplete identities and uncorrelated accounts.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPublicIdentitiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* | 
 **addCoreFilters** | **bool** | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \&quot;spadmin\&quot; or \&quot;cloudadmin\&quot;.   - uid should not be null.   - lastname should not be null.   - email should not be null. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 

### Return type

[**[]PublicIdentity**](../models/public-identity)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `firstname eq "John"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* (optional)
    addCoreFilters := false // bool | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \"spadmin\" or \"cloudadmin\".   - uid should not be null.   - lastname should not be null.   - email should not be null. (optional) (default to false) # bool | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \"spadmin\" or \"cloudadmin\".   - uid should not be null.   - lastname should not be null.   - email should not be null. (optional) (default to false)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PublicIdentitiesAPI.GetPublicIdentitiesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.PublicIdentitiesAPI.GetPublicIdentitiesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).AddCoreFilters(addCoreFilters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PublicIdentitiesAPI.GetPublicIdentitiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPublicIdentitiesV1`: []PublicIdentity
    fmt.Fprintf(os.Stdout, "Response from `PublicIdentitiesAPI.GetPublicIdentitiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-public-identities-visible-attributes-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get public identity visible attributes
Returns the default and configured identity attribute keys (with display names) that are allowed for public-identity search and projection. Call this before POST /public-identities/v2/search to learn which field keys are valid in query fields and sort.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-visible-attributes-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPublicIdentitiesVisibleAttributesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**PublicIdentityVisibleAttributes**](../models/public-identity-visible-attributes)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PublicIdentitiesAPI.GetPublicIdentitiesVisibleAttributesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.PublicIdentitiesAPI.GetPublicIdentitiesVisibleAttributesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PublicIdentitiesAPI.GetPublicIdentitiesVisibleAttributesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPublicIdentitiesVisibleAttributesV2`: PublicIdentityVisibleAttributes
    fmt.Fprintf(os.Stdout, "Response from `PublicIdentitiesAPI.GetPublicIdentitiesVisibleAttributesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## search-public-identities-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Search public identities
Search public identities using a composite query and return matching records.

The root query set combines criteria with AND and must include attributes.identityState.exact = ACTIVE. The field keys must come from GET /public-identities/v2/visible-attributes and may use the prefix "attributes." and/or the suffix ".exact". See the request examples for the required exact payload structure.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/search-public-identities-v-2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchPublicIdentitiesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **publicIdentitiesSearchRequest** | [**PublicIdentitiesSearchRequest**](../models/public-identities-search-request) |  | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]PublicIdentityV2**](../models/public-identity-v2)

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
    public_identities "github.com/sailpoint-oss/golang-sdk/v3/public_identities"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    publicidentitiessearchrequestJson := []byte(`{
          "indices" : [ "identities" ],
          "sort" : [ "name" ],
          "querySet" : {
            "entries" : [ {
              "queryType" : "TEXT",
              "textQuery" : {
                "fields" : [ "attributes.identityState.exact" ],
                "terms" : [ "ACTIVE" ],
                "matchAny" : false,
                "contains" : false,
                "strict" : true
              }
            } ],
            "matchAny" : false
          },
          "queryType" : "COMPOSITE",
          "includeNested" : false
        }`) // PublicIdentitiesSearchRequest | 
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    var publicIdentitiesSearchRequest public_identities.PublicIdentitiesSearchRequest
    if err := json.Unmarshal(publicidentitiessearchrequestJson, &publicIdentitiesSearchRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PublicIdentitiesAPI.SearchPublicIdentitiesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).PublicIdentitiesSearchRequest(publicIdentitiesSearchRequest).Execute()
	  //resp, r, err := apiClient.PublicIdentitiesAPI.SearchPublicIdentitiesV2(context.Background()).XSailPointExperimental(xSailPointExperimental).PublicIdentitiesSearchRequest(publicIdentitiesSearchRequest).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PublicIdentitiesAPI.SearchPublicIdentitiesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchPublicIdentitiesV2`: []PublicIdentityV2
    fmt.Fprintf(os.Stdout, "Response from `PublicIdentitiesAPI.SearchPublicIdentitiesV2`: %v\n", resp)
}
```

[[Back to top]](#)

