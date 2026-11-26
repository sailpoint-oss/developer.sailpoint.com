# MachineAccountCreateRequestInputV2

# MachineAccountCreateRequestInputV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | Pointer to **string** | Source the machine account is created on. Required while tiered subtype configuration is enabled, so a connector-tier subtype can name its source. Ignored when that flag is off; the source is then the subtype's own source. | [optional] [default to ""]
**SubtypeId** | **string** | Subtype that must be in the source effective set and for which the caller holds the create machine account entitlement. | 
**FormId** | Pointer to **string** | Form selected for the machine account create request. | [optional] [default to ""]
**OwnerIdentityId** | **string** | Identity assigned as owner of the created machine account. | 
**MachineIdentityId** | Pointer to **NullableString** | Machine identity to correlate with the created machine account. When omitted, a new machine identity is created. | [optional] 
**Environment** | Pointer to **string** | Environment type to use for the machine account. | [optional] [default to ""]
**Description** | Pointer to **string** | Description for the machine account. | [optional] [default to ""]
**UserInput** | Pointer to **map[string]interface\{\}** | Fields of the form linked to the subtype in approval settings. | [optional] [default to \{\}]
**Entitlements** | Pointer to [**[]MachineAccountCreateEntitlement**](machine-account-create-entitlement) | Entitlements to provision, including an optional comment and access dates. Honored while per-entitlement request details are enabled. De-duplicated by `id` (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when that flag is off. An empty array is accepted. | [optional] [default to []]
**EntitlementIds** | Pointer to **[]string** | Entitlement ids to provision. Honored while per-entitlement request details are off. Values are trimmed, blanks are dropped, and ids are de-duplicated (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when per-entitlement request details are enabled. An empty array is accepted. | [optional] [default to []]

## Methods

### NewMachineAccountCreateRequestInputV2

`func NewMachineAccountCreateRequestInputV2(subtypeId string, ownerIdentityId string, ) *MachineAccountCreateRequestInputV2`

NewMachineAccountCreateRequestInputV2 instantiates a new MachineAccountCreateRequestInputV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountCreateRequestInputV2WithDefaults

`func NewMachineAccountCreateRequestInputV2WithDefaults() *MachineAccountCreateRequestInputV2`

NewMachineAccountCreateRequestInputV2WithDefaults instantiates a new MachineAccountCreateRequestInputV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *MachineAccountCreateRequestInputV2) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineAccountCreateRequestInputV2) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineAccountCreateRequestInputV2) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineAccountCreateRequestInputV2) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSubtypeId

`func (o *MachineAccountCreateRequestInputV2) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *MachineAccountCreateRequestInputV2) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *MachineAccountCreateRequestInputV2) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.


### GetFormId

`func (o *MachineAccountCreateRequestInputV2) GetFormId() string`

GetFormId returns the FormId field if non-nil, zero value otherwise.

### GetFormIdOk

`func (o *MachineAccountCreateRequestInputV2) GetFormIdOk() (*string, bool)`

GetFormIdOk returns a tuple with the FormId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormId

`func (o *MachineAccountCreateRequestInputV2) SetFormId(v string)`

SetFormId sets FormId field to given value.

### HasFormId

`func (o *MachineAccountCreateRequestInputV2) HasFormId() bool`

HasFormId returns a boolean if a field has been set.

### GetOwnerIdentityId

`func (o *MachineAccountCreateRequestInputV2) GetOwnerIdentityId() string`

GetOwnerIdentityId returns the OwnerIdentityId field if non-nil, zero value otherwise.

### GetOwnerIdentityIdOk

`func (o *MachineAccountCreateRequestInputV2) GetOwnerIdentityIdOk() (*string, bool)`

GetOwnerIdentityIdOk returns a tuple with the OwnerIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerIdentityId

`func (o *MachineAccountCreateRequestInputV2) SetOwnerIdentityId(v string)`

SetOwnerIdentityId sets OwnerIdentityId field to given value.


### GetMachineIdentityId

`func (o *MachineAccountCreateRequestInputV2) GetMachineIdentityId() string`

GetMachineIdentityId returns the MachineIdentityId field if non-nil, zero value otherwise.

### GetMachineIdentityIdOk

`func (o *MachineAccountCreateRequestInputV2) GetMachineIdentityIdOk() (*string, bool)`

GetMachineIdentityIdOk returns a tuple with the MachineIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityId

`func (o *MachineAccountCreateRequestInputV2) SetMachineIdentityId(v string)`

SetMachineIdentityId sets MachineIdentityId field to given value.

### HasMachineIdentityId

`func (o *MachineAccountCreateRequestInputV2) HasMachineIdentityId() bool`

HasMachineIdentityId returns a boolean if a field has been set.

### SetMachineIdentityIdNil

`func (o *MachineAccountCreateRequestInputV2) SetMachineIdentityIdNil(b bool)`

 SetMachineIdentityIdNil sets the value for MachineIdentityId to be an explicit nil

### UnsetMachineIdentityId
`func (o *MachineAccountCreateRequestInputV2) UnsetMachineIdentityId()`

UnsetMachineIdentityId ensures that no value is present for MachineIdentityId, not even an explicit nil
### GetEnvironment

`func (o *MachineAccountCreateRequestInputV2) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *MachineAccountCreateRequestInputV2) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *MachineAccountCreateRequestInputV2) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *MachineAccountCreateRequestInputV2) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetDescription

`func (o *MachineAccountCreateRequestInputV2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineAccountCreateRequestInputV2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineAccountCreateRequestInputV2) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineAccountCreateRequestInputV2) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUserInput

`func (o *MachineAccountCreateRequestInputV2) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *MachineAccountCreateRequestInputV2) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *MachineAccountCreateRequestInputV2) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.

### HasUserInput

`func (o *MachineAccountCreateRequestInputV2) HasUserInput() bool`

HasUserInput returns a boolean if a field has been set.

### GetEntitlements

`func (o *MachineAccountCreateRequestInputV2) GetEntitlements() []MachineAccountCreateEntitlement`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *MachineAccountCreateRequestInputV2) GetEntitlementsOk() (*[]MachineAccountCreateEntitlement, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *MachineAccountCreateRequestInputV2) SetEntitlements(v []MachineAccountCreateEntitlement)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *MachineAccountCreateRequestInputV2) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### GetEntitlementIds

`func (o *MachineAccountCreateRequestInputV2) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *MachineAccountCreateRequestInputV2) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *MachineAccountCreateRequestInputV2) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.

### HasEntitlementIds

`func (o *MachineAccountCreateRequestInputV2) HasEntitlementIds() bool`

HasEntitlementIds returns a boolean if a field has been set.


