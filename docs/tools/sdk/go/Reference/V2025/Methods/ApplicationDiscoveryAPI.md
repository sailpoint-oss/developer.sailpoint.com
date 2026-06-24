---
id: v2025-application-discovery
title: ApplicationDiscovery
pagination_label: ApplicationDiscovery
sidebar_label: ApplicationDiscovery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApplicationDiscovery', 'V2025ApplicationDiscovery'] 
slug: /tools/sdk/go/v2025/methods/application-discovery
tags: ['SDK', 'Software Development Kit', 'ApplicationDiscovery', 'V2025ApplicationDiscovery']
---

# ApplicationDiscoveryAPI
  Use this API to implement application discovery functionality. 
With this functionality in place, you can discover applications within your Okta connector and receive connector recommendations by manually uploading application names.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-discovered-applications**](#get-discovered-applications) | **Get** `/discovered-applications` | Get discovered applications for tenant
[**get-manual-discover-applications-csv-template**](#get-manual-discover-applications-csv-template) | **Get** `/manual-discover-applications-template` | Download csv template for discovery
[**send-manual-discover-applications-csv-template**](#send-manual-discover-applications-csv-template) | **Post** `/manual-discover-applications` | Upload csv to discover applications
[**start-application-discovery**](#start-application-discovery) | **Post** `/sources/{sourceId}/discover-applications` | Start Application Discovery


## get-discovered-applications
Get discovered applications for tenant
Get a list of applications that have been identified within the environment. This includes details such as application names, discovery dates, potential correlated saas_vendors and related suggested connectors.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-discovered-applications)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDiscoveredApplicationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **detail** | **string** | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. | 
 **filter** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** | 

### Return type

[**[]GetDiscoveredApplications200ResponseInner**](../models/get-discovered-applications200-response-inner)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    detail := `FULL` // string | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional) # string | Determines whether slim, or increased level of detail is provided for each discovered application in the returned list. SLIM is the default behavior. (optional)
    filter := `name eq "Okta" and description co "Okta" and discoverySource in ("csv", "Okta Saas")` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, sw, co*  **description**: *eq, sw, co*  **createdAtStart**: *eq, le, ge*  **createdAtEnd**: *eq, le, ge*  **discoveredAtStart**: *eq, le, ge*  **discoveredAtEnd**: *eq, le, ge*  **discoverySource**: *eq, in*  **discoverySourceName**: *eq, in*  **discoverySourceCategory**: *eq, in*  (optional)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, discoveredAt, discoverySource, discoverySourceName, discoverySourceCategory** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApplicationDiscoveryAPI.GetDiscoveredApplications(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.ApplicationDiscoveryAPI.GetDiscoveredApplications(context.Background()).Limit(limit).Offset(offset).Detail(detail).Filter(filter).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.GetDiscoveredApplications``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDiscoveredApplications`: []GetDiscoveredApplications200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `ApplicationDiscoveryAPI.GetDiscoveredApplications`: %v\n", resp)
}
```

[[Back to top]](#)

## get-manual-discover-applications-csv-template
Download csv template for discovery
Download an example CSV file with two columns `application_name` and `description`.  The CSV file contains a single row with the values 'Example Application' and 'Example Description'.

The downloaded template is specifically designed for use with the `/manual-discover-applications` endpoint.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-manual-discover-applications-csv-template)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetManualDiscoverApplicationsCsvTemplateRequest struct via the builder pattern


### Return type

[**ManualDiscoverApplicationsTemplate**](../models/manual-discover-applications-template)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplate(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplate(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManualDiscoverApplicationsCsvTemplate`: ManualDiscoverApplicationsTemplate
    fmt.Fprintf(os.Stdout, "Response from `ApplicationDiscoveryAPI.GetManualDiscoverApplicationsCsvTemplate`: %v\n", resp)
}
```

[[Back to top]](#)

## send-manual-discover-applications-csv-template
Upload csv to discover applications
Uploading a CSV file with application data for manual correlation to specific ISC connectors. 
If a suitable ISC connector is unavailable, the system will recommend generic connectors instead.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/send-manual-discover-applications-csv-template)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendManualDiscoverApplicationsCsvTemplateRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    file := BINARY_DATA_HERE // *os.File | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered. # *os.File | The CSV file to upload containing `application_name` and `description` columns. Each row represents an application to be discovered.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ApplicationDiscoveryAPI.SendManualDiscoverApplicationsCsvTemplate(context.Background()).File(file).Execute()
	  //r, err := apiClient.V2025.ApplicationDiscoveryAPI.SendManualDiscoverApplicationsCsvTemplate(context.Background()).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.SendManualDiscoverApplicationsCsvTemplate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## start-application-discovery
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-application-discovery)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartApplicationDiscoveryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **applicationDiscoveryRequest** | [**ApplicationDiscoveryRequest**](../models/application-discovery-request) |  | 

### Return type

[**ApplicationDiscoveryResponse**](../models/application-discovery-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    applicationdiscoveryrequest := []byte(`{
          "datasetIds" : [ "source:datasetId12345", "source:datasetId12345" ]
        }`) // ApplicationDiscoveryRequest | 

    var applicationDiscoveryRequest v2025.ApplicationDiscoveryRequest
    if err := json.Unmarshal(applicationdiscoveryrequest, &applicationDiscoveryRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApplicationDiscoveryAPI.StartApplicationDiscovery(context.Background()).XSailPointExperimental(xSailPointExperimental).ApplicationDiscoveryRequest(applicationDiscoveryRequest).Execute()
	  //resp, r, err := apiClient.V2025.ApplicationDiscoveryAPI.StartApplicationDiscovery(context.Background()).XSailPointExperimental(xSailPointExperimental).ApplicationDiscoveryRequest(applicationDiscoveryRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApplicationDiscoveryAPI.StartApplicationDiscovery``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartApplicationDiscovery`: ApplicationDiscoveryResponse
    fmt.Fprintf(os.Stdout, "Response from `ApplicationDiscoveryAPI.StartApplicationDiscovery`: %v\n", resp)
}
```

[[Back to top]](#)

