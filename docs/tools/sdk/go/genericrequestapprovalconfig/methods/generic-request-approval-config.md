# GenericRequestApprovalConfig

# GenericRequestApprovalConfigAPI
  Use this API to view and update the approval settings for machine identity requests, such as requests to activate or deactivate an AI agent, at the resource, subtype, source, or tenant level. Each scope holds one setting per request action; an action with no setting inherits the organization-level approval configuration.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-generic-request-approval-config-v1**](#get-generic-request-approval-config-v1) | **Get** `/generic-request-approval-config/v1` | Get generic request approval config
[**update-generic-request-approval-config-v1**](#update-generic-request-approval-config-v1) | **Patch** `/generic-request-approval-config/v1/{id}` | Patch generic request approval config


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
This API returns the approval configuration for one scope. The scope is identified by `targetType` and, depending
on the target type, `targetId` and `sourceId`.


The response holds one entry per action that the target type supports. An action with no stored setting is
returned as `{}`, which means it inherits the organization-level approval configuration. A scope that has never
been configured returns `200` with every action set to `{}`, and the response always carries the `id` to use with
the update API.


Actions by target type:


**RESOURCE**: *ACTIVATE, DEACTIVATE*


**SUBTYPE**: *CREATE, DELETE*


**SOURCE**: *DELETE*


**GLOBAL**: *ACTIVATE, DEACTIVATE*


Only resources of the AI agent type support resource-level approval settings; any other resource returns `400`.
An unknown source, resource, or subtype returns `400`.


When agentic identity provisioning is not enabled for the tenant, this API returns `404`. When this API is not
enabled for the tenant, it returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-generic-request-approval-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGenericRequestApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetType** | **string** | The kind of scope to read. | 
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **targetId** | **string** | The scope target. Required for **RESOURCE** (the source resource ID) and **SUBTYPE** (the subtype ID). For **SOURCE** the target is the &#x60;sourceId&#x60;, and for **GLOBAL** it is the tenant; when you supply it for those target types, it must match that value or the request returns &#x60;400&#x60;. | 
 **sourceId** | **string** | The source that owns the scope. Required for **RESOURCE**, **SUBTYPE**, and **SOURCE**. Must be omitted for **GLOBAL**. | 

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
    targetType := `RESOURCE` // string | The kind of scope to read. # string | The kind of scope to read.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    targetId := `aws:bedrock-agent-alias-version` // string | The scope target. Required for **RESOURCE** (the source resource ID) and **SUBTYPE** (the subtype ID). For **SOURCE** the target is the `sourceId`, and for **GLOBAL** it is the tenant; when you supply it for those target types, it must match that value or the request returns `400`. (optional) # string | The scope target. Required for **RESOURCE** (the source resource ID) and **SUBTYPE** (the subtype ID). For **SOURCE** the target is the `sourceId`, and for **GLOBAL** it is the tenant; when you supply it for those target types, it must match that value or the request returns `400`. (optional)
    sourceId := `6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa` // string | The source that owns the scope. Required for **RESOURCE**, **SUBTYPE**, and **SOURCE**. Must be omitted for **GLOBAL**. (optional) # string | The source that owns the scope. Required for **RESOURCE**, **SUBTYPE**, and **SOURCE**. Must be omitted for **GLOBAL**. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1(context.Background()).TargetType(targetType).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1(context.Background()).TargetType(targetType).XSailPointExperimental(xSailPointExperimental).TargetId(targetId).SourceId(sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGenericRequestApprovalConfigV1`: GenericRequestApprovalConfig
    fmt.Fprintf(os.Stdout, "Response from `GenericRequestApprovalConfigAPI.GetGenericRequestApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-generic-request-approval-config-v1
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
Use this API to update the approval configuration of one scope using a JSON Patch payload. Use the `id` returned
by the get API.


Patchable paths are `/approvalConfig`, which replaces every action at once, and `/approvalConfig/{ACTION}` for each
action the scope's target type supports. One request can update several actions. `id`, `targetType`, and
`targetId` identify the scope and can't be patched; a patch that targets any other path returns `400`.


To return an action to the organization-level approval configuration, `remove` it or `replace` it with `{}`.


Each configured action uses one scheme:


**APPROVAL**: requires `approvers` and `comments`. `approvers` is a comma-separated list of approver tokens:
`sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`,
`machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. For the
**SUBTYPE** **DELETE** action, `accountOwner` is also allowed. Tokens without an ID can appear at most once, and
IDs must be unique and must exist. `comments` is one of `ALL`, `APPROVAL`, `REJECTION`, or `OFF`.


**WORKFLOW**: requires `workflowId`, the UUID of a workflow. The same workflow can't be used for more than one
action. When workflow approvals are enabled for the tenant, the workflow must exist, be enabled, and use the
trigger for its action (`idn:machine-identity-activate` for ACTIVATE, `idn:machine-identity-deactivate` for
DEACTIVATE).


The **GLOBAL** scope only accepts the **WORKFLOW** scheme.


The ID must be a UUID; any other value returns `400`. When no approval configuration exists for the ID, this API
returns `404`.


When agentic identity provisioning is not enabled for the tenant, this API returns `404`. When this API is not
enabled for the tenant, it returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-generic-request-approval-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval configuration ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateGenericRequestApprovalConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**GenericRequestApprovalConfig**](../models/generic-request-approval-config)

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
    generic_request_approval_config "github.com/sailpoint-oss/golang-sdk/v3/generic_request_approval_config"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `0f2c7a9e-3b4d-4e5f-8a6b-7c8d9e0f1a2b` // string | Approval configuration ID. # string | Approval configuration ID.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/approvalConfig/ACTIVATE","value":{"scheme":"APPROVAL","approvers":"machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10","comments":"REJECTION"}}]`) // []JsonPatchOperation | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonPatchOperation []generic_request_approval_config.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.GenericRequestApprovalConfigAPI.UpdateGenericRequestApprovalConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.GenericRequestApprovalConfigAPI.UpdateGenericRequestApprovalConfigV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `GenericRequestApprovalConfigAPI.UpdateGenericRequestApprovalConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateGenericRequestApprovalConfigV1`: GenericRequestApprovalConfig
    fmt.Fprintf(os.Stdout, "Response from `GenericRequestApprovalConfigAPI.UpdateGenericRequestApprovalConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

