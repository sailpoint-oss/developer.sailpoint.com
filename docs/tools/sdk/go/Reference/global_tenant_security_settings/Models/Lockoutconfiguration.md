---
id: v1-lockoutconfiguration
title: Lockoutconfiguration
pagination_label: Lockoutconfiguration
sidebar_label: Lockoutconfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Lockoutconfiguration', 'V1Lockoutconfiguration'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/lockoutconfiguration
tags: ['SDK', 'Software Development Kit', 'Lockoutconfiguration', 'V1Lockoutconfiguration']
---

# Lockoutconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaximumAttempts** | Pointer to **int32** | The maximum attempts allowed before lockout occurs. | [optional] 
**LockoutDuration** | Pointer to **int32** | The total time in minutes a user will be locked out. | [optional] 
**LockoutWindow** | Pointer to **int32** | A rolling window where authentication attempts in a series count towards the maximum before lockout occurs. | [optional] 

## Methods

### NewLockoutconfiguration

`func NewLockoutconfiguration() *Lockoutconfiguration`

NewLockoutconfiguration instantiates a new Lockoutconfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLockoutconfigurationWithDefaults

`func NewLockoutconfigurationWithDefaults() *Lockoutconfiguration`

NewLockoutconfigurationWithDefaults instantiates a new Lockoutconfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaximumAttempts

`func (o *Lockoutconfiguration) GetMaximumAttempts() int32`

GetMaximumAttempts returns the MaximumAttempts field if non-nil, zero value otherwise.

### GetMaximumAttemptsOk

`func (o *Lockoutconfiguration) GetMaximumAttemptsOk() (*int32, bool)`

GetMaximumAttemptsOk returns a tuple with the MaximumAttempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumAttempts

`func (o *Lockoutconfiguration) SetMaximumAttempts(v int32)`

SetMaximumAttempts sets MaximumAttempts field to given value.

### HasMaximumAttempts

`func (o *Lockoutconfiguration) HasMaximumAttempts() bool`

HasMaximumAttempts returns a boolean if a field has been set.

### GetLockoutDuration

`func (o *Lockoutconfiguration) GetLockoutDuration() int32`

GetLockoutDuration returns the LockoutDuration field if non-nil, zero value otherwise.

### GetLockoutDurationOk

`func (o *Lockoutconfiguration) GetLockoutDurationOk() (*int32, bool)`

GetLockoutDurationOk returns a tuple with the LockoutDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockoutDuration

`func (o *Lockoutconfiguration) SetLockoutDuration(v int32)`

SetLockoutDuration sets LockoutDuration field to given value.

### HasLockoutDuration

`func (o *Lockoutconfiguration) HasLockoutDuration() bool`

HasLockoutDuration returns a boolean if a field has been set.

### GetLockoutWindow

`func (o *Lockoutconfiguration) GetLockoutWindow() int32`

GetLockoutWindow returns the LockoutWindow field if non-nil, zero value otherwise.

### GetLockoutWindowOk

`func (o *Lockoutconfiguration) GetLockoutWindowOk() (*int32, bool)`

GetLockoutWindowOk returns a tuple with the LockoutWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockoutWindow

`func (o *Lockoutconfiguration) SetLockoutWindow(v int32)`

SetLockoutWindow sets LockoutWindow field to given value.

### HasLockoutWindow

`func (o *Lockoutconfiguration) HasLockoutWindow() bool`

HasLockoutWindow returns a boolean if a field has been set.


