---
id: v1-provisioningcriterialevel1
title: Provisioningcriterialevel1
pagination_label: Provisioningcriterialevel1
sidebar_label: Provisioningcriterialevel1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Provisioningcriterialevel1', 'V1Provisioningcriterialevel1'] 
slug: /tools/sdk/go/dimensions/models/provisioningcriterialevel1
tags: ['SDK', 'Software Development Kit', 'Provisioningcriterialevel1', 'V1Provisioningcriterialevel1']
---

# Provisioningcriterialevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Provisioningcriteriaoperation**](provisioningcriteriaoperation) |  | [optional] 
**Attribute** | Pointer to **NullableString** | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [optional] 
**Value** | Pointer to **NullableString** | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [optional] 
**Children** | Pointer to [**[]Provisioningcriterialevel2**](provisioningcriterialevel2) | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Methods

### NewProvisioningcriterialevel1

`func NewProvisioningcriterialevel1() *Provisioningcriterialevel1`

NewProvisioningcriterialevel1 instantiates a new Provisioningcriterialevel1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningcriterialevel1WithDefaults

`func NewProvisioningcriterialevel1WithDefaults() *Provisioningcriterialevel1`

NewProvisioningcriterialevel1WithDefaults instantiates a new Provisioningcriterialevel1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Provisioningcriterialevel1) GetOperation() Provisioningcriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Provisioningcriterialevel1) GetOperationOk() (*Provisioningcriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Provisioningcriterialevel1) SetOperation(v Provisioningcriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Provisioningcriterialevel1) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetAttribute

`func (o *Provisioningcriterialevel1) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Provisioningcriterialevel1) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Provisioningcriterialevel1) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Provisioningcriterialevel1) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *Provisioningcriterialevel1) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *Provisioningcriterialevel1) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *Provisioningcriterialevel1) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Provisioningcriterialevel1) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Provisioningcriterialevel1) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Provisioningcriterialevel1) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Provisioningcriterialevel1) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Provisioningcriterialevel1) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *Provisioningcriterialevel1) GetChildren() []Provisioningcriterialevel2`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Provisioningcriterialevel1) GetChildrenOk() (*[]Provisioningcriterialevel2, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Provisioningcriterialevel1) SetChildren(v []Provisioningcriterialevel2)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Provisioningcriterialevel1) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Provisioningcriterialevel1) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Provisioningcriterialevel1) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

