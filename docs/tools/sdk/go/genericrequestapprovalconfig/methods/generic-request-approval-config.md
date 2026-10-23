# GenericRequestApprovalConfig

# GenericRequestApprovalConfigAPI
  Experimental APIs for resource-level and global approval settings used by agent lifecycle
requests (&#x60;ACTIVATE&#x60;, &#x60;DEACTIVATE&#x60;). Pass the &#x60;X-SailPoint-Experimental&#x60; header on every request.

Query parameters address the config because &#x60;targetId&#x60; can be a connector resource id
(for example &#x60;aws:bedrock-agent-alias-version&#x60;) that is not URL-safe as a path segment.
&#x60;sourceId&#x60; is a query parameter only and is never returned on the document.

An empty per-action object &#x60;\{\}&#x60; means no configuration at this scope. At submit, RESOURCE
is used first, then GLOBAL, then org-level agent request configuration.
There is no &#x60;approvalRequired&#x60; flag.

These routes require product &#x60;AGENTIC_IDENTITY_PROVISIONING&#x60; and LaunchDarkly flag
&#x60;MIS_2160_GENERIC_REQUEST_APPROVAL_CONFIG_API_ENABLED&#x60;. When the product is not licensed the
route looks absent (**404**). When the flag is off the API returns **403** with
&#x60;The requested endpoint is not yet enabled&#x60;.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-generic-request-approval-config-v1**](#get-generic-request-approval-config-v1) | **Get** `/generic-request-approval-config/v1` | Get generic request approval config
[**patch-generic-request-approval-config-v1**](#patch-generic-request-approval-config-v1) | **Patch** `/generic-request-approval-config/v1/{id}` | Patch generic request approval config


## get-generic-request-approval-config-v1
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
Get generic request approval config
Returns the approval configuration document for one scope.

Scope rules for Phase II agent requests:

| targetType | Allowed actions | targetId | sourceId |
|------------|-----------------|----------|----------|
| RESOURCE | ACTIVATE, DEACTIVATE | Required. Connector resource **id**, not the `std:*` type. Resolved resource type must be `std:agent`. | Required |
| GLOBAL | ACTIVATE, DEACTIVATE | Derived (tenant id). Omit. | Must be omitted |

`DELETE_AT_SOURCE` is not returned and cannot be configured on this API.

A scope that has never been saved still returns **200**. Every allowed action is
present. Unset actions are `{}` (no config at this scope; submit uses RESOURCE, then GLOBAL,
then org-level). The first successful GET
materializes a row so the response `id` can be used on PATCH.

Unknown source, missing or invalid query params, a RESOURCE `targetId` the source
does not advertise, or a resource whose type is not `std:agent` return **400**.
Product not licensed returns **404**. Flag off, missing experimental header, or
insufficient rights return **403**.


[API Spec](https://developer.sailpoint.com/docs/api/get-generic-request-approval-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGenericRequestApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **targetType** | [**GenericRequestTargetType**](../models/generic-request-target-type) | Scope of the configuration document. | 
 **targetId** | **string** | Required for RESOURCE and SUBTYPE. Connector resource id for RESOURCE (for example &#x60;aws:bedrock-agent-alias-version&#x60;). Omit for GLOBAL. | 
 **sourceId** | **string** | Required for RESOURCE, SUBTYPE, and SOURCE. Must be omitted for GLOBAL. | 

### Return type

[**GenericRequestApprovalConfig**](../models/generic-request-approval-config)

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
    targetType := RESOURCE // GenericRequestTargetType | Scope of the configuration document. # GenericRequestTargetType | Scope of the configuration document.
    targetId := `aws:bedrock-agent-alias-version` // string | Required for RESOURCE and SUBTYPE. Connector resource id for RESOURCE (for example `aws:bedrock-agent-alias-version`). Omit for GLOBAL. (optional) # string | Required for RESOURCE and SUBTYPE. Connector resource id for RESOURCE (for example `aws:bedrock-agent-alias-version`). Omit for GLOBAL. (optional)
    sourceId := `a86e1ab28a844b98b31dbe0ae531d867` // string | Required for RESOURCE, SUBTYPE, and SOURCE. Must be omitted for GLOBAL. (optional) # string | Required for RESOURCE, SUBTYPE, and SOURCE. Must be omitted for GLOBAL. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).TargetType(targetType).Execute()
	  //resp, r, err := apiClient.GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).TargetType(targetType).TargetId(targetId).SourceId(sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGenericRequestApprovalConfigV1`: GenericRequestApprovalConfig
    fmt.Fprintf(os.Stdout, "Response from `GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-generic-request-approval-config-v1
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
Patch generic request approval config
Updates stored approval configuration with an RFC 6902 JSON Patch.

Patchable paths are `/approvalConfig` and `/approvalConfig/{ACTION}` for each action
in the row's `targetType` vocabulary. For RESOURCE and GLOBAL those actions are
`ACTIVATE` and `DEACTIVATE`.

`id`, `targetType`, `targetId`, and `sourceId` are not patchable.
`/approvalConfig/DELETE_AT_SOURCE` is rejected with **400**.

Replace an action with `{}` (or remove it) to clear this scope. Submit then uses RESOURCE,
then GLOBAL, then org-level agent request configuration. Empty action objects are not persisted.

Allowed approver tokens for RESOURCE ACTIVATE and DEACTIVATE:
`sourceOwner`, `manager`, `machineIdentityPrimaryOwner`,
`machineIdentitySecondaryOwners`, `machineIdentityAllOwners`,
`workgroup:[workgroupId]`, `identity:[identityId]`.
`accountOwner` is not allowed on those actions. Role tokens may appear once.
`workgroup:` and `identity:` may repeat with distinct ids.

GLOBAL writes accept `scheme: WORKFLOW` only.
Unknown `id` returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-generic-request-approval-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Config id returned by GET. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchGenericRequestApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSON Patch document used to update approvalConfig. | 

### Return type

[**GenericRequestApprovalConfig**](../models/generic-request-approval-config)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    generic_request_approval_config "github.com/sailpoint-oss/golang-sdk/v3/generic_request_approval_config"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `f0948adc-06f7-435b-a8fd-a06861012470` // string | Config id returned by GET. # string | Config id returned by GET.
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/approvalConfig/ACTIVATE","value":{"scheme":"APPROVAL","approvers":"sourceOwner, manager","comments":"REJECTION"}},{"op":"replace","path":"/approvalConfig/DEACTIVATE","value":{}}]`) // []JsonPatchOperation | JSON Patch document used to update approvalConfig.

    var jsonPatchOperation []generic_request_approval_config.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GenericRequestApprovalConfigAPI.PatchGenericRequestApprovalConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.GenericRequestApprovalConfigAPI.PatchGenericRequestApprovalConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GenericRequestApprovalConfigAPI.PatchGenericRequestApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchGenericRequestApprovalConfigV1`: GenericRequestApprovalConfig
    fmt.Fprintf(os.Stdout, "Response from `GenericRequestApprovalConfigAPI.PatchGenericRequestApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

