---
id: v2025-machine-identity-request
title: MachineIdentityRequest
pagination_label: MachineIdentityRequest
sidebar_label: MachineIdentityRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityRequest', 'V2025MachineIdentityRequest'] 
slug: /tools/sdk/go/v2025/models/machine-identity-request
tags: ['SDK', 'Software Development Kit', 'MachineIdentityRequest', 'V2025MachineIdentityRequest']
---

# MachineIdentityRequest

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
**UserEntitlements** | Pointer to [**[]MachineIdentityRequestUserEntitlements**](machine-identity-request-user-entitlements) | The user entitlements associated to the machine identity | [optional] 

## Methods

### NewMachineIdentityRequest

`func NewMachineIdentityRequest(name NullableString, businessApplication string, subtype string, ) *MachineIdentityRequest`

NewMachineIdentityRequest instantiates a new MachineIdentityRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityRequestWithDefaults

`func NewMachineIdentityRequestWithDefaults() *MachineIdentityRequest`

NewMachineIdentityRequestWithDefaults instantiates a new MachineIdentityRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentityRequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityRequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityRequest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineIdentityRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityRequest) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *MachineIdentityRequest) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *MachineIdentityRequest) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *MachineIdentityRequest) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineIdentityRequest) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineIdentityRequest) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineIdentityRequest) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MachineIdentityRequest) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineIdentityRequest) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineIdentityRequest) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MachineIdentityRequest) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetBusinessApplication

`func (o *MachineIdentityRequest) GetBusinessApplication() string`

GetBusinessApplication returns the BusinessApplication field if non-nil, zero value otherwise.

### GetBusinessApplicationOk

`func (o *MachineIdentityRequest) GetBusinessApplicationOk() (*string, bool)`

GetBusinessApplicationOk returns a tuple with the BusinessApplication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplication

`func (o *MachineIdentityRequest) SetBusinessApplication(v string)`

SetBusinessApplication sets BusinessApplication field to given value.


### GetDescription

`func (o *MachineIdentityRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineIdentityRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineIdentityRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineIdentityRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineIdentityRequest) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineIdentityRequest) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineIdentityRequest) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineIdentityRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *MachineIdentityRequest) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *MachineIdentityRequest) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *MachineIdentityRequest) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetOwners

`func (o *MachineIdentityRequest) GetOwners() MachineIdentityDtoOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *MachineIdentityRequest) GetOwnersOk() (*MachineIdentityDtoOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *MachineIdentityRequest) SetOwners(v MachineIdentityDtoOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *MachineIdentityRequest) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSourceId

`func (o *MachineIdentityRequest) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineIdentityRequest) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineIdentityRequest) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineIdentityRequest) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *MachineIdentityRequest) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *MachineIdentityRequest) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *MachineIdentityRequest) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *MachineIdentityRequest) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *MachineIdentityRequest) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *MachineIdentityRequest) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *MachineIdentityRequest) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *MachineIdentityRequest) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *MachineIdentityRequest) GetUserEntitlements() []MachineIdentityRequestUserEntitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *MachineIdentityRequest) GetUserEntitlementsOk() (*[]MachineIdentityRequestUserEntitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *MachineIdentityRequest) SetUserEntitlements(v []MachineIdentityRequestUserEntitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *MachineIdentityRequest) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.


