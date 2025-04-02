---
id: access-constraint
title: AccessConstraint
pagination_label: AccessConstraint
sidebar_label: AccessConstraint
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessConstraint', 'AccessConstraint'] 
slug: /tools/sdk/go//models/access-constraint
tags: ['SDK', 'Software Development Kit', 'AccessConstraint', 'AccessConstraint']
---

# AccessConstraint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of Access | 
**Ids** | Pointer to **[]string** | Must be set only if operator is SELECTED. | [optional] 
**Operator** | **string** | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | 

## Methods

### NewAccessConstraint

`func NewAccessConstraint(type_ string, operator string, ) *AccessConstraint`

NewAccessConstraint instantiates a new AccessConstraint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessConstraintWithDefaults

`func NewAccessConstraintWithDefaults() *AccessConstraint`

NewAccessConstraintWithDefaults instantiates a new AccessConstraint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessConstraint) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessConstraint) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessConstraint) SetType(v string)`

SetType sets Type field to given value.


### GetIds

`func (o *AccessConstraint) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *AccessConstraint) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *AccessConstraint) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *AccessConstraint) HasIds() bool`

HasIds returns a boolean if a field has been set.

### GetOperator

`func (o *AccessConstraint) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *AccessConstraint) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *AccessConstraint) SetOperator(v string)`

SetOperator sets Operator field to given value.



