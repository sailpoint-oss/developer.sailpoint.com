---
id: access-apps-owner
title: AccessAppsOwner
pagination_label: AccessAppsOwner
sidebar_label: AccessAppsOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessAppsOwner', 'AccessAppsOwner'] 
slug: /tools/sdk/go/v3/models/access-apps-owner
tags: ['SDK', 'Software Development Kit', 'AccessAppsOwner', 'AccessAppsOwner']
---

# AccessAppsOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Owner's display name. | [optional] 
**Email** | Pointer to **string** | Owner's email. | [optional] 

## Methods

### NewAccessAppsOwner

`func NewAccessAppsOwner() *AccessAppsOwner`

NewAccessAppsOwner instantiates a new AccessAppsOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessAppsOwnerWithDefaults

`func NewAccessAppsOwnerWithDefaults() *AccessAppsOwner`

NewAccessAppsOwnerWithDefaults instantiates a new AccessAppsOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessAppsOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessAppsOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessAppsOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessAppsOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessAppsOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessAppsOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessAppsOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessAppsOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessAppsOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessAppsOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessAppsOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessAppsOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *AccessAppsOwner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *AccessAppsOwner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *AccessAppsOwner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *AccessAppsOwner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


