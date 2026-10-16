# AccessModelMetadata

# AccessModelMetadataAPI
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement, role, and access profile metadata.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute-v1**](#create-access-model-metadata-attribute-v1) | **Post** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value-v1**](#create-access-model-metadata-attribute-value-v1) | **Post** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**delete-access-model-metadata-attribute-v1**](#delete-access-model-metadata-attribute-v1) | **Delete** `/access-model-metadata/v1/attributes/{key}` | Delete access model metadata attribute
[**delete-access-model-metadata-attribute-value-v1**](#delete-access-model-metadata-attribute-value-v1) | **Delete** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Delete access model metadata value
[**get-access-model-metadata-attribute-v1**](#get-access-model-metadata-attribute-v1) | **Get** `/access-model-metadata/v1/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value-v1**](#get-access-model-metadata-attribute-value-v1) | **Get** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute-v1**](#list-access-model-metadata-attribute-v1) | **Get** `/access-model-metadata/v1/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value-v1**](#list-access-model-metadata-attribute-value-v1) | **Get** `/access-model-metadata/v1/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-attribute-v1**](#update-access-model-metadata-attribute-v1) | **Patch** `/access-model-metadata/v1/attributes/{key}` | Update access model metadata attribute
[**update-access-model-metadata-attribute-value-v1**](#update-access-model-metadata-attribute-value-v1) | **Patch** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Update access model metadata value
[**update-access-model-metadata-by-filter-v1**](#update-access-model-metadata-by-filter-v1) | **Post** `/access-model-metadata/v1/bulk-update/filter` | Metadata Attribute update by filter
[**update-access-model-metadata-by-ids-v1**](#update-access-model-metadata-by-ids-v1) | **Post** `/access-model-metadata/v1/bulk-update/ids` | Metadata Attribute update by ids
[**update-access-model-metadata-by-query-v1**](#update-access-model-metadata-by-query-v1) | **Post** `/access-model-metadata/v1/bulk-update/query` | Metadata Attribute update by query


## create-access-model-metadata-attribute-v1
Create access model metadata attribute
Create a new Access Model Metadata Attribute.

The **isAdhoc** field can be set on creation to indicate whether the Attribute supports ad-hoc
(dynamically created) values in addition to static values; if omitted, it defaults to *false*.

Any **values** provided at creation time must each have a *type* of *static* (or omit/leave *type*
blank); *adhoc* is not an allowed value on this public API and results in a *400* error. Ad-hoc
values are created dynamically through an internal service-to-service flow, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeDTO** | [**AttributeDTO**](../models/attribute-dto) | Attribute to create | 

### Return type

[**AttributeDTO**](../models/attribute-dto)

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
    access_model_metadata "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    attributedtoJson := []byte(`{
          "multiselect" : false,
          "isAdhoc" : false,
          "values" : [ {
            "name" : "Public",
            "type" : "static",
            "value" : "public",
            "status" : "active"
          }, {
            "name" : "Public",
            "type" : "static",
            "value" : "public",
            "status" : "active"
          } ],
          "name" : "Privacy",
          "description" : "Specifies the level of privacy associated with an access item.",
          "type" : "governance",
          "objectTypes" : [ "entitlement" ],
          "key" : "iscPrivacy",
          "status" : "active"
        }`) // AttributeDTO | Attribute to create

    var attributeDTO access_model_metadata.AttributeDTO
    if err := json.Unmarshal(attributedtoJson, &attributeDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1(context.Background()).AttributeDTO(attributeDTO).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1(context.Background()).AttributeDTO(attributeDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataAttributeV1`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-access-model-metadata-attribute-value-v1
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.

The **type** field must be omitted, blank, or *static* (case-insensitive); *adhoc* is not an
allowed value on this public API and results in a *400* error. Ad-hoc values are created
dynamically through an internal service-to-service flow when the parent Attribute has *isAdhoc*
set to *true*, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **attributeValueDTO** | [**AttributeValueDTO**](../models/attribute-value-dto) | Attribute value to create | 

### Return type

[**AttributeValueDTO**](../models/attribute-value-dto)

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
    access_model_metadata "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributevaluedtoJson := []byte(`{
          "name" : "Public",
          "type" : "static",
          "value" : "public",
          "status" : "active"
        }`) // AttributeValueDTO | Attribute value to create

    var attributeValueDTO access_model_metadata.AttributeValueDTO
    if err := json.Unmarshal(attributevaluedtoJson, &attributeValueDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1(context.Background(), key).AttributeValueDTO(attributeValueDTO).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1(context.Background(), key).AttributeValueDTO(attributeValueDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataAttributeValueV1`: AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-access-model-metadata-attribute-v1
Delete access model metadata attribute
Delete an existing Access Model Metadata Attribute and all of its values.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TrackerKeyDTO**](../models/tracker-key-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeV1(context.Background(), key).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeV1(context.Background(), key).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccessModelMetadataAttributeV1`: TrackerKeyDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-access-model-metadata-attribute-value-v1
Delete access model metadata value
Delete an existing Access Model Metadata Attribute Value.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 
**value** | **string** | Technical name of the Attribute value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TrackerValueDTO**](../models/tracker-value-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    value := `public` // string | Technical name of the Attribute value. # string | Technical name of the Attribute value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeValueV1(context.Background(), key, value).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeValueV1(context.Background(), key, value).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccessModelMetadataAttributeValueV1`: TrackerValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.DeleteAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute-v1
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AttributeDTO**](../models/attribute-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1(context.Background(), key).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1(context.Background(), key).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessModelMetadataAttributeV1`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute-value-v1
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 
**value** | **string** | Technical name of the Attribute value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**AttributeValueDTO**](../models/attribute-value-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    value := `public` // string | Technical name of the Attribute value. # string | Technical name of the Attribute value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1(context.Background(), key, value).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1(context.Background(), key, value).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessModelMetadataAttributeValueV1`: AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute-v1
List access model metadata attributes
Get a list of Access Model Metadata Attributes. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]AttributeDTO**](../models/attribute-dto)

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
    filters := `name eq "Privacy"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
    sorters := `name,-key` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1(context.Background()).Filters(filters).Sorters(sorters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessModelMetadataAttributeV1`: []AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute-value-v1
List access model metadata values
Get a list of Access Model Metadata Attribute Values. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]AttributeValueDTO**](../models/attribute-value-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    filters := `name eq "Public"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* (optional)
    sorters := `name,-value` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1(context.Background(), key).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1(context.Background(), key).Filters(filters).Sorters(sorters).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessModelMetadataAttributeValueV1`: []AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute-v1
Update access model metadata attribute
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **isAdhoc**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSON Patch array to apply | 

### Return type

[**AttributeDTO**](../models/attribute-dto)

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
  "encoding/json"
    access_model_metadata "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | JSON Patch array to apply

    var jsonPatchOperation []access_model_metadata.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1(context.Background(), key).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1(context.Background(), key).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataAttributeV1`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute-value-v1
Update access model metadata value
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-value-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 
**value** | **string** | Technical name of the Attribute value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSON Patch array to apply | 

### Return type

[**AttributeValueDTO**](../models/attribute-value-dto)

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
  "encoding/json"
    access_model_metadata "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    value := `public` // string | Technical name of the Attribute value. # string | Technical name of the Attribute value.
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | JSON Patch array to apply

    var jsonPatchOperation []access_model_metadata.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1(context.Background(), key, value).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1(context.Background(), key, value).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataAttributeValueV1`: AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-by-filter-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by filter
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-filter-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataByFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementAttributeBulkUpdateFilterRequest** | [**EntitlementAttributeBulkUpdateFilterRequest**](../models/entitlement-attribute-bulk-update-filter-request) | Attribute metadata bulk update request body. | 

### Return type

[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

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
    access_model_metadata "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    entitlementattributebulkupdatefilterrequestJson := []byte(`{
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "filters" : "id eq 2c9180867817ac4d017817c491119a20",
          "replaceScope" : "attribute",
          "operation" : "add"
        }`) // EntitlementAttributeBulkUpdateFilterRequest | Attribute metadata bulk update request body.

    var entitlementAttributeBulkUpdateFilterRequest access_model_metadata.EntitlementAttributeBulkUpdateFilterRequest
    if err := json.Unmarshal(entitlementattributebulkupdatefilterrequestJson, &entitlementAttributeBulkUpdateFilterRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1(context.Background()).EntitlementAttributeBulkUpdateFilterRequest(entitlementAttributeBulkUpdateFilterRequest).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1(context.Background()).EntitlementAttributeBulkUpdateFilterRequest(entitlementAttributeBulkUpdateFilterRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataByFilterV1`: AccessModelMetadataBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-by-ids-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by ids
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-ids-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataByIdsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementAttributeBulkUpdateIdsRequest** | [**EntitlementAttributeBulkUpdateIdsRequest**](../models/entitlement-attribute-bulk-update-ids-request) | Attribute metadata bulk update request body. | 

### Return type

[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

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
    access_model_metadata "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    entitlementattributebulkupdateidsrequestJson := []byte(`{
          "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "attribute",
          "operation" : "add"
        }`) // EntitlementAttributeBulkUpdateIdsRequest | Attribute metadata bulk update request body.

    var entitlementAttributeBulkUpdateIdsRequest access_model_metadata.EntitlementAttributeBulkUpdateIdsRequest
    if err := json.Unmarshal(entitlementattributebulkupdateidsrequestJson, &entitlementAttributeBulkUpdateIdsRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1(context.Background()).EntitlementAttributeBulkUpdateIdsRequest(entitlementAttributeBulkUpdateIdsRequest).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1(context.Background()).EntitlementAttributeBulkUpdateIdsRequest(entitlementAttributeBulkUpdateIdsRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataByIdsV1`: AccessModelMetadataBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-by-query-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by query
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-query-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataByQueryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementAttributeBulkUpdateQueryRequest** | [**EntitlementAttributeBulkUpdateQueryRequest**](../models/entitlement-attribute-bulk-update-query-request) | Attribute metadata bulk update request body. | 

### Return type

[**AccessModelMetadataBulkUpdateResponse**](../models/access-model-metadata-bulk-update-response)

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
    access_model_metadata "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    entitlementattributebulkupdatequeryrequestJson := []byte(`{
          "query" : {
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
              "fields" : "[\"firstName,lastName,email\"]",
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
          },
          "values" : [ {
            "attribute" : "iscFederalClassifications",
            "values" : [ "topSecret" ]
          } ],
          "replaceScope" : "attribute",
          "operation" : "add"
        }`) // EntitlementAttributeBulkUpdateQueryRequest | Attribute metadata bulk update request body.

    var entitlementAttributeBulkUpdateQueryRequest access_model_metadata.EntitlementAttributeBulkUpdateQueryRequest
    if err := json.Unmarshal(entitlementattributebulkupdatequeryrequestJson, &entitlementAttributeBulkUpdateQueryRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1(context.Background()).EntitlementAttributeBulkUpdateQueryRequest(entitlementAttributeBulkUpdateQueryRequest).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1(context.Background()).EntitlementAttributeBulkUpdateQueryRequest(entitlementAttributeBulkUpdateQueryRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataByQueryV1`: AccessModelMetadataBulkUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1`: %v\n", resp)
}
```

[[Back to top]](#)

