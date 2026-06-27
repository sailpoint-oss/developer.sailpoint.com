---
id: v1-dimensioncriterialevel3
title: Dimensioncriterialevel3
pagination_label: Dimensioncriterialevel3
sidebar_label: Dimensioncriterialevel3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensioncriterialevel3', 'V1Dimensioncriterialevel3'] 
slug: /tools/sdk/go/dimensions/models/dimensioncriterialevel3
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel3', 'V1Dimensioncriterialevel3']
---

# Dimensioncriterialevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**Key** | Pointer to [**NullableDimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**StringValue** | Pointer to **string** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 

## Methods

### NewDimensioncriterialevel3

`func NewDimensioncriterialevel3() *Dimensioncriterialevel3`

NewDimensioncriterialevel3 instantiates a new Dimensioncriterialevel3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensioncriterialevel3WithDefaults

`func NewDimensioncriterialevel3WithDefaults() *Dimensioncriterialevel3`

NewDimensioncriterialevel3WithDefaults instantiates a new Dimensioncriterialevel3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Dimensioncriterialevel3) GetOperation() Dimensioncriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Dimensioncriterialevel3) GetOperationOk() (*Dimensioncriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Dimensioncriterialevel3) SetOperation(v Dimensioncriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Dimensioncriterialevel3) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *Dimensioncriterialevel3) GetKey() Dimensioncriteriakey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Dimensioncriterialevel3) GetKeyOk() (*Dimensioncriteriakey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Dimensioncriterialevel3) SetKey(v Dimensioncriteriakey)`

SetKey sets Key field to given value.

### HasKey

`func (o *Dimensioncriterialevel3) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *Dimensioncriterialevel3) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *Dimensioncriterialevel3) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *Dimensioncriterialevel3) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *Dimensioncriterialevel3) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *Dimensioncriterialevel3) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *Dimensioncriterialevel3) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.


