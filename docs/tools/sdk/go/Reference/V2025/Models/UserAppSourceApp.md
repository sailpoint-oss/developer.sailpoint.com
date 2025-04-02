---
id: user-app-source-app
title: UserAppSourceApp
pagination_label: UserAppSourceApp
sidebar_label: UserAppSourceApp
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserAppSourceApp', 'UserAppSourceApp'] 
slug: /tools/sdk/go//models/user-app-source-app
tags: ['SDK', 'Software Development Kit', 'UserAppSourceApp', 'UserAppSourceApp']
---

# UserAppSourceApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the source app ID | [optional] 
**Type** | Pointer to **string** | It will always be \"APPLICATION\" | [optional] 
**Name** | Pointer to **string** | the source app name | [optional] 

## Methods

### NewUserAppSourceApp

`func NewUserAppSourceApp() *UserAppSourceApp`

NewUserAppSourceApp instantiates a new UserAppSourceApp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserAppSourceAppWithDefaults

`func NewUserAppSourceAppWithDefaults() *UserAppSourceApp`

NewUserAppSourceAppWithDefaults instantiates a new UserAppSourceApp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserAppSourceApp) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserAppSourceApp) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserAppSourceApp) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserAppSourceApp) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UserAppSourceApp) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UserAppSourceApp) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UserAppSourceApp) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UserAppSourceApp) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *UserAppSourceApp) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserAppSourceApp) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserAppSourceApp) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserAppSourceApp) HasName() bool`

HasName returns a boolean if a field has been set.


