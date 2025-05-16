---
id: v2025-sod-violations
title: SODViolations
pagination_label: SODViolations
sidebar_label: SODViolations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SODViolations', 'V2025SODViolations'] 
slug: /tools/sdk/go/v2025/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SODViolations', 'V2025SODViolations']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-predict-sod-violations**](#start-predict-sod-violations) | **Post** `/sod-violations/predict` | Predict SOD violations for identity.
[**start-violation-check**](#start-violation-check) | **Post** `/sod-violations/check` | Check SOD violations


## start-predict-sod-violations
Predict SOD violations for identity.
This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-predict-sod-violations)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartPredictSodViolationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityWithNewAccess** | [**IdentityWithNewAccess**](../models/identity-with-new-access) |  | 

### Return type

[**ViolationPrediction**](../models/violation-prediction)

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
    identitywithnewaccess := []byte(`{
          "identityId" : "2c91808568c529c60168cca6f90c1313",
          "accessRefs" : [ {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c050861ab1",
            "name" : "CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local"
          }, {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c0509c1ab2",
            "name" : "CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local"
          } ]
        }`) // IdentityWithNewAccess | 

    var identityWithNewAccess v2025.IdentityWithNewAccess
    if err := json.Unmarshal(identitywithnewaccess, &identityWithNewAccess); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SODViolationsAPI.StartPredictSodViolations(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
	  //resp, r, err := apiClient.V2025.SODViolationsAPI.StartPredictSodViolations(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartPredictSodViolations``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartPredictSodViolations`: ViolationPrediction
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartPredictSodViolations`: %v\n", resp)
}
```

[[Back to top]](#)

## start-violation-check
Check SOD violations
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-violation-check)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartViolationCheckRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityWithNewAccess1** | [**IdentityWithNewAccess1**](../models/identity-with-new-access1) |  | 

### Return type

[**SodViolationCheck**](../models/sod-violation-check)

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
    identitywithnewaccess1 := []byte(`{identityId=2c91808568c529c60168cca6f90c1313, accessRefs=[{type=ENTITLEMENT, id=2c918087682f9a86016839c050861ab1, name=CN=Information Access,OU=test,OU=test-service,DC=TestAD,DC=local}, {type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2, name=CN=Information Technology,OU=test,OU=test-service,DC=TestAD,DC=local}], clientMetadata={additionalProp1=string, additionalProp2=string, additionalProp3=string}}`) // IdentityWithNewAccess1 | 

    var identityWithNewAccess1 v2025.IdentityWithNewAccess1
    if err := json.Unmarshal(identitywithnewaccess1, &identityWithNewAccess1); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.SODViolationsAPI.StartViolationCheck(context.Background()).IdentityWithNewAccess1(identityWithNewAccess1).Execute()
	  //resp, r, err := apiClient.V2025.SODViolationsAPI.StartViolationCheck(context.Background()).IdentityWithNewAccess1(identityWithNewAccess1).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartViolationCheck``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartViolationCheck`: SodViolationCheck
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartViolationCheck`: %v\n", resp)
}
```

[[Back to top]](#)

