---
id: beta-request-on-behalf-of-config
title: RequestOnBehalfOfConfig
pagination_label: RequestOnBehalfOfConfig
sidebar_label: RequestOnBehalfOfConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestOnBehalfOfConfig', 'BetaRequestOnBehalfOfConfig'] 
slug: /tools/sdk/go/beta/models/request-on-behalf-of-config
tags: ['SDK', 'Software Development Kit', 'RequestOnBehalfOfConfig', 'BetaRequestOnBehalfOfConfig']
---

# RequestOnBehalfOfConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | Pointer to **bool** | If this is true, anyone can request access for anyone. | [optional] [default to false]
**AllowRequestOnBehalfOfEmployeeByManager** | Pointer to **bool** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to false]

## Methods

### NewRequestOnBehalfOfConfig

`func NewRequestOnBehalfOfConfig() *RequestOnBehalfOfConfig`

NewRequestOnBehalfOfConfig instantiates a new RequestOnBehalfOfConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestOnBehalfOfConfigWithDefaults

`func NewRequestOnBehalfOfConfigWithDefaults() *RequestOnBehalfOfConfig`

NewRequestOnBehalfOfConfigWithDefaults instantiates a new RequestOnBehalfOfConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfAnyoneByAnyone() bool`

GetAllowRequestOnBehalfOfAnyoneByAnyone returns the AllowRequestOnBehalfOfAnyoneByAnyone field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfAnyoneByAnyoneOk

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfAnyoneByAnyoneOk() (*bool, bool)`

GetAllowRequestOnBehalfOfAnyoneByAnyoneOk returns a tuple with the AllowRequestOnBehalfOfAnyoneByAnyone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *RequestOnBehalfOfConfig) SetAllowRequestOnBehalfOfAnyoneByAnyone(v bool)`

SetAllowRequestOnBehalfOfAnyoneByAnyone sets AllowRequestOnBehalfOfAnyoneByAnyone field to given value.

### HasAllowRequestOnBehalfOfAnyoneByAnyone

`func (o *RequestOnBehalfOfConfig) HasAllowRequestOnBehalfOfAnyoneByAnyone() bool`

HasAllowRequestOnBehalfOfAnyoneByAnyone returns a boolean if a field has been set.

### GetAllowRequestOnBehalfOfEmployeeByManager

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfEmployeeByManager() bool`

GetAllowRequestOnBehalfOfEmployeeByManager returns the AllowRequestOnBehalfOfEmployeeByManager field if non-nil, zero value otherwise.

### GetAllowRequestOnBehalfOfEmployeeByManagerOk

`func (o *RequestOnBehalfOfConfig) GetAllowRequestOnBehalfOfEmployeeByManagerOk() (*bool, bool)`

GetAllowRequestOnBehalfOfEmployeeByManagerOk returns a tuple with the AllowRequestOnBehalfOfEmployeeByManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRequestOnBehalfOfEmployeeByManager

`func (o *RequestOnBehalfOfConfig) SetAllowRequestOnBehalfOfEmployeeByManager(v bool)`

SetAllowRequestOnBehalfOfEmployeeByManager sets AllowRequestOnBehalfOfEmployeeByManager field to given value.

### HasAllowRequestOnBehalfOfEmployeeByManager

`func (o *RequestOnBehalfOfConfig) HasAllowRequestOnBehalfOfEmployeeByManager() bool`

HasAllowRequestOnBehalfOfEmployeeByManager returns a boolean if a field has been set.


