---
id: v2025-identity-reference1
title: IdentityReference1
pagination_label: IdentityReference1
sidebar_label: IdentityReference1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityReference1', 'V2025IdentityReference1'] 
slug: /tools/sdk/go/v2025/models/identity-reference1
tags: ['SDK', 'Software Development Kit', 'IdentityReference1', 'V2025IdentityReference1']
---

# IdentityReference1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The ID of the identity that is correlated with this account. | 
**Name** | **string** | The name of the identity that is correlated with this account. | 
**Alias** | **string** | The alias of the identity. | 
**Email** | **string** | The email of the identity. | 

## Methods

### NewIdentityReference1

`func NewIdentityReference1(id string, name string, alias string, email string, ) *IdentityReference1`

NewIdentityReference1 instantiates a new IdentityReference1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityReference1WithDefaults

`func NewIdentityReference1WithDefaults() *IdentityReference1`

NewIdentityReference1WithDefaults instantiates a new IdentityReference1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityReference1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityReference1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityReference1) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *IdentityReference1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityReference1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityReference1) SetName(v string)`

SetName sets Name field to given value.


### GetAlias

`func (o *IdentityReference1) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *IdentityReference1) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *IdentityReference1) SetAlias(v string)`

SetAlias sets Alias field to given value.


### GetEmail

`func (o *IdentityReference1) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *IdentityReference1) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *IdentityReference1) SetEmail(v string)`

SetEmail sets Email field to given value.



