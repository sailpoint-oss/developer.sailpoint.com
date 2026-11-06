# AccessRequestConfig2

# AccessRequestConfig2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** | Pointer to **bool** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to false]
**ReauthorizationEnabled** | Pointer to **bool** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to false]
**RequestOnBehalfOfConfig** | Pointer to [**RequestOnBehalfOfConfig2**](request-on-behalf-of-config2) |  | [optional] 
**EntitlementRequestConfig** | Pointer to [**EntitlementRequestConfig2**](entitlement-request-config2) |  | [optional] 
**GovGroupVisibilityEnabled** | Pointer to **bool** | If this is true, requesters and requested-for users will be able to see the names of governance group members when a request is awaiting the group's approval. Up to the first 10 members of the group will be listed. | [optional] [default to false]
**MachineIdentityAccessRequestEnabled** | Pointer to **bool** | If this is false, machine identity access requests and machine accounts-selection are rejected with 403 (for example, \"Machine identity access request is disabled in access request configuration.\"). Defaults to true. Exposed on access-request-config v2 only.  | [optional] [default to true]

## Methods

### NewAccessRequestConfig2

`func NewAccessRequestConfig2() *AccessRequestConfig2`

NewAccessRequestConfig2 instantiates a new AccessRequestConfig2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestConfig2WithDefaults

`func NewAccessRequestConfig2WithDefaults() *AccessRequestConfig2`

NewAccessRequestConfig2WithDefaults instantiates a new AccessRequestConfig2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalsMustBeExternal

`func (o *AccessRequestConfig2) GetApprovalsMustBeExternal() bool`

GetApprovalsMustBeExternal returns the ApprovalsMustBeExternal field if non-nil, zero value otherwise.

### GetApprovalsMustBeExternalOk

`func (o *AccessRequestConfig2) GetApprovalsMustBeExternalOk() (*bool, bool)`

GetApprovalsMustBeExternalOk returns a tuple with the ApprovalsMustBeExternal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalsMustBeExternal

`func (o *AccessRequestConfig2) SetApprovalsMustBeExternal(v bool)`

SetApprovalsMustBeExternal sets ApprovalsMustBeExternal field to given value.

### HasApprovalsMustBeExternal

`func (o *AccessRequestConfig2) HasApprovalsMustBeExternal() bool`

HasApprovalsMustBeExternal returns a boolean if a field has been set.

### GetReauthorizationEnabled

`func (o *AccessRequestConfig2) GetReauthorizationEnabled() bool`

GetReauthorizationEnabled returns the ReauthorizationEnabled field if non-nil, zero value otherwise.

### GetReauthorizationEnabledOk

`func (o *AccessRequestConfig2) GetReauthorizationEnabledOk() (*bool, bool)`

GetReauthorizationEnabledOk returns a tuple with the ReauthorizationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationEnabled

`func (o *AccessRequestConfig2) SetReauthorizationEnabled(v bool)`

SetReauthorizationEnabled sets ReauthorizationEnabled field to given value.

### HasReauthorizationEnabled

`func (o *AccessRequestConfig2) HasReauthorizationEnabled() bool`

HasReauthorizationEnabled returns a boolean if a field has been set.

### GetRequestOnBehalfOfConfig

`func (o *AccessRequestConfig2) GetRequestOnBehalfOfConfig() RequestOnBehalfOfConfig2`

GetRequestOnBehalfOfConfig returns the RequestOnBehalfOfConfig field if non-nil, zero value otherwise.

### GetRequestOnBehalfOfConfigOk

`func (o *AccessRequestConfig2) GetRequestOnBehalfOfConfigOk() (*RequestOnBehalfOfConfig2, bool)`

GetRequestOnBehalfOfConfigOk returns a tuple with the RequestOnBehalfOfConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestOnBehalfOfConfig

`func (o *AccessRequestConfig2) SetRequestOnBehalfOfConfig(v RequestOnBehalfOfConfig2)`

SetRequestOnBehalfOfConfig sets RequestOnBehalfOfConfig field to given value.

### HasRequestOnBehalfOfConfig

`func (o *AccessRequestConfig2) HasRequestOnBehalfOfConfig() bool`

HasRequestOnBehalfOfConfig returns a boolean if a field has been set.

### GetEntitlementRequestConfig

`func (o *AccessRequestConfig2) GetEntitlementRequestConfig() EntitlementRequestConfig2`

GetEntitlementRequestConfig returns the EntitlementRequestConfig field if non-nil, zero value otherwise.

### GetEntitlementRequestConfigOk

`func (o *AccessRequestConfig2) GetEntitlementRequestConfigOk() (*EntitlementRequestConfig2, bool)`

GetEntitlementRequestConfigOk returns a tuple with the EntitlementRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementRequestConfig

`func (o *AccessRequestConfig2) SetEntitlementRequestConfig(v EntitlementRequestConfig2)`

SetEntitlementRequestConfig sets EntitlementRequestConfig field to given value.

### HasEntitlementRequestConfig

`func (o *AccessRequestConfig2) HasEntitlementRequestConfig() bool`

HasEntitlementRequestConfig returns a boolean if a field has been set.

### GetGovGroupVisibilityEnabled

`func (o *AccessRequestConfig2) GetGovGroupVisibilityEnabled() bool`

GetGovGroupVisibilityEnabled returns the GovGroupVisibilityEnabled field if non-nil, zero value otherwise.

### GetGovGroupVisibilityEnabledOk

`func (o *AccessRequestConfig2) GetGovGroupVisibilityEnabledOk() (*bool, bool)`

GetGovGroupVisibilityEnabledOk returns a tuple with the GovGroupVisibilityEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovGroupVisibilityEnabled

`func (o *AccessRequestConfig2) SetGovGroupVisibilityEnabled(v bool)`

SetGovGroupVisibilityEnabled sets GovGroupVisibilityEnabled field to given value.

### HasGovGroupVisibilityEnabled

`func (o *AccessRequestConfig2) HasGovGroupVisibilityEnabled() bool`

HasGovGroupVisibilityEnabled returns a boolean if a field has been set.

### GetMachineIdentityAccessRequestEnabled

`func (o *AccessRequestConfig2) GetMachineIdentityAccessRequestEnabled() bool`

GetMachineIdentityAccessRequestEnabled returns the MachineIdentityAccessRequestEnabled field if non-nil, zero value otherwise.

### GetMachineIdentityAccessRequestEnabledOk

`func (o *AccessRequestConfig2) GetMachineIdentityAccessRequestEnabledOk() (*bool, bool)`

GetMachineIdentityAccessRequestEnabledOk returns a tuple with the MachineIdentityAccessRequestEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityAccessRequestEnabled

`func (o *AccessRequestConfig2) SetMachineIdentityAccessRequestEnabled(v bool)`

SetMachineIdentityAccessRequestEnabled sets MachineIdentityAccessRequestEnabled field to given value.

### HasMachineIdentityAccessRequestEnabled

`func (o *AccessRequestConfig2) HasMachineIdentityAccessRequestEnabled() bool`

HasMachineIdentityAccessRequestEnabled returns a boolean if a field has been set.


