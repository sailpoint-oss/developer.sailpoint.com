---
id: beta-mfa-configuration
title: MFAConfiguration
pagination_label: MFAConfiguration
sidebar_label: MFAConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MFAConfiguration', 'BetaMFAConfiguration'] 
slug: /tools/sdk/go/beta/methods/mfa-configuration
tags: ['SDK', 'Software Development Kit', 'MFAConfiguration', 'BetaMFAConfiguration']
---

# MFAConfigurationAPI
  Configure and test multifactor authentication (MFA) methods 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-mfa-config**](#delete-mfa-config) | **Delete** `/mfa/{method}/delete` | Delete mfa method configuration
[**get-mfa-duo-config**](#get-mfa-duo-config) | **Get** `/mfa/duo-web/config` | Configuration of duo mfa method
[**get-mfa-kba-config**](#get-mfa-kba-config) | **Get** `/mfa/kba/config` | Configuration of kba mfa method
[**get-mfa-okta-config**](#get-mfa-okta-config) | **Get** `/mfa/okta-verify/config` | Configuration of okta mfa method
[**set-mfa-duo-config**](#set-mfa-duo-config) | **Put** `/mfa/duo-web/config` | Set duo mfa configuration
[**set-mfakba-config**](#set-mfakba-config) | **Post** `/mfa/kba/config/answers` | Set mfa kba configuration
[**set-mfa-okta-config**](#set-mfa-okta-config) | **Put** `/mfa/okta-verify/config` | Set okta mfa configuration
[**test-mfa-config**](#test-mfa-config) | **Get** `/mfa/{method}/test` | Mfa method&#39;s test configuration


## delete-mfa-config
Delete mfa method configuration
This API removes the configuration for the specified MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-mfa-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**method** | **string** | The name of the MFA method. The currently supported method names are &#39;okta-verify&#39; and &#39;duo-web&#39;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMFAConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MfaOktaConfig**](../models/mfa-okta-config)

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
    method := `okta-verify` // string | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'. # string | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.DeleteMFAConfig(context.Background(), method).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.DeleteMFAConfig(context.Background(), method).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.DeleteMFAConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMFAConfig`: MfaOktaConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.DeleteMFAConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mfa-duo-config
Configuration of duo mfa method
This API returns the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-duo-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMFADuoConfigRequest struct via the builder pattern


### Return type

[**MfaDuoConfig**](../models/mfa-duo-config)

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
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.GetMFADuoConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.GetMFADuoConfig(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.GetMFADuoConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMFADuoConfig`: MfaDuoConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFADuoConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mfa-kba-config
Configuration of kba mfa method
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-kba-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMFAKbaConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allLanguages** | **bool** | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false | 

### Return type

[**[]KbaQuestion**](../models/kba-question)

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
    allLanguages := allLanguages=true // bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional) # bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.GetMFAKbaConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.GetMFAKbaConfig(context.Background()).AllLanguages(allLanguages).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.GetMFAKbaConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMFAKbaConfig`: []KbaQuestion
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFAKbaConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mfa-okta-config
Configuration of okta mfa method
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-okta-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMFAOktaConfigRequest struct via the builder pattern


### Return type

[**MfaOktaConfig**](../models/mfa-okta-config)

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
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.GetMFAOktaConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.GetMFAOktaConfig(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.GetMFAOktaConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMFAOktaConfig`: MfaOktaConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFAOktaConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfa-duo-config
Set duo mfa configuration
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfa-duo-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFADuoConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfaDuoConfig** | [**MfaDuoConfig**](../models/mfa-duo-config) |  | 

### Return type

[**MfaDuoConfig**](../models/mfa-duo-config)

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
    mfaduoconfig := []byte(`{
          "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
          "host" : "example.com",
          "configProperties" : {
            "skey" : "qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x",
            "ikey" : "Q123WE45R6TY7890ZXCV"
          },
          "mfaMethod" : "duo-web",
          "enabled" : true,
          "identityAttribute" : "email"
        }`) // MfaDuoConfig | 

    var mfaDuoConfig beta.MfaDuoConfig
    if err := json.Unmarshal(mfaduoconfig, &mfaDuoConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.SetMFADuoConfig(context.Background()).MfaDuoConfig(mfaDuoConfig).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.SetMFADuoConfig(context.Background()).MfaDuoConfig(mfaDuoConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFADuoConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFADuoConfig`: MfaDuoConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFADuoConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfakba-config
Set mfa kba configuration
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfakba-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFAKBAConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbaAnswerRequestItem** | [**[]KbaAnswerRequestItem**](../models/kba-answer-request-item) |  | 

### Return type

[**[]KbaAnswerResponseItem**](../models/kba-answer-response-item)

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
    kbaanswerrequestitem := []byte(`[{id=173423, answer=822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34}, {id=c54fee53-2d63-4fc5-9259-3e93b9994135, answer=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08}]`) // []KbaAnswerRequestItem | 

    var kbaAnswerRequestItem []beta.KbaAnswerRequestItem
    if err := json.Unmarshal(kbaanswerrequestitem, &kbaAnswerRequestItem); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.SetMFAKBAConfig(context.Background()).KbaAnswerRequestItem(kbaAnswerRequestItem).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.SetMFAKBAConfig(context.Background()).KbaAnswerRequestItem(kbaAnswerRequestItem).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFAKBAConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFAKBAConfig`: []KbaAnswerResponseItem
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFAKBAConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfa-okta-config
Set okta mfa configuration
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfa-okta-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFAOktaConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfaOktaConfig** | [**MfaOktaConfig**](../models/mfa-okta-config) |  | 

### Return type

[**MfaOktaConfig**](../models/mfa-okta-config)

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
    mfaoktaconfig := []byte(`{
          "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
          "host" : "example.com",
          "mfaMethod" : "okta-verify",
          "enabled" : true,
          "identityAttribute" : "email"
        }`) // MfaOktaConfig | 

    var mfaOktaConfig beta.MfaOktaConfig
    if err := json.Unmarshal(mfaoktaconfig, &mfaOktaConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.SetMFAOktaConfig(context.Background()).MfaOktaConfig(mfaOktaConfig).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.SetMFAOktaConfig(context.Background()).MfaOktaConfig(mfaOktaConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFAOktaConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFAOktaConfig`: MfaOktaConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFAOktaConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## test-mfa-config
Mfa method's test configuration
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-mfa-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**method** | **string** | The name of the MFA method. The currently supported method names are &#39;okta-verify&#39; and &#39;duo-web&#39;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestMFAConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MfaConfigTestResponse**](../models/mfa-config-test-response)

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
    method := `okta-verify` // string | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'. # string | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MFAConfigurationAPI.TestMFAConfig(context.Background(), method).Execute()
	  //resp, r, err := apiClient.Beta.MFAConfigurationAPI.TestMFAConfig(context.Background(), method).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.TestMFAConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestMFAConfig`: MfaConfigTestResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.TestMFAConfig`: %v\n", resp)
}
```

[[Back to top]](#)

