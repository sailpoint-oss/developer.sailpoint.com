# PublicMachineIdentities

# PublicMachineIdentitiesAPI
  Use this API to list machine identities with a reduced, public-safe payload for catalog and request workflows.
Responses always include &#x60;id&#x60;, &#x60;name&#x60;, and &#x60;description&#x60;. When your tenant returns enriched public machine identity data, responses also include &#x60;subtype&#x60; and the primary &#x60;owner&#x60; (&#x60;id&#x60;, &#x60;name&#x60;, and &#x60;email&#x60;). When those enriched fields are not enabled for your tenant, &#x60;subtype&#x60; and &#x60;owner&#x60; are omitted or null and requests that filter or sort on &#x60;subtype&#x60; or filter on &#x60;owner.id&#x60;/&#x60;owner&#x60; return &#x60;400 Bad Request&#x60;.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-public-machine-identities-v1**](#list-public-machine-identities-v1) | **Get** `/public-machine-identities/v1` | List public machine identities


## list-public-machine-identities-v1
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
List public machine identities
Get a list of machine identities with a reduced public payload (`id`, `name`, `description`, and optionally `subtype` and the primary `owner`). Any authenticated user with the default scope can call this endpoint; it does not require the `idn:mis-identity:read` scope.

[API Spec](https://developer.sailpoint.com/docs/api/list-public-machine-identities-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPublicMachineIdentitiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  &#x60;subtype&#x60;, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return &#x60;400 Bad Request&#x60;. **owner** is rewritten to **owner.id** when filtering. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on &#x60;subtype&#x60; is only available when your tenant returns enriched public machine identity data; otherwise the request returns &#x60;400 Bad Request&#x60;. | 

### Return type

[**[]PublicMachineIdentity**](../models/public-machine-identity)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "Production API Agent"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  `subtype`, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return `400 Bad Request`. **owner** is rewritten to **owner.id** when filtering. (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  `subtype`, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return `400 Bad Request`. **owner** is rewritten to **owner.id** when filtering. (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on `subtype` is only available when your tenant returns enriched public machine identity data; otherwise the request returns `400 Bad Request`. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on `subtype` is only available when your tenant returns enriched public machine identity data; otherwise the request returns `400 Bad Request`. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PublicMachineIdentitiesAPI.ListPublicMachineIdentitiesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.PublicMachineIdentitiesAPI.ListPublicMachineIdentitiesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PublicMachineIdentitiesAPI.ListPublicMachineIdentitiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPublicMachineIdentitiesV1`: []PublicMachineIdentity
    fmt.Fprintf(os.Stdout, "Response from `PublicMachineIdentitiesAPI.ListPublicMachineIdentitiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

