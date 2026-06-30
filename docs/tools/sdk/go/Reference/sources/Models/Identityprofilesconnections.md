---
id: v1-identityprofilesconnections
title: Identityprofilesconnections
pagination_label: Identityprofilesconnections
sidebar_label: Identityprofilesconnections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityprofilesconnections', 'V1Identityprofilesconnections'] 
slug: /tools/sdk/go/sources/models/identityprofilesconnections
tags: ['SDK', 'Software Development Kit', 'Identityprofilesconnections', 'V1Identityprofilesconnections']
---

# Identityprofilesconnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the IdentityProfile this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the IdentityProfile to which this reference applies | [optional] 
**IdentityCount** | Pointer to **int64** | The Number of Identities managed by this IdentityProfile | [optional] 

## Methods

### NewIdentityprofilesconnections

`func NewIdentityprofilesconnections() *Identityprofilesconnections`

NewIdentityprofilesconnections instantiates a new Identityprofilesconnections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityprofilesconnectionsWithDefaults

`func NewIdentityprofilesconnectionsWithDefaults() *Identityprofilesconnections`

NewIdentityprofilesconnectionsWithDefaults instantiates a new Identityprofilesconnections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identityprofilesconnections) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identityprofilesconnections) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identityprofilesconnections) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identityprofilesconnections) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identityprofilesconnections) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityprofilesconnections) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityprofilesconnections) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identityprofilesconnections) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIdentityCount

`func (o *Identityprofilesconnections) GetIdentityCount() int64`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Identityprofilesconnections) GetIdentityCountOk() (*int64, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Identityprofilesconnections) SetIdentityCount(v int64)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Identityprofilesconnections) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.


