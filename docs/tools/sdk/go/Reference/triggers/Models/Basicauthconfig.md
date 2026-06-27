---
id: v1-basicauthconfig
title: Basicauthconfig
pagination_label: Basicauthconfig
sidebar_label: Basicauthconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Basicauthconfig', 'V1Basicauthconfig'] 
slug: /tools/sdk/go/triggers/models/basicauthconfig
tags: ['SDK', 'Software Development Kit', 'Basicauthconfig', 'V1Basicauthconfig']
---

# Basicauthconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | Pointer to **string** | The username to authenticate. | [optional] 
**Password** | Pointer to **NullableString** | The password to authenticate. On response, this field is set to null as to not return secrets. | [optional] 

## Methods

### NewBasicauthconfig

`func NewBasicauthconfig() *Basicauthconfig`

NewBasicauthconfig instantiates a new Basicauthconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasicauthconfigWithDefaults

`func NewBasicauthconfigWithDefaults() *Basicauthconfig`

NewBasicauthconfigWithDefaults instantiates a new Basicauthconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *Basicauthconfig) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *Basicauthconfig) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *Basicauthconfig) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *Basicauthconfig) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetPassword

`func (o *Basicauthconfig) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *Basicauthconfig) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *Basicauthconfig) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *Basicauthconfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### SetPasswordNil

`func (o *Basicauthconfig) SetPasswordNil(b bool)`

 SetPasswordNil sets the value for Password to be an explicit nil

### UnsetPassword
`func (o *Basicauthconfig) UnsetPassword()`

UnsetPassword ensures that no value is present for Password, not even an explicit nil

