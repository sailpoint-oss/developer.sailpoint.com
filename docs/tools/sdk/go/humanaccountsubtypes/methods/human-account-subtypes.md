# HumanAccountSubtypes

# HumanAccountSubtypesAPI
  Use these APIs to get, create, update, and delete human account subtypes for sources, and to get and update
the account-create configuration of a human account subtype. These APIs are experimental and require the
&#x60;X-SailPoint-Experimental&#x60; header.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-human-account-subtype-v2**](#create-human-account-subtype-v2) | **Post** `/accounts/v2/sources/{sourceId}/subtypes` | Create a human account subtype
[**delete-human-account-subtype-v2**](#delete-human-account-subtype-v2) | **Delete** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Delete a human account subtype
[**get-human-account-subtype-config-v2**](#get-human-account-subtype-config-v2) | **Get** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Get human subtype config
[**get-human-account-subtype-v2**](#get-human-account-subtype-v2) | **Get** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Get a human account subtype
[**list-human-account-subtypes-v2**](#list-human-account-subtypes-v2) | **Get** `/accounts/v2/sources/{sourceId}/subtypes` | List human account subtypes
[**update-human-account-subtype-config-v2**](#update-human-account-subtype-config-v2) | **Patch** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Update human subtype config
[**update-human-account-subtype-v2**](#update-human-account-subtype-v2) | **Patch** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Update a human account subtype


## create-human-account-subtype-v2
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
Create a human account subtype
Create a human account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-human-account-subtype-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of the source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateHumanAccountSubtypeV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **humanAccountSubtypeCreateRequest** | [**HumanAccountSubtypeCreateRequest**](../models/human-account-subtype-create-request) |  | 

### Return type

[**HumanAccountSubtype**](../models/human-account-subtype)

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
    human_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/human_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of the source. # string | ID of the source.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    humanaccountsubtypecreaterequestJson := []byte(`{
          "default" : false,
          "displayName" : "Contractor",
          "description" : "Contractors with a limited account lifecycle",
          "technicalName" : "contractor"
        }`) // HumanAccountSubtypeCreateRequest | 

    var humanAccountSubtypeCreateRequest human_account_subtypes.HumanAccountSubtypeCreateRequest
    if err := json.Unmarshal(humanaccountsubtypecreaterequestJson, &humanAccountSubtypeCreateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.HumanAccountSubtypesAPI.CreateHumanAccountSubtypeV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).HumanAccountSubtypeCreateRequest(humanAccountSubtypeCreateRequest).Execute()
	  //resp, r, err := apiClient.HumanAccountSubtypesAPI.CreateHumanAccountSubtypeV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).HumanAccountSubtypeCreateRequest(humanAccountSubtypeCreateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `HumanAccountSubtypesAPI.CreateHumanAccountSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateHumanAccountSubtypeV2`: HumanAccountSubtype
    fmt.Fprintf(os.Stdout, "Response from `HumanAccountSubtypesAPI.CreateHumanAccountSubtypeV2`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-human-account-subtype-v2
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
Delete a human account subtype
Delete a human account subtype of a source, together with its account-create configuration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-human-account-subtype-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of the source. | 
**subtypeId** | **string** | ID of the human account subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHumanAccountSubtypeV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of the source. # string | ID of the source.
    subtypeId := `38453251-6be2-5f8f-df93-5ce19e295838` // string | ID of the human account subtype. # string | ID of the human account subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.HumanAccountSubtypesAPI.DeleteHumanAccountSubtypeV2(context.Background(), sourceId, subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.HumanAccountSubtypesAPI.DeleteHumanAccountSubtypeV2(context.Background(), sourceId, subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `HumanAccountSubtypesAPI.DeleteHumanAccountSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-human-account-subtype-config-v2
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
Get human subtype config
Get the account-create configuration of a human account subtype by subtype ID. A subtype with no stored configuration returns the default values.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-config-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | ID of the human account subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHumanAccountSubtypeConfigV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**HumanAccountSubtypeConfig**](../models/human-account-subtype-config)

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
    subtypeId := `38453251-6be2-5f8f-df93-5ce19e295838` // string | ID of the human account subtype. # string | ID of the human account subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.HumanAccountSubtypesAPI.GetHumanAccountSubtypeConfigV2(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.HumanAccountSubtypesAPI.GetHumanAccountSubtypeConfigV2(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `HumanAccountSubtypesAPI.GetHumanAccountSubtypeConfigV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHumanAccountSubtypeConfigV2`: HumanAccountSubtypeConfig
    fmt.Fprintf(os.Stdout, "Response from `HumanAccountSubtypesAPI.GetHumanAccountSubtypeConfigV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-human-account-subtype-v2
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
Get a human account subtype
Get a human account subtype of a source by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of the source. | 
**subtypeId** | **string** | ID of the human account subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHumanAccountSubtypeV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**HumanAccountSubtype**](../models/human-account-subtype)

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of the source. # string | ID of the source.
    subtypeId := `38453251-6be2-5f8f-df93-5ce19e295838` // string | ID of the human account subtype. # string | ID of the human account subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.HumanAccountSubtypesAPI.GetHumanAccountSubtypeV2(context.Background(), sourceId, subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.HumanAccountSubtypesAPI.GetHumanAccountSubtypeV2(context.Background(), sourceId, subtypeId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `HumanAccountSubtypesAPI.GetHumanAccountSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHumanAccountSubtypeV2`: HumanAccountSubtype
    fmt.Fprintf(os.Stdout, "Response from `HumanAccountSubtypesAPI.GetHumanAccountSubtypeV2`: %v\n", resp)
}
```

[[Back to top]](#)

## list-human-account-subtypes-v2
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
List human account subtypes
Get the human account subtypes of a source.

[API Spec](https://developer.sailpoint.com/docs/api/list-human-account-subtypes-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of the source. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListHumanAccountSubtypesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **sorters** | **string** | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** | [default to &quot;&quot;]

### Return type

[**[]HumanAccountSubtype**](../models/human-account-subtype)

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
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of the source. # string | ID of the source.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    sorters := `sourceId` // string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** (optional) (default to "") # string | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** (optional) (default to "")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.HumanAccountSubtypesAPI.ListHumanAccountSubtypesV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.HumanAccountSubtypesAPI.ListHumanAccountSubtypesV2(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Count(count).Limit(limit).Offset(offset).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `HumanAccountSubtypesAPI.ListHumanAccountSubtypesV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListHumanAccountSubtypesV2`: []HumanAccountSubtype
    fmt.Fprintf(os.Stdout, "Response from `HumanAccountSubtypesAPI.ListHumanAccountSubtypesV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-human-account-subtype-config-v2
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
Update human subtype config
Update the account-create configuration of a human account subtype. Only operations under `/humanAccountCreate` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-config-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**subtypeId** | **string** | ID of the human account subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateHumanAccountSubtypeConfigV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSON Patch operations under &#x60;/humanAccountCreate&#x60;, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902). | 

### Return type

[**HumanAccountSubtypeConfig**](../models/human-account-subtype-config)

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
    human_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/human_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    subtypeId := `38453251-6be2-5f8f-df93-5ce19e295838` // string | ID of the human account subtype. # string | ID of the human account subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/humanAccountCreate/accountCreateEnabled","value":true}]`) // []JsonPatchOperation | JSON Patch operations under `/humanAccountCreate`, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).

    var jsonPatchOperation []human_account_subtypes.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeConfigV2(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeConfigV2(context.Background(), subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeConfigV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateHumanAccountSubtypeConfigV2`: HumanAccountSubtypeConfig
    fmt.Fprintf(os.Stdout, "Response from `HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeConfigV2`: %v\n", resp)
}
```

[[Back to top]](#)

## update-human-account-subtype-v2
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
Update a human account subtype
Update the display name or description of a human account subtype. Only replace operations on `/displayName` and `/description` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-v-2)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of the source. | 
**subtypeId** | **string** | ID of the human account subtype. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateHumanAccountSubtypeV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902). | 

### Return type

[**HumanAccountSubtype**](../models/human-account-subtype)

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
    human_account_subtypes "github.com/sailpoint-oss/golang-sdk/v3/human_account_subtypes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sourceId := `6d0458373bec4b4b80460992b76016da` // string | ID of the source. # string | ID of the source.
    subtypeId := `38453251-6be2-5f8f-df93-5ce19e295838` // string | ID of the human account subtype. # string | ID of the human account subtype.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/displayName","value":"Senior Contractor"}]`) // []JsonPatchOperation | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).

    var jsonPatchOperation []human_account_subtypes.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeV2(context.Background(), sourceId, subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeV2(context.Background(), sourceId, subtypeId).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateHumanAccountSubtypeV2`: HumanAccountSubtype
    fmt.Fprintf(os.Stdout, "Response from `HumanAccountSubtypesAPI.UpdateHumanAccountSubtypeV2`: %v\n", resp)
}
```

[[Back to top]](#)

