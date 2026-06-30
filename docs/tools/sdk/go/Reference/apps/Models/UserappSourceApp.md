---
id: v1-userapp-source-app
title: UserappSourceApp
pagination_label: UserappSourceApp
sidebar_label: UserappSourceApp
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserappSourceApp', 'V1UserappSourceApp'] 
slug: /tools/sdk/go/apps/models/userapp-source-app
tags: ['SDK', 'Software Development Kit', 'UserappSourceApp', 'V1UserappSourceApp']
---

# UserappSourceApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the source app ID | [optional] 
**Type** | Pointer to **string** | It will always be \"APPLICATION\" | [optional] 
**Name** | Pointer to **string** | the source app name | [optional] 

## Methods

### NewUserappSourceApp

`func NewUserappSourceApp() *UserappSourceApp`

NewUserappSourceApp instantiates a new UserappSourceApp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserappSourceAppWithDefaults

`func NewUserappSourceAppWithDefaults() *UserappSourceApp`

NewUserappSourceAppWithDefaults instantiates a new UserappSourceApp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserappSourceApp) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserappSourceApp) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserappSourceApp) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *UserappSourceApp) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *UserappSourceApp) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UserappSourceApp) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UserappSourceApp) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UserappSourceApp) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *UserappSourceApp) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserappSourceApp) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserappSourceApp) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UserappSourceApp) HasName() bool`

HasName returns a boolean if a field has been set.


