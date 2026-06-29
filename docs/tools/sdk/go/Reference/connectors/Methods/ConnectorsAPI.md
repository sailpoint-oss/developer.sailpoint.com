---
id: v1-connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectors', 'V1Connectors'] 
slug: /tools/sdk/go/connectors/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'V1Connectors']
---

# ConnectorsAPI
  Use this API to implement connector functionality.
With this functionality in place, administrators can view available connectors.

Connectors are the bridges Identity Security Cloud uses to communicate with and aggregate data from sources.
For example, if it is necessary to set up a connection between Identity Security Cloud and the Active Directory source, a connector can bridge the two and enable Identity Security Cloud to synchronize data between the systems.
This ensures account entitlements and states are correct throughout the organization.

In Identity Security Cloud, administrators can use the Connections drop-down menu and select Sources to view the available source connectors.

Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about the connectors available in Identity Security Cloud.

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) for more information about the SaaS custom connectors that do not need VAs (virtual appliances) to communicate with their sources.

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) for more information about using connectors in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-connector-v1**](#create-custom-connector-v1) | **Post** `/connectors/v1` | Create custom connector
[**delete-custom-connector-v1**](#delete-custom-connector-v1) | **Delete** `/connectors/v1/{scriptName}` | Delete connector by script name
[**get-connector-correlation-config-v1**](#get-connector-correlation-config-v1) | **Get** `/connectors/v1/{scriptName}/correlation-config` | Get connector correlation configuration
[**get-connector-list-v1**](#get-connector-list-v1) | **Get** `/connectors/v1` | Get connector list
[**get-connector-source-config-v1**](#get-connector-source-config-v1) | **Get** `/connectors/v1/{scriptName}/source-config` | Get connector source configuration
[**get-connector-source-template-v1**](#get-connector-source-template-v1) | **Get** `/connectors/v1/{scriptName}/source-template` | Get connector source template
[**get-connector-translations-v1**](#get-connector-translations-v1) | **Get** `/connectors/v1/{scriptName}/translations/{locale}` | Get connector translations
[**get-connector-v1**](#get-connector-v1) | **Get** `/connectors/v1/{scriptName}` | Get connector by script name
[**put-connector-correlation-config-v1**](#put-connector-correlation-config-v1) | **Put** `/connectors/v1/{scriptName}/correlation-config` | Update connector correlation configuration
[**put-connector-source-config-v1**](#put-connector-source-config-v1) | **Put** `/connectors/v1/{scriptName}/source-config` | Update connector source configuration
[**put-connector-source-template-v1**](#put-connector-source-template-v1) | **Put** `/connectors/v1/{scriptName}/source-template` | Update connector source template
[**put-connector-translations-v1**](#put-connector-translations-v1) | **Put** `/connectors/v1/{scriptName}/translations/{locale}` | Update connector translations
[**update-connector-v1**](#update-connector-v1) | **Patch** `/connectors/v1/{scriptName}` | Update connector by script name


## create-custom-connector-v1
Create custom connector
Create custom connector.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-connector-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomConnectorV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3createconnectordto** | [**V3createconnectordto**](../models/v3createconnectordto) |  | 

### Return type

[**V3connectordto**](../models/v3connectordto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/connectors"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    v3createconnectordto := []byte(``) // V3createconnectordto | 

    var v3createconnectordto v1.V3createconnectordto
    if err := json.Unmarshal(v3createconnectordto, &v3createconnectordto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.CreateCustomConnectorV1(context.Background()).V3createconnectordto(v3createconnectordto).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.CreateCustomConnectorV1(context.Background()).V3createconnectordto(v3createconnectordto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.CreateCustomConnectorV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCustomConnectorV1`: V3connectordto
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.CreateCustomConnectorV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-custom-connector-v1
Delete connector by script name
Delete a custom connector that using its script name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-connector-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomConnectorV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ConnectorsAPI.DeleteCustomConnectorV1(context.Background(), scriptName).Execute()
	  //r, err := apiClient.ConnectorsAPI.DeleteCustomConnectorV1(context.Background(), scriptName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.DeleteCustomConnectorV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-connector-correlation-config-v1
Get connector correlation configuration
Fetches a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-correlation-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorCorrelationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.GetConnectorCorrelationConfigV1(context.Background(), scriptName).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.GetConnectorCorrelationConfigV1(context.Background(), scriptName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorCorrelationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorCorrelationConfigV1`: string
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorCorrelationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-list-v1
Get connector list
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-list-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorListV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Return type

[**[]V3connectordto**](../models/v3connectordto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    filters := `directConnect eq "true"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.GetConnectorListV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.GetConnectorListV1(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Locale(locale).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorListV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorListV1`: []V3connectordto
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorListV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-source-config-v1
Get connector source configuration
Fetches a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorSourceConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.GetConnectorSourceConfigV1(context.Background(), scriptName).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.GetConnectorSourceConfigV1(context.Background(), scriptName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorSourceConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorSourceConfigV1`: string
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorSourceConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-source-template-v1
Get connector source template
Fetches a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorSourceTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.GetConnectorSourceTemplateV1(context.Background(), scriptName).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.GetConnectorSourceTemplateV1(context.Background(), scriptName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorSourceTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorSourceTemplateV1`: string
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorSourceTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-translations-v1
Get connector translations
Fetches a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-translations-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 
**locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorTranslationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.GetConnectorTranslationsV1(context.Background(), scriptName, locale).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.GetConnectorTranslationsV1(context.Background(), scriptName, locale).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorTranslationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorTranslationsV1`: string
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorTranslationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-v1
Get connector by script name
Fetches a connector that using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Return type

[**Connectordetail**](../models/connectordetail)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.GetConnectorV1(context.Background(), scriptName).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.GetConnectorV1(context.Background(), scriptName).Locale(locale).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectorV1`: Connectordetail
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-correlation-config-v1
Update connector correlation configuration
Update a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-correlation-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorCorrelationConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | connector correlation config xml file | 

### Return type

[**Updatedetail**](../models/updatedetail)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    file := BINARY_DATA_HERE // *os.File | connector correlation config xml file # *os.File | connector correlation config xml file

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.PutConnectorCorrelationConfigV1(context.Background(), scriptName).File(file).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.PutConnectorCorrelationConfigV1(context.Background(), scriptName).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorCorrelationConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConnectorCorrelationConfigV1`: Updatedetail
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorCorrelationConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-source-config-v1
Update connector source configuration
Update a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorSourceConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | connector source config xml file | 

### Return type

[**Updatedetail**](../models/updatedetail)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file := BINARY_DATA_HERE // *os.File | connector source config xml file # *os.File | connector source config xml file

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.PutConnectorSourceConfigV1(context.Background(), scriptName).File(file).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.PutConnectorSourceConfigV1(context.Background(), scriptName).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorSourceConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConnectorSourceConfigV1`: Updatedetail
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorSourceConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-source-template-v1
Update connector source template
Update a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-template-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorSourceTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | connector source template xml file | 

### Return type

[**Updatedetail**](../models/updatedetail)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file := BINARY_DATA_HERE // *os.File | connector source template xml file # *os.File | connector source template xml file

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.PutConnectorSourceTemplateV1(context.Background(), scriptName).File(file).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.PutConnectorSourceTemplateV1(context.Background(), scriptName).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorSourceTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConnectorSourceTemplateV1`: Updatedetail
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorSourceTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-translations-v1
Update connector translations
Update a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-translations-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 
**locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorTranslationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Updatedetail**](../models/updatedetail)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.PutConnectorTranslationsV1(context.Background(), scriptName, locale).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.PutConnectorTranslationsV1(context.Background(), scriptName, locale).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorTranslationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConnectorTranslationsV1`: Updatedetail
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorTranslationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-connector-v1
Update connector by script name
This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:


* connectorMetadata

* applicationXml

* correlationConfigXml

* sourceConfigXml


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-connector-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateConnectorV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of connector detail update operations  | 

### Return type

[**Connectordetail**](../models/connectordetail)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/connectors"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/connectors"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | A list of connector detail update operations 

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ConnectorsAPI.UpdateConnectorV1(context.Background(), scriptName).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.ConnectorsAPI.UpdateConnectorV1(context.Background(), scriptName).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.UpdateConnectorV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateConnectorV1`: Connectordetail
    fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.UpdateConnectorV1`: %v\n", resp)
}
```

[[Back to top]](#)

