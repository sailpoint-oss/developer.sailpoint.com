---
id: v2024-base-access-profile
title: BaseAccessProfile
pagination_label: BaseAccessProfile
sidebar_label: BaseAccessProfile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseAccessProfile', 'V2024BaseAccessProfile'] 
slug: /tools/sdk/go/v2024/models/base-access-profile
tags: ['SDK', 'Software Development Kit', 'BaseAccessProfile', 'V2024BaseAccessProfile']
---

# BaseAccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Access profile&#39;s unique ID. | [optional] 
**Name** | Pointer to **string** | Access profile&#39;s display name. | [optional] 

## Methods

### NewBaseAccessProfile

`func NewBaseAccessProfile() *BaseAccessProfile`

NewBaseAccessProfile instantiates a new BaseAccessProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseAccessProfileWithDefaults

`func NewBaseAccessProfileWithDefaults() *BaseAccessProfile`

NewBaseAccessProfileWithDefaults instantiates a new BaseAccessProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BaseAccessProfile) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseAccessProfile) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseAccessProfile) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseAccessProfile) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseAccessProfile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseAccessProfile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseAccessProfile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BaseAccessProfile) HasName() bool`

HasName returns a boolean if a field has been set.


