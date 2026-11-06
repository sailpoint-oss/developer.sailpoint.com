# MachineAccountLinkedMachineIdentity

# MachineAccountLinkedMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **NullableString** | The description of the machine identity. | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | The attributes of the machine identity, including the attributes read from the source. | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates whether the machine identity has been manually edited. | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | Indicates whether the machine identity was created manually rather than by aggregation. | [optional] [default to false]
**Owners** | Pointer to [**NullableMachineAccountLinkedMachineIdentityAllOfOwners**](machine-account-linked-machine-identity-all-of-owners) |  | [optional] 
**Subtype** | Pointer to **NullableString** | The subtype of the machine identity. | [optional] 
**SourceId** | Pointer to **NullableString** | ID of the source the machine identity comes from. | [optional] 
**Uuid** | Pointer to **NullableString** | The UUID of the machine identity, as read from the source. | [optional] 
**NativeIdentity** | Pointer to **NullableString** | The native identity of the machine identity, as read from the source. | [optional] 
**DatasetId** | Pointer to **NullableString** | ID of the dataset the machine identity was aggregated from. | [optional] 
**Source** | Pointer to [**NullableBaseReferenceDto**](base-reference-dto) | The source the machine identity comes from. | [optional] 
**UserEntitlements** | Pointer to [**[]MachineAccountLinkedMachineIdentityAllOfUserEntitlements**](machine-account-linked-machine-identity-all-of-user-entitlements) | The user entitlements associated with the machine identity. | [optional] 
**ExistsOnSource** | Pointer to **NullableString** | Indicates whether the machine identity still exists on the source. | [optional] 
**BusinessApplicationRefs** | Pointer to [**[]MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs**](machine-account-linked-machine-identity-all-of-business-application-refs) | The business applications linked to the machine identity. This field is omitted when business application links are not available for the machine identity. | [optional] 
**EffectiveSanctionedStatus** | Pointer to **string** | The sanctioned status derived from the linked business applications. This field is present only when `businessApplicationRefs` is present. | [optional] 

## Methods

### NewMachineAccountLinkedMachineIdentity

`func NewMachineAccountLinkedMachineIdentity(name NullableString, ) *MachineAccountLinkedMachineIdentity`

NewMachineAccountLinkedMachineIdentity instantiates a new MachineAccountLinkedMachineIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountLinkedMachineIdentityWithDefaults

`func NewMachineAccountLinkedMachineIdentityWithDefaults() *MachineAccountLinkedMachineIdentity`

NewMachineAccountLinkedMachineIdentityWithDefaults instantiates a new MachineAccountLinkedMachineIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineAccountLinkedMachineIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineAccountLinkedMachineIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineAccountLinkedMachineIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineAccountLinkedMachineIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineAccountLinkedMachineIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineAccountLinkedMachineIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineAccountLinkedMachineIdentity) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *MachineAccountLinkedMachineIdentity) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *MachineAccountLinkedMachineIdentity) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *MachineAccountLinkedMachineIdentity) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineAccountLinkedMachineIdentity) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineAccountLinkedMachineIdentity) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineAccountLinkedMachineIdentity) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MachineAccountLinkedMachineIdentity) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineAccountLinkedMachineIdentity) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineAccountLinkedMachineIdentity) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MachineAccountLinkedMachineIdentity) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *MachineAccountLinkedMachineIdentity) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineAccountLinkedMachineIdentity) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineAccountLinkedMachineIdentity) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineAccountLinkedMachineIdentity) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *MachineAccountLinkedMachineIdentity) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *MachineAccountLinkedMachineIdentity) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttributes

`func (o *MachineAccountLinkedMachineIdentity) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineAccountLinkedMachineIdentity) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineAccountLinkedMachineIdentity) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineAccountLinkedMachineIdentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *MachineAccountLinkedMachineIdentity) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *MachineAccountLinkedMachineIdentity) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetManuallyEdited

`func (o *MachineAccountLinkedMachineIdentity) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *MachineAccountLinkedMachineIdentity) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *MachineAccountLinkedMachineIdentity) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *MachineAccountLinkedMachineIdentity) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *MachineAccountLinkedMachineIdentity) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *MachineAccountLinkedMachineIdentity) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *MachineAccountLinkedMachineIdentity) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *MachineAccountLinkedMachineIdentity) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetOwners

`func (o *MachineAccountLinkedMachineIdentity) GetOwners() MachineAccountLinkedMachineIdentityAllOfOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *MachineAccountLinkedMachineIdentity) GetOwnersOk() (*MachineAccountLinkedMachineIdentityAllOfOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *MachineAccountLinkedMachineIdentity) SetOwners(v MachineAccountLinkedMachineIdentityAllOfOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *MachineAccountLinkedMachineIdentity) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### SetOwnersNil

`func (o *MachineAccountLinkedMachineIdentity) SetOwnersNil(b bool)`

 SetOwnersNil sets the value for Owners to be an explicit nil

### UnsetOwners
`func (o *MachineAccountLinkedMachineIdentity) UnsetOwners()`

UnsetOwners ensures that no value is present for Owners, not even an explicit nil
### GetSubtype

`func (o *MachineAccountLinkedMachineIdentity) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *MachineAccountLinkedMachineIdentity) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *MachineAccountLinkedMachineIdentity) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.

### HasSubtype

`func (o *MachineAccountLinkedMachineIdentity) HasSubtype() bool`

HasSubtype returns a boolean if a field has been set.

### SetSubtypeNil

`func (o *MachineAccountLinkedMachineIdentity) SetSubtypeNil(b bool)`

 SetSubtypeNil sets the value for Subtype to be an explicit nil

### UnsetSubtype
`func (o *MachineAccountLinkedMachineIdentity) UnsetSubtype()`

UnsetSubtype ensures that no value is present for Subtype, not even an explicit nil
### GetSourceId

`func (o *MachineAccountLinkedMachineIdentity) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineAccountLinkedMachineIdentity) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineAccountLinkedMachineIdentity) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineAccountLinkedMachineIdentity) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### SetSourceIdNil

`func (o *MachineAccountLinkedMachineIdentity) SetSourceIdNil(b bool)`

 SetSourceIdNil sets the value for SourceId to be an explicit nil

### UnsetSourceId
`func (o *MachineAccountLinkedMachineIdentity) UnsetSourceId()`

UnsetSourceId ensures that no value is present for SourceId, not even an explicit nil
### GetUuid

`func (o *MachineAccountLinkedMachineIdentity) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *MachineAccountLinkedMachineIdentity) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *MachineAccountLinkedMachineIdentity) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *MachineAccountLinkedMachineIdentity) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *MachineAccountLinkedMachineIdentity) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *MachineAccountLinkedMachineIdentity) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetNativeIdentity

`func (o *MachineAccountLinkedMachineIdentity) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *MachineAccountLinkedMachineIdentity) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *MachineAccountLinkedMachineIdentity) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *MachineAccountLinkedMachineIdentity) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### SetNativeIdentityNil

`func (o *MachineAccountLinkedMachineIdentity) SetNativeIdentityNil(b bool)`

 SetNativeIdentityNil sets the value for NativeIdentity to be an explicit nil

### UnsetNativeIdentity
`func (o *MachineAccountLinkedMachineIdentity) UnsetNativeIdentity()`

UnsetNativeIdentity ensures that no value is present for NativeIdentity, not even an explicit nil
### GetDatasetId

`func (o *MachineAccountLinkedMachineIdentity) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *MachineAccountLinkedMachineIdentity) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *MachineAccountLinkedMachineIdentity) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *MachineAccountLinkedMachineIdentity) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### SetDatasetIdNil

`func (o *MachineAccountLinkedMachineIdentity) SetDatasetIdNil(b bool)`

 SetDatasetIdNil sets the value for DatasetId to be an explicit nil

### UnsetDatasetId
`func (o *MachineAccountLinkedMachineIdentity) UnsetDatasetId()`

UnsetDatasetId ensures that no value is present for DatasetId, not even an explicit nil
### GetSource

`func (o *MachineAccountLinkedMachineIdentity) GetSource() BaseReferenceDto`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineAccountLinkedMachineIdentity) GetSourceOk() (*BaseReferenceDto, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineAccountLinkedMachineIdentity) SetSource(v BaseReferenceDto)`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineAccountLinkedMachineIdentity) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *MachineAccountLinkedMachineIdentity) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *MachineAccountLinkedMachineIdentity) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetUserEntitlements

`func (o *MachineAccountLinkedMachineIdentity) GetUserEntitlements() []MachineAccountLinkedMachineIdentityAllOfUserEntitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *MachineAccountLinkedMachineIdentity) GetUserEntitlementsOk() (*[]MachineAccountLinkedMachineIdentityAllOfUserEntitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *MachineAccountLinkedMachineIdentity) SetUserEntitlements(v []MachineAccountLinkedMachineIdentityAllOfUserEntitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *MachineAccountLinkedMachineIdentity) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### SetUserEntitlementsNil

`func (o *MachineAccountLinkedMachineIdentity) SetUserEntitlementsNil(b bool)`

 SetUserEntitlementsNil sets the value for UserEntitlements to be an explicit nil

### UnsetUserEntitlements
`func (o *MachineAccountLinkedMachineIdentity) UnsetUserEntitlements()`

UnsetUserEntitlements ensures that no value is present for UserEntitlements, not even an explicit nil
### GetExistsOnSource

`func (o *MachineAccountLinkedMachineIdentity) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *MachineAccountLinkedMachineIdentity) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *MachineAccountLinkedMachineIdentity) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *MachineAccountLinkedMachineIdentity) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.

### SetExistsOnSourceNil

`func (o *MachineAccountLinkedMachineIdentity) SetExistsOnSourceNil(b bool)`

 SetExistsOnSourceNil sets the value for ExistsOnSource to be an explicit nil

### UnsetExistsOnSource
`func (o *MachineAccountLinkedMachineIdentity) UnsetExistsOnSource()`

UnsetExistsOnSource ensures that no value is present for ExistsOnSource, not even an explicit nil
### GetBusinessApplicationRefs

`func (o *MachineAccountLinkedMachineIdentity) GetBusinessApplicationRefs() []MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs`

GetBusinessApplicationRefs returns the BusinessApplicationRefs field if non-nil, zero value otherwise.

### GetBusinessApplicationRefsOk

`func (o *MachineAccountLinkedMachineIdentity) GetBusinessApplicationRefsOk() (*[]MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs, bool)`

GetBusinessApplicationRefsOk returns a tuple with the BusinessApplicationRefs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplicationRefs

`func (o *MachineAccountLinkedMachineIdentity) SetBusinessApplicationRefs(v []MachineAccountLinkedMachineIdentityAllOfBusinessApplicationRefs)`

SetBusinessApplicationRefs sets BusinessApplicationRefs field to given value.

### HasBusinessApplicationRefs

`func (o *MachineAccountLinkedMachineIdentity) HasBusinessApplicationRefs() bool`

HasBusinessApplicationRefs returns a boolean if a field has been set.

### GetEffectiveSanctionedStatus

`func (o *MachineAccountLinkedMachineIdentity) GetEffectiveSanctionedStatus() string`

GetEffectiveSanctionedStatus returns the EffectiveSanctionedStatus field if non-nil, zero value otherwise.

### GetEffectiveSanctionedStatusOk

`func (o *MachineAccountLinkedMachineIdentity) GetEffectiveSanctionedStatusOk() (*string, bool)`

GetEffectiveSanctionedStatusOk returns a tuple with the EffectiveSanctionedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveSanctionedStatus

`func (o *MachineAccountLinkedMachineIdentity) SetEffectiveSanctionedStatus(v string)`

SetEffectiveSanctionedStatus sets EffectiveSanctionedStatus field to given value.

### HasEffectiveSanctionedStatus

`func (o *MachineAccountLinkedMachineIdentity) HasEffectiveSanctionedStatus() bool`

HasEffectiveSanctionedStatus returns a boolean if a field has been set.


