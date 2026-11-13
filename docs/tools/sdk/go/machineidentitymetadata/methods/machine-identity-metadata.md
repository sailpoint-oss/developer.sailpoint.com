# MachineIdentityMetadata

# MachineIdentityMetadataAPI
  Use this API to get reference data about machine identities, such as the machine identity subtypes available in the tenant. Use these values to build filters and forms for machine identities.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-machine-identity-subtypes-v1**](#list-machine-identity-subtypes-v1) | **Get** `/machine-identity-metadata/v1/subtypes` | List machine identity subtypes


## list-machine-identity-subtypes-v1
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
List machine identity subtypes
This API returns the machine identity subtypes available in the tenant.


The list includes **Application** and **Device**. When agentic identity governance is enabled for the tenant, the
list also includes **AI Agent**.


When Machine Identity Security is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-subtypes-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineIdentitySubtypesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineIdentityMetadataAPI.ListMachineIdentitySubtypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineIdentityMetadataAPI.ListMachineIdentitySubtypesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineIdentityMetadataAPI.ListMachineIdentitySubtypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineIdentitySubtypesV1`: []string
    fmt.Fprintf(os.Stdout, "Response from `MachineIdentityMetadataAPI.ListMachineIdentitySubtypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

