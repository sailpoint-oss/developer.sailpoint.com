---
id: role-criteria-level3
title: RoleCriteriaLevel3
pagination_label: RoleCriteriaLevel3
sidebar_label: RoleCriteriaLevel3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleCriteriaLevel3', 'RoleCriteriaLevel3'] 
slug: /tools/sdk/go/v3/models/role-criteria-level3
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel3', 'RoleCriteriaLevel3']
---

# RoleCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**RoleCriteriaOperation**](role-criteria-operation) |  | [optional] 
**Key** | Pointer to [**NullableRoleCriteriaKey**](role-criteria-key) |  | [optional] 
**StringValue** | Pointer to **string** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 

## Methods

### NewRoleCriteriaLevel3

`func NewRoleCriteriaLevel3() *RoleCriteriaLevel3`

NewRoleCriteriaLevel3 instantiates a new RoleCriteriaLevel3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleCriteriaLevel3WithDefaults

`func NewRoleCriteriaLevel3WithDefaults() *RoleCriteriaLevel3`

NewRoleCriteriaLevel3WithDefaults instantiates a new RoleCriteriaLevel3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *RoleCriteriaLevel3) GetOperation() RoleCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *RoleCriteriaLevel3) GetOperationOk() (*RoleCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *RoleCriteriaLevel3) SetOperation(v RoleCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *RoleCriteriaLevel3) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *RoleCriteriaLevel3) GetKey() RoleCriteriaKey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *RoleCriteriaLevel3) GetKeyOk() (*RoleCriteriaKey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *RoleCriteriaLevel3) SetKey(v RoleCriteriaKey)`

SetKey sets Key field to given value.

### HasKey

`func (o *RoleCriteriaLevel3) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *RoleCriteriaLevel3) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *RoleCriteriaLevel3) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *RoleCriteriaLevel3) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *RoleCriteriaLevel3) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *RoleCriteriaLevel3) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *RoleCriteriaLevel3) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.


