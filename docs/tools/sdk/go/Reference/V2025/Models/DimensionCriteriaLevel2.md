---
id: v2025-dimension-criteria-level2
title: DimensionCriteriaLevel2
pagination_label: DimensionCriteriaLevel2
sidebar_label: DimensionCriteriaLevel2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionCriteriaLevel2', 'V2025DimensionCriteriaLevel2'] 
slug: /tools/sdk/go/v2025/models/dimension-criteria-level2
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel2', 'V2025DimensionCriteriaLevel2']
---

# DimensionCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**DimensionCriteriaOperation**](dimension-criteria-operation) |  | [optional] 
**Key** | Pointer to [**NullableDimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | Pointer to [**[]DimensionCriteriaLevel3**](dimension-criteria-level3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Methods

### NewDimensionCriteriaLevel2

`func NewDimensionCriteriaLevel2() *DimensionCriteriaLevel2`

NewDimensionCriteriaLevel2 instantiates a new DimensionCriteriaLevel2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionCriteriaLevel2WithDefaults

`func NewDimensionCriteriaLevel2WithDefaults() *DimensionCriteriaLevel2`

NewDimensionCriteriaLevel2WithDefaults instantiates a new DimensionCriteriaLevel2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *DimensionCriteriaLevel2) GetOperation() DimensionCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *DimensionCriteriaLevel2) GetOperationOk() (*DimensionCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *DimensionCriteriaLevel2) SetOperation(v DimensionCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *DimensionCriteriaLevel2) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *DimensionCriteriaLevel2) GetKey() DimensionCriteriaKey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *DimensionCriteriaLevel2) GetKeyOk() (*DimensionCriteriaKey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *DimensionCriteriaLevel2) SetKey(v DimensionCriteriaKey)`

SetKey sets Key field to given value.

### HasKey

`func (o *DimensionCriteriaLevel2) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *DimensionCriteriaLevel2) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *DimensionCriteriaLevel2) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *DimensionCriteriaLevel2) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *DimensionCriteriaLevel2) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *DimensionCriteriaLevel2) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *DimensionCriteriaLevel2) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *DimensionCriteriaLevel2) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *DimensionCriteriaLevel2) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil
### GetChildren

`func (o *DimensionCriteriaLevel2) GetChildren() []DimensionCriteriaLevel3`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *DimensionCriteriaLevel2) GetChildrenOk() (*[]DimensionCriteriaLevel3, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *DimensionCriteriaLevel2) SetChildren(v []DimensionCriteriaLevel3)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *DimensionCriteriaLevel2) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *DimensionCriteriaLevel2) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *DimensionCriteriaLevel2) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

