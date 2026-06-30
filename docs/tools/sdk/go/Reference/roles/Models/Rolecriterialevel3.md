---
id: v1-rolecriterialevel3
title: Rolecriterialevel3
pagination_label: Rolecriterialevel3
sidebar_label: Rolecriterialevel3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolecriterialevel3', 'V1Rolecriterialevel3'] 
slug: /tools/sdk/go/roles/models/rolecriterialevel3
tags: ['SDK', 'Software Development Kit', 'Rolecriterialevel3', 'V1Rolecriterialevel3']
---

# Rolecriterialevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Rolecriteriaoperation**](rolecriteriaoperation) |  | [optional] 
**Key** | Pointer to [**NullableRolecriteriakey**](rolecriteriakey) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 

## Methods

### NewRolecriterialevel3

`func NewRolecriterialevel3() *Rolecriterialevel3`

NewRolecriterialevel3 instantiates a new Rolecriterialevel3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolecriterialevel3WithDefaults

`func NewRolecriterialevel3WithDefaults() *Rolecriterialevel3`

NewRolecriterialevel3WithDefaults instantiates a new Rolecriterialevel3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Rolecriterialevel3) GetOperation() Rolecriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Rolecriterialevel3) GetOperationOk() (*Rolecriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Rolecriterialevel3) SetOperation(v Rolecriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Rolecriterialevel3) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *Rolecriterialevel3) GetKey() Rolecriteriakey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Rolecriterialevel3) GetKeyOk() (*Rolecriteriakey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Rolecriterialevel3) SetKey(v Rolecriteriakey)`

SetKey sets Key field to given value.

### HasKey

`func (o *Rolecriterialevel3) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *Rolecriterialevel3) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *Rolecriterialevel3) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *Rolecriterialevel3) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *Rolecriterialevel3) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *Rolecriterialevel3) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *Rolecriterialevel3) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *Rolecriterialevel3) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *Rolecriterialevel3) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil

