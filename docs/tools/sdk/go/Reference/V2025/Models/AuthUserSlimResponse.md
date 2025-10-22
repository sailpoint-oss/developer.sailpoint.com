---
id: v2025-auth-user-slim-response
title: AuthUserSlimResponse
pagination_label: AuthUserSlimResponse
sidebar_label: AuthUserSlimResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthUserSlimResponse', 'V2025AuthUserSlimResponse'] 
slug: /tools/sdk/go/v2025/models/auth-user-slim-response
tags: ['SDK', 'Software Development Kit', 'AuthUserSlimResponse', 'V2025AuthUserSlimResponse']
---

# AuthUserSlimResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identity ID. | [optional] 
**Uid** | Pointer to **string** | Identity unique identifier. | [optional] 
**Alias** | Pointer to **string** | Identity alias. | [optional] 
**DisplayName** | Pointer to **string** | Identity name in display format. | [optional] 

## Methods

### NewAuthUserSlimResponse

`func NewAuthUserSlimResponse() *AuthUserSlimResponse`

NewAuthUserSlimResponse instantiates a new AuthUserSlimResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthUserSlimResponseWithDefaults

`func NewAuthUserSlimResponseWithDefaults() *AuthUserSlimResponse`

NewAuthUserSlimResponseWithDefaults instantiates a new AuthUserSlimResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AuthUserSlimResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AuthUserSlimResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AuthUserSlimResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AuthUserSlimResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetUid

`func (o *AuthUserSlimResponse) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *AuthUserSlimResponse) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *AuthUserSlimResponse) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *AuthUserSlimResponse) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetAlias

`func (o *AuthUserSlimResponse) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *AuthUserSlimResponse) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *AuthUserSlimResponse) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *AuthUserSlimResponse) HasAlias() bool`

HasAlias returns a boolean if a field has been set.

### GetDisplayName

`func (o *AuthUserSlimResponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AuthUserSlimResponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AuthUserSlimResponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AuthUserSlimResponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.


