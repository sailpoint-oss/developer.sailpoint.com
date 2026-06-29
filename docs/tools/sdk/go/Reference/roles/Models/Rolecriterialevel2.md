---
id: v1-rolecriterialevel2
title: Rolecriterialevel2
pagination_label: Rolecriterialevel2
sidebar_label: Rolecriterialevel2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolecriterialevel2', 'V1Rolecriterialevel2'] 
slug: /tools/sdk/go/roles/models/rolecriterialevel2
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel2', 'V1Rolecriterialevel2']
---

# Rolecriterialevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Rolecriteriaoperation**](rolecriteriaoperation) |  | [optional] 
**Key** | Pointer to [**NullableRolecriteriakey**](rolecriteriakey) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | Pointer to [**[]Rolecriterialevel3**](rolecriterialevel3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Methods

### NewRolecriterialevel2

`func NewRolecriterialevel2() *Rolecriterialevel2`

NewRolecriterialevel2 instantiates a new Rolecriterialevel2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolecriterialevel2WithDefaults

`func NewRolecriterialevel2WithDefaults() *Rolecriterialevel2`

NewRolecriterialevel2WithDefaults instantiates a new Rolecriterialevel2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Rolecriterialevel2) GetOperation() Rolecriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Rolecriterialevel2) GetOperationOk() (*Rolecriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Rolecriterialevel2) SetOperation(v Rolecriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Rolecriterialevel2) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *Rolecriterialevel2) GetKey() Rolecriteriakey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Rolecriterialevel2) GetKeyOk() (*Rolecriteriakey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Rolecriterialevel2) SetKey(v Rolecriteriakey)`

SetKey sets Key field to given value.

### HasKey

`func (o *Rolecriterialevel2) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *Rolecriterialevel2) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *Rolecriterialevel2) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *Rolecriterialevel2) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *Rolecriterialevel2) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *Rolecriterialevel2) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *Rolecriterialevel2) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *Rolecriterialevel2) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *Rolecriterialevel2) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil
### GetChildren

`func (o *Rolecriterialevel2) GetChildren() []Rolecriterialevel3`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Rolecriterialevel2) GetChildrenOk() (*[]Rolecriterialevel3, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Rolecriterialevel2) SetChildren(v []Rolecriterialevel3)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Rolecriterialevel2) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Rolecriterialevel2) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Rolecriterialevel2) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

