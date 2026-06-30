---
id: v1-userapp-account
title: UserappAccount
pagination_label: UserappAccount
sidebar_label: UserappAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserappAccount', 'V1UserappAccount'] 
slug: /tools/sdk/go/apps/models/userapp-account
tags: ['SDK', 'Software Development Kit', 'UserappAccount', 'V1UserappAccount']
---

# UserappAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the account ID | [optional] 
**Type** | Pointer to **string** | It will always be \"ACCOUNT\" | [optional] 
**Name** | Pointer to **string** | the account name | [optional] 

## Methods

### NewUserappAccount

`func NewUserappAccount() *UserappAccount`

NewUserappAccount instantiates a new UserappAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserappAccountWithDefaults

`func NewUserappAccountWithDefaults() *UserappAccount`

NewUserappAccountWithDefaults instantiates a new UserappAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserappAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserappAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserappAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserappAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UserappAccount) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UserappAccount) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UserappAccount) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UserappAccount) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *UserappAccount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserappAccount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserappAccount) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserappAccount) HasName() bool`

HasName returns a boolean if a field has been set.


