# UIPlugin

# UIPlugin

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PluginInstanceId** | **string** | Unique identifier of the plugin instance | 
**Alias** | **string** | Tenant-unique alias for the plugin instance, normalized to lowercase | 
**Name** | **map[string]string** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | 
**Description** | **map[string]string** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | 
**ApiScopes** | **[]string** | OAuth scopes the plugin requests at registration | 
**ContentSecurityPolicies** | **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | 
**PermissionPolicy** | **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | 
**IframeAllow** | **map[string][]string** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | 
**IframeSandbox** | **[]string** | Opt-in iframe `sandbox` grants, de-duplicated and sorted. Empty when the plugin has none, including instances created before this field existed. | 
**ActiveAssetBundleId** | Pointer to **NullableString** | Currently active asset bundle, or null/omitted if none uploaded yet | [optional] 
**Slots** | [**[]PluginSlot**](plugin-slot) |  | 
**State** | **PluginInstanceState** |  | 
**Created** | **SailPointTime** | ISO 8601 creation timestamp | 
**Modified** | **SailPointTime** | ISO 8601 last-modified timestamp | 

## Methods

### NewUIPlugin

`func NewUIPlugin(pluginInstanceId string, alias string, name map[string]string, description map[string]string, apiScopes []string, contentSecurityPolicies map[string][]string, permissionPolicy map[string][]string, iframeAllow map[string][]string, iframeSandbox []string, slots []PluginSlot, state PluginInstanceState, created SailPointTime, modified SailPointTime, ) *UIPlugin`

NewUIPlugin instantiates a new UIPlugin object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUIPluginWithDefaults

`func NewUIPluginWithDefaults() *UIPlugin`

NewUIPluginWithDefaults instantiates a new UIPlugin object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPluginInstanceId

`func (o *UIPlugin) GetPluginInstanceId() string`

GetPluginInstanceId returns the PluginInstanceId field if non-nil, zero value otherwise.

### GetPluginInstanceIdOk

`func (o *UIPlugin) GetPluginInstanceIdOk() (*string, bool)`

GetPluginInstanceIdOk returns a tuple with the PluginInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPluginInstanceId

`func (o *UIPlugin) SetPluginInstanceId(v string)`

SetPluginInstanceId sets PluginInstanceId field to given value.


### GetAlias

`func (o *UIPlugin) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *UIPlugin) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *UIPlugin) SetAlias(v string)`

SetAlias sets Alias field to given value.


### GetName

`func (o *UIPlugin) GetName() map[string]string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UIPlugin) GetNameOk() (*map[string]string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UIPlugin) SetName(v map[string]string)`

SetName sets Name field to given value.


### GetDescription

`func (o *UIPlugin) GetDescription() map[string]string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UIPlugin) GetDescriptionOk() (*map[string]string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UIPlugin) SetDescription(v map[string]string)`

SetDescription sets Description field to given value.


### GetApiScopes

`func (o *UIPlugin) GetApiScopes() []string`

GetApiScopes returns the ApiScopes field if non-nil, zero value otherwise.

### GetApiScopesOk

`func (o *UIPlugin) GetApiScopesOk() (*[]string, bool)`

GetApiScopesOk returns a tuple with the ApiScopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiScopes

`func (o *UIPlugin) SetApiScopes(v []string)`

SetApiScopes sets ApiScopes field to given value.


### GetContentSecurityPolicies

`func (o *UIPlugin) GetContentSecurityPolicies() map[string][]string`

GetContentSecurityPolicies returns the ContentSecurityPolicies field if non-nil, zero value otherwise.

### GetContentSecurityPoliciesOk

`func (o *UIPlugin) GetContentSecurityPoliciesOk() (*map[string][]string, bool)`

GetContentSecurityPoliciesOk returns a tuple with the ContentSecurityPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentSecurityPolicies

`func (o *UIPlugin) SetContentSecurityPolicies(v map[string][]string)`

SetContentSecurityPolicies sets ContentSecurityPolicies field to given value.


### GetPermissionPolicy

`func (o *UIPlugin) GetPermissionPolicy() map[string][]string`

GetPermissionPolicy returns the PermissionPolicy field if non-nil, zero value otherwise.

### GetPermissionPolicyOk

`func (o *UIPlugin) GetPermissionPolicyOk() (*map[string][]string, bool)`

GetPermissionPolicyOk returns a tuple with the PermissionPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermissionPolicy

`func (o *UIPlugin) SetPermissionPolicy(v map[string][]string)`

SetPermissionPolicy sets PermissionPolicy field to given value.


### GetIframeAllow

`func (o *UIPlugin) GetIframeAllow() map[string][]string`

GetIframeAllow returns the IframeAllow field if non-nil, zero value otherwise.

### GetIframeAllowOk

`func (o *UIPlugin) GetIframeAllowOk() (*map[string][]string, bool)`

GetIframeAllowOk returns a tuple with the IframeAllow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeAllow

`func (o *UIPlugin) SetIframeAllow(v map[string][]string)`

SetIframeAllow sets IframeAllow field to given value.


### GetIframeSandbox

`func (o *UIPlugin) GetIframeSandbox() []string`

GetIframeSandbox returns the IframeSandbox field if non-nil, zero value otherwise.

### GetIframeSandboxOk

`func (o *UIPlugin) GetIframeSandboxOk() (*[]string, bool)`

GetIframeSandboxOk returns a tuple with the IframeSandbox field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIframeSandbox

`func (o *UIPlugin) SetIframeSandbox(v []string)`

SetIframeSandbox sets IframeSandbox field to given value.


### GetActiveAssetBundleId

`func (o *UIPlugin) GetActiveAssetBundleId() string`

GetActiveAssetBundleId returns the ActiveAssetBundleId field if non-nil, zero value otherwise.

### GetActiveAssetBundleIdOk

`func (o *UIPlugin) GetActiveAssetBundleIdOk() (*string, bool)`

GetActiveAssetBundleIdOk returns a tuple with the ActiveAssetBundleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveAssetBundleId

`func (o *UIPlugin) SetActiveAssetBundleId(v string)`

SetActiveAssetBundleId sets ActiveAssetBundleId field to given value.

### HasActiveAssetBundleId

`func (o *UIPlugin) HasActiveAssetBundleId() bool`

HasActiveAssetBundleId returns a boolean if a field has been set.

### SetActiveAssetBundleIdNil

`func (o *UIPlugin) SetActiveAssetBundleIdNil(b bool)`

 SetActiveAssetBundleIdNil sets the value for ActiveAssetBundleId to be an explicit nil

### UnsetActiveAssetBundleId
`func (o *UIPlugin) UnsetActiveAssetBundleId()`

UnsetActiveAssetBundleId ensures that no value is present for ActiveAssetBundleId, not even an explicit nil
### GetSlots

`func (o *UIPlugin) GetSlots() []PluginSlot`

GetSlots returns the Slots field if non-nil, zero value otherwise.

### GetSlotsOk

`func (o *UIPlugin) GetSlotsOk() (*[]PluginSlot, bool)`

GetSlotsOk returns a tuple with the Slots field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlots

`func (o *UIPlugin) SetSlots(v []PluginSlot)`

SetSlots sets Slots field to given value.


### GetState

`func (o *UIPlugin) GetState() PluginInstanceState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *UIPlugin) GetStateOk() (*PluginInstanceState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *UIPlugin) SetState(v PluginInstanceState)`

SetState sets State field to given value.


### GetCreated

`func (o *UIPlugin) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *UIPlugin) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *UIPlugin) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *UIPlugin) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *UIPlugin) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *UIPlugin) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.



