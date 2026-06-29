---
id: v1-identityattribute2
title: Identityattribute2
pagination_label: Identityattribute2
sidebar_label: Identityattribute2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityattribute2', 'V1Identityattribute2'] 
slug: /tools/sdk/go/identityattributes/models/identityattribute2
tags: ['SDK', 'Software Development Kit', 'Identityattribute2', 'V1Identityattribute2']
---

# Identityattribute2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Identity attribute's technical name. | 
**DisplayName** | Pointer to **string** | Identity attribute's business-friendly name. | [optional] 
**Standard** | Pointer to **bool** | Indicates whether the attribute is 'standard' or 'default'. | [optional] [default to false]
**Type** | Pointer to **NullableString** | Identity attribute's type. | [optional] 
**Multi** | Pointer to **bool** | Indicates whether the identity attribute is multi-valued. | [optional] [default to false]
**Searchable** | Pointer to **bool** | Indicates whether the identity attribute is searchable. | [optional] [default to false]
**System** | Pointer to **bool** | Indicates whether the identity attribute is 'system', meaning that it doesn't have a source and isn't configurable. | [optional] [default to false]
**Sources** | Pointer to [**[]Source2**](source2) | Identity attribute's list of sources - this specifies how the rule's value is derived. | [optional] 

## Methods

### NewIdentityattribute2

`func NewIdentityattribute2(name string, ) *Identityattribute2`

NewIdentityattribute2 instantiates a new Identityattribute2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityattribute2WithDefaults

`func NewIdentityattribute2WithDefaults() *Identityattribute2`

NewIdentityattribute2WithDefaults instantiates a new Identityattribute2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Identityattribute2) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityattribute2) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityattribute2) SetName(v string)`

SetName sets Name field to given value.


### GetDisplayName

`func (o *Identityattribute2) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Identityattribute2) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Identityattribute2) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Identityattribute2) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetStandard

`func (o *Identityattribute2) GetStandard() bool`

GetStandard returns the Standard field if non-nil, zero value otherwise.

### GetStandardOk

`func (o *Identityattribute2) GetStandardOk() (*bool, bool)`

GetStandardOk returns a tuple with the Standard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandard

`func (o *Identityattribute2) SetStandard(v bool)`

SetStandard sets Standard field to given value.

### HasStandard

`func (o *Identityattribute2) HasStandard() bool`

HasStandard returns a boolean if a field has been set.

### GetType

`func (o *Identityattribute2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Identityattribute2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Identityattribute2) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Identityattribute2) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Identityattribute2) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Identityattribute2) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetMulti

`func (o *Identityattribute2) GetMulti() bool`

GetMulti returns the Multi field if non-nil, zero value otherwise.

### GetMultiOk

`func (o *Identityattribute2) GetMultiOk() (*bool, bool)`

GetMultiOk returns a tuple with the Multi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMulti

`func (o *Identityattribute2) SetMulti(v bool)`

SetMulti sets Multi field to given value.

### HasMulti

`func (o *Identityattribute2) HasMulti() bool`

HasMulti returns a boolean if a field has been set.

### GetSearchable

`func (o *Identityattribute2) GetSearchable() bool`

GetSearchable returns the Searchable field if non-nil, zero value otherwise.

### GetSearchableOk

`func (o *Identityattribute2) GetSearchableOk() (*bool, bool)`

GetSearchableOk returns a tuple with the Searchable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchable

`func (o *Identityattribute2) SetSearchable(v bool)`

SetSearchable sets Searchable field to given value.

### HasSearchable

`func (o *Identityattribute2) HasSearchable() bool`

HasSearchable returns a boolean if a field has been set.

### GetSystem

`func (o *Identityattribute2) GetSystem() bool`

GetSystem returns the System field if non-nil, zero value otherwise.

### GetSystemOk

`func (o *Identityattribute2) GetSystemOk() (*bool, bool)`

GetSystemOk returns a tuple with the System field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystem

`func (o *Identityattribute2) SetSystem(v bool)`

SetSystem sets System field to given value.

### HasSystem

`func (o *Identityattribute2) HasSystem() bool`

HasSystem returns a boolean if a field has been set.

### GetSources

`func (o *Identityattribute2) GetSources() []Source2`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *Identityattribute2) GetSourcesOk() (*[]Source2, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *Identityattribute2) SetSources(v []Source2)`

SetSources sets Sources field to given value.

### HasSources

`func (o *Identityattribute2) HasSources() bool`

HasSources returns a boolean if a field has been set.


