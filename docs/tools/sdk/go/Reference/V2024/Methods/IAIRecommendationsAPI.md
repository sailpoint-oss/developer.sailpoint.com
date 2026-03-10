---
id: v2024-iai-recommendations
title: IAIRecommendations
pagination_label: IAIRecommendations
sidebar_label: IAIRecommendations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIRecommendations', 'V2024IAIRecommendations'] 
slug: /tools/sdk/go/v2024/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAIRecommendations', 'V2024IAIRecommendations']
---

# IAIRecommendationsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-recommendations**](#get-recommendations) | **Post** `/recommendations/request` | Returns recommendation based on object
[**get-recommendations-config**](#get-recommendations-config) | **Get** `/recommendations/config` | Get certification recommendation config values
[**update-recommendations-config**](#update-recommendations-config) | **Put** `/recommendations/config` | Update certification recommendation config values


## get-recommendations
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-recommendations)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecommendationsRequest struct via the builder pattern


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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    recommendationrequestdto := []byte(`{
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

    var recommendationRequestDto v2024.RecommendationRequestDto
    if err := json.Unmarshal(recommendationrequestdto, &recommendationRequestDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRecommendationsAPI.GetRecommendations(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationRequestDto(recommendationRequestDto).Execute()
	  //resp, r, err := apiClient.V2024.IAIRecommendationsAPI.GetRecommendations(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationRequestDto(recommendationRequestDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRecommendationsAPI.GetRecommendations``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecommendations`: RecommendationResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRecommendationsAPI.GetRecommendations`: %v\n", resp)
}
```

[[Back to top]](#)

## get-recommendations-config
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-recommendations-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecommendationsConfigRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRecommendationsAPI.GetRecommendationsConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IAIRecommendationsAPI.GetRecommendationsConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRecommendationsAPI.GetRecommendationsConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecommendationsConfig`: RecommendationConfigDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRecommendationsAPI.GetRecommendationsConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## update-recommendations-config
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

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-recommendations-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRecommendationsConfigRequest struct via the builder pattern


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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    recommendationconfigdto := []byte(`{
          "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
          "peerGroupPercentageThreshold" : 0.5,
          "runAutoSelectOnce" : false,
          "onlyTuneThreshold" : false
        }`) // RecommendationConfigDto | 

    var recommendationConfigDto v2024.RecommendationConfigDto
    if err := json.Unmarshal(recommendationconfigdto, &recommendationConfigDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IAIRecommendationsAPI.UpdateRecommendationsConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationConfigDto(recommendationConfigDto).Execute()
	  //resp, r, err := apiClient.V2024.IAIRecommendationsAPI.UpdateRecommendationsConfig(context.Background()).XSailPointExperimental(xSailPointExperimental).RecommendationConfigDto(recommendationConfigDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIRecommendationsAPI.UpdateRecommendationsConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateRecommendationsConfig`: RecommendationConfigDto
    fmt.Fprintf(os.Stdout, "Response from `IAIRecommendationsAPI.UpdateRecommendationsConfig`: %v\n", resp)
}
```

[[Back to top]](#)

