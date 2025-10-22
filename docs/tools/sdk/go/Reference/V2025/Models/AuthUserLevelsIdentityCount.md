---
id: v2025-auth-user-levels-identity-count
title: AuthUserLevelsIdentityCount
pagination_label: AuthUserLevelsIdentityCount
sidebar_label: AuthUserLevelsIdentityCount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthUserLevelsIdentityCount', 'V2025AuthUserLevelsIdentityCount'] 
slug: /tools/sdk/go/v2025/models/auth-user-levels-identity-count
tags: ['SDK', 'Software Development Kit', 'AuthUserLevelsIdentityCount', 'V2025AuthUserLevelsIdentityCount']
---

# AuthUserLevelsIdentityCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique identifier of the user level. | [optional] 
**Count** | Pointer to **int32** | Number of identities having this user level. | [optional] 

## Methods

### NewAuthUserLevelsIdentityCount

`func NewAuthUserLevelsIdentityCount() *AuthUserLevelsIdentityCount`

NewAuthUserLevelsIdentityCount instantiates a new AuthUserLevelsIdentityCount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthUserLevelsIdentityCountWithDefaults

`func NewAuthUserLevelsIdentityCountWithDefaults() *AuthUserLevelsIdentityCount`

NewAuthUserLevelsIdentityCountWithDefaults instantiates a new AuthUserLevelsIdentityCount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AuthUserLevelsIdentityCount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AuthUserLevelsIdentityCount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AuthUserLevelsIdentityCount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AuthUserLevelsIdentityCount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCount

`func (o *AuthUserLevelsIdentityCount) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *AuthUserLevelsIdentityCount) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *AuthUserLevelsIdentityCount) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *AuthUserLevelsIdentityCount) HasCount() bool`

HasCount returns a boolean if a field has been set.


