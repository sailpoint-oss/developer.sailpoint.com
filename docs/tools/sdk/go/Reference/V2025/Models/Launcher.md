---
id: v2025-launcher
title: Launcher
pagination_label: Launcher
sidebar_label: Launcher
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Launcher', 'V2025Launcher'] 
slug: /tools/sdk/go/v2025/models/launcher
tags: ['SDK', 'Software Development Kit', 'Launcher', 'V2025Launcher']
---

# Launcher

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the Launcher | 
**Created** | **SailPointTime** | Date the Launcher was created | 
**Modified** | **SailPointTime** | Date the Launcher was last modified | 
**Owner** | [**LauncherOwner**](launcher-owner) |  | 
**Name** | **string** | Name of the Launcher, limited to 255 characters | 
**Description** | **string** | Description of the Launcher, limited to 2000 characters | 
**Type** | **string** | Launcher type | 
**Disabled** | **bool** | State of the Launcher | 
**Reference** | Pointer to [**LauncherReference**](launcher-reference) |  | [optional] 
**Config** | **string** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | 

## Methods

### NewLauncher

`func NewLauncher(id string, created SailPointTime, modified SailPointTime, owner LauncherOwner, name string, description string, type_ string, disabled bool, config string, ) *Launcher`

NewLauncher instantiates a new Launcher object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLauncherWithDefaults

`func NewLauncherWithDefaults() *Launcher`

NewLauncherWithDefaults instantiates a new Launcher object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Launcher) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Launcher) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Launcher) SetId(v string)`

SetId sets Id field to given value.


### GetCreated

`func (o *Launcher) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Launcher) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Launcher) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Launcher) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Launcher) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Launcher) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetOwner

`func (o *Launcher) GetOwner() LauncherOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Launcher) GetOwnerOk() (*LauncherOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Launcher) SetOwner(v LauncherOwner)`

SetOwner sets Owner field to given value.


### GetName

`func (o *Launcher) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Launcher) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Launcher) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Launcher) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Launcher) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Launcher) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *Launcher) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Launcher) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Launcher) SetType(v string)`

SetType sets Type field to given value.


### GetDisabled

`func (o *Launcher) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *Launcher) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *Launcher) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.


### GetReference

`func (o *Launcher) GetReference() LauncherReference`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *Launcher) GetReferenceOk() (*LauncherReference, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *Launcher) SetReference(v LauncherReference)`

SetReference sets Reference field to given value.

### HasReference

`func (o *Launcher) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetConfig

`func (o *Launcher) GetConfig() string`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *Launcher) GetConfigOk() (*string, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *Launcher) SetConfig(v string)`

SetConfig sets Config field to given value.



