---
id: account-activities
title: AccountActivities
pagination_label: AccountActivities
sidebar_label: AccountActivities
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountActivities', 'AccountActivities'] 
slug: /tools/sdk/go/v3/methods/account-activities
tags: ['SDK', 'Software Development Kit', 'AccountActivities', 'AccountActivities']
---

# AccountActivitiesAPI
  Use this API to implement account activity tracking functionality.
With this functionality in place, users can track source account activity in Identity Security Cloud, which greatly improves traceability in the system. 

An account activity refers to a log of each action performed on a source account. This is useful for auditing the changes performed on an account throughout its life. 
In Identity Security Cloud&#39;s Search, users can search for account activities and select the activity&#39;s row to get an overview of the activity&#39;s account action and view its progress, its involved sources, and its most basic metadata, such as the identity requesting the option and the recipient. 

Account activity includes most actions Identity Security Cloud completes on source accounts. Users can search in Identity Security Cloud for the following account action types: 

- Access Request: These include any access requests the source account is involved in. 

- Account Attribute Updates: These include updates to a single attribute on an account on a source. 

- Account State Update: These include locking or unlocking actions on an account on a source. 

- Certification: These include actions removing an entitlement from an account on a source as a result of the entitlement&#39;s revocation during a certification.

- Cloud Automated &#x60;Lifecyclestate&#x60;: These include automated lifecycle state changes that result in a source account&#39;s correlated identity being assigned to a different lifecycle state. 
Identity Security Cloud replaces the &#x60;Lifecyclestate&#x60; variable with the name of the lifecycle state it has moved the account&#39;s identity to. 

- Identity Attribute Update: These include updates to a source account&#39;s correlated identity attributes as the result of a provisioning action. 
When you update an identity attribute that also updates an identity&#39;s lifecycle state, the cloud automated &#x60;Lifecyclestate&#x60; event also displays.
Account Activity does not include attribute updates that occur as a result of aggregation.

- Identity Refresh: These include correlated identity refreshes that occur for an account on a source whenever the account&#39;s correlated identity profile gets a new role or updates. 
These also include refreshes that occur whenever Identity Security Cloud assigns an application to the account&#39;s correlated identity based on the application&#39;s being assigned to All Users From Source or Specific Users From Source. 

- Lifecycle State Refresh: These include the actions that took place when a lifecycle state changed. This event only occurs after a cloud automated &#x60;Lifecyclestate&#x60; change or a lifecycle state change. 

- Lifecycle State Change: These include the account activities that result from an identity&#39;s manual assignment to a null lifecycle state.

- Password Change: These include password changes on sources.

Refer to [Account Activity](https://documentation.sailpoint.com/saas/help/search/index.html#account-activity) for more information about account activities.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-account-activity**](#get-account-activity) | **Get** `/account-activities/{id}` | Get an Account Activity
[**list-account-activities**](#list-account-activities) | **Get** `/account-activities` | List Account Activities


## get-account-activity
Get an Account Activity
This gets a single account activity by its id.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-account-activity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account activity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountActivityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AccountActivity**](../models/account-activity)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The account activity id # string | The account activity id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccountActivitiesAPI.GetAccountActivity(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.AccountActivitiesAPI.GetAccountActivity(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountActivitiesAPI.GetAccountActivity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccountActivity`: AccountActivity
    fmt.Fprintf(os.Stdout, "Response from `AccountActivitiesAPI.GetAccountActivity`: %v\n", resp)
}
```

[[Back to top]](#)

## list-account-activities
List Account Activities
This gets a collection of account activities that satisfy the given query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-account-activities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccountActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string** | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **requestedBy** | **string** | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **regardingIdentity** | **string** | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** | 

### Return type

[**[]AccountActivity**](../models/account-activity)

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
    requestedFor := `2c91808568c529c60168cca6f90c1313` // string | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requestedBy := `2c91808568c529c60168cca6f90c1313` // string | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regardingIdentity := `2c91808568c529c60168cca6f90c1313` // string | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # string | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `type eq "Identity Refresh"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccountActivitiesAPI.ListAccountActivities(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.AccountActivitiesAPI.ListAccountActivities(context.Background()).RequestedFor(requestedFor).RequestedBy(requestedBy).RegardingIdentity(regardingIdentity).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountActivitiesAPI.ListAccountActivities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccountActivities`: []AccountActivity
    fmt.Fprintf(os.Stdout, "Response from `AccountActivitiesAPI.ListAccountActivities`: %v\n", resp)
}
```

[[Back to top]](#)

