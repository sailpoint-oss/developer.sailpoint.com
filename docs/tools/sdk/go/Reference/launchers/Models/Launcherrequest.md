---
id: v1-launcherrequest
title: Launcherrequest
pagination_label: Launcherrequest
sidebar_label: Launcherrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Launcherrequest', 'V1Launcherrequest'] 
slug: /tools/sdk/go/launchers/models/launcherrequest
tags: ['SDK', 'Software Development Kit', 'Launcherrequest', 'V1Launcherrequest']
---

# Launcherrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the Launcher, limited to 255 characters | 
**Description** | **string** | Description of the Launcher, limited to 2000 characters | 
**Type** | **string** | Launcher type | 
**Disabled** | **bool** | State of the Launcher | 
**Reference** | Pointer to [**LauncherrequestReference**](launcherrequest-reference) |  | [optional] 
**Config** | **string** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | 

## Methods

### NewLauncherrequest

`func NewLauncherrequest(name string, description string, type_ string, disabled bool, config string, ) *Launcherrequest`

NewLauncherrequest instantiates a new Launcherrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLauncherrequestWithDefaults

`func NewLauncherrequestWithDefaults() *Launcherrequest`

NewLauncherrequestWithDefaults instantiates a new Launcherrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Launcherrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Launcherrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Launcherrequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Launcherrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Launcherrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Launcherrequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *Launcherrequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Launcherrequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Launcherrequest) SetType(v string)`

SetType sets Type field to given value.


### GetDisabled

`func (o *Launcherrequest) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *Launcherrequest) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *Launcherrequest) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.


### GetReference

`func (o *Launcherrequest) GetReference() LauncherrequestReference`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *Launcherrequest) GetReferenceOk() (*LauncherrequestReference, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *Launcherrequest) SetReference(v LauncherrequestReference)`

SetReference sets Reference field to given value.

### HasReference

`func (o *Launcherrequest) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetConfig

`func (o *Launcherrequest) GetConfig() string`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *Launcherrequest) GetConfigOk() (*string, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *Launcherrequest) SetConfig(v string)`

SetConfig sets Config field to given value.



