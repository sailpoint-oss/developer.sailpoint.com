# OrgConfig

# OrgConfigAPI
  Use this API to implement organization configuration functionality. 
Administrators can use this functionality to manage organization settings, such as time zones. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-org-config-v1**](#get-org-config-v1) | **Get** `/org-config/v1` | Get org config settings
[**get-valid-time-zones-v1**](#get-valid-time-zones-v1) | **Get** `/org-config/v1/valid-time-zones` | Get valid time zones
[**patch-org-config-v1**](#patch-org-config-v1) | **Patch** `/org-config/v1` | Patch org config


## get-org-config-v1
Get org config settings
Get the current organization's configuration settings, only external accessible properties.

[API Spec](https://developer.sailpoint.com/docs/api/get-org-config-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrgConfigV1Request struct via the builder pattern


### Return type

[**OrgConfig**](../models/org-config)

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

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.OrgConfigAPI.GetOrgConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.OrgConfigAPI.GetOrgConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OrgConfigAPI.GetOrgConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOrgConfigV1`: OrgConfig
    fmt.Fprintf(os.Stdout, "Response from `OrgConfigAPI.GetOrgConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-valid-time-zones-v1
Get valid time zones
List the valid time zones that can be set in organization configurations.

[API Spec](https://developer.sailpoint.com/docs/api/get-valid-time-zones-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetValidTimeZonesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

**[]string**

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
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.OrgConfigAPI.GetValidTimeZonesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.OrgConfigAPI.GetValidTimeZonesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OrgConfigAPI.GetValidTimeZonesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetValidTimeZonesV1`: []string
    fmt.Fprintf(os.Stdout, "Response from `OrgConfigAPI.GetValidTimeZonesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-org-config-v1
Patch org config
Patch the current organization's configuration, using http://jsonpatch.com/ syntax. This is commonly used to changing an organization's time zone.

[API Spec](https://developer.sailpoint.com/docs/api/patch-org-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchOrgConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**OrgConfig**](../models/org-config)

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
    org_config "github.com/sailpoint-oss/golang-sdk/v3/org_config"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/timeZone","value":"America/Toronto"}]`) // []JsonPatchOperation | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonPatchOperation []org_config.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.OrgConfigAPI.PatchOrgConfigV1(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.OrgConfigAPI.PatchOrgConfigV1(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OrgConfigAPI.PatchOrgConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchOrgConfigV1`: OrgConfig
    fmt.Fprintf(os.Stdout, "Response from `OrgConfigAPI.PatchOrgConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

