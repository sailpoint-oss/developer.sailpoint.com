---
id: dimension-criteria-level3
title: DimensionCriteriaLevel3
pagination_label: DimensionCriteriaLevel3
sidebar_label: DimensionCriteriaLevel3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DimensionCriteriaLevel3', 'DimensionCriteriaLevel3'] 
slug: /tools/sdk/go//models/dimension-criteria-level3
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel3', 'DimensionCriteriaLevel3']
---

# DimensionCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**DimensionCriteriaOperation**](dimension-criteria-operation) |  | [optional] 
**Key** | Pointer to [**NullableDimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**StringValue** | Pointer to **string** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 

## Methods

### NewDimensionCriteriaLevel3

`func NewDimensionCriteriaLevel3() *DimensionCriteriaLevel3`

NewDimensionCriteriaLevel3 instantiates a new DimensionCriteriaLevel3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensionCriteriaLevel3WithDefaults

`func NewDimensionCriteriaLevel3WithDefaults() *DimensionCriteriaLevel3`

NewDimensionCriteriaLevel3WithDefaults instantiates a new DimensionCriteriaLevel3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *DimensionCriteriaLevel3) GetOperation() DimensionCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *DimensionCriteriaLevel3) GetOperationOk() (*DimensionCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *DimensionCriteriaLevel3) SetOperation(v DimensionCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *DimensionCriteriaLevel3) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *DimensionCriteriaLevel3) GetKey() DimensionCriteriaKey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *DimensionCriteriaLevel3) GetKeyOk() (*DimensionCriteriaKey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *DimensionCriteriaLevel3) SetKey(v DimensionCriteriaKey)`

SetKey sets Key field to given value.

### HasKey

`func (o *DimensionCriteriaLevel3) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *DimensionCriteriaLevel3) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *DimensionCriteriaLevel3) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *DimensionCriteriaLevel3) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *DimensionCriteriaLevel3) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *DimensionCriteriaLevel3) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *DimensionCriteriaLevel3) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.


