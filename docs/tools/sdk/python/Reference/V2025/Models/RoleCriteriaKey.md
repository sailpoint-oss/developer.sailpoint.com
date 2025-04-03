---
id: v2025-role-criteria-key
title: RoleCriteriaKey
pagination_label: RoleCriteriaKey
sidebar_label: RoleCriteriaKey
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleCriteriaKey', 'V2025RoleCriteriaKey'] 
slug: /tools/sdk/go/v2025/models/role-criteria-key
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaKey', 'V2025RoleCriteriaKey']
---

# RoleCriteriaKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**RoleCriteriaKeyType**](role-criteria-key-type) |  | 
**Property** | **string** | The name of the attribute or entitlement to which the associated criteria applies. | 
**SourceId** | Pointer to **NullableString** | ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT | [optional] 

## Methods

### NewRoleCriteriaKey

`func NewRoleCriteriaKey(type_ RoleCriteriaKeyType, property string, ) *RoleCriteriaKey`

NewRoleCriteriaKey instantiates a new RoleCriteriaKey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleCriteriaKeyWithDefaults

`func NewRoleCriteriaKeyWithDefaults() *RoleCriteriaKey`

NewRoleCriteriaKeyWithDefaults instantiates a new RoleCriteriaKey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RoleCriteriaKey) GetType() RoleCriteriaKeyType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleCriteriaKey) GetTypeOk() (*RoleCriteriaKeyType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleCriteriaKey) SetType(v RoleCriteriaKeyType)`

SetType sets Type field to given value.


### GetProperty

`func (o *RoleCriteriaKey) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *RoleCriteriaKey) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *RoleCriteriaKey) SetProperty(v string)`

SetProperty sets Property field to given value.


### GetSourceId

`func (o *RoleCriteriaKey) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *RoleCriteriaKey) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *RoleCriteriaKey) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *RoleCriteriaKey) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### SetSourceIdNil

`func (o *RoleCriteriaKey) SetSourceIdNil(b bool)`

 SetSourceIdNil sets the value for SourceId to be an explicit nil

### UnsetSourceId
`func (o *RoleCriteriaKey) UnsetSourceId()`

UnsetSourceId ensures that no value is present for SourceId, not even an explicit nil

