---
id: v1-rolecriterialevel1
title: Rolecriterialevel1
pagination_label: Rolecriterialevel1
sidebar_label: Rolecriterialevel1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolecriterialevel1', 'V1Rolecriterialevel1'] 
slug: /tools/sdk/go/roles/models/rolecriterialevel1
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel1', 'V1Rolecriterialevel1']
---

# Rolecriterialevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Rolecriteriaoperation**](rolecriteriaoperation) |  | [optional] 
**Key** | Pointer to [**NullableRolecriteriakey**](rolecriteriakey) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | Pointer to [**[]Rolecriterialevel2**](rolecriterialevel2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Methods

### NewRolecriterialevel1

`func NewRolecriterialevel1() *Rolecriterialevel1`

NewRolecriterialevel1 instantiates a new Rolecriterialevel1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolecriterialevel1WithDefaults

`func NewRolecriterialevel1WithDefaults() *Rolecriterialevel1`

NewRolecriterialevel1WithDefaults instantiates a new Rolecriterialevel1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Rolecriterialevel1) GetOperation() Rolecriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Rolecriterialevel1) GetOperationOk() (*Rolecriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Rolecriterialevel1) SetOperation(v Rolecriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Rolecriterialevel1) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *Rolecriterialevel1) GetKey() Rolecriteriakey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Rolecriterialevel1) GetKeyOk() (*Rolecriteriakey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Rolecriterialevel1) SetKey(v Rolecriteriakey)`

SetKey sets Key field to given value.

### HasKey

`func (o *Rolecriterialevel1) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *Rolecriterialevel1) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *Rolecriterialevel1) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *Rolecriterialevel1) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *Rolecriterialevel1) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *Rolecriterialevel1) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *Rolecriterialevel1) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *Rolecriterialevel1) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *Rolecriterialevel1) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil
### GetChildren

`func (o *Rolecriterialevel1) GetChildren() []Rolecriterialevel2`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Rolecriterialevel1) GetChildrenOk() (*[]Rolecriterialevel2, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Rolecriterialevel1) SetChildren(v []Rolecriterialevel2)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Rolecriterialevel1) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Rolecriterialevel1) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Rolecriterialevel1) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

