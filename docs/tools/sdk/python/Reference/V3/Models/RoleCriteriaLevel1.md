---
id: role-criteria-level1
title: RoleCriteriaLevel1
pagination_label: RoleCriteriaLevel1
sidebar_label: RoleCriteriaLevel1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleCriteriaLevel1', 'RoleCriteriaLevel1'] 
slug: /tools/sdk/go/v3/models/role-criteria-level1
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel1', 'RoleCriteriaLevel1']
---

# RoleCriteriaLevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**RoleCriteriaOperation**](role-criteria-operation) |  | [optional] 
**Key** | Pointer to [**NullableRoleCriteriaKey**](role-criteria-key) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | Pointer to [**[]RoleCriteriaLevel2**](role-criteria-level2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Methods

### NewRoleCriteriaLevel1

`func NewRoleCriteriaLevel1() *RoleCriteriaLevel1`

NewRoleCriteriaLevel1 instantiates a new RoleCriteriaLevel1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleCriteriaLevel1WithDefaults

`func NewRoleCriteriaLevel1WithDefaults() *RoleCriteriaLevel1`

NewRoleCriteriaLevel1WithDefaults instantiates a new RoleCriteriaLevel1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *RoleCriteriaLevel1) GetOperation() RoleCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *RoleCriteriaLevel1) GetOperationOk() (*RoleCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *RoleCriteriaLevel1) SetOperation(v RoleCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *RoleCriteriaLevel1) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *RoleCriteriaLevel1) GetKey() RoleCriteriaKey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *RoleCriteriaLevel1) GetKeyOk() (*RoleCriteriaKey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *RoleCriteriaLevel1) SetKey(v RoleCriteriaKey)`

SetKey sets Key field to given value.

### HasKey

`func (o *RoleCriteriaLevel1) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *RoleCriteriaLevel1) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *RoleCriteriaLevel1) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *RoleCriteriaLevel1) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *RoleCriteriaLevel1) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *RoleCriteriaLevel1) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *RoleCriteriaLevel1) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *RoleCriteriaLevel1) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *RoleCriteriaLevel1) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil
### GetChildren

`func (o *RoleCriteriaLevel1) GetChildren() []RoleCriteriaLevel2`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *RoleCriteriaLevel1) GetChildrenOk() (*[]RoleCriteriaLevel2, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *RoleCriteriaLevel1) SetChildren(v []RoleCriteriaLevel2)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *RoleCriteriaLevel1) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *RoleCriteriaLevel1) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *RoleCriteriaLevel1) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

