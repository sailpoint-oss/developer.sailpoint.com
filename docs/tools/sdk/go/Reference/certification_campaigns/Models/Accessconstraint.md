---
id: v1-accessconstraint
title: Accessconstraint
pagination_label: Accessconstraint
sidebar_label: Accessconstraint
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessconstraint', 'V1Accessconstraint'] 
slug: /tools/sdk/go/certificationcampaigns/models/accessconstraint
tags: ['SDK', 'Software Development Kit', 'Accessconstraint', 'V1Accessconstraint']
---

# Accessconstraint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of Access | 
**Ids** | Pointer to **[]string** | Must be set only if operator is SELECTED. | [optional] 
**Operator** | **string** | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | 

## Methods

### NewAccessconstraint

`func NewAccessconstraint(type_ string, operator string, ) *Accessconstraint`

NewAccessconstraint instantiates a new Accessconstraint object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessconstraintWithDefaults

`func NewAccessconstraintWithDefaults() *Accessconstraint`

NewAccessconstraintWithDefaults instantiates a new Accessconstraint object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Accessconstraint) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessconstraint) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessconstraint) SetType(v string)`

SetType sets Type field to given value.


### GetIds

`func (o *Accessconstraint) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *Accessconstraint) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *Accessconstraint) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *Accessconstraint) HasIds() bool`

HasIds returns a boolean if a field has been set.

### GetOperator

`func (o *Accessconstraint) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *Accessconstraint) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *Accessconstraint) SetOperator(v string)`

SetOperator sets Operator field to given value.



