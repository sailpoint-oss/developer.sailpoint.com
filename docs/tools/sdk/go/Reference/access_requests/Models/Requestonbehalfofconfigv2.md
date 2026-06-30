---
id: v1-requestonbehalfofconfigv2
title: Requestonbehalfofconfigv2
pagination_label: Requestonbehalfofconfigv2
sidebar_label: Requestonbehalfofconfigv2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requestonbehalfofconfigv2', 'V1Requestonbehalfofconfigv2'] 
slug: /tools/sdk/go/accessrequests/models/requestonbehalfofconfigv2
tags: ['SDK', 'Software Development Kit', 'Requestonbehalfofconfigv2', 'V1Requestonbehalfofconfigv2']
---

# Requestonbehalfofconfigv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | Pointer to **bool** | If this is true, anyone can request access for anyone. | [optional] [default to false]
**AllowRequestOnBehalfOfEmployeeByManager** | Pointer to **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to false]

## Methods

### NewRequestonbehalfofconfigv2

`func NewRequestonbehalfofconfigv2() *Requestonbehalfofconfigv2`

NewRequestonbehalfofconfigv2 instantiates a new Requestonbehalfofconfigv2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestonbehalfofconfigv2WithDefaults

`func NewRequestonbehalfofconfigv2WithDefaults() *Requestonbehalfofconfigv2`

NewRequestonbehalfofconfigv2WithDefaults instantiates a new Requestonbehalfofconfigv2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *Requestonbehalfofconfigv2) GetAllowRequestOnBehalfOfAnyoneByAnyone() bool`

GetAllowRequestOnBehalfOfAnyoneByAnyone returns the AllowRequestOnBehalfOfAnyoneByAnyone field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfAnyoneByAnyoneOk

`func (o *Requestonbehalfofconfigv2) GetAllowRequestOnBehalfOfAnyoneByAnyoneOk() (*bool, bool)`

GetAllowRequestOnBehalfOfAnyoneByAnyoneOk returns a tuple with the AllowRequestOnBehalfOfAnyoneByAnyone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *Requestonbehalfofconfigv2) SetAllowRequestOnBehalfOfAnyoneByAnyone(v bool)`

SetAllowRequestOnBehalfOfAnyoneByAnyone sets AllowRequestOnBehalfOfAnyoneByAnyone field to given value.

### HasAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *Requestonbehalfofconfigv2) HasAllowRequestOnBehalfOfAnyoneByAnyone() bool`

HasAllowRequestOnBehalfOfAnyoneByAnyone returns a boolean if a field has been set.

### GetAllowRequestOnBehalfOfEmployeeByManager

`func (o *Requestonbehalfofconfigv2) GetAllowRequestOnBehalfOfEmployeeByManager() bool`

GetAllowRequestOnBehalfOfEmployeeByManager returns the AllowRequestOnBehalfOfEmployeeByManager field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfEmployeeByManagerOk

`func (o *Requestonbehalfofconfigv2) GetAllowRequestOnBehalfOfEmployeeByManagerOk() (*bool, bool)`

GetAllowRequestOnBehalfOfEmployeeByManagerOk returns a tuple with the AllowRequestOnBehalfOfEmployeeByManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfEmployeeByManager

`func (o *Requestonbehalfofconfigv2) SetAllowRequestOnBehalfOfEmployeeByManager(v bool)`

SetAllowRequestOnBehalfOfEmployeeByManager sets AllowRequestOnBehalfOfEmployeeByManager field to given value.

### HasAllowRequestOnBehalfOfEmployeeByManager

`func (o *Requestonbehalfofconfigv2) HasAllowRequestOnBehalfOfEmployeeByManager() bool`

HasAllowRequestOnBehalfOfEmployeeByManager returns a boolean if a field has been set.


