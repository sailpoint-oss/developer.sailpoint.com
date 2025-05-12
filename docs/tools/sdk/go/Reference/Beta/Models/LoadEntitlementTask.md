---
id: beta-load-entitlement-task
title: LoadEntitlementTask
pagination_label: LoadEntitlementTask
sidebar_label: LoadEntitlementTask
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadEntitlementTask', 'BetaLoadEntitlementTask'] 
slug: /tools/sdk/go/beta/models/load-entitlement-task
tags: ['SDK', 'Software Development Kit', 'LoadEntitlementTask', 'BetaLoadEntitlementTask']
---

# LoadEntitlementTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the task this taskStatus represents | [optional] 
**Type** | Pointer to **string** | Type of task this task represents | [optional] 
**UniqueName** | Pointer to **string** | The name of the task | [optional] 
**Description** | Pointer to **string** | The description of the task | [optional] 
**Launcher** | Pointer to **string** | The user who initiated the task | [optional] 
**Created** | Pointer to **time.Time** | The creation date of the task | [optional] 
**Returns** | Pointer to [**[]LoadEntitlementTaskReturnsInner**](load-entitlement-task-returns-inner) | Return values from the task | [optional] 

## Methods

### NewLoadEntitlementTask

`func NewLoadEntitlementTask() *LoadEntitlementTask`

NewLoadEntitlementTask instantiates a new LoadEntitlementTask object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadEntitlementTaskWithDefaults

`func NewLoadEntitlementTaskWithDefaults() *LoadEntitlementTask`

NewLoadEntitlementTaskWithDefaults instantiates a new LoadEntitlementTask object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LoadEntitlementTask) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LoadEntitlementTask) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LoadEntitlementTask) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LoadEntitlementTask) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *LoadEntitlementTask) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LoadEntitlementTask) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LoadEntitlementTask) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LoadEntitlementTask) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUniqueName

`func (o *LoadEntitlementTask) GetUniqueName() string`

GetUniqueName returns the UniqueName field if non-nil, zero value otherwise.

### GetUniqueNameOk

`func (o *LoadEntitlementTask) GetUniqueNameOk() (*string, bool)`

GetUniqueNameOk returns a tuple with the UniqueName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueName

`func (o *LoadEntitlementTask) SetUniqueName(v string)`

SetUniqueName sets UniqueName field to given value.

### HasUniqueName

`func (o *LoadEntitlementTask) HasUniqueName() bool`

HasUniqueName returns a boolean if a field has been set.

### GetDescription

`func (o *LoadEntitlementTask) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LoadEntitlementTask) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LoadEntitlementTask) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LoadEntitlementTask) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *LoadEntitlementTask) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *LoadEntitlementTask) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *LoadEntitlementTask) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *LoadEntitlementTask) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCreated

`func (o *LoadEntitlementTask) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *LoadEntitlementTask) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *LoadEntitlementTask) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *LoadEntitlementTask) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetReturns

`func (o *LoadEntitlementTask) GetReturns() []LoadEntitlementTaskReturnsInner`

GetReturns returns the Returns field if non-nil, zero value otherwise.

### GetReturnsOk

`func (o *LoadEntitlementTask) GetReturnsOk() (*[]LoadEntitlementTaskReturnsInner, bool)`

GetReturnsOk returns a tuple with the Returns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturns

`func (o *LoadEntitlementTask) SetReturns(v []LoadEntitlementTaskReturnsInner)`

SetReturns sets Returns field to given value.

### HasReturns

`func (o *LoadEntitlementTask) HasReturns() bool`

HasReturns returns a boolean if a field has been set.


