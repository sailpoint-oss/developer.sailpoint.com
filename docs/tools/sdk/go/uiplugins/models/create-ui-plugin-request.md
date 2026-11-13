# CreateUIPluginRequest

# CreateUIPluginRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | **string** | Human-readable deterministic alias unique per tenant. Letters, numbers, dashes only; no leading/trailing/consecutive dashes. Normalized to lowercase on write. | 
**Name** | **map[string]string** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | 
**Description** | **map[string]string** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | 
**ApiScopes** | Pointer to **[]string** | OAuth scopes the plugin requests at registration. Defaults to `[]`. | [optional] [default to []]
**Slots** | [**[]PluginSlot**](plugin-slot) | UI extension point declarations (at least one required) | 
**ContentSecurityPolicies** | **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | 
**PermissionPolicy** | **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | 
**IframeAllow** | **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | 
**IframeSandbox** | Pointer to **[]string** | Opt-in iframe `sandbox` grants. Optional; omitted or empty means no grants. Defaults to `[]`. | [optional] [default to []]

## Methods

### NewCreateUIPluginRequest

`func NewCreateUIPluginRequest(alias string, name map[string]string, description map[string]string, slots []PluginSlot, contentSecurityPolicies map[string][]string, permissionPolicy map[string][]string, iframeAllow map[string][]string, ) *CreateUIPluginRequest`

NewCreateUIPluginRequest instantiates a new CreateUIPluginRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateUIPluginRequestWithDefaults

`func NewCreateUIPluginRequestWithDefaults() *CreateUIPluginRequest`

NewCreateUIPluginRequestWithDefaults instantiates a new CreateUIPluginRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlias

`func (o *CreateUIPluginRequest) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *CreateUIPluginRequest) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *CreateUIPluginRequest) SetAlias(v string)`

SetAlias sets Alias field to given value.


### GetName

`func (o *CreateUIPluginRequest) GetName() map[string]string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateUIPluginRequest) GetNameOk() (*map[string]string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateUIPluginRequest) SetName(v map[string]string)`

SetName sets Name field to given value.


### GetDescription

`func (o *CreateUIPluginRequest) GetDescription() map[string]string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateUIPluginRequest) GetDescriptionOk() (*map[string]string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateUIPluginRequest) SetDescription(v map[string]string)`

SetDescription sets Description field to given value.


### GetApiScopes

`func (o *CreateUIPluginRequest) GetApiScopes() []string`

GetApiScopes returns the ApiScopes field if non-nil, zero value otherwise.

### GetApiScopesOk

`func (o *CreateUIPluginRequest) GetApiScopesOk() (*[]string, bool)`

GetApiScopesOk returns a tuple with the ApiScopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiScopes

`func (o *CreateUIPluginRequest) SetApiScopes(v []string)`

SetApiScopes sets ApiScopes field to given value.

### HasApiScopes

`func (o *CreateUIPluginRequest) HasApiScopes() bool`

HasApiScopes returns a boolean if a field has been set.

### GetSlots

`func (o *CreateUIPluginRequest) GetSlots() []PluginSlot`

GetSlots returns the Slots field if non-nil, zero value otherwise.

### GetSlotsOk

`func (o *CreateUIPluginRequest) GetSlotsOk() (*[]PluginSlot, bool)`

GetSlotsOk returns a tuple with the Slots field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlots

`func (o *CreateUIPluginRequest) SetSlots(v []PluginSlot)`

SetSlots sets Slots field to given value.


### GetContentSecurityPolicies

`func (o *CreateUIPluginRequest) GetContentSecurityPolicies() map[string][]string`

GetContentSecurityPolicies returns the ContentSecurityPolicies field if non-nil, zero value otherwise.

### GetContentSecurityPoliciesOk

`func (o *CreateUIPluginRequest) GetContentSecurityPoliciesOk() (*map[string][]string, bool)`

GetContentSecurityPoliciesOk returns a tuple with the ContentSecurityPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSecurityPolicies

`func (o *CreateUIPluginRequest) SetContentSecurityPolicies(v map[string][]string)`

SetContentSecurityPolicies sets ContentSecurityPolicies field to given value.


### GetPermissionPolicy

`func (o *CreateUIPluginRequest) GetPermissionPolicy() map[string][]string`

GetPermissionPolicy returns the PermissionPolicy field if non-nil, zero value otherwise.

### GetPermissionPolicyOk

`func (o *CreateUIPluginRequest) GetPermissionPolicyOk() (*map[string][]string, bool)`

GetPermissionPolicyOk returns a tuple with the PermissionPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissionPolicy

`func (o *CreateUIPluginRequest) SetPermissionPolicy(v map[string][]string)`

SetPermissionPolicy sets PermissionPolicy field to given value.


### GetIframeAllow

`func (o *CreateUIPluginRequest) GetIframeAllow() map[string][]string`

GetIframeAllow returns the IframeAllow field if non-nil, zero value otherwise.

### GetIframeAllowOk

`func (o *CreateUIPluginRequest) GetIframeAllowOk() (*map[string][]string, bool)`

GetIframeAllowOk returns a tuple with the IframeAllow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeAllow

`func (o *CreateUIPluginRequest) SetIframeAllow(v map[string][]string)`

SetIframeAllow sets IframeAllow field to given value.


### GetIframeSandbox

`func (o *CreateUIPluginRequest) GetIframeSandbox() []string`

GetIframeSandbox returns the IframeSandbox field if non-nil, zero value otherwise.

### GetIframeSandboxOk

`func (o *CreateUIPluginRequest) GetIframeSandboxOk() (*[]string, bool)`

GetIframeSandboxOk returns a tuple with the IframeSandbox field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeSandbox

`func (o *CreateUIPluginRequest) SetIframeSandbox(v []string)`

SetIframeSandbox sets IframeSandbox field to given value.

### HasIframeSandbox

`func (o *CreateUIPluginRequest) HasIframeSandbox() bool`

HasIframeSandbox returns a boolean if a field has been set.


