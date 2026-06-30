---
id: v1-rightsetdto
title: Rightsetdto
pagination_label: Rightsetdto
sidebar_label: Rightsetdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rightsetdto', 'V1Rightsetdto'] 
slug: /tools/sdk/go/customuserlevels/models/rightsetdto
tags: ['SDK', 'Software Development Kit', 'Rightsetdto', 'V1Rightsetdto']
---

# Rightsetdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the RightSet. | [optional] 
**Name** | Pointer to **string** | The human-readable name of the RightSet. | [optional] 
**Description** | Pointer to **string** | A human-readable description of the RightSet. | [optional] 
**Category** | Pointer to **string** | The category of the RightSet. | [optional] 
**Rights** | Pointer to **[]string** | Right is the most granular unit that determines specific API permissions, this is a list of rights associated with the RightSet. | [optional] 
**RightSetIds** | Pointer to **[]string** | List of unique identifiers for related RightSets, current RightSet contains rights from these RightSets. | [optional] 
**UiAssignableChildRightSetIds** | Pointer to **[]string** | List of unique identifiers for UI-assignable child RightSets, used to build UI components. | [optional] 
**UiAssignable** | Pointer to **bool** | Indicates whether the RightSet is UI-assignable. | [optional] [default to false]
**TranslatedName** | Pointer to **string** | The translated name of the RightSet. | [optional] 
**TranslatedDescription** | Pointer to **NullableString** | The translated description of the RightSet. | [optional] 
**ParentId** | Pointer to **NullableString** | The unique identifier of the parent RightSet for UI Assignable RightSet. | [optional] 

## Methods

### NewRightsetdto

`func NewRightsetdto() *Rightsetdto`

NewRightsetdto instantiates a new Rightsetdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRightsetdtoWithDefaults

`func NewRightsetdtoWithDefaults() *Rightsetdto`

NewRightsetdtoWithDefaults instantiates a new Rightsetdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Rightsetdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Rightsetdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Rightsetdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Rightsetdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Rightsetdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Rightsetdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Rightsetdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Rightsetdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Rightsetdto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Rightsetdto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Rightsetdto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Rightsetdto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCategory

`func (o *Rightsetdto) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Rightsetdto) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Rightsetdto) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Rightsetdto) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetRights

`func (o *Rightsetdto) GetRights() []string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *Rightsetdto) GetRightsOk() (*[]string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *Rightsetdto) SetRights(v []string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *Rightsetdto) HasRights() bool`

HasRights returns a boolean if a field has been set.

### GetRightSetIds

`func (o *Rightsetdto) GetRightSetIds() []string`

GetRightSetIds returns the RightSetIds field if non-nil, zero value otherwise.

### GetRightSetIdsOk

`func (o *Rightsetdto) GetRightSetIdsOk() (*[]string, bool)`

GetRightSetIdsOk returns a tuple with the RightSetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightSetIds

`func (o *Rightsetdto) SetRightSetIds(v []string)`

SetRightSetIds sets RightSetIds field to given value.

### HasRightSetIds

`func (o *Rightsetdto) HasRightSetIds() bool`

HasRightSetIds returns a boolean if a field has been set.

### GetUiAssignableChildRightSetIds

`func (o *Rightsetdto) GetUiAssignableChildRightSetIds() []string`

GetUiAssignableChildRightSetIds returns the UiAssignableChildRightSetIds field if non-nil, zero value otherwise.

### GetUiAssignableChildRightSetIdsOk

`func (o *Rightsetdto) GetUiAssignableChildRightSetIdsOk() (*[]string, bool)`

GetUiAssignableChildRightSetIdsOk returns a tuple with the UiAssignableChildRightSetIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUiAssignableChildRightSetIds

`func (o *Rightsetdto) SetUiAssignableChildRightSetIds(v []string)`

SetUiAssignableChildRightSetIds sets UiAssignableChildRightSetIds field to given value.

### HasUiAssignableChildRightSetIds

`func (o *Rightsetdto) HasUiAssignableChildRightSetIds() bool`

HasUiAssignableChildRightSetIds returns a boolean if a field has been set.

### GetUiAssignable

`func (o *Rightsetdto) GetUiAssignable() bool`

GetUiAssignable returns the UiAssignable field if non-nil, zero value otherwise.

### GetUiAssignableOk

`func (o *Rightsetdto) GetUiAssignableOk() (*bool, bool)`

GetUiAssignableOk returns a tuple with the UiAssignable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUiAssignable

`func (o *Rightsetdto) SetUiAssignable(v bool)`

SetUiAssignable sets UiAssignable field to given value.

### HasUiAssignable

`func (o *Rightsetdto) HasUiAssignable() bool`

HasUiAssignable returns a boolean if a field has been set.

### GetTranslatedName

`func (o *Rightsetdto) GetTranslatedName() string`

GetTranslatedName returns the TranslatedName field if non-nil, zero value otherwise.

### GetTranslatedNameOk

`func (o *Rightsetdto) GetTranslatedNameOk() (*string, bool)`

GetTranslatedNameOk returns a tuple with the TranslatedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedName

`func (o *Rightsetdto) SetTranslatedName(v string)`

SetTranslatedName sets TranslatedName field to given value.

### HasTranslatedName

`func (o *Rightsetdto) HasTranslatedName() bool`

HasTranslatedName returns a boolean if a field has been set.

### GetTranslatedDescription

`func (o *Rightsetdto) GetTranslatedDescription() string`

GetTranslatedDescription returns the TranslatedDescription field if non-nil, zero value otherwise.

### GetTranslatedDescriptionOk

`func (o *Rightsetdto) GetTranslatedDescriptionOk() (*string, bool)`

GetTranslatedDescriptionOk returns a tuple with the TranslatedDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatedDescription

`func (o *Rightsetdto) SetTranslatedDescription(v string)`

SetTranslatedDescription sets TranslatedDescription field to given value.

### HasTranslatedDescription

`func (o *Rightsetdto) HasTranslatedDescription() bool`

HasTranslatedDescription returns a boolean if a field has been set.

### SetTranslatedDescriptionNil

`func (o *Rightsetdto) SetTranslatedDescriptionNil(b bool)`

 SetTranslatedDescriptionNil sets the value for TranslatedDescription to be an explicit nil

### UnsetTranslatedDescription
`func (o *Rightsetdto) UnsetTranslatedDescription()`

UnsetTranslatedDescription ensures that no value is present for TranslatedDescription, not even an explicit nil
### GetParentId

`func (o *Rightsetdto) GetParentId() string`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *Rightsetdto) GetParentIdOk() (*string, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *Rightsetdto) SetParentId(v string)`

SetParentId sets ParentId field to given value.

### HasParentId

`func (o *Rightsetdto) HasParentId() bool`

HasParentId returns a boolean if a field has been set.

### SetParentIdNil

`func (o *Rightsetdto) SetParentIdNil(b bool)`

 SetParentIdNil sets the value for ParentId to be an explicit nil

### UnsetParentId
`func (o *Rightsetdto) UnsetParentId()`

UnsetParentId ensures that no value is present for ParentId, not even an explicit nil

