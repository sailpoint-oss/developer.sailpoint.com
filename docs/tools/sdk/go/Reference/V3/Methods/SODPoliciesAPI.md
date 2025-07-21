---
id: sod-policies
title: SODPolicies
pagination_label: SODPolicies
sidebar_label: SODPolicies
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SODPolicies', 'SODPolicies'] 
slug: /tools/sdk/go/v3/methods/sod-policies
tags: ['SDK', 'Software Development Kit', 'SODPolicies', 'SODPolicies']
---

# SODPoliciesAPI
  Use this API to implement and manage &quot;separation of duties&quot; (SOD) policies. 
With SOD policy functionality in place, administrators can organize the access in their tenants to prevent individuals from gaining conflicting or excessive access. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

To create SOD policies in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Policies&#39;.
To create a policy, they must configure two lists of access items. Each access item can only be added to one of the two lists.
They can search for the entitlements they want to add to these access lists.

&gt;Note: You can have a maximum of 500 policies of any type (including general policies) in your organization. In each access-based SOD policy, you can have a maximum of 50 entitlements in each access list.  

Once a SOD policy is in place, if an identity has access items on both lists, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies. 

To create a subscription to a SOD policy in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Layers&#39;.
They can create a subscription to the policy and schedule it to run at a regular interval. 

Refer to [Managing Policies](https://documentation.sailpoint.com/saas/help/sod/manage-policies.html) for more information about SOD policies. 

Refer to [Subscribe to a SOD Policy](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html#subscribe-to-an-sod-policy) for more information about SOD policy subscriptions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sod-policy**](#create-sod-policy) | **Post** `/sod-policies` | Create sod policy
[**delete-sod-policy**](#delete-sod-policy) | **Delete** `/sod-policies/{id}` | Delete sod policy by id
[**delete-sod-policy-schedule**](#delete-sod-policy-schedule) | **Delete** `/sod-policies/{id}/schedule` | Delete sod policy schedule
[**get-custom-violation-report**](#get-custom-violation-report) | **Get** `/sod-violation-report/{reportResultId}/download/{fileName}` | Download custom violation report
[**get-default-violation-report**](#get-default-violation-report) | **Get** `/sod-violation-report/{reportResultId}/download` | Download violation report
[**get-sod-all-report-run-status**](#get-sod-all-report-run-status) | **Get** `/sod-violation-report` | Get multi-report run task status
[**get-sod-policy**](#get-sod-policy) | **Get** `/sod-policies/{id}` | Get sod policy by id
[**get-sod-policy-schedule**](#get-sod-policy-schedule) | **Get** `/sod-policies/{id}/schedule` | Get sod policy schedule
[**get-sod-violation-report-run-status**](#get-sod-violation-report-run-status) | **Get** `/sod-policies/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**get-sod-violation-report-status**](#get-sod-violation-report-status) | **Get** `/sod-policies/{id}/violation-report` | Get sod violation report status
[**list-sod-policies**](#list-sod-policies) | **Get** `/sod-policies` | List sod policies
[**patch-sod-policy**](#patch-sod-policy) | **Patch** `/sod-policies/{id}` | Patch sod policy by id
[**put-policy-schedule**](#put-policy-schedule) | **Put** `/sod-policies/{id}/schedule` | Update sod policy schedule
[**put-sod-policy**](#put-sod-policy) | **Put** `/sod-policies/{id}` | Update sod policy by id
[**start-evaluate-sod-policy**](#start-evaluate-sod-policy) | **Post** `/sod-policies/{id}/evaluate` | Evaluate one policy by id
[**start-sod-all-policies-for-org**](#start-sod-all-policies-for-org) | **Post** `/sod-violation-report/run` | Runs all policies for org
[**start-sod-policy**](#start-sod-policy) | **Post** `/sod-policies/{id}/violation-report/run` | Runs sod policy violation report


## create-sod-policy
Create sod policy
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-sod-policy)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSodPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sodPolicyRequest** | [**SodPolicyRequest**](../models/sod-policy-request) |  | 

### Return type

[**SodPolicyRead**](../models/sod-policy-read)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    sodpolicyrequest := []byte(`{
          "conflictingAccessCriteria" : {
            "leftCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            },
            "rightCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            }
          },
          "ownerRef" : {
            "name" : "Support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "scheduled" : true,
          "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "description" : "This policy ensures compliance of xyz",
          "violationOwnerAssignmentConfig" : {
            "assignmentRule" : "MANAGER",
            "ownerRef" : {
              "name" : "Support",
              "id" : "2c9180a46faadee4016fb4e018c20639",
              "type" : "IDENTITY"
            }
          },
          "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
          "type" : "GENERAL",
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        }`) // SodPolicyRequest | 

    var sodPolicyRequest v3.SodPolicyRequest
    if err := json.Unmarshal(sodpolicyrequest, &sodPolicyRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.CreateSodPolicy(context.Background()).SodPolicyRequest(sodPolicyRequest).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.CreateSodPolicy(context.Background()).SodPolicyRequest(sodPolicyRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.CreateSodPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSodPolicy`: SodPolicyRead
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.CreateSodPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-sod-policy
Delete sod policy by id
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-sod-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD Policy to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSodPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **logical** | **bool** | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. | [default to true]

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
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD Policy to delete. # string | The ID of the SOD Policy to delete.
    logical := true // bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to true) # bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to true)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.SODPoliciesAPI.DeleteSodPolicy(context.Background(), id).Execute()
	  //r, err := apiClient.V3.SODPoliciesAPI.DeleteSodPolicy(context.Background(), id).Logical(logical).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.DeleteSodPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-sod-policy-schedule
Delete sod policy schedule
This deletes schedule for a specified SOD policy by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-sod-policy-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy the schedule must be deleted for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSodPolicyScheduleRequest struct via the builder pattern


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
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy the schedule must be deleted for. # string | The ID of the SOD policy the schedule must be deleted for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.SODPoliciesAPI.DeleteSodPolicySchedule(context.Background(), id).Execute()
	  //r, err := apiClient.V3.SODPoliciesAPI.DeleteSodPolicySchedule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.DeleteSodPolicySchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-custom-violation-report
Download custom violation report
This allows to download a specified named violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-custom-violation-report)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reportResultId** | **string** | The ID of the report reference to download. | 
**fileName** | **string** | Custom Name for the  file. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomViolationReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

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
    reportResultId := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the report reference to download. # string | The ID of the report reference to download.
    fileName := `custom-name` // string | Custom Name for the  file. # string | Custom Name for the  file.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.GetCustomViolationReport(context.Background(), reportResultId, fileName).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.GetCustomViolationReport(context.Background(), reportResultId, fileName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetCustomViolationReport``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomViolationReport`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetCustomViolationReport`: %v\n", resp)
}
```

[[Back to top]](#)

## get-default-violation-report
Download violation report
This allows to download a violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-default-violation-report)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reportResultId** | **string** | The ID of the report reference to download. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultViolationReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[***os.File**](https://pkg.go.dev/os)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

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
    reportResultId := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the report reference to download. # string | The ID of the report reference to download.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.GetDefaultViolationReport(context.Background(), reportResultId).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.GetDefaultViolationReport(context.Background(), reportResultId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetDefaultViolationReport``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultViolationReport`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetDefaultViolationReport`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-all-report-run-status
Get multi-report run task status
This endpoint gets the status for a violation report for all policy run.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-sod-all-report-run-status)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodAllReportRunStatusRequest struct via the builder pattern


### Return type

[**ReportResultReference**](../models/report-result-reference)

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

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodAllReportRunStatus(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodAllReportRunStatus(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodAllReportRunStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodAllReportRunStatus`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodAllReportRunStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-policy
Get sod policy by id
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-sod-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD Policy to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SodPolicyRead**](../models/sod-policy-read)

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
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD Policy to retrieve. # string | The ID of the SOD Policy to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodPolicy(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodPolicy(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodPolicy`: SodPolicyRead
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-policy-schedule
Get sod policy schedule
This endpoint gets a specified SOD policy's schedule.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-sod-policy-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy schedule to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodPolicyScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SodPolicySchedule**](../models/sod-policy-schedule)

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
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy schedule to retrieve. # string | The ID of the SOD policy schedule to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodPolicySchedule(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodPolicySchedule(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodPolicySchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodPolicySchedule`: SodPolicySchedule
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodPolicySchedule`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-violation-report-run-status
Get violation report run status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-sod-violation-report-run-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reportResultId** | **string** | The ID of the report reference to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodViolationReportRunStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ReportResultReference**](../models/report-result-reference)

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
    reportResultId := `2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | The ID of the report reference to retrieve. # string | The ID of the report reference to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodViolationReportRunStatus(context.Background(), reportResultId).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodViolationReportRunStatus(context.Background(), reportResultId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodViolationReportRunStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodViolationReportRunStatus`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodViolationReportRunStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-violation-report-status
Get sod violation report status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-sod-violation-report-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the violation report to retrieve status for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodViolationReportStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ReportResultReference**](../models/report-result-reference)

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
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the violation report to retrieve status for. # string | The ID of the violation report to retrieve status for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodViolationReportStatus(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.GetSodViolationReportStatus(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodViolationReportStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodViolationReportStatus`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodViolationReportStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## list-sod-policies
List sod policies
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-sod-policies)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSodPoliciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** | 

### Return type

[**[]SodPolicyRead**](../models/sod-policy-read)

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
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "bc693f07e7b645539626c25954c58554"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.ListSodPolicies(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.ListSodPolicies(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.ListSodPolicies``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSodPolicies`: []SodPolicyRead
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.ListSodPolicies`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-sod-policy
Patch sod policy by id
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception. 

[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-sod-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSodPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria  | 

### Return type

[**SodPolicyRead**](../models/sod-policy-read)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c918083-5d19-1a86-015d-28455b4a2329` // string | The ID of the SOD policy being modified. # string | The ID of the SOD policy being modified.
    jsonpatchoperation := []byte(`[{op=replace, path=/description, value=Modified description}, {op=replace, path=/conflictingAccessCriteria/leftCriteria/name, value=money-in-modified}, {op=replace, path=/conflictingAccessCriteria/rightCriteria, value={name=money-out-modified, criteriaList=[{type=ENTITLEMENT, id=2c918087682f9a86016839c0509c1ab2}]}}]`) // []JsonPatchOperation | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 

    var jsonPatchOperation []v3.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.PatchSodPolicy(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.PatchSodPolicy(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.PatchSodPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSodPolicy`: SodPolicyRead
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.PatchSodPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## put-policy-schedule
Update sod policy schedule
This updates schedule for a specified SOD policy.

[API Spec](https://developer.sailpoint.com/docs/api/v3/put-policy-schedule)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy to update its schedule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPolicyScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sodPolicySchedule** | [**SodPolicySchedule**](../models/sod-policy-schedule) |  | 

### Return type

[**SodPolicySchedule**](../models/sod-policy-schedule)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy to update its schedule. # string | The ID of the SOD policy to update its schedule.
    sodpolicyschedule := []byte(`{
          "schedule" : {
            "hours" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "months" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "timeZoneId" : "America/Chicago",
            "days" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "expiration" : "2018-06-25T20:22:28.104Z",
            "type" : "WEEKLY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "recipients" : [ {
            "name" : "Michael Michaels",
            "id" : "2c7180a46faadee4016fb4e018c20642",
            "type" : "IDENTITY"
          }, {
            "name" : "Michael Michaels",
            "id" : "2c7180a46faadee4016fb4e018c20642",
            "type" : "IDENTITY"
          } ],
          "name" : "SCH-1584312283015",
          "creatorId" : "0f11f2a47c944bf3a2bd742580fe3bde",
          "modifierId" : "0f11f2a47c944bf3a2bd742580fe3bde",
          "modified" : "2020-01-01T00:00:00Z",
          "description" : "Schedule for policy xyz",
          "emailEmptyResults" : false
        }`) // SodPolicySchedule | 

    var sodPolicySchedule v3.SodPolicySchedule
    if err := json.Unmarshal(sodpolicyschedule, &sodPolicySchedule); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.PutPolicySchedule(context.Background(), id).SodPolicySchedule(sodPolicySchedule).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.PutPolicySchedule(context.Background(), id).SodPolicySchedule(sodPolicySchedule).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.PutPolicySchedule``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPolicySchedule`: SodPolicySchedule
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.PutPolicySchedule`: %v\n", resp)
}
```

[[Back to top]](#)

## put-sod-policy
Update sod policy by id
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v3/put-sod-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSodPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sodPolicyRead** | [**SodPolicyRead**](../models/sod-policy-read) |  | 

### Return type

[**SodPolicyRead**](../models/sod-policy-read)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy to update. # string | The ID of the SOD policy to update.
    sodpolicyread := []byte(`{
          "conflictingAccessCriteria" : {
            "leftCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            },
            "rightCriteria" : {
              "name" : "money-in",
              "criteriaList" : [ {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a66",
                "name" : "Administrator"
              }, {
                "type" : "ENTITLEMENT",
                "id" : "2c9180866166b5b0016167c32ef31a67",
                "name" : "Administrator"
              } ]
            }
          },
          "ownerRef" : {
            "name" : "Support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "scheduled" : true,
          "creatorId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "modifierId" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "description" : "This policy ensures compliance of xyz",
          "violationOwnerAssignmentConfig" : {
            "assignmentRule" : "MANAGER",
            "ownerRef" : {
              "name" : "Support",
              "id" : "2c9180a46faadee4016fb4e018c20639",
              "type" : "IDENTITY"
            }
          },
          "correctionAdvice" : "Based on the role of the employee, managers should remove access that is not required for their job function.",
          "type" : "GENERAL",
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        }`) // SodPolicyRead | 

    var sodPolicyRead v3.SodPolicyRead
    if err := json.Unmarshal(sodpolicyread, &sodPolicyRead); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.PutSodPolicy(context.Background(), id).SodPolicyRead(sodPolicyRead).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.PutSodPolicy(context.Background(), id).SodPolicyRead(sodPolicyRead).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.PutSodPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSodPolicy`: SodPolicyRead
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.PutSodPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## start-evaluate-sod-policy
Evaluate one policy by id
Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/start-evaluate-sod-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The SOD policy ID to run. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartEvaluateSodPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ReportResultReference**](../models/report-result-reference)

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
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The SOD policy ID to run. # string | The SOD policy ID to run.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.StartEvaluateSodPolicy(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.StartEvaluateSodPolicy(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.StartEvaluateSodPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartEvaluateSodPolicy`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.StartEvaluateSodPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

## start-sod-all-policies-for-org
Runs all policies for org
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.

[API Spec](https://developer.sailpoint.com/docs/api/v3/start-sod-all-policies-for-org)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartSodAllPoliciesForOrgRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiPolicyRequest** | [**MultiPolicyRequest**](../models/multi-policy-request) |  | 

### Return type

[**ReportResultReference**](../models/report-result-reference)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    multipolicyrequest := []byte(`{
          "filteredPolicyList" : [ "[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]", "[b868cd40-ffa4-4337-9c07-1a51846cfa94, 63a07a7b-39a4-48aa-956d-50c827deba2a]" ]
        }`) // MultiPolicyRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.StartSodAllPoliciesForOrg(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.StartSodAllPoliciesForOrg(context.Background()).MultiPolicyRequest(multiPolicyRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.StartSodAllPoliciesForOrg``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartSodAllPoliciesForOrg`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.StartSodAllPoliciesForOrg`: %v\n", resp)
}
```

[[Back to top]](#)

## start-sod-policy
Runs sod policy violation report
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.

[API Spec](https://developer.sailpoint.com/docs/api/v3/start-sod-policy)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The SOD policy ID to run. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartSodPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ReportResultReference**](../models/report-result-reference)

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
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The SOD policy ID to run. # string | The SOD policy ID to run.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SODPoliciesAPI.StartSodPolicy(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.SODPoliciesAPI.StartSodPolicy(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.StartSodPolicy``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartSodPolicy`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.StartSodPolicy`: %v\n", resp)
}
```

[[Back to top]](#)

