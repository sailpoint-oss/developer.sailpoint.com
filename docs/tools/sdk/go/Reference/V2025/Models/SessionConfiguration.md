---
id: v2025-session-configuration
title: SessionConfiguration
pagination_label: SessionConfiguration
sidebar_label: SessionConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SessionConfiguration', 'V2025SessionConfiguration'] 
slug: /tools/sdk/go/v2025/models/session-configuration
tags: ['SDK', 'Software Development Kit', 'SessionConfiguration', 'V2025SessionConfiguration']
---

# SessionConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxIdleTime** | Pointer to **int32** | The maximum time in minutes a session can be idle. | [optional] 
**RememberMe** | Pointer to **bool** | Denotes if 'remember me' is enabled. | [optional] [default to false]
**MaxSessionTime** | Pointer to **int32** | The maximum allowable session time in minutes. | [optional] 

## Methods

### NewSessionConfiguration

`func NewSessionConfiguration() *SessionConfiguration`

NewSessionConfiguration instantiates a new SessionConfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSessionConfigurationWithDefaults

`func NewSessionConfigurationWithDefaults() *SessionConfiguration`

NewSessionConfigurationWithDefaults instantiates a new SessionConfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxIdleTime

`func (o *SessionConfiguration) GetMaxIdleTime() int32`

GetMaxIdleTime returns the MaxIdleTime field if non-nil, zero value otherwise.

### GetMaxIdleTimeOk

`func (o *SessionConfiguration) GetMaxIdleTimeOk() (*int32, bool)`

GetMaxIdleTimeOk returns a tuple with the MaxIdleTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxIdleTime

`func (o *SessionConfiguration) SetMaxIdleTime(v int32)`

SetMaxIdleTime sets MaxIdleTime field to given value.

### HasMaxIdleTime

`func (o *SessionConfiguration) HasMaxIdleTime() bool`

HasMaxIdleTime returns a boolean if a field has been set.

### GetRememberMe

`func (o *SessionConfiguration) GetRememberMe() bool`

GetRememberMe returns the RememberMe field if non-nil, zero value otherwise.

### GetRememberMeOk

`func (o *SessionConfiguration) GetRememberMeOk() (*bool, bool)`

GetRememberMeOk returns a tuple with the RememberMe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRememberMe

`func (o *SessionConfiguration) SetRememberMe(v bool)`

SetRememberMe sets RememberMe field to given value.

### HasRememberMe

`func (o *SessionConfiguration) HasRememberMe() bool`

HasRememberMe returns a boolean if a field has been set.

### GetMaxSessionTime

`func (o *SessionConfiguration) GetMaxSessionTime() int32`

GetMaxSessionTime returns the MaxSessionTime field if non-nil, zero value otherwise.

### GetMaxSessionTimeOk

`func (o *SessionConfiguration) GetMaxSessionTimeOk() (*int32, bool)`

GetMaxSessionTimeOk returns a tuple with the MaxSessionTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxSessionTime

`func (o *SessionConfiguration) SetMaxSessionTime(v int32)`

SetMaxSessionTime sets MaxSessionTime field to given value.

### HasMaxSessionTime

`func (o *SessionConfiguration) HasMaxSessionTime() bool`

HasMaxSessionTime returns a boolean if a field has been set.


