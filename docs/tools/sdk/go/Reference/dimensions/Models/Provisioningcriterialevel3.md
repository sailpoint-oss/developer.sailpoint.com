---
id: v1-provisioningcriterialevel3
title: Provisioningcriterialevel3
pagination_label: Provisioningcriterialevel3
sidebar_label: Provisioningcriterialevel3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Provisioningcriterialevel3', 'V1Provisioningcriterialevel3'] 
slug: /tools/sdk/go/dimensions/models/provisioningcriterialevel3
tags: ['SDK', 'Software Development Kit', 'Provisioningcriterialevel3', 'V1Provisioningcriterialevel3']
---

# Provisioningcriterialevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Provisioningcriteriaoperation**](provisioningcriteriaoperation) |  | [optional] 
**Attribute** | Pointer to **NullableString** | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [optional] 
**Value** | Pointer to **NullableString** | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [optional] 
**Children** | Pointer to **NullableString** | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Methods

### NewProvisioningcriterialevel3

`func NewProvisioningcriterialevel3() *Provisioningcriterialevel3`

NewProvisioningcriterialevel3 instantiates a new Provisioningcriterialevel3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningcriterialevel3WithDefaults

`func NewProvisioningcriterialevel3WithDefaults() *Provisioningcriterialevel3`

NewProvisioningcriterialevel3WithDefaults instantiates a new Provisioningcriterialevel3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Provisioningcriterialevel3) GetOperation() Provisioningcriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Provisioningcriterialevel3) GetOperationOk() (*Provisioningcriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Provisioningcriterialevel3) SetOperation(v Provisioningcriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Provisioningcriterialevel3) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetAttribute

`func (o *Provisioningcriterialevel3) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Provisioningcriterialevel3) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Provisioningcriterialevel3) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Provisioningcriterialevel3) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *Provisioningcriterialevel3) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *Provisioningcriterialevel3) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *Provisioningcriterialevel3) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Provisioningcriterialevel3) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Provisioningcriterialevel3) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Provisioningcriterialevel3) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Provisioningcriterialevel3) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Provisioningcriterialevel3) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *Provisioningcriterialevel3) GetChildren() string`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Provisioningcriterialevel3) GetChildrenOk() (*string, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Provisioningcriterialevel3) SetChildren(v string)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Provisioningcriterialevel3) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Provisioningcriterialevel3) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Provisioningcriterialevel3) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

