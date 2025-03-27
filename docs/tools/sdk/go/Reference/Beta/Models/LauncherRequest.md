---
id: beta-launcher-request
title: LauncherRequest
pagination_label: LauncherRequest
sidebar_label: LauncherRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LauncherRequest', 'BetaLauncherRequest'] 
slug: /tools/sdk/go/beta/models/launcher-request
tags: ['SDK', 'Software Development Kit', 'LauncherRequest', 'BetaLauncherRequest']
---

# LauncherRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the Launcher, limited to 255 characters | 
**Description** | **string** | Description of the Launcher, limited to 2000 characters | 
**Type** | **string** | Launcher type | 
**Disabled** | **bool** | State of the Launcher | 
**Reference** | Pointer to [**LauncherRequestReference**](launcher-request-reference) |  | [optional] 
**Config** | **string** | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | 

## Methods

### NewLauncherRequest

`func NewLauncherRequest(name string, description string, type_ string, disabled bool, config string, ) *LauncherRequest`

NewLauncherRequest instantiates a new LauncherRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLauncherRequestWithDefaults

`func NewLauncherRequestWithDefaults() *LauncherRequest`

NewLauncherRequestWithDefaults instantiates a new LauncherRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *LauncherRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LauncherRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LauncherRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *LauncherRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LauncherRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LauncherRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *LauncherRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LauncherRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LauncherRequest) SetType(v string)`

SetType sets Type field to given value.


### GetDisabled

`func (o *LauncherRequest) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *LauncherRequest) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *LauncherRequest) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.


### GetReference

`func (o *LauncherRequest) GetReference() LauncherRequestReference`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *LauncherRequest) GetReferenceOk() (*LauncherRequestReference, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *LauncherRequest) SetReference(v LauncherRequestReference)`

SetReference sets Reference field to given value.

### HasReference

`func (o *LauncherRequest) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetConfig

`func (o *LauncherRequest) GetConfig() string`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *LauncherRequest) GetConfigOk() (*string, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *LauncherRequest) SetConfig(v string)`

SetConfig sets Config field to given value.



