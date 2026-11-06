# IAIRecommendations

# IAIRecommendationsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-recommendations-config-v1**](#get-recommendations-config-v1) | **Get** `/recommendations/v1/config` | Get certification recommendation config values
[**get-recommendations-v1**](#get-recommendations-v1) | **Post** `/recommendations/v1/request` | Returns recommendation based on object
[**update-recommendations-config-v1**](#update-recommendations-config-v1) | **Put** `/recommendations/v1/config` | Update certification recommendation config values


## get-recommendations-config-v1
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
Get certification recommendation config values
Retrieves configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecommendationsConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**RecommendationConfigDto**](../models/recommendation-config-dto)

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
    resp, r, err := apiClient.IAIRecommendationsAPI.GetRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIRecommendationsAPI.GetRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRecommendationsAPI.GetRecommendationsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecommendationsConfigV1`: RecommendationConfigDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRecommendationsAPI.GetRecommendationsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-recommendations-v1
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
Returns recommendation based on object
The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecommendationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **recommendationRequestDto** | [**RecommendationRequestDto**](../models/recommendation-request-dto) |  | 

### Return type

[**RecommendationResponseDto**](../models/recommendation-response-dto)

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
    iai_recommendations "github.com/sailpoint-oss/golang-sdk/v3/iai_recommendations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    recommendationrequestdtoJson := []byte(`{
          "prescribeMode" : false,
          "excludeInterpretations" : false,
          "requests" : [ {
            "item" : {
              "id" : "2c938083633d259901633d2623ec0375",
              "type" : "ENTITLEMENT"
            },
            "identityId" : "2c938083633d259901633d25c68c00fa"
          }, {
            "item" : {
              "id" : "2c938083633d259901633d2623ec0375",
              "type" : "ENTITLEMENT"
            },
            "identityId" : "2c938083633d259901633d25c68c00fa"
          } ],
          "includeTranslationMessages" : false,
          "includeDebugInformation" : true
        }`) // RecommendationRequestDto | 

    var recommendationRequestDto iai_recommendations.RecommendationRequestDto
    if err := json.Unmarshal(recommendationrequestdtoJson, &recommendationRequestDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRecommendationsAPI.GetRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationRequestDto(recommendationRequestDto).Execute()
	  //resp, r, err := apiClient.IAIRecommendationsAPI.GetRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationRequestDto(recommendationRequestDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRecommendationsAPI.GetRecommendationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecommendationsV1`: RecommendationResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRecommendationsAPI.GetRecommendationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-recommendations-config-v1
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
Update certification recommendation config values
Updates configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/update-recommendations-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRecommendationsConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **recommendationConfigDto** | [**RecommendationConfigDto**](../models/recommendation-config-dto) |  | 

### Return type

[**RecommendationConfigDto**](../models/recommendation-config-dto)

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
    iai_recommendations "github.com/sailpoint-oss/golang-sdk/v3/iai_recommendations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    recommendationconfigdtoJson := []byte(`{
          "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
          "peerGroupPercentageThreshold" : 0.5,
          "runAutoSelectOnce" : false,
          "onlyTuneThreshold" : false
        }`) // RecommendationConfigDto | 

    var recommendationConfigDto iai_recommendations.RecommendationConfigDto
    if err := json.Unmarshal(recommendationconfigdtoJson, &recommendationConfigDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIRecommendationsAPI.UpdateRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationConfigDto(recommendationConfigDto).Execute()
	  //resp, r, err := apiClient.IAIRecommendationsAPI.UpdateRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationConfigDto(recommendationConfigDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRecommendationsAPI.UpdateRecommendationsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRecommendationsConfigV1`: RecommendationConfigDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRecommendationsAPI.UpdateRecommendationsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

