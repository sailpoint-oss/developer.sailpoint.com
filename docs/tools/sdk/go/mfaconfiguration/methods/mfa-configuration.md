# MFAConfiguration

# MFAConfigurationAPI
  Configure and test multifactor authentication (MFA) methods 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-mfa-duo-config-v1**](#get-mfa-duo-config-v1) | **Get** `/mfa/v1/duo-web/config` | Configuration of duo mfa method
[**get-mfa-kba-config-v1**](#get-mfa-kba-config-v1) | **Get** `/mfa/v1/kba/config` | Configuration of kba mfa method
[**get-mfa-okta-config-v1**](#get-mfa-okta-config-v1) | **Get** `/mfa/v1/okta-verify/config` | Configuration of okta mfa method
[**set-mfa-duo-config-v1**](#set-mfa-duo-config-v1) | **Put** `/mfa/v1/duo-web/config` | Set duo mfa configuration
[**set-mfakba-config-v1**](#set-mfakba-config-v1) | **Post** `/mfa/v1/kba/config/answers` | Set mfa kba configuration
[**set-mfa-okta-config-v1**](#set-mfa-okta-config-v1) | **Put** `/mfa/v1/okta-verify/config` | Set okta mfa configuration
[**test-mfa-config-v1**](#test-mfa-config-v1) | **Get** `/mfa/v1/{method}/test` | Mfa method&#39;s test configuration


## get-mfa-duo-config-v1
Configuration of duo mfa method
This API returns the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-duo-config-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMFADuoConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.GetMFADuoConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.GetMFADuoConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.GetMFADuoConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMFADuoConfigV1`: MfaDuoConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFADuoConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mfa-kba-config-v1
Configuration of kba mfa method
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-kba-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMFAKbaConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    allLanguages := allLanguages=true // bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional) # bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.GetMFAKbaConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.GetMFAKbaConfigV1(context.Background()).AllLanguages(allLanguages).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.GetMFAKbaConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMFAKbaConfigV1`: []KbaQuestion
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFAKbaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mfa-okta-config-v1
Configuration of okta mfa method
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-okta-config-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMFAOktaConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.GetMFAOktaConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.GetMFAOktaConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.GetMFAOktaConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMFAOktaConfigV1`: MfaOktaConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFAOktaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfa-duo-config-v1
Set duo mfa configuration
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-duo-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFADuoConfigV1Request struct via the builder pattern


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
    mfa_configuration "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    mfaduoconfigJson := []byte(`{
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

    var mfaDuoConfig mfa_configuration.MfaDuoConfig
    if err := json.Unmarshal(mfaduoconfigJson, &mfaDuoConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.SetMFADuoConfigV1(context.Background()).MfaDuoConfig(mfaDuoConfig).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.SetMFADuoConfigV1(context.Background()).MfaDuoConfig(mfaDuoConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFADuoConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFADuoConfigV1`: MfaDuoConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFADuoConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfakba-config-v1
Set mfa kba configuration
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/set-mfakba-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFAKBAConfigV1Request struct via the builder pattern


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
    mfa_configuration "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    kbaanswerrequestitemJson := []byte(`[{"id":"173423","answer":"822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34"},{"id":"c54fee53-2d63-4fc5-9259-3e93b9994135","answer":"9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"}]`) // []KbaAnswerRequestItem | 

    var kbaAnswerRequestItem []mfa_configuration.KbaAnswerRequestItem
    if err := json.Unmarshal(kbaanswerrequestitemJson, &kbaAnswerRequestItem); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.SetMFAKBAConfigV1(context.Background()).KbaAnswerRequestItem(kbaAnswerRequestItem).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.SetMFAKBAConfigV1(context.Background()).KbaAnswerRequestItem(kbaAnswerRequestItem).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFAKBAConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFAKBAConfigV1`: []KbaAnswerResponseItem
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFAKBAConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfa-okta-config-v1
Set okta mfa configuration
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-okta-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFAOktaConfigV1Request struct via the builder pattern


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
    mfa_configuration "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    mfaoktaconfigJson := []byte(`{
          "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
          "host" : "example.com",
          "mfaMethod" : "okta-verify",
          "enabled" : true,
          "identityAttribute" : "email"
        }`) // MfaOktaConfig | 

    var mfaOktaConfig mfa_configuration.MfaOktaConfig
    if err := json.Unmarshal(mfaoktaconfigJson, &mfaOktaConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.SetMFAOktaConfigV1(context.Background()).MfaOktaConfig(mfaOktaConfig).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.SetMFAOktaConfigV1(context.Background()).MfaOktaConfig(mfaOktaConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFAOktaConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFAOktaConfigV1`: MfaOktaConfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFAOktaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-mfa-config-v1
Mfa method's test configuration
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/test-mfa-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**method** | **string** | The name of the MFA method. The currently supported method names are &#39;okta-verify&#39; and &#39;duo-web&#39;. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestMFAConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    method := `okta-verify` // string | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'. # string | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.TestMFAConfigV1(context.Background(), method).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.TestMFAConfigV1(context.Background(), method).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.TestMFAConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestMFAConfigV1`: MfaConfigTestResponse
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.TestMFAConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

