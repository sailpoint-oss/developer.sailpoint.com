---
id: v2024-activity-identity
title: ActivityIdentity
pagination_label: ActivityIdentity
sidebar_label: ActivityIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ActivityIdentity', 'V2024ActivityIdentity'] 
slug: /tools/sdk/go/v2024/models/activity-identity
tags: ['SDK', 'Software Development Kit', 'ActivityIdentity', 'V2024ActivityIdentity']
---

# ActivityIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**Type** | Pointer to **string** | Type of object | [optional] 

## Methods

### NewActivityIdentity

`func NewActivityIdentity() *ActivityIdentity`

NewActivityIdentity instantiates a new ActivityIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityIdentityWithDefaults

`func NewActivityIdentityWithDefaults() *ActivityIdentity`

NewActivityIdentityWithDefaults instantiates a new ActivityIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ActivityIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ActivityIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ActivityIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ActivityIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ActivityIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ActivityIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ActivityIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ActivityIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ActivityIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ActivityIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ActivityIdentity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ActivityIdentity) HasType() bool`

HasType returns a boolean if a field has been set.


