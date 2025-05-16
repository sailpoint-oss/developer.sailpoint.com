---
id: beta-managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClients', 'BetaManagedClients'] 
slug: /tools/sdk/go/beta/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients', 'BetaManagedClients']
---

# ManagedClientsAPI
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-managed-client-status**](#get-managed-client-status) | **Get** `/managed-clients/{id}/status` | Specified Managed Client Status.
[**update-managed-client-status**](#update-managed-client-status) | **Post** `/managed-clients/{id}/status` | Handle status request from client


## get-managed-client-status
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Specified Managed Client Status.
Retrieve Managed Client Status by ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-managed-client-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Managed Client Status to get | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | [**ManagedClientType**](../models/managed-client-type) | Type of the Managed Client Status to get | 

### Return type

[**ManagedClientStatus**](../models/managed-client-status)

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
    id := `aClientId` // string | ID of the Managed Client Status to get # string | ID of the Managed Client Status to get
    type_ :=  // ManagedClientType | Type of the Managed Client Status to get # ManagedClientType | Type of the Managed Client Status to get

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ManagedClientsAPI.GetManagedClientStatus(context.Background(), id).Type_(type_).Execute()
	  //resp, r, err := apiClient.Beta.ManagedClientsAPI.GetManagedClientStatus(context.Background(), id).Type_(type_).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClientStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClientStatus`: ManagedClientStatus
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClientStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## update-managed-client-status
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Handle status request from client
Update a status detail passed in from the client

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-managed-client-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Managed Client Status to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateManagedClientStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **managedClientStatus** | [**ManagedClientStatus**](../models/managed-client-status) |  | 

### Return type

[**ManagedClientStatusAggResponse**](../models/managed-client-status-agg-response)

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
    id := `aClientId` // string | ID of the Managed Client Status to update # string | ID of the Managed Client Status to update
    managedclientstatus := []byte(`{
          "body" : {
            "alertKey" : "",
            "id" : "5678",
            "clusterId" : "1234",
            "ccg_etag" : "ccg_etag123xyz456",
            "ccg_pin" : "NONE",
            "cookbook_etag" : "20210420125956-20210511144538",
            "hostname" : "megapod-useast1-secret-hostname.sailpoint.com",
            "internal_ip" : "127.0.0.1",
            "lastSeen" : "1620843964604",
            "sinceSeen" : "14708",
            "sinceSeenMillis" : "14708",
            "localDev" : false,
            "stacktrace" : "",
            "status" : "NORMAL",
            "product" : "idn",
            "platform_version" : "2",
            "os_version" : "2345.3.1",
            "os_type" : "flatcar",
            "hypervisor" : "unknown"
          },
          "type" : "CCG",
          "status" : "NORMAL",
          "timestamp" : "2020-01-01T00:00:00Z"
        }`) // ManagedClientStatus | 

    var managedClientStatus beta.ManagedClientStatus
    if err := json.Unmarshal(managedclientstatus, &managedClientStatus); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ManagedClientsAPI.UpdateManagedClientStatus(context.Background(), id).ManagedClientStatus(managedClientStatus).Execute()
	  //resp, r, err := apiClient.Beta.ManagedClientsAPI.UpdateManagedClientStatus(context.Background(), id).ManagedClientStatus(managedClientStatus).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.UpdateManagedClientStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateManagedClientStatus`: ManagedClientStatusAggResponse
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.UpdateManagedClientStatus`: %v\n", resp)
}
```

[[Back to top]](#)

