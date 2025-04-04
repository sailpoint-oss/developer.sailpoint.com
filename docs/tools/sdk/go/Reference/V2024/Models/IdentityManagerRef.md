---
id: v2024-identity-manager-ref
title: IdentityManagerRef
pagination_label: IdentityManagerRef
sidebar_label: IdentityManagerRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityManagerRef', 'V2024IdentityManagerRef'] 
slug: /tools/sdk/go/v2024/models/identity-manager-ref
tags: ['SDK', 'Software Development Kit', 'IdentityManagerRef', 'V2024IdentityManagerRef']
---

# IdentityManagerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity's manager | [optional] 
**Id** | Pointer to **string** | ID of identity's manager | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity's manager | [optional] 

## Methods

### NewIdentityManagerRef

`func NewIdentityManagerRef() *IdentityManagerRef`

NewIdentityManagerRef instantiates a new IdentityManagerRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityManagerRefWithDefaults

`func NewIdentityManagerRefWithDefaults() *IdentityManagerRef`

NewIdentityManagerRefWithDefaults instantiates a new IdentityManagerRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentityManagerRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityManagerRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityManagerRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityManagerRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *IdentityManagerRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityManagerRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityManagerRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityManagerRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityManagerRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityManagerRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityManagerRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityManagerRef) HasName() bool`

HasName returns a boolean if a field has been set.


