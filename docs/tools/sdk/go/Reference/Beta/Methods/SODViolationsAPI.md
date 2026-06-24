---
id: beta-sod-violations
title: SODViolations
pagination_label: SODViolations
sidebar_label: SODViolations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SODViolations', 'BetaSODViolations'] 
slug: /tools/sdk/go/beta/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SODViolations', 'BetaSODViolations']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-predict-sod-violations**](#start-predict-sod-violations) | **Post** `/sod-violations/predict` | Predict sod violations for identity.


## start-predict-sod-violations
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Predict sod violations for identity.
This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/start-predict-sod-violations)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identitywithnewaccess := []byte(`{
          "identityId" : "2c91808568c529c60168cca6f90c1313",
          "accessRefs" : [ {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c050861ab1"
          }, {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c0509c1ab2"
          } ]
        }`) // IdentityWithNewAccess | 

    var identityWithNewAccess beta.IdentityWithNewAccess
    if err := json.Unmarshal(identitywithnewaccess, &identityWithNewAccess); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SODViolationsAPI.StartPredictSodViolations(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
	  //resp, r, err := apiClient.Beta.SODViolationsAPI.StartPredictSodViolations(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartPredictSodViolations``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartPredictSodViolations`: ViolationPrediction
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartPredictSodViolations`: %v\n", resp)
}
```

[[Back to top]](#)

