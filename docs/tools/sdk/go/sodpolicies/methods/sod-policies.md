# SODPolicies

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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sod-policy-v1**](#create-sod-policy-v1) | **Post** `/sod-policies/v1` | Create sod policy
[**delete-sod-policy-schedule-v1**](#delete-sod-policy-schedule-v1) | **Delete** `/sod-policies/v1/{id}/schedule` | Delete sod policy schedule
[**delete-sod-policy-v1**](#delete-sod-policy-v1) | **Delete** `/sod-policies/v1/{id}` | Delete sod policy by id
[**get-custom-violation-report-v1**](#get-custom-violation-report-v1) | **Get** `/sod-violation-report/v1/{reportResultId}/download/{fileName}` | Download custom violation report
[**get-default-violation-report-v1**](#get-default-violation-report-v1) | **Get** `/sod-violation-report/v1/{reportResultId}/download` | Download violation report
[**get-sod-all-report-run-status-v1**](#get-sod-all-report-run-status-v1) | **Get** `/sod-violation-report/v1` | Get multi-report run task status
[**get-sod-policy-schedule-v1**](#get-sod-policy-schedule-v1) | **Get** `/sod-policies/v1/{id}/schedule` | Get sod policy schedule
[**get-sod-policy-v1**](#get-sod-policy-v1) | **Get** `/sod-policies/v1/{id}` | Get sod policy by id
[**get-sod-violation-report-run-status-v1**](#get-sod-violation-report-run-status-v1) | **Get** `/sod-policies/v1/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**get-sod-violation-report-status-v1**](#get-sod-violation-report-status-v1) | **Get** `/sod-policies/v1/{id}/violation-report` | Get sod violation report status
[**list-sod-policies-v1**](#list-sod-policies-v1) | **Get** `/sod-policies/v1` | List sod policies
[**patch-sod-policy-v1**](#patch-sod-policy-v1) | **Patch** `/sod-policies/v1/{id}` | Patch sod policy by id
[**put-policy-schedule-v1**](#put-policy-schedule-v1) | **Put** `/sod-policies/v1/{id}/schedule` | Update sod policy schedule
[**put-sod-policy-v1**](#put-sod-policy-v1) | **Put** `/sod-policies/v1/{id}` | Update sod policy by id
[**start-evaluate-sod-policy-v1**](#start-evaluate-sod-policy-v1) | **Post** `/sod-policies/v1/{id}/evaluate` | Evaluate one policy by id
[**start-sod-all-policies-for-org-v1**](#start-sod-all-policies-for-org-v1) | **Post** `/sod-violation-report/v1/run` | Runs all policies for org
[**start-sod-policy-v1**](#start-sod-policy-v1) | **Post** `/sod-policies/v1/{id}/violation-report/run` | Runs sod policy violation report


## create-sod-policy-v1
Create sod policy
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/create-sod-policy-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSodPolicyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sodPolicy** | [**SodPolicy**](../models/sod-policy) |  | 

### Return type

[**SodPolicy**](../models/sod-policy)

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
    sod_policies "github.com/sailpoint-oss/golang-sdk/v3/sod_policies"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    sodpolicyJson := []byte(`{
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
          "level" : "HIGH",
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
          "allowedControls" : [ {
            "type" : "COMPENSATING_CONTROL",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Mitigating Control 1"
          } ],
          "type" : "GENERAL",
          "secondaryOwnerRefs" : [ {
            "type" : "IDENTITY",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Support"
          } ],
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        }`) // SodPolicy | 

    var sodPolicy sod_policies.SodPolicy
    if err := json.Unmarshal(sodpolicyJson, &sodPolicy); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.CreateSodPolicyV1(context.Background()).SodPolicy(sodPolicy).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.CreateSodPolicyV1(context.Background()).SodPolicy(sodPolicy).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.CreateSodPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSodPolicyV1`: SodPolicy
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.CreateSodPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-sod-policy-schedule-v1
Delete sod policy schedule
This deletes schedule for a specified SOD policy by ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-sod-policy-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy the schedule must be deleted for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSodPolicyScheduleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy the schedule must be deleted for. # string | The ID of the SOD policy the schedule must be deleted for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SODPoliciesAPI.DeleteSodPolicyScheduleV1(context.Background(), id).Execute()
	  //r, err := apiClient.SODPoliciesAPI.DeleteSodPolicyScheduleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.DeleteSodPolicyScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-sod-policy-v1
Delete sod policy by id
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/delete-sod-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD Policy to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSodPolicyV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD Policy to delete. # string | The ID of the SOD Policy to delete.
    logical := true // bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to true) # bool | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional) (default to true)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SODPoliciesAPI.DeleteSodPolicyV1(context.Background(), id).Execute()
	  //r, err := apiClient.SODPoliciesAPI.DeleteSodPolicyV1(context.Background(), id).Logical(logical).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.DeleteSodPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-custom-violation-report-v1
Download custom violation report
This allows to download a specified named violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/get-custom-violation-report-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reportResultId** | **string** | The ID of the report reference to download. | 
**fileName** | **string** | Custom Name for the  file. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomViolationReportV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    reportResultId := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the report reference to download. # string | The ID of the report reference to download.
    fileName := `custom-name` // string | Custom Name for the  file. # string | Custom Name for the  file.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.GetCustomViolationReportV1(context.Background(), reportResultId, fileName).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.GetCustomViolationReportV1(context.Background(), reportResultId, fileName).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetCustomViolationReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomViolationReportV1`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetCustomViolationReportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-default-violation-report-v1
Download violation report
This allows to download a violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/get-default-violation-report-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reportResultId** | **string** | The ID of the report reference to download. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultViolationReportV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    reportResultId := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the report reference to download. # string | The ID of the report reference to download.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.GetDefaultViolationReportV1(context.Background(), reportResultId).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.GetDefaultViolationReportV1(context.Background(), reportResultId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetDefaultViolationReportV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultViolationReportV1`: *os.File
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetDefaultViolationReportV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-all-report-run-status-v1
Get multi-report run task status
This endpoint gets the status for a violation report for all policy run.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-all-report-run-status-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodAllReportRunStatusV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.GetSodAllReportRunStatusV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.GetSodAllReportRunStatusV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodAllReportRunStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodAllReportRunStatusV1`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodAllReportRunStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-policy-schedule-v1
Get sod policy schedule
This endpoint gets a specified SOD policy's schedule.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-policy-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy schedule to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodPolicyScheduleV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy schedule to retrieve. # string | The ID of the SOD policy schedule to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.GetSodPolicyScheduleV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.GetSodPolicyScheduleV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodPolicyScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodPolicyScheduleV1`: SodPolicySchedule
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodPolicyScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-policy-v1
Get sod policy by id
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD Policy to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodPolicyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SodPolicy**](../models/sod-policy)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD Policy to retrieve. # string | The ID of the SOD Policy to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.GetSodPolicyV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.GetSodPolicyV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodPolicyV1`: SodPolicy
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-violation-report-run-status-v1
Get violation report run status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-violation-report-run-status-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reportResultId** | **string** | The ID of the report reference to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodViolationReportRunStatusV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    reportResultId := `2e8d8180-24bc-4d21-91c6-7affdb473b0d` // string | The ID of the report reference to retrieve. # string | The ID of the report reference to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.GetSodViolationReportRunStatusV1(context.Background(), reportResultId).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.GetSodViolationReportRunStatusV1(context.Background(), reportResultId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodViolationReportRunStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodViolationReportRunStatusV1`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodViolationReportRunStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sod-violation-report-status-v1
Get sod violation report status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/get-sod-violation-report-status-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the violation report to retrieve status for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSodViolationReportStatusV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the violation report to retrieve status for. # string | The ID of the violation report to retrieve status for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.GetSodViolationReportStatusV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.GetSodViolationReportStatusV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.GetSodViolationReportStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSodViolationReportStatusV1`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.GetSodViolationReportStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-sod-policies-v1
List sod policies
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/list-sod-policies-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSodPoliciesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **state**: *eq, in*  **level**: *eq, in*  **type**: *eq*  **description**: *eq, co, sw*  **ownerRef.name**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description, ownerRef.name** | 

### Return type

[**[]SodPolicy**](../models/sod-policy)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "bc693f07e7b645539626c25954c58554"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **state**: *eq, in*  **level**: *eq, in*  **type**: *eq*  **description**: *eq, co, sw*  **ownerRef.name**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **state**: *eq, in*  **level**: *eq, in*  **type**: *eq*  **description**: *eq, co, sw*  **ownerRef.name**: *eq, sw* (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description, ownerRef.name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description, ownerRef.name** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.ListSodPoliciesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.ListSodPoliciesV1(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.ListSodPoliciesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSodPoliciesV1`: []SodPolicy
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.ListSodPoliciesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-sod-policy-v1
Patch sod policy by id
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception. 

[API Spec](https://developer.sailpoint.com/docs/api/patch-sod-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSodPolicyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria * level * secondaryOwnerRefs * allowedControls  | 

### Return type

[**SodPolicy**](../models/sod-policy)

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
    sod_policies "github.com/sailpoint-oss/golang-sdk/v3/sod_policies"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c918083-5d19-1a86-015d-28455b4a2329` // string | The ID of the SOD policy being modified. # string | The ID of the SOD policy being modified.
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/description","value":"Modified description"},{"op":"replace","path":"/conflictingAccessCriteria/leftCriteria/name","value":"money-in-modified"},{"op":"replace","path":"/conflictingAccessCriteria/rightCriteria","value":{"name":"money-out-modified","criteriaList":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]}}]`) // []JsonPatchOperation | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria * level * secondaryOwnerRefs * allowedControls 

    var jsonPatchOperation []sod_policies.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.PatchSodPolicyV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.PatchSodPolicyV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.PatchSodPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSodPolicyV1`: SodPolicy
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.PatchSodPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-policy-schedule-v1
Update sod policy schedule
This updates schedule for a specified SOD policy.

[API Spec](https://developer.sailpoint.com/docs/api/put-policy-schedule-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy to update its schedule. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPolicyScheduleV1Request struct via the builder pattern


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
    sod_policies "github.com/sailpoint-oss/golang-sdk/v3/sod_policies"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy to update its schedule. # string | The ID of the SOD policy to update its schedule.
    sodpolicyscheduleJson := []byte(`{
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

    var sodPolicySchedule sod_policies.SodPolicySchedule
    if err := json.Unmarshal(sodpolicyscheduleJson, &sodPolicySchedule); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.PutPolicyScheduleV1(context.Background(), id).SodPolicySchedule(sodPolicySchedule).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.PutPolicyScheduleV1(context.Background(), id).SodPolicySchedule(sodPolicySchedule).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.PutPolicyScheduleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPolicyScheduleV1`: SodPolicySchedule
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.PutPolicyScheduleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-sod-policy-v1
Update sod policy by id
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/put-sod-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the SOD policy to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSodPolicyV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sodPolicy** | [**SodPolicy**](../models/sod-policy) |  | 

### Return type

[**SodPolicy**](../models/sod-policy)

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
    sod_policies "github.com/sailpoint-oss/golang-sdk/v3/sod_policies"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The ID of the SOD policy to update. # string | The ID of the SOD policy to update.
    sodpolicyJson := []byte(`{
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
          "level" : "HIGH",
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
          "allowedControls" : [ {
            "type" : "COMPENSATING_CONTROL",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Mitigating Control 1"
          } ],
          "type" : "GENERAL",
          "secondaryOwnerRefs" : [ {
            "type" : "IDENTITY",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "name" : "Support"
          } ],
          "tags" : [ "TAG1", "TAG2" ],
          "name" : "policy-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "policyQuery" : "@access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf)",
          "compensatingControls" : "Have a manager review the transaction decisions for their \"out of compliance\" employee",
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
          "state" : "ENFORCED",
          "externalPolicyReference" : "XYZ policy"
        }`) // SodPolicy | 

    var sodPolicy sod_policies.SodPolicy
    if err := json.Unmarshal(sodpolicyJson, &sodPolicy); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.PutSodPolicyV1(context.Background(), id).SodPolicy(sodPolicy).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.PutSodPolicyV1(context.Background(), id).SodPolicy(sodPolicy).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.PutSodPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSodPolicyV1`: SodPolicy
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.PutSodPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-evaluate-sod-policy-v1
Evaluate one policy by id
Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.

[API Spec](https://developer.sailpoint.com/docs/api/start-evaluate-sod-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The SOD policy ID to run. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartEvaluateSodPolicyV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The SOD policy ID to run. # string | The SOD policy ID to run.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.StartEvaluateSodPolicyV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.StartEvaluateSodPolicyV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.StartEvaluateSodPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartEvaluateSodPolicyV1`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.StartEvaluateSodPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-sod-all-policies-for-org-v1
Runs all policies for org
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.

[API Spec](https://developer.sailpoint.com/docs/api/start-sod-all-policies-for-org-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartSodAllPoliciesForOrgV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    multipolicyrequestJson := []byte(`{
          "filteredPolicyList" : [ "[\"b868cd40-ffa4-4337-9c07-1a51846cfa94\",\"63a07a7b-39a4-48aa-956d-50c827deba2a\"]", "[\"b868cd40-ffa4-4337-9c07-1a51846cfa94\",\"63a07a7b-39a4-48aa-956d-50c827deba2a\"]" ]
        }`) // MultiPolicyRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.StartSodAllPoliciesForOrgV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.StartSodAllPoliciesForOrgV1(context.Background()).MultiPolicyRequest(multiPolicyRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.StartSodAllPoliciesForOrgV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartSodAllPoliciesForOrgV1`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.StartSodAllPoliciesForOrgV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-sod-policy-v1
Runs sod policy violation report
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.

[API Spec](https://developer.sailpoint.com/docs/api/start-sod-policy-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The SOD policy ID to run. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartSodPolicyV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f943-47e9-4562-b5bb-8424a56397d8` // string | The SOD policy ID to run. # string | The SOD policy ID to run.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODPoliciesAPI.StartSodPolicyV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SODPoliciesAPI.StartSodPolicyV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODPoliciesAPI.StartSodPolicyV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartSodPolicyV1`: ReportResultReference
    fmt.Fprintf(os.Stdout, "Response from `SODPoliciesAPI.StartSodPolicyV1`: %v\n", resp)
}
```

[[Back to top]](#)

