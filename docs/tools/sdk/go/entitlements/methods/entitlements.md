# Entitlements

# EntitlementsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-for-entitlement-v1**](#create-access-model-metadata-for-entitlement-v1) | **Post** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to an entitlement.
[**delete-access-model-metadata-from-entitlement-v1**](#delete-access-model-metadata-from-entitlement-v1) | **Delete** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from an entitlement.
[**get-entitlement-request-config-v1**](#get-entitlement-request-config-v1) | **Get** `/entitlements/v1/{id}/entitlement-request-config` | Get entitlement request config
[**get-entitlement-v1**](#get-entitlement-v1) | **Get** `/entitlements/v1/{id}` | Get an entitlement
[**import-entitlements-by-source-v1**](#import-entitlements-by-source-v1) | **Post** `/entitlements/v1/aggregate/sources/{id}` | Aggregate entitlements
[**list-entitlement-children-v1**](#list-entitlement-children-v1) | **Get** `/entitlements/v1/{id}/children` | List of entitlements children
[**list-entitlement-parents-v1**](#list-entitlement-parents-v1) | **Get** `/entitlements/v1/{id}/parents` | List of entitlements parents
[**list-entitlements-by-account-v1**](#list-entitlements-by-account-v1) | **Get** `/entitlements/v1/account/{accountId}/entitlements` | Get entitlements for an account
[**list-entitlements-v1**](#list-entitlements-v1) | **Get** `/entitlements/v1` | Gets a list of entitlements.
[**patch-entitlement-v1**](#patch-entitlement-v1) | **Patch** `/entitlements/v1/{id}` | Patch an entitlement
[**put-entitlement-request-config-v1**](#put-entitlement-request-config-v1) | **Put** `/entitlements/v1/{id}/entitlement-request-config` | Replace entitlement request config
[**reset-source-entitlements-v1**](#reset-source-entitlements-v1) | **Post** `/entitlements/v1/reset/sources/{id}` | Reset source entitlements
[**update-entitlements-in-bulk-v1**](#update-entitlements-in-bulk-v1) | **Post** `/entitlements/v1/bulk-update` | Bulk update an entitlement list
[**update-entitlements-metadata-by-filter-v1**](#update-entitlements-metadata-by-filter-v1) | **Post** `/entitlements/v1/access-model-metadata/bulk-update/filter` | Bulk-update metadata by filter
[**update-entitlements-metadata-by-ids-v1**](#update-entitlements-metadata-by-ids-v1) | **Post** `/entitlements/v1/access-model-metadata/bulk-update/ids` | Bulk-update metadata by ids
[**update-entitlements-metadata-by-query-v1**](#update-entitlements-metadata-by-query-v1) | **Post** `/entitlements/v1/access-model-metadata/bulk-update/query` | Bulk-update metadata by query


## create-access-model-metadata-for-entitlement-v1
Add metadata to an entitlement.
Add single Access Model Metadata to an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-for-entitlement-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The entitlement id. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataForEntitlementV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**Entitlement**](../models/entitlement)

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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | The entitlement id. # string | The entitlement id.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.CreateAccessModelMetadataForEntitlementV1(context.Background(), id, attributeKey, attributeValue).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.CreateAccessModelMetadataForEntitlementV1(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.CreateAccessModelMetadataForEntitlementV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataForEntitlementV1`: Entitlement
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.CreateAccessModelMetadataForEntitlementV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-access-model-metadata-from-entitlement-v1
Remove metadata from an entitlement.
Remove single Access Model Metadata from an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-from-entitlement-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The entitlement id. | 
**attributeKey** | **string** | Technical name of the Attribute. | 
**attributeValue** | **string** | Technical name of the Attribute Value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessModelMetadataFromEntitlementV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

 (empty response body)

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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | The entitlement id. # string | The entitlement id.
    attributeKey := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributeValue := `public` // string | Technical name of the Attribute Value. # string | Technical name of the Attribute Value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.EntitlementsAPI.DeleteAccessModelMetadataFromEntitlementV1(context.Background(), id, attributeKey, attributeValue).Execute()
	  //r, err := apiClient.EntitlementsAPI.DeleteAccessModelMetadataFromEntitlementV1(context.Background(), id, attributeKey, attributeValue).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.DeleteAccessModelMetadataFromEntitlementV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-entitlement-request-config-v1
Get entitlement request config
This API returns the entitlement request config for a specified entitlement.
The `accessRequestConfig.formDefinitionId` field associates an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-request-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementRequestConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EntitlementRequestConfig**](../models/entitlement-request-config)

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
    id := `2c91808874ff91550175097daaec161c` // string | Entitlement Id # string | Entitlement Id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.GetEntitlementRequestConfigV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.GetEntitlementRequestConfigV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.GetEntitlementRequestConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementRequestConfigV1`: EntitlementRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.GetEntitlementRequestConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-v1
Get an entitlement
This API returns an entitlement by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EntitlementV2**](../models/entitlement-v2)

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
    id := `2c91808874ff91550175097daaec161c` // string | The entitlement ID # string | The entitlement ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.GetEntitlementV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.GetEntitlementV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.GetEntitlementV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementV1`: EntitlementV2
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.GetEntitlementV1`: %v\n", resp)
}
```

[[Back to top]](#)

## import-entitlements-by-source-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Aggregate entitlements
Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/import-entitlements-v-1).

If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.

If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-by-source-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiImportEntitlementsBySourceV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **csvFile** | ***os.File** | The CSV file containing the source entitlements to aggregate. | 

### Return type

[**LoadEntitlementTask**](../models/load-entitlement-task)

### HTTP request headers

- **Content-Type**: multipart/form-data
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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source Id # string | Source Id
    csvFile := BINARY_DATA_HERE // *os.File | The CSV file containing the source entitlements to aggregate. (optional) # *os.File | The CSV file containing the source entitlements to aggregate. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.ImportEntitlementsBySourceV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.ImportEntitlementsBySourceV1(context.Background(), id).CsvFile(csvFile).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ImportEntitlementsBySourceV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ImportEntitlementsBySourceV1`: LoadEntitlementTask
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ImportEntitlementsBySourceV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlement-children-v1
List of entitlements children
This API returns a list of all child entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-children-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementChildrenV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **searchAfter** | **string** | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* | 

### Return type

[**[]EntitlementV2**](../models/entitlement-v2)

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
    id := `2c91808874ff91550175097daaec161c` // string | Entitlement Id # string | Entitlement Id
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    searchAfter := `Account Payable,2c91808375d8e80a0175e1f88a575221` // string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters := `name,id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.ListEntitlementChildrenV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.ListEntitlementChildrenV1(context.Background(), id).Limit(limit).Offset(offset).Count(count).SearchAfter(searchAfter).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ListEntitlementChildrenV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementChildrenV1`: []EntitlementV2
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ListEntitlementChildrenV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlement-parents-v1
List of entitlements parents
This API returns a list of all parent entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-parents-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementParentsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **searchAfter** | **string** | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* | 

### Return type

[**[]EntitlementV2**](../models/entitlement-v2)

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
    id := `2c91808c74ff913f0175097daa9d59cd` // string | Entitlement Id # string | Entitlement Id
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    searchAfter := `Account Payable,2c91808375d8e80a0175e1f88a575221` // string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters := `name,id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.ListEntitlementParentsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.ListEntitlementParentsV1(context.Background(), id).Limit(limit).Offset(offset).Count(count).SearchAfter(searchAfter).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ListEntitlementParentsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementParentsV1`: []EntitlementV2
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ListEntitlementParentsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlements-by-account-v1
Get entitlements for an account
This API returns a list of all entitlements associated with the given account ID. The account must exist; if not found, the API returns 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-by-account-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | The account ID to get entitlements for | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementsByAccountV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **searchAfter** | **string** | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | 

### Return type

[**[]EntitlementV2**](../models/entitlement-v2)

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
    accountId := `ef38f94347e94562b5bb8424a56397d8` // string | The account ID to get entitlements for # string | The account ID to get entitlements for
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    searchAfter := `Account Payable,2c91808375d8e80a0175e1f88a575221` // string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters := `name,id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.ListEntitlementsByAccountV1(context.Background(), accountId).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.ListEntitlementsByAccountV1(context.Background(), accountId).Limit(limit).Offset(offset).Count(count).SearchAfter(searchAfter).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ListEntitlementsByAccountV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementsByAccountV1`: []EntitlementV2
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ListEntitlementsByAccountV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-entitlements-v1
Gets a list of entitlements.
This API returns a list of entitlements. Any authenticated token can call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListEntitlementsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentedForIdentity** | **string** | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. | 
 **forSegmentIds** | **string** | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. | 
 **includeUnsegmented** | **bool** | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented&#x3D;false** results in an error. | [default to true]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **searchAfter** | **string** | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* | 

### Return type

[**[]EntitlementV2**](../models/entitlement-v2)

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
    segmentedForIdentity := `e554098913544630b5985e9042f5e44b` // string | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. (optional) # string | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. (optional)
    forSegmentIds := `041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649` // string | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. (optional) # string | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. (optional)
    includeUnsegmented := true // bool | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to true) # bool | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented=false** results in an error. (optional) (default to true)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    searchAfter := `Account Payable,2c91808375d8e80a0175e1f88a575221` // string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional) # string | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don't get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter=Account Payable,2c91808375d8e80a0175e1f88a575221&sorters=name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \"Account Payable\", then using that name and ID will start a new search after this entitlement. (optional)
    sorters := `name,id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
    filters := `attribute eq "memberOf"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.ListEntitlementsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.ListEntitlementsV1(context.Background()).SegmentedForIdentity(segmentedForIdentity).ForSegmentIds(forSegmentIds).IncludeUnsegmented(includeUnsegmented).Offset(offset).Limit(limit).Count(count).SearchAfter(searchAfter).Sorters(sorters).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ListEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListEntitlementsV1`: []EntitlementV2
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ListEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-entitlement-v1
Patch an entitlement
This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable: **requestable**, **segments**, **privilegeOverride/level**, **owner**, **name**, **description**, **manuallyUpdatedFields**, and **accessModelMetadata**

When you're patching owner, only owner type and owner id must be provided. Owner name is optional, and it won't be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.

When you're patching **accessModelMetadata**, each attribute's **key** must match the key of an existing access model metadata attribute, and each **value** must be one of the values configured for that key. Use [List access model metadata attributes](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1) to look up the available keys and values.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the entitlement to patch | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchEntitlementV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**EntitlementV2**](../models/entitlement-v2)

### HTTP request headers

- **Content-Type**: application/json-patch+json
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
    id := `2c91808a7813090a017814121e121518` // string | ID of the entitlement to patch # string | ID of the entitlement to patch
    jsonpatchoperationJson := []byte(`[{"op":"add","path":"/segments/-","value":"f7b1b8a3-5fed-4fd4-ad29-82014e137e19"}]`) // []JsonPatchOperation |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.PatchEntitlementV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.PatchEntitlementV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.PatchEntitlementV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchEntitlementV1`: EntitlementV2
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.PatchEntitlementV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-entitlement-request-config-v1
Replace entitlement request config
This API replaces the entitlement request config for a specified entitlement.
Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutEntitlementRequestConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **entitlementRequestConfig** | [**EntitlementRequestConfig**](../models/entitlement-request-config) |  | 

### Return type

[**EntitlementRequestConfig**](../models/entitlement-request-config)

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
    entitlements "github.com/sailpoint-oss/golang-sdk/v3/entitlements"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121e121518` // string | Entitlement ID # string | Entitlement ID
    entitlementrequestconfigJson := []byte(`{
          "accessRequestConfig" : {
            "denialCommentRequired" : false,
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ],
            "reauthorizationRequired" : false,
            "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
            "requestCommentRequired" : true,
            "requireEndDate" : true,
            "maxPermittedAccessDuration" : {
              "value" : 5,
              "timeUnit" : "DAYS"
            }
          },
          "revocationRequestConfig" : {
            "approvalSchemes" : [ {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            }, {
              "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
              "approverType" : "GOVERNANCE_GROUP"
            } ]
          }
        }`) // EntitlementRequestConfig | 

    var entitlementRequestConfig entitlements.EntitlementRequestConfig
    if err := json.Unmarshal(entitlementrequestconfigJson, &entitlementRequestConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.PutEntitlementRequestConfigV1(context.Background(), id).EntitlementRequestConfig(entitlementRequestConfig).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.PutEntitlementRequestConfigV1(context.Background(), id).EntitlementRequestConfig(entitlementRequestConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.PutEntitlementRequestConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutEntitlementRequestConfigV1`: EntitlementRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.PutEntitlementRequestConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reset-source-entitlements-v1
Reset source entitlements
Remove all entitlements from a specific source.
To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Account Aggregation](https://developer.sailpoint.com/docs/api/import-accounts-v-1) with `disableOptimization` = `true`. 

[API Spec](https://developer.sailpoint.com/docs/api/reset-source-entitlements-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of source for the entitlement reset | 

### Other Parameters

Other parameters are passed through a pointer to a apiResetSourceEntitlementsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EntitlementSourceResetBaseReferenceDto**](../models/entitlement-source-reset-base-reference-dto)

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
    id := `2c91808a7813090a017814121919ecca` // string | ID of source for the entitlement reset # string | ID of source for the entitlement reset

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.ResetSourceEntitlementsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.ResetSourceEntitlementsV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.ResetSourceEntitlementsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ResetSourceEntitlementsV1`: EntitlementSourceResetBaseReferenceDto
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.ResetSourceEntitlementsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-entitlements-in-bulk-v1
Bulk update an entitlement list
This API applies an update to every entitlement of the list.


The number of entitlements to update is limited to 50 items maximum.


The JsonPatch update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
examples of allowed operations :
`**{ "op": "replace", "path": "/requestable","value": boolean }**`
`**{ "op": "replace", "path": "/privilegeOverride/level","value": string }**`

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementBulkUpdateRequest** | [**EntitlementBulkUpdateRequest**](../models/entitlement-bulk-update-request) |  | 

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
    entitlements "github.com/sailpoint-oss/golang-sdk/v3/entitlements"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    entitlementbulkupdaterequestJson := []byte(`{
          "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e", "2c91808a7624751a01762f19d692220f" ],
          "jsonPatch" : [ {
            "op" : "replace",
            "path" : "/requestable",
            "value" : false
          }, {
            "op" : "replace",
            "path" : "/privilegeOverride/level",
            "value" : "HIGH"
          } ]
        }`) // EntitlementBulkUpdateRequest | 

    var entitlementBulkUpdateRequest entitlements.EntitlementBulkUpdateRequest
    if err := json.Unmarshal(entitlementbulkupdaterequestJson, &entitlementBulkUpdateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.EntitlementsAPI.UpdateEntitlementsInBulkV1(context.Background()).EntitlementBulkUpdateRequest(entitlementBulkUpdateRequest).Execute()
	  //r, err := apiClient.EntitlementsAPI.UpdateEntitlementsInBulkV1(context.Background()).EntitlementBulkUpdateRequest(entitlementBulkUpdateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.UpdateEntitlementsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## update-entitlements-metadata-by-filter-v1
Bulk-update metadata by filter
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied filter expression.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByFilterV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-filter-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementsMetadataByFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementmetadatabulkupdatebyfilterrequest** | [**Entitlementmetadatabulkupdatebyfilterrequest**](../models/entitlementmetadatabulkupdatebyfilterrequest) | Attribute metadata bulk update request body. | 

### Return type

[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

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
    entitlements "github.com/sailpoint-oss/golang-sdk/v3/entitlements"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    entitlementmetadatabulkupdatebyfilterrequestJson := []byte(`{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : "id eq 2c9180867817ac4d017817c491119a20",
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }`) // Entitlementmetadatabulkupdatebyfilterrequest | Attribute metadata bulk update request body.

    var entitlementmetadatabulkupdatebyfilterrequest entitlements.Entitlementmetadatabulkupdatebyfilterrequest
    if err := json.Unmarshal(entitlementmetadatabulkupdatebyfilterrequestJson, &entitlementmetadatabulkupdatebyfilterrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.UpdateEntitlementsMetadataByFilterV1(context.Background()).Entitlementmetadatabulkupdatebyfilterrequest(entitlementmetadatabulkupdatebyfilterrequest).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.UpdateEntitlementsMetadataByFilterV1(context.Background()).Entitlementmetadatabulkupdatebyfilterrequest(entitlementmetadatabulkupdatebyfilterrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.UpdateEntitlementsMetadataByFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEntitlementsMetadataByFilterV1`: Entitlementmetadatabulkupdateresponse
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.UpdateEntitlementsMetadataByFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-entitlements-metadata-by-ids-v1
Bulk-update metadata by ids
This API initiates a bulk update of Access Model Metadata for one or more entitlements by a list of entitlement IDs.

The update is processed asynchronously. The response returns the ID of the task performing the update.

The maximum entitlement count in a single request is 3000. Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByIdsV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-ids-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementsMetadataByIdsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementmetadatabulkupdatebyidrequest** | [**Entitlementmetadatabulkupdatebyidrequest**](../models/entitlementmetadatabulkupdatebyidrequest) | Attribute metadata bulk update request body. | 

### Return type

[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

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
    entitlements "github.com/sailpoint-oss/golang-sdk/v3/entitlements"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    entitlementmetadatabulkupdatebyidrequestJson := []byte(`{
          "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }`) // Entitlementmetadatabulkupdatebyidrequest | Attribute metadata bulk update request body.

    var entitlementmetadatabulkupdatebyidrequest entitlements.Entitlementmetadatabulkupdatebyidrequest
    if err := json.Unmarshal(entitlementmetadatabulkupdatebyidrequestJson, &entitlementmetadatabulkupdatebyidrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.UpdateEntitlementsMetadataByIdsV1(context.Background()).Entitlementmetadatabulkupdatebyidrequest(entitlementmetadatabulkupdatebyidrequest).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.UpdateEntitlementsMetadataByIdsV1(context.Background()).Entitlementmetadatabulkupdatebyidrequest(entitlementmetadatabulkupdatebyidrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.UpdateEntitlementsMetadataByIdsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEntitlementsMetadataByIdsV1`: Entitlementmetadatabulkupdateresponse
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.UpdateEntitlementsMetadataByIdsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-entitlements-metadata-by-query-v1
Bulk-update metadata by query
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied search query.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByQueryV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-query-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEntitlementsMetadataByQueryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementmetadatabulkupdatebyqueryrequest** | [**Entitlementmetadatabulkupdatebyqueryrequest**](../models/entitlementmetadatabulkupdatebyqueryrequest) | Attribute metadata bulk update request body. | 

### Return type

[**Entitlementmetadatabulkupdateresponse**](../models/entitlementmetadatabulkupdateresponse)

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
    entitlements "github.com/sailpoint-oss/golang-sdk/v3/entitlements"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    entitlementmetadatabulkupdatebyqueryrequestJson := []byte(`{
          "query" : {
            "indices" : [ "entitlements" ],
            "queryType" : "TEXT",
            "textQuery" : {
              "terms" : [ "test123" ],
              "fields" : [ "id" ],
              "matchAny" : false,
              "contains" : true
            },
            "includeNested" : false
          },
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "ATTRIBUTE",
          "operation" : "REPLACE"
        }`) // Entitlementmetadatabulkupdatebyqueryrequest | Attribute metadata bulk update request body.

    var entitlementmetadatabulkupdatebyqueryrequest entitlements.Entitlementmetadatabulkupdatebyqueryrequest
    if err := json.Unmarshal(entitlementmetadatabulkupdatebyqueryrequestJson, &entitlementmetadatabulkupdatebyqueryrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.EntitlementsAPI.UpdateEntitlementsMetadataByQueryV1(context.Background()).Entitlementmetadatabulkupdatebyqueryrequest(entitlementmetadatabulkupdatebyqueryrequest).Execute()
	  //resp, r, err := apiClient.EntitlementsAPI.UpdateEntitlementsMetadataByQueryV1(context.Background()).Entitlementmetadatabulkupdatebyqueryrequest(entitlementmetadatabulkupdatebyqueryrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `EntitlementsAPI.UpdateEntitlementsMetadataByQueryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEntitlementsMetadataByQueryV1`: Entitlementmetadatabulkupdateresponse
    fmt.Fprintf(os.Stdout, "Response from `EntitlementsAPI.UpdateEntitlementsMetadataByQueryV1`: %v\n", resp)
}
```

[[Back to top]](#)

