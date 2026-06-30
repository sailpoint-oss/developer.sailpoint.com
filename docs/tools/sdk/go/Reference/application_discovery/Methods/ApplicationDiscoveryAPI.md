---
id: v1-application-discovery
title: ApplicationDiscovery
pagination_label: ApplicationDiscovery
sidebar_label: ApplicationDiscovery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationDiscovery', 'V1ApplicationDiscovery'] 
slug: /tools/sdk/go/applicationdiscovery/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscovery', 'V1ApplicationDiscovery']
---

# ApplicationDiscoveryAPI
  Use this API to implement application discovery functionality. 
With this functionality in place, you can discover applications within your Okta connector and receive connector recommendations by manually uploading application names.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-discovered-applications-v1**](#get-discovered-applications-v1) | **Get** `/discovered-applications/v1` | Get discovered applications for tenant
[**get-manual-discover-applications-csv-template-v1**](#get-manual-discover-applications-csv-template-v1) | **Get** `/manual-discover-applications-template/v1` | Download csv template for discovery
[**send-manual-discover-applications-csv-template-v1**](#send-manual-discover-applications-csv-template-v1) | **Post** `/manual-discover-applications/v1` | Upload csv to discover applications
[**start-application-discovery-v1**](#start-application-discovery-v1) | **Post** `/sources/v1/{sourceId}/discover-applications` | Start Application Discovery


## get-discovered-applications-v1
Get discovered applications for tenant
Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-discovered-applications-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDiscoveredApplicationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **detail** | **string** | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. | 
 **filter** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** | 

### Return type

[**[]GetDiscoveredApplicationsV1200ResponseInner**](../models/get-discovered-applications-v1200-response-inner)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/application_discovery"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    detail := `FULL` // string | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional) # string | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
    filter := `name eq "Okta" and description co "Okta" and discoverySource in ("csv", "Okta Saas")` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApplicationDiscoveryAPI.GetDiscoveredApplicationsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ApplicationDiscoveryAPI.GetDiscoveredApplicationsV1(context.Background()).Limit(limit).Offset(offset).Detail(detail).Filter(filter).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.GetDiscoveredApplicationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDiscoveredApplicationsV1`: []GetDiscoveredApplicationsV1200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `ApplicationDiscoveryAPI.GetDiscoveredApplicationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-manual-discover-applications-csv-template-v1
Download csv template for discovery
Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-manual-discover-applications-csv-template-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetManualDiscoverApplicationsCsvTemplateV1Request struct via the builder pattern


### Return type

[**Manualdiscoverapplicationstemplate**](../models/manualdiscoverapplicationstemplate)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/application_discovery"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplateV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplateV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManualDiscoverApplicationsCsvTemplateV1`: Manualdiscoverapplicationstemplate
    fmt.Fprintf(os.Stdout, "Response from `ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplateV1`: %v\n", resp)
}
```

[[Back to top]](#)

## send-manual-discover-applications-csv-template-v1
Upload csv to discover applications
Uploading a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-manual-discover-applications-csv-template-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendManualDiscoverApplicationsCsvTemplateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | ***os.File** | The CSV file to upload containing &#x60;application_name&#x60; and &#x60;description&#x60; columns. Each row represents an application to be discovered. | 

### Return type

 (empty response body)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/application_discovery"
)

func main() {
    file := BINARY_DATA_HERE // *os.File | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. # *os.File | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ApplicationDiscoveryAPI.SendManualDiscoverApplicationsCsvTemplateV1(context.Background()).File(file).Execute()
	  //r, err := apiClient.ApplicationDiscoveryAPI.SendManualDiscoverApplicationsCsvTemplateV1(context.Background()).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.SendManualDiscoverApplicationsCsvTemplateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-application-discovery-v1
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
Start Application Discovery
Use this API to discover applications.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-application-discovery-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | The sourceId. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartApplicationDiscoveryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **applicationdiscoveryrequest** | [**Applicationdiscoveryrequest**](../models/applicationdiscoveryrequest) |  | 

### Return type

[**Applicationdiscoveryresponse**](../models/applicationdiscoveryresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/application_discovery"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/application_discovery"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sourceId := `sourceId_example` // string | The sourceId. # string | The sourceId.
    applicationdiscoveryrequest := []byte(``) // Applicationdiscoveryrequest | 

    var applicationdiscoveryrequest v1.Applicationdiscoveryrequest
    if err := json.Unmarshal(applicationdiscoveryrequest, &applicationdiscoveryrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApplicationDiscoveryAPI.StartApplicationDiscoveryV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Applicationdiscoveryrequest(applicationdiscoveryrequest).Execute()
	  //resp, r, err := apiClient.ApplicationDiscoveryAPI.StartApplicationDiscoveryV1(context.Background(), sourceId).XSailPointExperimental(xSailPointExperimental).Applicationdiscoveryrequest(applicationdiscoveryrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.StartApplicationDiscoveryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartApplicationDiscoveryV1`: Applicationdiscoveryresponse
    fmt.Fprintf(os.Stdout, "Response from `ApplicationDiscoveryAPI.StartApplicationDiscoveryV1`: %v\n", resp)
}
```

[[Back to top]](#)

