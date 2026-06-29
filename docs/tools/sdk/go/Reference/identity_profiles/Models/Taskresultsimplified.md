---
id: v1-taskresultsimplified
title: Taskresultsimplified
pagination_label: Taskresultsimplified
sidebar_label: Taskresultsimplified
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskresultsimplified', 'V1Taskresultsimplified'] 
slug: /tools/sdk/go/identityprofiles/models/taskresultsimplified
tags: ['SDK', 'Software Development Kit', 'Taskresultsimplified', 'V1Taskresultsimplified']
---

# Taskresultsimplified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Task identifier | [optional] 
**Name** | Pointer to **string** | Task name | [optional] 
**Description** | Pointer to **string** | Task description | [optional] 
**Launcher** | Pointer to **string** | User or process who launched the task | [optional] 
**Completed** | Pointer to **SailPointTime** | Date time of completion | [optional] 
**Launched** | Pointer to **SailPointTime** | Date time when the task was launched | [optional] 
**CompletionStatus** | Pointer to **string** | Task result status | [optional] 

## Methods

### NewTaskresultsimplified

`func NewTaskresultsimplified() *Taskresultsimplified`

NewTaskresultsimplified instantiates a new Taskresultsimplified object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskresultsimplifiedWithDefaults

`func NewTaskresultsimplifiedWithDefaults() *Taskresultsimplified`

NewTaskresultsimplifiedWithDefaults instantiates a new Taskresultsimplified object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Taskresultsimplified) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Taskresultsimplified) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Taskresultsimplified) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Taskresultsimplified) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Taskresultsimplified) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Taskresultsimplified) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Taskresultsimplified) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Taskresultsimplified) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Taskresultsimplified) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Taskresultsimplified) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Taskresultsimplified) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Taskresultsimplified) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLauncher

`func (o *Taskresultsimplified) GetLauncher() string`

GetLauncher returns the Launcher field if non-nil, zero value otherwise.

### GetLauncherOk

`func (o *Taskresultsimplified) GetLauncherOk() (*string, bool)`

GetLauncherOk returns a tuple with the Launcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLauncher

`func (o *Taskresultsimplified) SetLauncher(v string)`

SetLauncher sets Launcher field to given value.

### HasLauncher

`func (o *Taskresultsimplified) HasLauncher() bool`

HasLauncher returns a boolean if a field has been set.

### GetCompleted

`func (o *Taskresultsimplified) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Taskresultsimplified) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Taskresultsimplified) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Taskresultsimplified) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetLaunched

`func (o *Taskresultsimplified) GetLaunched() SailPointTime`

GetLaunched returns the Launched field if non-nil, zero value otherwise.

### GetLaunchedOk

`func (o *Taskresultsimplified) GetLaunchedOk() (*SailPointTime, bool)`

GetLaunchedOk returns a tuple with the Launched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLaunched

`func (o *Taskresultsimplified) SetLaunched(v SailPointTime)`

SetLaunched sets Launched field to given value.

### HasLaunched

`func (o *Taskresultsimplified) HasLaunched() bool`

HasLaunched returns a boolean if a field has been set.

### GetCompletionStatus

`func (o *Taskresultsimplified) GetCompletionStatus() string`

GetCompletionStatus returns the CompletionStatus field if non-nil, zero value otherwise.

### GetCompletionStatusOk

`func (o *Taskresultsimplified) GetCompletionStatusOk() (*string, bool)`

GetCompletionStatusOk returns a tuple with the CompletionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletionStatus

`func (o *Taskresultsimplified) SetCompletionStatus(v string)`

SetCompletionStatus sets CompletionStatus field to given value.

### HasCompletionStatus

`func (o *Taskresultsimplified) HasCompletionStatus() bool`

HasCompletionStatus returns a boolean if a field has been set.


