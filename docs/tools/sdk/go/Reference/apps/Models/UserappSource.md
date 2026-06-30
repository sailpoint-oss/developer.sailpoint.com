---
id: v1-userapp-source
title: UserappSource
pagination_label: UserappSource
sidebar_label: UserappSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserappSource', 'V1UserappSource'] 
slug: /tools/sdk/go/apps/models/userapp-source
tags: ['SDK', 'Software Development Kit', 'UserappSource', 'V1UserappSource']
---

# UserappSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the source ID | [optional] 
**Type** | Pointer to **string** | It will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | the source name | [optional] 

## Methods

### NewUserappSource

`func NewUserappSource() *UserappSource`

NewUserappSource instantiates a new UserappSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserappSourceWithDefaults

`func NewUserappSourceWithDefaults() *UserappSource`

NewUserappSourceWithDefaults instantiates a new UserappSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserappSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserappSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserappSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserappSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UserappSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UserappSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UserappSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UserappSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *UserappSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserappSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserappSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserappSource) HasName() bool`

HasName returns a boolean if a field has been set.


