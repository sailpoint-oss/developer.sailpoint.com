---
id: v1-requestonbehalfofconfig
title: Requestonbehalfofconfig
pagination_label: Requestonbehalfofconfig
sidebar_label: Requestonbehalfofconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requestonbehalfofconfig', 'V1Requestonbehalfofconfig'] 
slug: /tools/sdk/go/accessrequests/models/requestonbehalfofconfig
tags: ['SDK', 'Software Development Kit', 'Requestonbehalfofconfig', 'V1Requestonbehalfofconfig']
---

# Requestonbehalfofconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | Pointer to **bool** | If this is true, anyone can request access for anyone. | [optional] [default to false]
**AllowRequestOnBehalfOfEmployeeByManager** | Pointer to **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to false]

## Methods

### NewRequestonbehalfofconfig

`func NewRequestonbehalfofconfig() *Requestonbehalfofconfig`

NewRequestonbehalfofconfig instantiates a new Requestonbehalfofconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestonbehalfofconfigWithDefaults

`func NewRequestonbehalfofconfigWithDefaults() *Requestonbehalfofconfig`

NewRequestonbehalfofconfigWithDefaults instantiates a new Requestonbehalfofconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *Requestonbehalfofconfig) GetAllowRequestOnBehalfOfAnyoneByAnyone() bool`

GetAllowRequestOnBehalfOfAnyoneByAnyone returns the AllowRequestOnBehalfOfAnyoneByAnyone field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfAnyoneByAnyoneOk

`func (o *Requestonbehalfofconfig) GetAllowRequestOnBehalfOfAnyoneByAnyoneOk() (*bool, bool)`

GetAllowRequestOnBehalfOfAnyoneByAnyoneOk returns a tuple with the AllowRequestOnBehalfOfAnyoneByAnyone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *Requestonbehalfofconfig) SetAllowRequestOnBehalfOfAnyoneByAnyone(v bool)`

SetAllowRequestOnBehalfOfAnyoneByAnyone sets AllowRequestOnBehalfOfAnyoneByAnyone field to given value.

### HasAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *Requestonbehalfofconfig) HasAllowRequestOnBehalfOfAnyoneByAnyone() bool`

HasAllowRequestOnBehalfOfAnyoneByAnyone returns a boolean if a field has been set.

### GetAllowRequestOnBehalfOfEmployeeByManager

`func (o *Requestonbehalfofconfig) GetAllowRequestOnBehalfOfEmployeeByManager() bool`

GetAllowRequestOnBehalfOfEmployeeByManager returns the AllowRequestOnBehalfOfEmployeeByManager field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfEmployeeByManagerOk

`func (o *Requestonbehalfofconfig) GetAllowRequestOnBehalfOfEmployeeByManagerOk() (*bool, bool)`

GetAllowRequestOnBehalfOfEmployeeByManagerOk returns a tuple with the AllowRequestOnBehalfOfEmployeeByManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfEmployeeByManager

`func (o *Requestonbehalfofconfig) SetAllowRequestOnBehalfOfEmployeeByManager(v bool)`

SetAllowRequestOnBehalfOfEmployeeByManager sets AllowRequestOnBehalfOfEmployeeByManager field to given value.

### HasAllowRequestOnBehalfOfEmployeeByManager

`func (o *Requestonbehalfofconfig) HasAllowRequestOnBehalfOfEmployeeByManager() bool`

HasAllowRequestOnBehalfOfEmployeeByManager returns a boolean if a field has been set.


