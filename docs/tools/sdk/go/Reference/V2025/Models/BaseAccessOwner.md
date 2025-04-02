---
id: base-access-owner
title: BaseAccessOwner
pagination_label: BaseAccessOwner
sidebar_label: BaseAccessOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseAccessOwner', 'BaseAccessOwner'] 
slug: /tools/sdk/go//models/base-access-owner
tags: ['SDK', 'Software Development Kit', 'BaseAccessOwner', 'BaseAccessOwner']
---

# BaseAccessOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Owner's display name. | [optional] 
**Email** | Pointer to **string** | Owner's email. | [optional] 

## Methods

### NewBaseAccessOwner

`func NewBaseAccessOwner() *BaseAccessOwner`

NewBaseAccessOwner instantiates a new BaseAccessOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseAccessOwnerWithDefaults

`func NewBaseAccessOwnerWithDefaults() *BaseAccessOwner`

NewBaseAccessOwnerWithDefaults instantiates a new BaseAccessOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BaseAccessOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BaseAccessOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BaseAccessOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BaseAccessOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *BaseAccessOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseAccessOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseAccessOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseAccessOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseAccessOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseAccessOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseAccessOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BaseAccessOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *BaseAccessOwner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *BaseAccessOwner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *BaseAccessOwner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *BaseAccessOwner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


