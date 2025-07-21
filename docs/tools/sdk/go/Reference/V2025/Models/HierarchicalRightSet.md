---
id: v2025-hierarchical-right-set
title: HierarchicalRightSet
pagination_label: HierarchicalRightSet
sidebar_label: HierarchicalRightSet
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'HierarchicalRightSet', 'V2025HierarchicalRightSet'] 
slug: /tools/sdk/go/v2025/models/hierarchical-right-set
tags: ['SDK', 'Software Development Kit', 'HierarchicalRightSet', 'V2025HierarchicalRightSet']
---

# HierarchicalRightSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the RightSet. | [optional] 
**Name** | Pointer to **string** | The human-readable name of the RightSet. | [optional] 
**Description** | Pointer to **NullableString** | A human-readable description of the RightSet. | [optional] 
**Category** | Pointer to **string** | The category of the RightSet. | [optional] 
**NestedConfig** | Pointer to [**NestedConfig**](nested-config) |  | [optional] 
**Children** | Pointer to [**[]HierarchicalRightSet**](hierarchical-right-set) | List of child HierarchicalRightSets. | [optional] 

## Methods

### NewHierarchicalRightSet

`func NewHierarchicalRightSet() *HierarchicalRightSet`

NewHierarchicalRightSet instantiates a new HierarchicalRightSet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHierarchicalRightSetWithDefaults

`func NewHierarchicalRightSetWithDefaults() *HierarchicalRightSet`

NewHierarchicalRightSetWithDefaults instantiates a new HierarchicalRightSet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *HierarchicalRightSet) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *HierarchicalRightSet) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *HierarchicalRightSet) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *HierarchicalRightSet) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *HierarchicalRightSet) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *HierarchicalRightSet) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *HierarchicalRightSet) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *HierarchicalRightSet) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *HierarchicalRightSet) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HierarchicalRightSet) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HierarchicalRightSet) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HierarchicalRightSet) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *HierarchicalRightSet) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *HierarchicalRightSet) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCategory

`func (o *HierarchicalRightSet) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *HierarchicalRightSet) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *HierarchicalRightSet) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *HierarchicalRightSet) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetNestedConfig

`func (o *HierarchicalRightSet) GetNestedConfig() NestedConfig`

GetNestedConfig returns the NestedConfig field if non-nil, zero value otherwise.

### GetNestedConfigOk

`func (o *HierarchicalRightSet) GetNestedConfigOk() (*NestedConfig, bool)`

GetNestedConfigOk returns a tuple with the NestedConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNestedConfig

`func (o *HierarchicalRightSet) SetNestedConfig(v NestedConfig)`

SetNestedConfig sets NestedConfig field to given value.

### HasNestedConfig

`func (o *HierarchicalRightSet) HasNestedConfig() bool`

HasNestedConfig returns a boolean if a field has been set.

### GetChildren

`func (o *HierarchicalRightSet) GetChildren() []HierarchicalRightSet`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *HierarchicalRightSet) GetChildrenOk() (*[]HierarchicalRightSet, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *HierarchicalRightSet) SetChildren(v []HierarchicalRightSet)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *HierarchicalRightSet) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


