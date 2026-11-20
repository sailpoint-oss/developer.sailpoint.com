# Credential

# Credential

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **string** | Description of the credential. | [optional] 
**Status** | Pointer to **string** | The credential status reported by the source. | [optional] 
**NativeIdentity** | Pointer to **string** | The credential's unique identifier on the source. | [optional] 
**Environment** | Pointer to **string** | The environment the credential belongs to. | [optional] 
**Source** | Pointer to [**CredentialAllOfSource**](credential-all-of-source) |  | [optional] 
**Resource** | Pointer to [**CredentialResource**](credential-resource) |  | [optional] 
**DatasetId** | Pointer to **string** | The ID of the source dataset the credential was retrieved from. | [optional] 
**Type** | Pointer to **string** | The credential type. | [optional] 
**Scope** | Pointer to **string** | The scope the source reports for the credential. | [optional] 
**ExpiresAt** | Pointer to **SailPointTime** | The date and time the credential expires. | [optional] 
**LastUsedAt** | Pointer to **SailPointTime** | The date and time the credential was last used. | [optional] 
**Owners** | Pointer to [**CredentialOwners**](credential-owners) |  | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | A map of curated credential attributes. | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface\{\}** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates if the credential has been manually edited. | [optional] [default to false]

## Methods

### NewCredential

`func NewCredential(name NullableString, ) *Credential`

NewCredential instantiates a new Credential object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCredentialWithDefaults

`func NewCredentialWithDefaults() *Credential`

NewCredentialWithDefaults instantiates a new Credential object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Credential) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Credential) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Credential) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Credential) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Credential) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Credential) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Credential) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Credential) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Credential) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Credential) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Credential) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Credential) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Credential) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Credential) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Credential) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Credential) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Credential) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Credential) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Credential) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Credential) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Credential) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStatus

`func (o *Credential) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Credential) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Credential) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Credential) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Credential) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Credential) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Credential) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Credential) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetEnvironment

`func (o *Credential) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Credential) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Credential) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *Credential) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetSource

`func (o *Credential) GetSource() CredentialAllOfSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Credential) GetSourceOk() (*CredentialAllOfSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Credential) SetSource(v CredentialAllOfSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Credential) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetResource

`func (o *Credential) GetResource() CredentialResource`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *Credential) GetResourceOk() (*CredentialResource, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *Credential) SetResource(v CredentialResource)`

SetResource sets Resource field to given value.

### HasResource

`func (o *Credential) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetDatasetId

`func (o *Credential) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Credential) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Credential) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Credential) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetType

`func (o *Credential) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Credential) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Credential) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Credential) HasType() bool`

HasType returns a boolean if a field has been set.

### GetScope

`func (o *Credential) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *Credential) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *Credential) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *Credential) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetExpiresAt

`func (o *Credential) GetExpiresAt() SailPointTime`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *Credential) GetExpiresAtOk() (*SailPointTime, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *Credential) SetExpiresAt(v SailPointTime)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *Credential) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetLastUsedAt

`func (o *Credential) GetLastUsedAt() SailPointTime`

GetLastUsedAt returns the LastUsedAt field if non-nil, zero value otherwise.

### GetLastUsedAtOk

`func (o *Credential) GetLastUsedAtOk() (*SailPointTime, bool)`

GetLastUsedAtOk returns a tuple with the LastUsedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsedAt

`func (o *Credential) SetLastUsedAt(v SailPointTime)`

SetLastUsedAt sets LastUsedAt field to given value.

### HasLastUsedAt

`func (o *Credential) HasLastUsedAt() bool`

HasLastUsedAt returns a boolean if a field has been set.

### GetOwners

`func (o *Credential) GetOwners() CredentialOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Credential) GetOwnersOk() (*CredentialOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Credential) SetOwners(v CredentialOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Credential) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetAttributes

`func (o *Credential) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Credential) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Credential) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Credential) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Credential) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Credential) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Credential) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Credential) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *Credential) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Credential) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Credential) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Credential) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.


