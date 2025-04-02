---
id: user-app-source
title: UserAppSource
pagination_label: UserAppSource
sidebar_label: UserAppSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserAppSource', 'UserAppSource'] 
slug: /tools/sdk/go//models/user-app-source
tags: ['SDK', 'Software Development Kit', 'UserAppSource', 'UserAppSource']
---

# UserAppSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the source ID | [optional] 
**Type** | Pointer to **string** | It will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | the source name | [optional] 

## Methods

### NewUserAppSource

`func NewUserAppSource() *UserAppSource`

NewUserAppSource instantiates a new UserAppSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserAppSourceWithDefaults

`func NewUserAppSourceWithDefaults() *UserAppSource`

NewUserAppSourceWithDefaults instantiates a new UserAppSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserAppSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserAppSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserAppSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserAppSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UserAppSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UserAppSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UserAppSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UserAppSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *UserAppSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserAppSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserAppSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserAppSource) HasName() bool`

HasName returns a boolean if a field has been set.


