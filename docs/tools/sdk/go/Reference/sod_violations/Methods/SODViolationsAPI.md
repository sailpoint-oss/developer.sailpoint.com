---
id: v1-sod-violations
title: SODViolations
pagination_label: SODViolations
sidebar_label: SODViolations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SODViolations', 'V1SODViolations'] 
slug: /tools/sdk/go/sodviolations/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SODViolations', 'V1SODViolations']
---

# SODViolationsAPI
  Use this API to check for current &quot;separation of duties&quot; (SOD) policy violations as well as potential future SOD policy violations. 
With SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies.

Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation. 
This second option is a good way to prevent SOD violations from triggering at all. 

Refer to [Handling Policy Violations](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html) for more information about SOD policy violations. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-predict-sod-violations-v1**](#start-predict-sod-violations-v1) | **Post** `/sod-violations/v1/predict` | Predict sod violations for identity.
[**start-violation-check-v1**](#start-violation-check-v1) | **Post** `/sod-violations/v1/check` | Check sod violations


## start-predict-sod-violations-v1
Predict sod violations for identity.
This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-predict-sod-violations-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartPredictSodViolationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identitywithnewaccess** | [**Identitywithnewaccess**](../models/identitywithnewaccess) |  | 

### Return type

[**Violationprediction**](../models/violationprediction)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
)

func main() {
    identitywithnewaccess := []byte(`{"identityId":"2c91808568c529c60168cca6f90c1313","accessRefs":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]}`) // Identitywithnewaccess | 

    var identitywithnewaccess v1.Identitywithnewaccess
    if err := json.Unmarshal(identitywithnewaccess, &identitywithnewaccess); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.StartPredictSodViolationsV1(context.Background()).Identitywithnewaccess(identitywithnewaccess).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.StartPredictSodViolationsV1(context.Background()).Identitywithnewaccess(identitywithnewaccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartPredictSodViolationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartPredictSodViolationsV1`: Violationprediction
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartPredictSodViolationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-violation-check-v1
Check sod violations
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-violation-check-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartViolationCheckV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identitywithnewaccess** | [**Identitywithnewaccess**](../models/identitywithnewaccess) |  | 

### Return type

[**Sodviolationcheck**](../models/sodviolationcheck)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
)

func main() {
    identitywithnewaccess := []byte(`{"identityId":"2c91808568c529c60168cca6f90c1313","accessRefs":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}],"clientMetadata":{"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"}}`) // Identitywithnewaccess | 

    var identitywithnewaccess v1.Identitywithnewaccess
    if err := json.Unmarshal(identitywithnewaccess, &identitywithnewaccess); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.StartViolationCheckV1(context.Background()).Identitywithnewaccess(identitywithnewaccess).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.StartViolationCheckV1(context.Background()).Identitywithnewaccess(identitywithnewaccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartViolationCheckV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartViolationCheckV1`: Sodviolationcheck
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartViolationCheckV1`: %v\n", resp)
}
```

[[Back to top]](#)

