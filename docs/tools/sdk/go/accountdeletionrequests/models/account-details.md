# AccountDetails

# AccountDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | unique id of this object | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**AccountId** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**NativeIdentity** | Pointer to **string** |  | [optional] 
**Uuid** | Pointer to **string** |  | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**Locked** | Pointer to **bool** |  | [optional] 
**Uncorrelated** | Pointer to **bool** |  | [optional] 
**SystemAccount** | Pointer to **bool** |  | [optional] 
**Authoritative** | Pointer to **bool** |  | [optional] 
**SupportsPasswordChange** | Pointer to **bool** |  | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** |  | [optional] 
**Application** | Pointer to **map[string]interface\{\}** |  | [optional] 
**Identity** | Pointer to **map[string]interface\{\}** |  | [optional] 
**Schema** | Pointer to **map[string]interface\{\}** |  | [optional] 
**PendingAccessRequestIds** | Pointer to **[]string** |  | [optional] 
**Features** | Pointer to **[]string** |  | [optional] 
**Meta** | Pointer to **map[string]interface\{\}** |  | [optional] 

## Methods

### NewAccountDetails

`func NewAccountDetails() *AccountDetails`

NewAccountDetails instantiates a new AccountDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountDetailsWithDefaults

`func NewAccountDetailsWithDefaults() *AccountDetails`

NewAccountDetailsWithDefaults instantiates a new AccountDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccountDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccountDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccountDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccountId

`func (o *AccountDetails) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *AccountDetails) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *AccountDetails) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *AccountDetails) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetDescription

`func (o *AccountDetails) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccountDetails) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccountDetails) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccountDetails) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *AccountDetails) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *AccountDetails) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *AccountDetails) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *AccountDetails) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetUuid

`func (o *AccountDetails) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *AccountDetails) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *AccountDetails) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *AccountDetails) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccountDetails) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccountDetails) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccountDetails) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccountDetails) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDisabled

`func (o *AccountDetails) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *AccountDetails) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *AccountDetails) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *AccountDetails) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *AccountDetails) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *AccountDetails) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *AccountDetails) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *AccountDetails) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetUncorrelated

`func (o *AccountDetails) GetUncorrelated() bool`

GetUncorrelated returns the Uncorrelated field if non-nil, zero value otherwise.

### GetUncorrelatedOk

`func (o *AccountDetails) GetUncorrelatedOk() (*bool, bool)`

GetUncorrelatedOk returns a tuple with the Uncorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUncorrelated

`func (o *AccountDetails) SetUncorrelated(v bool)`

SetUncorrelated sets Uncorrelated field to given value.

### HasUncorrelated

`func (o *AccountDetails) HasUncorrelated() bool`

HasUncorrelated returns a boolean if a field has been set.

### GetSystemAccount

`func (o *AccountDetails) GetSystemAccount() bool`

GetSystemAccount returns the SystemAccount field if non-nil, zero value otherwise.

### GetSystemAccountOk

`func (o *AccountDetails) GetSystemAccountOk() (*bool, bool)`

GetSystemAccountOk returns a tuple with the SystemAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemAccount

`func (o *AccountDetails) SetSystemAccount(v bool)`

SetSystemAccount sets SystemAccount field to given value.

### HasSystemAccount

`func (o *AccountDetails) HasSystemAccount() bool`

HasSystemAccount returns a boolean if a field has been set.

### GetAuthoritative

`func (o *AccountDetails) GetAuthoritative() bool`

GetAuthoritative returns the Authoritative field if non-nil, zero value otherwise.

### GetAuthoritativeOk

`func (o *AccountDetails) GetAuthoritativeOk() (*bool, bool)`

GetAuthoritativeOk returns a tuple with the Authoritative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthoritative

`func (o *AccountDetails) SetAuthoritative(v bool)`

SetAuthoritative sets Authoritative field to given value.

### HasAuthoritative

`func (o *AccountDetails) HasAuthoritative() bool`

HasAuthoritative returns a boolean if a field has been set.

### GetSupportsPasswordChange

`func (o *AccountDetails) GetSupportsPasswordChange() bool`

GetSupportsPasswordChange returns the SupportsPasswordChange field if non-nil, zero value otherwise.

### GetSupportsPasswordChangeOk

`func (o *AccountDetails) GetSupportsPasswordChangeOk() (*bool, bool)`

GetSupportsPasswordChangeOk returns a tuple with the SupportsPasswordChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportsPasswordChange

`func (o *AccountDetails) SetSupportsPasswordChange(v bool)`

SetSupportsPasswordChange sets SupportsPasswordChange field to given value.

### HasSupportsPasswordChange

`func (o *AccountDetails) HasSupportsPasswordChange() bool`

HasSupportsPasswordChange returns a boolean if a field has been set.

### GetAttributes

`func (o *AccountDetails) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AccountDetails) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AccountDetails) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AccountDetails) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetApplication

`func (o *AccountDetails) GetApplication() map[string]interface{}`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *AccountDetails) GetApplicationOk() (*map[string]interface{}, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *AccountDetails) SetApplication(v map[string]interface{})`

SetApplication sets Application field to given value.

### HasApplication

`func (o *AccountDetails) HasApplication() bool`

HasApplication returns a boolean if a field has been set.

### GetIdentity

`func (o *AccountDetails) GetIdentity() map[string]interface{}`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountDetails) GetIdentityOk() (*map[string]interface{}, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountDetails) SetIdentity(v map[string]interface{})`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *AccountDetails) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetSchema

`func (o *AccountDetails) GetSchema() map[string]interface{}`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *AccountDetails) GetSchemaOk() (*map[string]interface{}, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *AccountDetails) SetSchema(v map[string]interface{})`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *AccountDetails) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetPendingAccessRequestIds

`func (o *AccountDetails) GetPendingAccessRequestIds() []string`

GetPendingAccessRequestIds returns the PendingAccessRequestIds field if non-nil, zero value otherwise.

### GetPendingAccessRequestIdsOk

`func (o *AccountDetails) GetPendingAccessRequestIdsOk() (*[]string, bool)`

GetPendingAccessRequestIdsOk returns a tuple with the PendingAccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingAccessRequestIds

`func (o *AccountDetails) SetPendingAccessRequestIds(v []string)`

SetPendingAccessRequestIds sets PendingAccessRequestIds field to given value.

### HasPendingAccessRequestIds

`func (o *AccountDetails) HasPendingAccessRequestIds() bool`

HasPendingAccessRequestIds returns a boolean if a field has been set.

### GetFeatures

`func (o *AccountDetails) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *AccountDetails) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *AccountDetails) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *AccountDetails) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetMeta

`func (o *AccountDetails) GetMeta() map[string]interface{}`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *AccountDetails) GetMetaOk() (*map[string]interface{}, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *AccountDetails) SetMeta(v map[string]interface{})`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *AccountDetails) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


