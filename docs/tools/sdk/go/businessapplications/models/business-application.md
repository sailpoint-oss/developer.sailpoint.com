# BusinessApplication

# BusinessApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Business Application ID. Assigned by the service on create. | [optional] [readonly] 
**Name** | **string** | Human-readable display name. Must be unique within the tenant. | 
**Description** | Pointer to **NullableString** | Free-text description of the Business Application. | [optional] 
**Vendor** | Pointer to **NullableString** | Vendor or publisher of the Business Application. | [optional] 
**Signatures** | Pointer to [**[]BusinessApplicationSignature**](business-application-signature) | Signatures used to automatically correlate machine identities to this Business Application. Modifying this field requires the custom Business Application feature to be enabled. | [optional] 
**Owner** | Pointer to [**NullableBusinessApplicationOwner**](business-application-owner) |  | [optional] 
**AdditionalOwners** | Pointer to [**[]BusinessApplicationAdditionalOwnersInner**](business-application-additional-owners-inner) | Additional (secondary) owners of the Business Application. | [optional] 
**SanctionedStatus** | Pointer to **SanctionedStatus** | Sanctioned status of the Business Application. Defaults to `UNKNOWN`. | [optional] 
**Origin** | Pointer to **BusinessApplicationOrigin** |  | [optional] [readonly] 
**Source** | Pointer to [**NullableBusinessApplicationSource**](business-application-source) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Time the Business Application was created. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Time the Business Application was last modified. | [optional] [readonly] 

## Methods

### NewBusinessApplication

`func NewBusinessApplication(name string, ) *BusinessApplication`

NewBusinessApplication instantiates a new BusinessApplication object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessApplicationWithDefaults

`func NewBusinessApplicationWithDefaults() *BusinessApplication`

NewBusinessApplicationWithDefaults instantiates a new BusinessApplication object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BusinessApplication) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BusinessApplication) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BusinessApplication) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BusinessApplication) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BusinessApplication) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BusinessApplication) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BusinessApplication) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *BusinessApplication) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BusinessApplication) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BusinessApplication) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BusinessApplication) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *BusinessApplication) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *BusinessApplication) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetVendor

`func (o *BusinessApplication) GetVendor() string`

GetVendor returns the Vendor field if non-nil, zero value otherwise.

### GetVendorOk

`func (o *BusinessApplication) GetVendorOk() (*string, bool)`

GetVendorOk returns a tuple with the Vendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendor

`func (o *BusinessApplication) SetVendor(v string)`

SetVendor sets Vendor field to given value.

### HasVendor

`func (o *BusinessApplication) HasVendor() bool`

HasVendor returns a boolean if a field has been set.

### SetVendorNil

`func (o *BusinessApplication) SetVendorNil(b bool)`

 SetVendorNil sets the value for Vendor to be an explicit nil

### UnsetVendor
`func (o *BusinessApplication) UnsetVendor()`

UnsetVendor ensures that no value is present for Vendor, not even an explicit nil
### GetSignatures

`func (o *BusinessApplication) GetSignatures() []BusinessApplicationSignature`

GetSignatures returns the Signatures field if non-nil, zero value otherwise.

### GetSignaturesOk

`func (o *BusinessApplication) GetSignaturesOk() (*[]BusinessApplicationSignature, bool)`

GetSignaturesOk returns a tuple with the Signatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatures

`func (o *BusinessApplication) SetSignatures(v []BusinessApplicationSignature)`

SetSignatures sets Signatures field to given value.

### HasSignatures

`func (o *BusinessApplication) HasSignatures() bool`

HasSignatures returns a boolean if a field has been set.

### GetOwner

`func (o *BusinessApplication) GetOwner() BusinessApplicationOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *BusinessApplication) GetOwnerOk() (*BusinessApplicationOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *BusinessApplication) SetOwner(v BusinessApplicationOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *BusinessApplication) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *BusinessApplication) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *BusinessApplication) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil
### GetAdditionalOwners

`func (o *BusinessApplication) GetAdditionalOwners() []BusinessApplicationAdditionalOwnersInner`

GetAdditionalOwners returns the AdditionalOwners field if non-nil, zero value otherwise.

### GetAdditionalOwnersOk

`func (o *BusinessApplication) GetAdditionalOwnersOk() (*[]BusinessApplicationAdditionalOwnersInner, bool)`

GetAdditionalOwnersOk returns a tuple with the AdditionalOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalOwners

`func (o *BusinessApplication) SetAdditionalOwners(v []BusinessApplicationAdditionalOwnersInner)`

SetAdditionalOwners sets AdditionalOwners field to given value.

### HasAdditionalOwners

`func (o *BusinessApplication) HasAdditionalOwners() bool`

HasAdditionalOwners returns a boolean if a field has been set.

### SetAdditionalOwnersNil

`func (o *BusinessApplication) SetAdditionalOwnersNil(b bool)`

 SetAdditionalOwnersNil sets the value for AdditionalOwners to be an explicit nil

### UnsetAdditionalOwners
`func (o *BusinessApplication) UnsetAdditionalOwners()`

UnsetAdditionalOwners ensures that no value is present for AdditionalOwners, not even an explicit nil
### GetSanctionedStatus

`func (o *BusinessApplication) GetSanctionedStatus() SanctionedStatus`

GetSanctionedStatus returns the SanctionedStatus field if non-nil, zero value otherwise.

### GetSanctionedStatusOk

`func (o *BusinessApplication) GetSanctionedStatusOk() (*SanctionedStatus, bool)`

GetSanctionedStatusOk returns a tuple with the SanctionedStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSanctionedStatus

`func (o *BusinessApplication) SetSanctionedStatus(v SanctionedStatus)`

SetSanctionedStatus sets SanctionedStatus field to given value.

### HasSanctionedStatus

`func (o *BusinessApplication) HasSanctionedStatus() bool`

HasSanctionedStatus returns a boolean if a field has been set.

### GetOrigin

`func (o *BusinessApplication) GetOrigin() BusinessApplicationOrigin`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *BusinessApplication) GetOriginOk() (*BusinessApplicationOrigin, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *BusinessApplication) SetOrigin(v BusinessApplicationOrigin)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *BusinessApplication) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### GetSource

`func (o *BusinessApplication) GetSource() BusinessApplicationSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *BusinessApplication) GetSourceOk() (*BusinessApplicationSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *BusinessApplication) SetSource(v BusinessApplicationSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *BusinessApplication) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *BusinessApplication) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *BusinessApplication) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetCreated

`func (o *BusinessApplication) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *BusinessApplication) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *BusinessApplication) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *BusinessApplication) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *BusinessApplication) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *BusinessApplication) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *BusinessApplication) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *BusinessApplication) HasModified() bool`

HasModified returns a boolean if a field has been set.


