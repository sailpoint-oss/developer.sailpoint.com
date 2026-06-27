---
id: v1-machineidentityresponse
title: Machineidentityresponse
pagination_label: Machineidentityresponse
sidebar_label: Machineidentityresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentityresponse', 'V1Machineidentityresponse'] 
slug: /tools/sdk/go/machineidentities/models/machineidentityresponse
tags: ['SDK', 'Software Development Kit', 'Machineidentityresponse', 'V1Machineidentityresponse']
---

# Machineidentityresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**NativeIdentity** | **string** | The native identity associated to the machine identity directly aggregated from a source | 
**Description** | Pointer to **string** | Description of machine identity | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | A map of custom machine identity attributes | [optional] 
**Subtype** | **string** | The subtype value associated to the machine identity | 
**Owners** | Pointer to [**MachineIdentityDtoOwners**](machine-identity-dto-owners) |  | [optional] 
**SourceId** | Pointer to **string** | The source id associated to the machine identity | [optional] 
**Uuid** | Pointer to **string** | The UUID associated to the machine identity directly aggregated from a source | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates if the machine identity has been manually edited | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | Indicates if the machine identity has been manually created | [optional] [default to false]
**Source** | Pointer to **map[string]interface{}** | The source of the machine identity | [optional] 
**DatasetId** | Pointer to **string** | The dataset id associated to the source in which the identity was retrieved from | [optional] 
**UserEntitlements** | Pointer to [**[]MachineIdentityResponseUserEntitlements**](machine-identity-response-user-entitlements) | The user entitlements associated to the machine identity | [optional] 

## Methods

### NewMachineidentityresponse

`func NewMachineidentityresponse(name NullableString, nativeIdentity string, subtype string, ) *Machineidentityresponse`

NewMachineidentityresponse instantiates a new Machineidentityresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityresponseWithDefaults

`func NewMachineidentityresponseWithDefaults() *Machineidentityresponse`

NewMachineidentityresponseWithDefaults instantiates a new Machineidentityresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Machineidentityresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentityresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentityresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Machineidentityresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Machineidentityresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Machineidentityresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Machineidentityresponse) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Machineidentityresponse) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Machineidentityresponse) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Machineidentityresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineidentityresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineidentityresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineidentityresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Machineidentityresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Machineidentityresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Machineidentityresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Machineidentityresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Machineidentityresponse) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Machineidentityresponse) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Machineidentityresponse) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetDescription

`func (o *Machineidentityresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Machineidentityresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Machineidentityresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Machineidentityresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *Machineidentityresponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Machineidentityresponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Machineidentityresponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Machineidentityresponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *Machineidentityresponse) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *Machineidentityresponse) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *Machineidentityresponse) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetOwners

`func (o *Machineidentityresponse) GetOwners() MachineIdentityDtoOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Machineidentityresponse) GetOwnersOk() (*MachineIdentityDtoOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Machineidentityresponse) SetOwners(v MachineIdentityDtoOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Machineidentityresponse) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSourceId

`func (o *Machineidentityresponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Machineidentityresponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Machineidentityresponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Machineidentityresponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *Machineidentityresponse) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Machineidentityresponse) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Machineidentityresponse) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Machineidentityresponse) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *Machineidentityresponse) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Machineidentityresponse) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Machineidentityresponse) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Machineidentityresponse) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *Machineidentityresponse) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *Machineidentityresponse) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *Machineidentityresponse) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *Machineidentityresponse) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetSource

`func (o *Machineidentityresponse) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Machineidentityresponse) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Machineidentityresponse) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.

### HasSource

`func (o *Machineidentityresponse) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDatasetId

`func (o *Machineidentityresponse) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Machineidentityresponse) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Machineidentityresponse) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Machineidentityresponse) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *Machineidentityresponse) GetUserEntitlements() []MachineIdentityResponseUserEntitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *Machineidentityresponse) GetUserEntitlementsOk() (*[]MachineIdentityResponseUserEntitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *Machineidentityresponse) SetUserEntitlements(v []MachineIdentityResponseUserEntitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *Machineidentityresponse) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.


