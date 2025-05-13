---
id: beta-iai-recommendations
title: IAIRecommendations
pagination_label: IAIRecommendations
sidebar_label: IAIRecommendations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIRecommendations', 'BetaIAIRecommendations'] 
slug: /tools/sdk/go/beta/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAIRecommendations', 'BetaIAIRecommendations']
---

# IAIRecommendationsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-recommendations**](#get-recommendations) | **Post** `/recommendations/request` | Returns Recommendation Based on Object
[**get-recommendations-config**](#get-recommendations-config) | **Get** `/recommendations/config` | Get certification recommendation config values
[**update-recommendations-config**](#update-recommendations-config) | **Put** `/recommendations/config` | Update certification recommendation config values


## get-recommendations
Returns Recommendation Based on Object
The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-recommendations)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecommendationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
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

  
   var recommendationRequestDto beta.RecommendationRequestDto
   if err := json.Unmarshal(data, &recommendationRequestDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IAIRecommendationsAPI.GetRecommendations(context.Background()).RecommendationRequestDto(recommendationRequestDto).Execute()
	//resp, r, err := apiClient.Beta.IAIRecommendationsAPI.GetRecommendations(context.Background()).RecommendationRequestDto(recommendationRequestDto).Execute()
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
Get certification recommendation config values
Retrieves configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-recommendations-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetRecommendationsConfigRequest struct via the builder pattern


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

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IAIRecommendationsAPI.GetRecommendationsConfig(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.IAIRecommendationsAPI.GetRecommendationsConfig(context.Background()).Execute()
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
Update certification recommendation config values
Updates configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-recommendations-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRecommendationsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    data := []byte(`{
          "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
          "peerGroupPercentageThreshold" : 0.5,
          "runAutoSelectOnce" : false,
          "onlyTuneThreshold" : false
        }`) // RecommendationConfigDto | 

  
   var recommendationConfigDto beta.RecommendationConfigDto
   if err := json.Unmarshal(data, &recommendationConfigDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IAIRecommendationsAPI.UpdateRecommendationsConfig(context.Background()).RecommendationConfigDto(recommendationConfigDto).Execute()
	//resp, r, err := apiClient.Beta.IAIRecommendationsAPI.UpdateRecommendationsConfig(context.Background()).RecommendationConfigDto(recommendationConfigDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIRecommendationsAPI.UpdateRecommendationsConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateRecommendationsConfig`: RecommendationConfigDto
	fmt.Fprintf(os.Stdout, "Response from `IAIRecommendationsAPI.UpdateRecommendationsConfig`: %v\n", resp)
}
```

[[Back to top]](#)

