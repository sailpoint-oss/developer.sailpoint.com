---
id: basic-auth-config
title: BasicAuthConfig
pagination_label: BasicAuthConfig
sidebar_label: BasicAuthConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BasicAuthConfig', 'BasicAuthConfig'] 
slug: /tools/sdk/go//models/basic-auth-config
tags: ['SDK', 'Software Development Kit', 'BasicAuthConfig', 'BasicAuthConfig']
---

# BasicAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | Pointer to **string** | The username to authenticate. | [optional] 
**Password** | Pointer to **NullableString** | The password to authenticate. On response, this field is set to null as to not return secrets. | [optional] 

## Methods

### NewBasicAuthConfig

`func NewBasicAuthConfig() *BasicAuthConfig`

NewBasicAuthConfig instantiates a new BasicAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasicAuthConfigWithDefaults

`func NewBasicAuthConfigWithDefaults() *BasicAuthConfig`

NewBasicAuthConfigWithDefaults instantiates a new BasicAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *BasicAuthConfig) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *BasicAuthConfig) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *BasicAuthConfig) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *BasicAuthConfig) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetPassword

`func (o *BasicAuthConfig) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *BasicAuthConfig) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *BasicAuthConfig) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *BasicAuthConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### SetPasswordNil

`func (o *BasicAuthConfig) SetPasswordNil(b bool)`

 SetPasswordNil sets the value for Password to be an explicit nil

### UnsetPassword
`func (o *BasicAuthConfig) UnsetPassword()`

UnsetPassword ensures that no value is present for Password, not even an explicit nil

