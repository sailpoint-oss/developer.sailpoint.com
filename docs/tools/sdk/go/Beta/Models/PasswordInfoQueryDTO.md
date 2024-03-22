---
id: password-info-query-dto
title: PasswordInfoQueryDTO
pagination_label: PasswordInfoQueryDTO
sidebar_label: PasswordInfoQueryDTO
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PasswordInfoQueryDTO'] 
slug: /tools/sdk/go/beta/models/password-info-query-dto
tags: ['SDK', 'Software Development Kit', 'PasswordInfoQueryDTO']
---

# PasswordInfoQueryDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** |  Pointer to **string** | The login name of the user | [optional] 
**SourceName** |  Pointer to **string** | The display name of the source | [optional] 

## Methods

### NewPasswordInfoQueryDTO

`func NewPasswordInfoQueryDTO() *PasswordInfoQueryDTO`

NewPasswordInfoQueryDTO instantiates a new PasswordInfoQueryDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordInfoQueryDTOWithDefaults

`func NewPasswordInfoQueryDTOWithDefaults() *PasswordInfoQueryDTO`

NewPasswordInfoQueryDTOWithDefaults instantiates a new PasswordInfoQueryDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *PasswordInfoQueryDTO) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *PasswordInfoQueryDTO) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *PasswordInfoQueryDTO) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *PasswordInfoQueryDTO) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetSourceName

`func (o *PasswordInfoQueryDTO) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *PasswordInfoQueryDTO) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *PasswordInfoQueryDTO) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *PasswordInfoQueryDTO) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.


[[Back to top]](#) 


