# MachineMappingMetadata

# MachineMappingMetadataAPI
  Use this API to get the identity and account attributes you can use as targets when you map source attributes for machine account classification. The lists tell you which attribute names a mapping can write to before you configure it.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-machine-mapping-target-account-attributes-v1**](#get-machine-mapping-target-account-attributes-v1) | **Get** `/machine-mapping-metadata/v1/target-account-attributes` | List target account attributes
[**get-machine-mapping-target-identity-attributes-v1**](#get-machine-mapping-target-identity-attributes-v1) | **Get** `/machine-mapping-metadata/v1/target-identity-attributes` | List target identity attributes


## get-machine-mapping-target-account-attributes-v1
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
List target account attributes
This API returns the account attribute names that a machine mapping can target.


The list always includes **name** and **nativeIdentity**. When expanded mapping targets are enabled for the tenant,
the list also includes **description**, **environment**, **subtype**, and **businessApplication**.


The caller needs the **idn:account:read** right.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-account-attributes-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineMappingTargetAccountAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TargetAttributes**](../models/target-attributes)

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
    resp, r, err := apiClient.MachineMappingMetadataAPI.GetMachineMappingTargetAccountAttributesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineMappingMetadataAPI.GetMachineMappingTargetAccountAttributesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineMappingMetadataAPI.GetMachineMappingTargetAccountAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineMappingTargetAccountAttributesV1`: TargetAttributes
    fmt.Fprintf(os.Stdout, "Response from `MachineMappingMetadataAPI.GetMachineMappingTargetAccountAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-machine-mapping-target-identity-attributes-v1
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
List target identity attributes
This API returns the identity attribute names that a machine mapping can target.


The list always includes **name**, **alias**, **email**, and **uid**. When expanded mapping targets are enabled
for the tenant, the list also includes the tenant's searchable identity attributes.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-identity-attributes-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineMappingTargetIdentityAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TargetAttributes**](../models/target-attributes)

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
    resp, r, err := apiClient.MachineMappingMetadataAPI.GetMachineMappingTargetIdentityAttributesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineMappingMetadataAPI.GetMachineMappingTargetIdentityAttributesV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineMappingMetadataAPI.GetMachineMappingTargetIdentityAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineMappingTargetIdentityAttributesV1`: TargetAttributes
    fmt.Fprintf(os.Stdout, "Response from `MachineMappingMetadataAPI.GetMachineMappingTargetIdentityAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

