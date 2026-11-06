# AccessRequestConfig2

# AccessRequestConfig2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** | **Boolean** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to $false]
**ReauthorizationEnabled** | **Boolean** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to $false]
**RequestOnBehalfOfConfig** | [**RequestOnBehalfOfConfig2**](request-on-behalf-of-config2) |  | [optional] 
**EntitlementRequestConfig** | [**EntitlementRequestConfig2**](entitlement-request-config2) |  | [optional] 
**GovGroupVisibilityEnabled** | **Boolean** | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group's approval. Up to the first 10 members of the group will be listed. | [optional] [default to $false]
**MachineIdentityAccessRequestEnabled** | **Boolean** | If this is false, machine identity access requests and machine accounts-selection are rejected with 403 (for example, ""Machine identity access request is disabled in access request configuration.""). Defaults to true. Exposed on access-request-config v2 only.  | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$AccessRequestConfig2 = Initialize-AccessRequestConfig2  -ApprovalsMustBeExternal true `
 -ReauthorizationEnabled true `
 -RequestOnBehalfOfConfig null `
 -EntitlementRequestConfig null `
 -GovGroupVisibilityEnabled true `
 -MachineIdentityAccessRequestEnabled true
```

- Convert the resource to JSON
```powershell
$AccessRequestConfig2 | ConvertTo-JSON
```


[[Back to top]](#) 

