---
id: dimension-criteria-level1
title: DimensionCriteriaLevel1
pagination_label: DimensionCriteriaLevel1
sidebar_label: DimensionCriteriaLevel1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionCriteriaLevel1', 'DimensionCriteriaLevel1'] 
slug: /tools/sdk/go//models/dimension-criteria-level1
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel1', 'DimensionCriteriaLevel1']
---

# DimensionCriteriaLevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**DimensionCriteriaOperation**](dimension-criteria-operation) |  | [optional] 
**Key** | Pointer to [**NullableDimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | Pointer to [**[]DimensionCriteriaLevel2**](dimension-criteria-level2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Methods

### NewDimensionCriteriaLevel1

`func NewDimensionCriteriaLevel1() *DimensionCriteriaLevel1`

NewDimensionCriteriaLevel1 instantiates a new DimensionCriteriaLevel1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionCriteriaLevel1WithDefaults

`func NewDimensionCriteriaLevel1WithDefaults() *DimensionCriteriaLevel1`

NewDimensionCriteriaLevel1WithDefaults instantiates a new DimensionCriteriaLevel1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *DimensionCriteriaLevel1) GetOperation() DimensionCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *DimensionCriteriaLevel1) GetOperationOk() (*DimensionCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *DimensionCriteriaLevel1) SetOperation(v DimensionCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *DimensionCriteriaLevel1) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *DimensionCriteriaLevel1) GetKey() DimensionCriteriaKey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *DimensionCriteriaLevel1) GetKeyOk() (*DimensionCriteriaKey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *DimensionCriteriaLevel1) SetKey(v DimensionCriteriaKey)`

SetKey sets Key field to given value.

### HasKey

`func (o *DimensionCriteriaLevel1) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *DimensionCriteriaLevel1) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *DimensionCriteriaLevel1) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *DimensionCriteriaLevel1) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *DimensionCriteriaLevel1) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *DimensionCriteriaLevel1) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *DimensionCriteriaLevel1) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *DimensionCriteriaLevel1) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *DimensionCriteriaLevel1) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil
### GetChildren

`func (o *DimensionCriteriaLevel1) GetChildren() []DimensionCriteriaLevel2`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *DimensionCriteriaLevel1) GetChildrenOk() (*[]DimensionCriteriaLevel2, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *DimensionCriteriaLevel1) SetChildren(v []DimensionCriteriaLevel2)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *DimensionCriteriaLevel1) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *DimensionCriteriaLevel1) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *DimensionCriteriaLevel1) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

