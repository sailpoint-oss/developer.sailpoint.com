---
id: v1-loadentitlementtask
title: Loadentitlementtask
pagination_label: Loadentitlementtask
sidebar_label: Loadentitlementtask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Loadentitlementtask', 'V1Loadentitlementtask'] 
slug: /tools/sdk/go/entitlements/models/loadentitlementtask
tags: ['SDK', 'Software Development Kit', 'Loadentitlementtask', 'V1Loadentitlementtask']
---

# Loadentitlementtask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | Pointer to **string** | Type of task this task represents | [optional] 
**UniqueName** | Pointer to **string** | The name of the task | [optional] 
**Description** | Pointer to **string** | The description of the task | [optional] 
**Launcher** | Pointer to **string** | The user who initiated the task | [optional] 
**Created** | Pointer to **SailPointTime** | The creation date of the task | [optional] 
**Returns** | Pointer to [**[]LoadentitlementtaskReturnsInner**](loadentitlementtask-returns-inner) | Return values from the task | [optional] 

## Methods

### NewLoadentitlementtask

`func NewLoadentitlementtask() *Loadentitlementtask`

NewLoadentitlementtask instantiates a new Loadentitlementtask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadentitlementtaskWithDefaults

`func NewLoadentitlementtaskWithDefaults() *Loadentitlementtask`

NewLoadentitlementtaskWithDefaults instantiates a new Loadentitlementtask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Loadentitlementtask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Loadentitlementtask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Loadentitlementtask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Loadentitlementtask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Loadentitlementtask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Loadentitlementtask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Loadentitlementtask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Loadentitlementtask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUniqueName

`func (o *Loadentitlementtask) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *Loadentitlementtask) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *Loadentitlementtask) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.

### HasUniqueName

`func (o *Loadentitlementtask) HasUniqueName() bool`

HasUniqueName returns a boolean if a field has been set.

### GetDescription

`func (o *Loadentitlementtask) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Loadentitlementtask) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Loadentitlementtask) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Loadentitlementtask) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *Loadentitlementtask) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *Loadentitlementtask) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *Loadentitlementtask) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *Loadentitlementtask) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *Loadentitlementtask) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Loadentitlementtask) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Loadentitlementtask) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Loadentitlementtask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetReturns

`func (o *Loadentitlementtask) GetReturns() []LoadentitlementtaskReturnsInner`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *Loadentitlementtask) GetReturnsOk() (*[]LoadentitlementtaskReturnsInner, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *Loadentitlementtask) SetReturns(v []LoadentitlementtaskReturnsInner)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *Loadentitlementtask) HasReturns() bool`

HasReturns returns a boolean if a field has been set.


