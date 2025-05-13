---
id: v2024-connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Connectors', 'V2024Connectors'] 
slug: /tools/sdk/go/v2024/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'V2024Connectors']
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

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/managing_sources.html) for more information about using connectors in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-connector**](#create-custom-connector) | **Post** `/connectors` | Create Custom Connector
[**delete-custom-connector**](#delete-custom-connector) | **Delete** `/connectors/{scriptName}` | Delete Connector by Script Name
[**get-connector**](#get-connector) | **Get** `/connectors/{scriptName}` | Get Connector by Script Name
[**get-connector-correlation-config**](#get-connector-correlation-config) | **Get** `/connectors/{scriptName}/correlation-config` | Get Connector Correlation Configuration
[**get-connector-list**](#get-connector-list) | **Get** `/connectors` | Get Connector List
[**get-connector-source-config**](#get-connector-source-config) | **Get** `/connectors/{scriptName}/source-config` | Get Connector Source Configuration
[**get-connector-source-template**](#get-connector-source-template) | **Get** `/connectors/{scriptName}/source-template` | Get Connector Source Template
[**get-connector-translations**](#get-connector-translations) | **Get** `/connectors/{scriptName}/translations/{locale}` | Get Connector Translations
[**put-connector-correlation-config**](#put-connector-correlation-config) | **Put** `/connectors/{scriptName}/correlation-config` | Update Connector Correlation Configuration
[**put-connector-source-config**](#put-connector-source-config) | **Put** `/connectors/{scriptName}/source-config` | Update Connector Source Configuration
[**put-connector-source-template**](#put-connector-source-template) | **Put** `/connectors/{scriptName}/source-template` | Update Connector Source Template
[**put-connector-translations**](#put-connector-translations) | **Put** `/connectors/{scriptName}/translations/{locale}` | Update Connector Translations
[**update-connector**](#update-connector) | **Patch** `/connectors/{scriptName}` | Update Connector by Script Name


## create-custom-connector
Create Custom Connector
Create custom connector.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-custom-connector)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomConnectorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v3CreateConnectorDto** | [**V3CreateConnectorDto**](../models/v3-create-connector-dto) |  | 

### Return type

[**V3ConnectorDto**](../models/v3-connector-dto)

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
    data := []byte(`{
          "name" : "custom connector",
          "directConnect" : true,
          "className" : "sailpoint.connector.OpenConnectorAdapter",
          "type" : "custom connector type",
          "status" : "RELEASED"
        }`) // V3CreateConnectorDto | 

  
   var v3CreateConnectorDto v2024.V3CreateConnectorDto
   if err := json.Unmarshal(data, &v3CreateConnectorDto); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.CreateCustomConnector(context.Background()).V3CreateConnectorDto(v3CreateConnectorDto).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.CreateCustomConnector(context.Background()).V3CreateConnectorDto(v3CreateConnectorDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.CreateCustomConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCustomConnector`: V3ConnectorDto
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.CreateCustomConnector`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-custom-connector
Delete Connector by Script Name
Delete a custom connector that using its script name.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-custom-connector)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomConnectorRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.ConnectorsAPI.DeleteCustomConnector(context.Background(), scriptName).Execute()
	//r, err := apiClient.V2024.ConnectorsAPI.DeleteCustomConnector(context.Background(), scriptName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.DeleteCustomConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-connector
Get Connector by Script Name
Fetches a connector that using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Return type

[**ConnectorDetail**](../models/connector-detail)

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
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnector(context.Background(), scriptName).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnector(context.Background(), scriptName).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnector`: ConnectorDetail
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnector`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-correlation-config
Get Connector Correlation Configuration
Fetches a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-correlation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorCorrelationConfigRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorCorrelationConfig(context.Background(), scriptName).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorCorrelationConfig(context.Background(), scriptName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorCorrelationConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectorCorrelationConfig`: string
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorCorrelationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-list
Get Connector List
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-list)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Return type

[**[]V3ConnectorDto**](../models/v3-connector-dto)

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
    filters := `directConnect eq "true"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorList(context.Background()).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorList(context.Background()).Filters(filters).Limit(limit).Offset(offset).Count(count).Locale(locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectorList`: []V3ConnectorDto
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorList`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-source-config
Get Connector Source Configuration
Fetches a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-source-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorSourceConfigRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorSourceConfig(context.Background(), scriptName).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorSourceConfig(context.Background(), scriptName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorSourceConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectorSourceConfig`: string
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorSourceConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-source-template
Get Connector Source Template
Fetches a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-source-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorSourceTemplateRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorSourceTemplate(context.Background(), scriptName).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorSourceTemplate(context.Background(), scriptName).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorSourceTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectorSourceTemplate`: string
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorSourceTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## get-connector-translations
Get Connector Translations
Fetches a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-translations)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 
**locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectorTranslationsRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorTranslations(context.Background(), scriptName, locale).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.GetConnectorTranslations(context.Background(), scriptName, locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.GetConnectorTranslations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetConnectorTranslations`: string
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.GetConnectorTranslations`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-correlation-config
Update Connector Correlation Configuration
Update a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-connector-correlation-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorCorrelationConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | connector correlation config xml file | 

### Return type

[**UpdateDetail**](../models/update-detail)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    file := BINARY_DATA_HERE // *os.File | connector correlation config xml file # *os.File | connector correlation config xml file

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorCorrelationConfig(context.Background(), scriptName).File(file).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorCorrelationConfig(context.Background(), scriptName).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorCorrelationConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutConnectorCorrelationConfig`: UpdateDetail
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorCorrelationConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-source-config
Update Connector Source Configuration
Update a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-connector-source-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorSourceConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | connector source config xml file | 

### Return type

[**UpdateDetail**](../models/update-detail)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file := BINARY_DATA_HERE // *os.File | connector source config xml file # *os.File | connector source config xml file

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorSourceConfig(context.Background(), scriptName).File(file).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorSourceConfig(context.Background(), scriptName).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorSourceConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutConnectorSourceConfig`: UpdateDetail
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorSourceConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-source-template
Update Connector Source Template
Update a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-connector-source-template)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorSourceTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **file** | ***os.File** | connector source template xml file | 

### Return type

[**UpdateDetail**](../models/update-detail)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file := BINARY_DATA_HERE // *os.File | connector source template xml file # *os.File | connector source template xml file

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorSourceTemplate(context.Background(), scriptName).File(file).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorSourceTemplate(context.Background(), scriptName).File(file).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorSourceTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutConnectorSourceTemplate`: UpdateDetail
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorSourceTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## put-connector-translations
Update Connector Translations
Update a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-connector-translations)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. | 
**locale** | **string** | The locale to apply to the config. If no viable locale is given, it will default to \&quot;en\&quot; | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConnectorTranslationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**UpdateDetail**](../models/update-detail)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # string | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale := `de` // string | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # string | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorTranslations(context.Background(), scriptName, locale).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.PutConnectorTranslations(context.Background(), scriptName, locale).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.PutConnectorTranslations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutConnectorTranslations`: UpdateDetail
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.PutConnectorTranslations`: %v\n", resp)
}
```

[[Back to top]](#)

## update-connector
Update Connector by Script Name
This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:


* connectorMetadata

* applicationXml

* correlationConfigXml

* sourceConfigXml


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-connector)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scriptName** | **string** | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateConnectorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of connector detail update operations  | 

### Return type

[**ConnectorDetail**](../models/connector-detail)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    scriptName := `aScriptName` // string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # string | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    jsonPatchOperation := fmt.Sprintf(``) // []JsonPatchOperation | A list of connector detail update operations 

  
   var jsonPatchOperation v2024.JsonPatchOperation
   if err := json.Unmarshal(data, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.ConnectorsAPI.UpdateConnector(context.Background(), scriptName).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V2024.ConnectorsAPI.UpdateConnector(context.Background(), scriptName).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectorsAPI.UpdateConnector``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateConnector`: ConnectorDetail
	fmt.Fprintf(os.Stdout, "Response from `ConnectorsAPI.UpdateConnector`: %v\n", resp)
}
```

[[Back to top]](#)

