---
id: v1-identityprofileexportedobject
title: Identityprofileexportedobject
pagination_label: Identityprofileexportedobject
sidebar_label: Identityprofileexportedobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityprofileexportedobject', 'V1Identityprofileexportedobject'] 
slug: /tools/sdk/go/identityprofiles/models/identityprofileexportedobject
tags: ['SDK', 'Software Development Kit', 'Identityprofileexportedobject', 'V1Identityprofileexportedobject']
---

# Identityprofileexportedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **int32** | Version or object from the target service. | [optional] 
**Self** | Pointer to [**IdentityprofileexportedobjectSelf**](identityprofileexportedobject-self) |  | [optional] 
**Object** | Pointer to [**Identityprofile**](identityprofile) |  | [optional] 

## Methods

### NewIdentityprofileexportedobject

`func NewIdentityprofileexportedobject() *Identityprofileexportedobject`

NewIdentityprofileexportedobject instantiates a new Identityprofileexportedobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityprofileexportedobjectWithDefaults

`func NewIdentityprofileexportedobjectWithDefaults() *Identityprofileexportedobject`

NewIdentityprofileexportedobjectWithDefaults instantiates a new Identityprofileexportedobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *Identityprofileexportedobject) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Identityprofileexportedobject) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Identityprofileexportedobject) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Identityprofileexportedobject) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetSelf

`func (o *Identityprofileexportedobject) GetSelf() IdentityprofileexportedobjectSelf`

GetSelf returns the Self field if non-nil, zero value otherwise.

### GetSelfOk

`func (o *Identityprofileexportedobject) GetSelfOk() (*IdentityprofileexportedobjectSelf, bool)`

GetSelfOk returns a tuple with the Self field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelf

`func (o *Identityprofileexportedobject) SetSelf(v IdentityprofileexportedobjectSelf)`

SetSelf sets Self field to given value.

### HasSelf

`func (o *Identityprofileexportedobject) HasSelf() bool`

HasSelf returns a boolean if a field has been set.

### GetObject

`func (o *Identityprofileexportedobject) GetObject() Identityprofile`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *Identityprofileexportedobject) GetObjectOk() (*Identityprofile, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *Identityprofileexportedobject) SetObject(v Identityprofile)`

SetObject sets Object field to given value.

### HasObject

`func (o *Identityprofileexportedobject) HasObject() bool`

HasObject returns a boolean if a field has been set.


