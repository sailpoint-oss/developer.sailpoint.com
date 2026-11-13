# JITActivationConvert

# JITActivationConvertAPI
  Use this API to convert the assignment type of an entitlement connection between
STANDING and JIT (Just-In-Time Privileged).

OAuth scope required: **idn:jit-assignment-type-conversion:manage**
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-entitlement-connection-conversion-v1**](#start-entitlement-connection-conversion-v1) | **Post** `/convert-entitlement-connection/v1` | Convert entitlement connection assignment type


## start-entitlement-connection-conversion-v1
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
Convert entitlement connection assignment type
Initiates an asynchronous workflow to convert the assignment type of an entitlement connection
between `STANDING` and `JIT` (Just-In-Time Privileged).

The response is returned with HTTP 202 Accepted while the conversion workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-entitlement-connection-conversion-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartEntitlementConnectionConversionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **convertEntitlementConnectionRequest** | [**ConvertEntitlementConnectionRequest**](../models/convert-entitlement-connection-request) |  | 

### Return type

[**ConvertEntitlementConnectionResponse**](../models/convert-entitlement-connection-response)

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
    jit_activation_convert "github.com/sailpoint-oss/golang-sdk/v3/jit_activation_convert"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    convertentitlementconnectionrequestJson := []byte(`{
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3",
          "targetType" : "JIT"
        }`) // ConvertEntitlementConnectionRequest | 

    var convertEntitlementConnectionRequest jit_activation_convert.ConvertEntitlementConnectionRequest
    if err := json.Unmarshal(convertentitlementconnectionrequestJson, &convertEntitlementConnectionRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.JITActivationConvertAPI.StartEntitlementConnectionConversionV1(context.Background()).XSailPointExperimental(xSailPointExperimental).ConvertEntitlementConnectionRequest(convertEntitlementConnectionRequest).Execute()
	  //resp, r, err := apiClient.JITActivationConvertAPI.StartEntitlementConnectionConversionV1(context.Background()).XSailPointExperimental(xSailPointExperimental).ConvertEntitlementConnectionRequest(convertEntitlementConnectionRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `JITActivationConvertAPI.StartEntitlementConnectionConversionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartEntitlementConnectionConversionV1`: ConvertEntitlementConnectionResponse
    fmt.Fprintf(os.Stdout, "Response from `JITActivationConvertAPI.StartEntitlementConnectionConversionV1`: %v\n", resp)
}
```

[[Back to top]](#)

