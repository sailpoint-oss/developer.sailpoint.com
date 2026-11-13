# MachineAccountRecommendation

# MachineAccountRecommendationAPI
  Use this API to review machine account discovery results. Machine account discovery analyzes accounts and recommends whether each account belongs to a machine rather than a person.

You can get the recommendation for an account, including the reasons behind it, and you can list the reasons that machine account discovery reports, with a readable message for each reason.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-machine-account-recommendation-v1**](#get-machine-account-recommendation-v1) | **Get** `/accounts/v1/{id}/recommendation` | Get machine account recommendation
[**list-machine-account-discovery-reasons-v1**](#list-machine-account-discovery-reasons-v1) | **Get** `/ai-recommendations/v1/reasons/machine-account-discovery` | List machine account discovery reasons


## get-machine-account-recommendation-v1
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
Get machine account recommendation
This API returns the machine account discovery recommendation for an account. The recommendation states whether
the account is likely a machine account and lists the reasons that contributed to it.


When no recommendation exists for the account, this API returns `200` with an empty response body.


When machine account discovery is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-recommendation-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMachineAccountRecommendationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**MachineAccountRecommendation**](../models/machine-account-recommendation)

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
    id := `2c9180835d2e5168015d32f890ca1581` // string | Account ID. # string | Account ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountRecommendationAPI.GetMachineAccountRecommendationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountRecommendationAPI.GetMachineAccountRecommendationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountRecommendationAPI.GetMachineAccountRecommendationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMachineAccountRecommendationV1`: MachineAccountRecommendation
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountRecommendationAPI.GetMachineAccountRecommendationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-machine-account-discovery-reasons-v1
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
List machine account discovery reasons
This API returns the reasons that machine account discovery can report for a recommendation. Each reason has an
ID and a readable message. Use this list to show a message for each reason in a machine account recommendation.


Messages are localized. Send the `Accept-Language` header to choose a language. When the requested language is not
available, messages are returned in the default language.


The reasons are returned in the order defined by the catalog. When the catalog does not define an order, the
reasons are sorted by ID.


When machine account discovery is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-discovery-reasons-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountDiscoveryReasonsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **acceptLanguage** | **string** | Preferred language for the reason messages. | [default to &quot;en&quot;]

### Return type

[**[]MachineAccountDiscoveryReason**](../models/machine-account-discovery-reason)

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
    acceptLanguage := `en-US` // string | Preferred language for the reason messages. (optional) (default to "en") # string | Preferred language for the reason messages. (optional) (default to "en")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MachineAccountRecommendationAPI.ListMachineAccountDiscoveryReasonsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.MachineAccountRecommendationAPI.ListMachineAccountDiscoveryReasonsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountRecommendationAPI.ListMachineAccountDiscoveryReasonsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMachineAccountDiscoveryReasonsV1`: []MachineAccountDiscoveryReason
    fmt.Fprintf(os.Stdout, "Response from `MachineAccountRecommendationAPI.ListMachineAccountDiscoveryReasonsV1`: %v\n", resp)
}
```

[[Back to top]](#)

