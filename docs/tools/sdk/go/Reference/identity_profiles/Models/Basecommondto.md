---
id: v1-basecommondto
title: Basecommondto
pagination_label: Basecommondto
sidebar_label: Basecommondto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Basecommondto', 'V1Basecommondto'] 
slug: /tools/sdk/go/identityprofiles/models/basecommondto
tags: ['SDK', 'Software Development Kit', 'Basecommondto', 'V1Basecommondto']
---

# Basecommondto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 

## Methods

### NewBasecommondto

`func NewBasecommondto(name NullableString, ) *Basecommondto`

NewBasecommondto instantiates a new Basecommondto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasecommondtoWithDefaults

`func NewBasecommondtoWithDefaults() *Basecommondto`

NewBasecommondtoWithDefaults instantiates a new Basecommondto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Basecommondto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Basecommondto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Basecommondto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Basecommondto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Basecommondto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Basecommondto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Basecommondto) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Basecommondto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Basecommondto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Basecommondto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Basecommondto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Basecommondto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Basecommondto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Basecommondto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Basecommondto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Basecommondto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Basecommondto) HasModified() bool`

HasModified returns a boolean if a field has been set.


