# SODViolations

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
[**get-violation-v1**](#get-violation-v1) | **Get** `/violations/v1/{id}` | Get policy violation by ID
[**list-my-violations-v1**](#list-my-violations-v1) | **Get** `/my-violations/v1` | List My Policy Violations
[**list-violations-v1**](#list-violations-v1) | **Get** `/violations/v1` | List Policy Violations
[**move-violation-v1**](#move-violation-v1) | **Post** `/violations/v1/{id}/reassign` | Reassign policy violation
[**start-apply-control-v1**](#start-apply-control-v1) | **Post** `/violations/v1/{id}/controls` | Apply control to violation
[**start-predict-sod-violations-v1**](#start-predict-sod-violations-v1) | **Post** `/sod-violations/v1/predict` | Predict sod violations for identity.
[**start-violation-check-v1**](#start-violation-check-v1) | **Post** `/sod-violations/v1/check` | Check sod violations


## get-violation-v1
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
Get policy violation by ID
Returns a single policy violation by ID for the current tenant. Access is allowed if the caller has the read scope (`idn:sod-violation:read`) or is an owner of the violation (direct or via governance group). Returns 403 Forbidden if the violation exists but the caller has neither the read scope nor ownership. Returns 404 Not Found if the violation does not exist for the tenant.
Embedded references (`owner`, `target`, `policy`, and references inside `appliedControls`) use `ReferenceResponse`: `id` and `type` are always present; `name` is included when display metadata resolves.


[API Spec](https://developer.sailpoint.com/docs/api/get-violation-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the policy violation to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetViolationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**Policyviolationresponse**](../models/policyviolationresponse)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `3e078865-55ed-43cf-b83c-85c58d2016e6` // string | The ID of the policy violation to fetch # string | The ID of the policy violation to fetch

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.GetViolationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.GetViolationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.GetViolationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetViolationV1`: Policyviolationresponse
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.GetViolationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-my-violations-v1
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
List My Policy Violations
Returns a paged list of policy violations where the current user is the owner (directly assigned or via a governance group they belong to). No permission scope is required; caller identity is required.
Supports the same collection parameters as GET /violations (limit, offset, count, filters, sorters), including the same filter field whitelist and processing (normalization, pruning of not-yet-persisted name predicates). The owner filter is implicit (current user); **do not** use `ownerId` in filters for this endpoint.
Embedded references in each violation follow `ReferenceResponse` (`id`, `type`, and optional `name` when metadata resolves).


[API Spec](https://developer.sailpoint.com/docs/api/list-my-violations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListMyViolationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). | 

### Return type

[**[]Policyviolationresponse**](../models/policyviolationresponse)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `status in ("Open","Mitigated") and level eq "High"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
    sorters := `-level` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.ListMyViolationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.ListMyViolationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.ListMyViolationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListMyViolationsV1`: []Policyviolationresponse
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.ListMyViolationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-violations-v1
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
List Policy Violations
Returns a paged list of policy violations for the current tenant. Requires the read scope (idn:sod-violation:read).
This endpoint uses the standard collection parameters defined in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/).
This endpoint supports standard V3 collection parameters: `limit`, `offset`, `count`, `filters`, and `sorters`.
Embedded references in each violation (`owner`, `target`, `policy`, and references inside `appliedControls`) follow the `ReferenceResponse` schema: `id` and `type` are always present; `name` is included when display metadata resolves.
Filters and sorters are validated against a fixed whitelist of fields to ensure safe queries and to align with underlying database indexes.


[API Spec](https://developer.sailpoint.com/docs/api/list-violations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListViolationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. | 

### Return type

[**[]Policyviolationresponse**](../models/policyviolationresponse)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `status in ("Open","Mitigated") and level eq "High" and policyId eq "bc693f07-e7b6-4553-9626-c25954c58554" and ownerId eq "de305d54-75b4-431b-adb2-eb6b9e546014"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
    sorters := `-level` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.ListViolationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.ListViolationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.ListViolationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListViolationsV1`: []Policyviolationresponse
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.ListViolationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## move-violation-v1
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
Reassign policy violation
Reassigns the specified policy violation to a new owner. Callers without the `idn:sod-violation:manage` scope may only reassign violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/move-violation-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the policy violation to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveViolationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **violationreassigninput** | [**Violationreassigninput**](../models/violationreassigninput) | Data needed to reassign a Policy Violation | 

### Return type

[**Policyviolationresponse**](../models/policyviolationresponse)

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
    sod_violations "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `3e078865-55ed-43cf-b83c-85c58d2016e6` // string | The ID of the policy violation to fetch # string | The ID of the policy violation to fetch
    violationreassigninputJson := []byte(`{
          "comments" : "some comments about the reassignment",
          "reassignTo" : {
            "assigneeType" : "IDENTITY",
            "assigneeId" : "3e07886555ed43cfb83c85c58d2016e6"
          }
        }`) // Violationreassigninput | Data needed to reassign a Policy Violation

    var violationreassigninput sod_violations.Violationreassigninput
    if err := json.Unmarshal(violationreassigninputJson, &violationreassigninput); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.MoveViolationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Violationreassigninput(violationreassigninput).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.MoveViolationV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Violationreassigninput(violationreassigninput).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.MoveViolationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveViolationV1`: Policyviolationresponse
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.MoveViolationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-apply-control-v1
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
Apply control to violation
Applies a compensating control to the specified policy violation. Callers without the `idn:sod-violation:manage` scope may only apply a control to violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/start-apply-control-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the policy violation to fetch | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartApplyControlV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **appliedcontrolcreate** | [**Appliedcontrolcreate**](../models/appliedcontrolcreate) | Data needed to apply a control to a Policy Violation | 

### Return type

[**Appliedcontrol**](../models/appliedcontrol)

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
    sod_violations "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `3e078865-55ed-43cf-b83c-85c58d2016e6` // string | The ID of the policy violation to fetch # string | The ID of the policy violation to fetch
    appliedcontrolcreateJson := []byte(`{
          "comments" : "Some comments about the applied control",
          "control" : "3e07886555ed43cfb83c85c58d2016e6"
        }`) // Appliedcontrolcreate | Data needed to apply a control to a Policy Violation

    var appliedcontrolcreate sod_violations.Appliedcontrolcreate
    if err := json.Unmarshal(appliedcontrolcreateJson, &appliedcontrolcreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.StartApplyControlV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Appliedcontrolcreate(appliedcontrolcreate).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.StartApplyControlV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Appliedcontrolcreate(appliedcontrolcreate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartApplyControlV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartApplyControlV1`: Appliedcontrol
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartApplyControlV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-predict-sod-violations-v1
Predict sod violations for identity.
This API is used to check if granting some additional accesses (entitlements, access profiles, or roles) would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/start-predict-sod-violations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartPredictSodViolationsV1Request struct via the builder pattern


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
    sod_violations "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    identitywithnewaccessJson := []byte(`{
          "identityId" : "2c91808568c529c60168cca6f90c1313",
          "accessRefs" : [ {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c050861ab1"
          }, {
            "type" : "ACCESS_PROFILE",
            "id" : "2c918087682f9a86016839c0509c1ab2"
          }, {
            "type" : "ROLE",
            "id" : "2c918087682f9a86016839c050a01ab3"
          } ]
        }`) // IdentityWithNewAccess | 

    var identityWithNewAccess sod_violations.IdentityWithNewAccess
    if err := json.Unmarshal(identitywithnewaccessJson, &identityWithNewAccess); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.StartPredictSodViolationsV1(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.StartPredictSodViolationsV1(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartPredictSodViolationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartPredictSodViolationsV1`: ViolationPrediction
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartPredictSodViolationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## start-violation-check-v1
Check sod violations
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/start-violation-check-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiStartViolationCheckV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityWithNewAccess** | [**IdentityWithNewAccess**](../models/identity-with-new-access) |  | 

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
    sod_violations "github.com/sailpoint-oss/golang-sdk/v3/sod_violations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    identitywithnewaccessJson := []byte(`{
          "identityId" : "2c91808568c529c60168cca6f90c1313",
          "accessRefs" : [ {
            "type" : "ENTITLEMENT",
            "id" : "2c918087682f9a86016839c050861ab1"
          }, {
            "type" : "ACCESS_PROFILE",
            "id" : "2c918087682f9a86016839c0509c1ab2"
          }, {
            "type" : "ROLE",
            "id" : "2c918087682f9a86016839c050a01ab3"
          } ]
        }`) // IdentityWithNewAccess | 

    var identityWithNewAccess sod_violations.IdentityWithNewAccess
    if err := json.Unmarshal(identitywithnewaccessJson, &identityWithNewAccess); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SODViolationsAPI.StartViolationCheckV1(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
	  //resp, r, err := apiClient.SODViolationsAPI.StartViolationCheckV1(context.Background()).IdentityWithNewAccess(identityWithNewAccess).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SODViolationsAPI.StartViolationCheckV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartViolationCheckV1`: SodViolationCheck
    fmt.Fprintf(os.Stdout, "Response from `SODViolationsAPI.StartViolationCheckV1`: %v\n", resp)
}
```

[[Back to top]](#)

