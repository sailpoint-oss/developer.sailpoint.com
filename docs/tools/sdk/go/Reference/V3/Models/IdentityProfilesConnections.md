---
id: identity-profiles-connections
title: IdentityProfilesConnections
pagination_label: IdentityProfilesConnections
sidebar_label: IdentityProfilesConnections
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityProfilesConnections', 'IdentityProfilesConnections'] 
slug: /tools/sdk/go/v3/models/identity-profiles-connections
tags: ['SDK', 'Software Development Kit', 'IdentityProfilesConnections', 'IdentityProfilesConnections']
---

# IdentityProfilesConnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the IdentityProfile this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the IdentityProfile to which this reference applies | [optional] 
**IdentityCount** | Pointer to **int64** | The Number of Identities managed by this IdentityProfile | [optional] 

## Methods

### NewIdentityProfilesConnections

`func NewIdentityProfilesConnections() *IdentityProfilesConnections`

NewIdentityProfilesConnections instantiates a new IdentityProfilesConnections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityProfilesConnectionsWithDefaults

`func NewIdentityProfilesConnectionsWithDefaults() *IdentityProfilesConnections`

NewIdentityProfilesConnectionsWithDefaults instantiates a new IdentityProfilesConnections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityProfilesConnections) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityProfilesConnections) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityProfilesConnections) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityProfilesConnections) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityProfilesConnections) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityProfilesConnections) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityProfilesConnections) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityProfilesConnections) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIdentityCount

`func (o *IdentityProfilesConnections) GetIdentityCount() int64`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *IdentityProfilesConnections) GetIdentityCountOk() (*int64, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *IdentityProfilesConnections) SetIdentityCount(v int64)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *IdentityProfilesConnections) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.


