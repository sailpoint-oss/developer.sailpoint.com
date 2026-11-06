# UpdateUIPluginRequest

# UpdateUIPluginRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | Pointer to **string** | Replacement alias, unique per tenant and normalized to lowercase | [optional] 
**Name** | Pointer to **map[string]string** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [optional] 
**Description** | Pointer to **map[string]string** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [optional] 
**ApiScopes** | Pointer to **[]string** | Replaces the existing list entirely when provided | [optional] 
**Slots** | Pointer to [**[]PluginSlot**](plugin-slot) | Replaces the existing list when provided | [optional] 
**ContentSecurityPolicies** | Pointer to **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**PermissionPolicy** | Pointer to **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**IframeAllow** | Pointer to **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**IframeSandbox** | Pointer to **[]string** | Opt-in iframe `sandbox` grants. Replaces the existing list entirely when provided; send `[]` to clear all grants. Omit to leave unchanged. | [optional] 
**State** | Pointer to **PluginInstanceState** |  | [optional] 

## Methods

### NewUpdateUIPluginRequest

`func NewUpdateUIPluginRequest() *UpdateUIPluginRequest`

NewUpdateUIPluginRequest instantiates a new UpdateUIPluginRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateUIPluginRequestWithDefaults

`func NewUpdateUIPluginRequestWithDefaults() *UpdateUIPluginRequest`

NewUpdateUIPluginRequestWithDefaults instantiates a new UpdateUIPluginRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlias

`func (o *UpdateUIPluginRequest) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *UpdateUIPluginRequest) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *UpdateUIPluginRequest) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *UpdateUIPluginRequest) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetName

`func (o *UpdateUIPluginRequest) GetName() map[string]string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateUIPluginRequest) GetNameOk() (*map[string]string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateUIPluginRequest) SetName(v map[string]string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateUIPluginRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *UpdateUIPluginRequest) GetDescription() map[string]string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateUIPluginRequest) GetDescriptionOk() (*map[string]string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateUIPluginRequest) SetDescription(v map[string]string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateUIPluginRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetApiScopes

`func (o *UpdateUIPluginRequest) GetApiScopes() []string`

GetApiScopes returns the ApiScopes field if non-nil, zero value otherwise.

### GetApiScopesOk

`func (o *UpdateUIPluginRequest) GetApiScopesOk() (*[]string, bool)`

GetApiScopesOk returns a tuple with the ApiScopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiScopes

`func (o *UpdateUIPluginRequest) SetApiScopes(v []string)`

SetApiScopes sets ApiScopes field to given value.

### HasApiScopes

`func (o *UpdateUIPluginRequest) HasApiScopes() bool`

HasApiScopes returns a boolean if a field has been set.

### GetSlots

`func (o *UpdateUIPluginRequest) GetSlots() []PluginSlot`

GetSlots returns the Slots field if non-nil, zero value otherwise.

### GetSlotsOk

`func (o *UpdateUIPluginRequest) GetSlotsOk() (*[]PluginSlot, bool)`

GetSlotsOk returns a tuple with the Slots field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlots

`func (o *UpdateUIPluginRequest) SetSlots(v []PluginSlot)`

SetSlots sets Slots field to given value.

### HasSlots

`func (o *UpdateUIPluginRequest) HasSlots() bool`

HasSlots returns a boolean if a field has been set.

### GetContentSecurityPolicies

`func (o *UpdateUIPluginRequest) GetContentSecurityPolicies() map[string][]string`

GetContentSecurityPolicies returns the ContentSecurityPolicies field if non-nil, zero value otherwise.

### GetContentSecurityPoliciesOk

`func (o *UpdateUIPluginRequest) GetContentSecurityPoliciesOk() (*map[string][]string, bool)`

GetContentSecurityPoliciesOk returns a tuple with the ContentSecurityPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSecurityPolicies

`func (o *UpdateUIPluginRequest) SetContentSecurityPolicies(v map[string][]string)`

SetContentSecurityPolicies sets ContentSecurityPolicies field to given value.

### HasContentSecurityPolicies

`func (o *UpdateUIPluginRequest) HasContentSecurityPolicies() bool`

HasContentSecurityPolicies returns a boolean if a field has been set.

### GetPermissionPolicy

`func (o *UpdateUIPluginRequest) GetPermissionPolicy() map[string][]string`

GetPermissionPolicy returns the PermissionPolicy field if non-nil, zero value otherwise.

### GetPermissionPolicyOk

`func (o *UpdateUIPluginRequest) GetPermissionPolicyOk() (*map[string][]string, bool)`

GetPermissionPolicyOk returns a tuple with the PermissionPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissionPolicy

`func (o *UpdateUIPluginRequest) SetPermissionPolicy(v map[string][]string)`

SetPermissionPolicy sets PermissionPolicy field to given value.

### HasPermissionPolicy

`func (o *UpdateUIPluginRequest) HasPermissionPolicy() bool`

HasPermissionPolicy returns a boolean if a field has been set.

### GetIframeAllow

`func (o *UpdateUIPluginRequest) GetIframeAllow() map[string][]string`

GetIframeAllow returns the IframeAllow field if non-nil, zero value otherwise.

### GetIframeAllowOk

`func (o *UpdateUIPluginRequest) GetIframeAllowOk() (*map[string][]string, bool)`

GetIframeAllowOk returns a tuple with the IframeAllow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeAllow

`func (o *UpdateUIPluginRequest) SetIframeAllow(v map[string][]string)`

SetIframeAllow sets IframeAllow field to given value.

### HasIframeAllow

`func (o *UpdateUIPluginRequest) HasIframeAllow() bool`

HasIframeAllow returns a boolean if a field has been set.

### GetIframeSandbox

`func (o *UpdateUIPluginRequest) GetIframeSandbox() []string`

GetIframeSandbox returns the IframeSandbox field if non-nil, zero value otherwise.

### GetIframeSandboxOk

`func (o *UpdateUIPluginRequest) GetIframeSandboxOk() (*[]string, bool)`

GetIframeSandboxOk returns a tuple with the IframeSandbox field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeSandbox

`func (o *UpdateUIPluginRequest) SetIframeSandbox(v []string)`

SetIframeSandbox sets IframeSandbox field to given value.

### HasIframeSandbox

`func (o *UpdateUIPluginRequest) HasIframeSandbox() bool`

HasIframeSandbox returns a boolean if a field has been set.

### GetState

`func (o *UpdateUIPluginRequest) GetState() PluginInstanceState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *UpdateUIPluginRequest) GetStateOk() (*PluginInstanceState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *UpdateUIPluginRequest) SetState(v PluginInstanceState)`

SetState sets State field to given value.

### HasState

`func (o *UpdateUIPluginRequest) HasState() bool`

HasState returns a boolean if a field has been set.


