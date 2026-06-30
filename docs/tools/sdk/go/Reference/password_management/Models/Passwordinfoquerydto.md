---
id: v1-passwordinfoquerydto
title: Passwordinfoquerydto
pagination_label: Passwordinfoquerydto
sidebar_label: Passwordinfoquerydto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordinfoquerydto', 'V1Passwordinfoquerydto'] 
slug: /tools/sdk/go/passwordmanagement/models/passwordinfoquerydto
tags: ['SDK', 'Software Development Kit', 'Passwordinfoquerydto', 'V1Passwordinfoquerydto']
---

# Passwordinfoquerydto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | Pointer to **string** | The login name of the user | [optional] 
**SourceName** | Pointer to **string** | The display name of the source | [optional] 

## Methods

### NewPasswordinfoquerydto

`func NewPasswordinfoquerydto() *Passwordinfoquerydto`

NewPasswordinfoquerydto instantiates a new Passwordinfoquerydto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordinfoquerydtoWithDefaults

`func NewPasswordinfoquerydtoWithDefaults() *Passwordinfoquerydto`

NewPasswordinfoquerydtoWithDefaults instantiates a new Passwordinfoquerydto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *Passwordinfoquerydto) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *Passwordinfoquerydto) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *Passwordinfoquerydto) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *Passwordinfoquerydto) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetSourceName

`func (o *Passwordinfoquerydto) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *Passwordinfoquerydto) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *Passwordinfoquerydto) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *Passwordinfoquerydto) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.


