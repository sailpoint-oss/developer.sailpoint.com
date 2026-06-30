---
id: v1-hierarchicalrightset
title: Hierarchicalrightset
pagination_label: Hierarchicalrightset
sidebar_label: Hierarchicalrightset
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Hierarchicalrightset', 'V1Hierarchicalrightset'] 
slug: /tools/sdk/go/customuserlevels/models/hierarchicalrightset
tags: ['SDK', 'Software Development Kit', 'Hierarchicalrightset', 'V1Hierarchicalrightset']
---

# Hierarchicalrightset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the RightSet. | [optional] 
**Name** | Pointer to **string** | The human-readable name of the RightSet. | [optional] 
**Description** | Pointer to **NullableString** | A human-readable description of the RightSet. | [optional] 
**Category** | Pointer to **string** | The category of the RightSet. | [optional] 
**NestedConfig** | Pointer to [**Nestedconfig**](nestedconfig) |  | [optional] 
**Children** | Pointer to [**[]Hierarchicalrightset**](hierarchicalrightset) | List of child HierarchicalRightSets. | [optional] 

## Methods

### NewHierarchicalrightset

`func NewHierarchicalrightset() *Hierarchicalrightset`

NewHierarchicalrightset instantiates a new Hierarchicalrightset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHierarchicalrightsetWithDefaults

`func NewHierarchicalrightsetWithDefaults() *Hierarchicalrightset`

NewHierarchicalrightsetWithDefaults instantiates a new Hierarchicalrightset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Hierarchicalrightset) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Hierarchicalrightset) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Hierarchicalrightset) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Hierarchicalrightset) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Hierarchicalrightset) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Hierarchicalrightset) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Hierarchicalrightset) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Hierarchicalrightset) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Hierarchicalrightset) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Hierarchicalrightset) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Hierarchicalrightset) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Hierarchicalrightset) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Hierarchicalrightset) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Hierarchicalrightset) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCategory

`func (o *Hierarchicalrightset) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *Hierarchicalrightset) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *Hierarchicalrightset) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *Hierarchicalrightset) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetNestedConfig

`func (o *Hierarchicalrightset) GetNestedConfig() Nestedconfig`

GetNestedConfig returns the NestedConfig field if non-nil, zero value otherwise.

### GetNestedConfigOk

`func (o *Hierarchicalrightset) GetNestedConfigOk() (*Nestedconfig, bool)`

GetNestedConfigOk returns a tuple with the NestedConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNestedConfig

`func (o *Hierarchicalrightset) SetNestedConfig(v Nestedconfig)`

SetNestedConfig sets NestedConfig field to given value.

### HasNestedConfig

`func (o *Hierarchicalrightset) HasNestedConfig() bool`

HasNestedConfig returns a boolean if a field has been set.

### GetChildren

`func (o *Hierarchicalrightset) GetChildren() []Hierarchicalrightset`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Hierarchicalrightset) GetChildrenOk() (*[]Hierarchicalrightset, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Hierarchicalrightset) SetChildren(v []Hierarchicalrightset)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Hierarchicalrightset) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


