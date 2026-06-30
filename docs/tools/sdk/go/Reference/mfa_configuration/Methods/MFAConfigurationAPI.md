---
id: v1-mfa-configuration
title: MFAConfiguration
pagination_label: MFAConfiguration
sidebar_label: MFAConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MFAConfiguration', 'V1MFAConfiguration'] 
slug: /tools/sdk/go/mfaconfiguration/methods/mfa-configuration
tags: ['SDK', 'Software Development Kit', 'MFAConfiguration', 'V1MFAConfiguration']
---

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-mfa-duo-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMFADuoConfigV1Request struct via the builder pattern


### Return type

[**Mfaduoconfig**](../models/mfaduoconfig)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
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
    // response from `GetMFADuoConfigV1`: Mfaduoconfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFADuoConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mfa-kba-config-v1
Configuration of kba mfa method
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-mfa-kba-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMFAKbaConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allLanguages** | **bool** | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false | 

### Return type

[**[]Kbaquestion**](../models/kbaquestion)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
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
    // response from `GetMFAKbaConfigV1`: []Kbaquestion
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFAKbaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-mfa-okta-config-v1
Configuration of okta mfa method
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-mfa-okta-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMFAOktaConfigV1Request struct via the builder pattern


### Return type

[**Mfaoktaconfig**](../models/mfaoktaconfig)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
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
    // response from `GetMFAOktaConfigV1`: Mfaoktaconfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.GetMFAOktaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfa-duo-config-v1
Set duo mfa configuration
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-mfa-duo-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFADuoConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfaduoconfig** | [**Mfaduoconfig**](../models/mfaduoconfig) |  | 

### Return type

[**Mfaduoconfig**](../models/mfaduoconfig)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
)

func main() {
    mfaduoconfig := []byte(`{"mfaMethod":"duo-web","enabled":true,"host":"www.example.com","accessKey":"qw123Y3QlA5UqocYpdU3rEkzrK2D497y","identityAttribute":"email","configProperties":{"skey":"12q3WERlcUHWJmiMqyCXI3uOF7EaDJTbdeOp6E2B","ikey":"Q123WE45R6TY7890ZXCV"}}`) // Mfaduoconfig | 

    var mfaduoconfig v1.Mfaduoconfig
    if err := json.Unmarshal(mfaduoconfig, &mfaduoconfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.SetMFADuoConfigV1(context.Background()).Mfaduoconfig(mfaduoconfig).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.SetMFADuoConfigV1(context.Background()).Mfaduoconfig(mfaduoconfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFADuoConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFADuoConfigV1`: Mfaduoconfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFADuoConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfakba-config-v1
Set mfa kba configuration
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-mfakba-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFAKBAConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kbaanswerrequestitem** | [**[]Kbaanswerrequestitem**](../models/kbaanswerrequestitem) |  | 

### Return type

[**[]Kbaanswerresponseitem**](../models/kbaanswerresponseitem)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
)

func main() {
    kbaanswerrequestitem := []byte(`[{"id":"173423","answer":"822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34"},{"id":"c54fee53-2d63-4fc5-9259-3e93b9994135","answer":"9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"}]`) // []Kbaanswerrequestitem | 

    var kbaanswerrequestitem []v1.Kbaanswerrequestitem
    if err := json.Unmarshal(kbaanswerrequestitem, &kbaanswerrequestitem); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.SetMFAKBAConfigV1(context.Background()).Kbaanswerrequestitem(kbaanswerrequestitem).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.SetMFAKBAConfigV1(context.Background()).Kbaanswerrequestitem(kbaanswerrequestitem).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFAKBAConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFAKBAConfigV1`: []Kbaanswerresponseitem
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFAKBAConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-mfa-okta-config-v1
Set okta mfa configuration
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-mfa-okta-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetMFAOktaConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mfaoktaconfig** | [**Mfaoktaconfig**](../models/mfaoktaconfig) |  | 

### Return type

[**Mfaoktaconfig**](../models/mfaoktaconfig)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
)

func main() {
    mfaoktaconfig := []byte(`{"mfaMethod":"okta-verify","enabled":true,"host":"www.example.com","accessKey":"dk778Y3QlA5UqocYpdU3rEkzrK2D497y","identityAttribute":"email"}`) // Mfaoktaconfig | 

    var mfaoktaconfig v1.Mfaoktaconfig
    if err := json.Unmarshal(mfaoktaconfig, &mfaoktaconfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MFAConfigurationAPI.SetMFAOktaConfigV1(context.Background()).Mfaoktaconfig(mfaoktaconfig).Execute()
	  //resp, r, err := apiClient.MFAConfigurationAPI.SetMFAOktaConfigV1(context.Background()).Mfaoktaconfig(mfaoktaconfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MFAConfigurationAPI.SetMFAOktaConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMFAOktaConfigV1`: Mfaoktaconfig
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.SetMFAOktaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-mfa-config-v1
Mfa method's test configuration
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-mfa-config-v1)

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

[**Mfaconfigtestresponse**](../models/mfaconfigtestresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/mfa_configuration"
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
    // response from `TestMFAConfigV1`: Mfaconfigtestresponse
    fmt.Fprintf(os.Stdout, "Response from `MFAConfigurationAPI.TestMFAConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

