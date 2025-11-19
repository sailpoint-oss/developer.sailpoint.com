---
id: v2025-machine-identity-response
title: MachineIdentityResponse
pagination_label: MachineIdentityResponse
sidebar_label: MachineIdentityResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityResponse', 'V2025MachineIdentityResponse'] 
slug: /tools/sdk/go/v2025/models/machine-identity-response
tags: ['SDK', 'Software Development Kit', 'MachineIdentityResponse', 'V2025MachineIdentityResponse']
---

# MachineIdentityResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**BusinessApplication** | **string** | The business application that the identity represents | 
**Description** | Pointer to **string** | Description of machine identity | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | A map of custom machine identity attributes | [optional] 
**Subtype** | **string** | The subtype value associated to the machine identity | 
**Owners** | Pointer to [**MachineIdentityDtoOwners**](machine-identity-dto-owners) |  | [optional] 
**SourceId** | Pointer to **string** | The source id associated to the machine identity | [optional] 
**Uuid** | Pointer to **string** | The UUID associated to the machine identity directly aggregated from a source | [optional] 
**NativeIdentity** | Pointer to **string** | The native identity associated to the machine identity directly aggregated from a source | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates if the machine identity has been manually edited | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | Indicates if the machine identity has been manually created | [optional] [default to false]
**Source** | Pointer to **map[string]interface{}** | The source of the machine identity | [optional] 
**DatasetId** | Pointer to **string** | The dataset id associated to the source in which the identity was retrieved from | [optional] 
**UserEntitlements** | Pointer to [**[]MachineIdentityResponseUserEntitlements**](machine-identity-response-user-entitlements) | The user entitlements associated to the machine identity | [optional] 

## Methods

### NewMachineIdentityResponse

`func NewMachineIdentityResponse(name NullableString, businessApplication string, subtype string, ) *MachineIdentityResponse`

NewMachineIdentityResponse instantiates a new MachineIdentityResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityResponseWithDefaults

`func NewMachineIdentityResponseWithDefaults() *MachineIdentityResponse`

NewMachineIdentityResponseWithDefaults instantiates a new MachineIdentityResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentityResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineIdentityResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityResponse) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *MachineIdentityResponse) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *MachineIdentityResponse) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *MachineIdentityResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineIdentityResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineIdentityResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineIdentityResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MachineIdentityResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineIdentityResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineIdentityResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MachineIdentityResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetBusinessApplication

`func (o *MachineIdentityResponse) GetBusinessApplication() string`

GetBusinessApplication returns the BusinessApplication field if non-nil, zero value otherwise.

### GetBusinessApplicationOk

`func (o *MachineIdentityResponse) GetBusinessApplicationOk() (*string, bool)`

GetBusinessApplicationOk returns a tuple with the BusinessApplication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplication

`func (o *MachineIdentityResponse) SetBusinessApplication(v string)`

SetBusinessApplication sets BusinessApplication field to given value.


### GetDescription

`func (o *MachineIdentityResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineIdentityResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineIdentityResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineIdentityResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineIdentityResponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineIdentityResponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineIdentityResponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineIdentityResponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *MachineIdentityResponse) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *MachineIdentityResponse) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *MachineIdentityResponse) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetOwners

`func (o *MachineIdentityResponse) GetOwners() MachineIdentityDtoOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *MachineIdentityResponse) GetOwnersOk() (*MachineIdentityDtoOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *MachineIdentityResponse) SetOwners(v MachineIdentityDtoOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *MachineIdentityResponse) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSourceId

`func (o *MachineIdentityResponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineIdentityResponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineIdentityResponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineIdentityResponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *MachineIdentityResponse) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *MachineIdentityResponse) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *MachineIdentityResponse) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *MachineIdentityResponse) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *MachineIdentityResponse) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *MachineIdentityResponse) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *MachineIdentityResponse) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *MachineIdentityResponse) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *MachineIdentityResponse) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *MachineIdentityResponse) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *MachineIdentityResponse) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *MachineIdentityResponse) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *MachineIdentityResponse) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *MachineIdentityResponse) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *MachineIdentityResponse) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *MachineIdentityResponse) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetSource

`func (o *MachineIdentityResponse) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineIdentityResponse) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineIdentityResponse) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineIdentityResponse) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDatasetId

`func (o *MachineIdentityResponse) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *MachineIdentityResponse) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *MachineIdentityResponse) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *MachineIdentityResponse) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *MachineIdentityResponse) GetUserEntitlements() []MachineIdentityResponseUserEntitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *MachineIdentityResponse) GetUserEntitlementsOk() (*[]MachineIdentityResponseUserEntitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *MachineIdentityResponse) SetUserEntitlements(v []MachineIdentityResponseUserEntitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *MachineIdentityResponse) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.


