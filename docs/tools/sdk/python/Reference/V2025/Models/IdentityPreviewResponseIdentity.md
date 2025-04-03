---
id: v2025-identity-preview-response-identity
title: IdentityPreviewResponseIdentity
pagination_label: IdentityPreviewResponseIdentity
sidebar_label: IdentityPreviewResponseIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityPreviewResponseIdentity', 'V2025IdentityPreviewResponseIdentity'] 
slug: /tools/sdk/go/v2025/models/identity-preview-response-identity
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponseIdentity', 'V2025IdentityPreviewResponseIdentity']
---

# IdentityPreviewResponseIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Identity's DTO type. | [optional] 
**Id** | Pointer to **string** | Identity ID. | [optional] 
**Name** | Pointer to **string** | Identity's display name. | [optional] 

## Methods

### NewIdentityPreviewResponseIdentity

`func NewIdentityPreviewResponseIdentity() *IdentityPreviewResponseIdentity`

NewIdentityPreviewResponseIdentity instantiates a new IdentityPreviewResponseIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityPreviewResponseIdentityWithDefaults

`func NewIdentityPreviewResponseIdentityWithDefaults() *IdentityPreviewResponseIdentity`

NewIdentityPreviewResponseIdentityWithDefaults instantiates a new IdentityPreviewResponseIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *IdentityPreviewResponseIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityPreviewResponseIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityPreviewResponseIdentity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityPreviewResponseIdentity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *IdentityPreviewResponseIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityPreviewResponseIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityPreviewResponseIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityPreviewResponseIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityPreviewResponseIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityPreviewResponseIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityPreviewResponseIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityPreviewResponseIdentity) HasName() bool`

HasName returns a boolean if a field has been set.


