---
id: v2025-app
title: App
pagination_label: App
sidebar_label: App
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'App', 'V2025App'] 
slug: /tools/sdk/go/v2025/models/app
tags: ['SDK', 'Software Development Kit', 'App', 'V2025App']
---

# App

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**Source** | Pointer to [**Reference**](reference) |  | [optional] 
**Account** | Pointer to [**AppAllOfAccount**](app-all-of-account) |  | [optional] 

## Methods

### NewApp

`func NewApp() *App`

NewApp instantiates a new App object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppWithDefaults

`func NewAppWithDefaults() *App`

NewAppWithDefaults instantiates a new App object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *App) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *App) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *App) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *App) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *App) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *App) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *App) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *App) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSource

`func (o *App) GetSource() Reference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *App) GetSourceOk() (*Reference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *App) SetSource(v Reference)`

SetSource sets Source field to given value.

### HasSource

`func (o *App) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAccount

`func (o *App) GetAccount() AppAllOfAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *App) GetAccountOk() (*AppAllOfAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *App) SetAccount(v AppAllOfAccount)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *App) HasAccount() bool`

HasAccount returns a boolean if a field has been set.


