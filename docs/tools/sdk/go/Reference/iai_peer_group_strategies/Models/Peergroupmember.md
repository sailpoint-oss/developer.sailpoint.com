---
id: v1-peergroupmember
title: Peergroupmember
pagination_label: Peergroupmember
sidebar_label: Peergroupmember
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Peergroupmember', 'V1Peergroupmember'] 
slug: /tools/sdk/go/iaipeergroupstrategies/models/peergroupmember
tags: ['SDK', 'Software Development Kit', 'Peergroupmember', 'V1Peergroupmember']
---

# Peergroupmember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifier for the peer group member. | [optional] 
**Type** | Pointer to **string** | The type of the peer group member. | [optional] 
**PeerGroupId** | Pointer to **string** | The ID of the peer group. | [optional] 
**Attributes** | Pointer to **map[string]map[string]interface{}** | Arbitrary key-value pairs, belonging to the peer group member. | [optional] 

## Methods

### NewPeergroupmember

`func NewPeergroupmember() *Peergroupmember`

NewPeergroupmember instantiates a new Peergroupmember object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPeergroupmemberWithDefaults

`func NewPeergroupmemberWithDefaults() *Peergroupmember`

NewPeergroupmemberWithDefaults instantiates a new Peergroupmember object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Peergroupmember) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Peergroupmember) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Peergroupmember) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Peergroupmember) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Peergroupmember) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Peergroupmember) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Peergroupmember) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Peergroupmember) HasType() bool`

HasType returns a boolean if a field has been set.

### GetPeerGroupId

`func (o *Peergroupmember) GetPeerGroupId() string`

GetPeerGroupId returns the PeerGroupId field if non-nil, zero value otherwise.

### GetPeerGroupIdOk

`func (o *Peergroupmember) GetPeerGroupIdOk() (*string, bool)`

GetPeerGroupIdOk returns a tuple with the PeerGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeerGroupId

`func (o *Peergroupmember) SetPeerGroupId(v string)`

SetPeerGroupId sets PeerGroupId field to given value.

### HasPeerGroupId

`func (o *Peergroupmember) HasPeerGroupId() bool`

HasPeerGroupId returns a boolean if a field has been set.

### GetAttributes

`func (o *Peergroupmember) GetAttributes() map[string]map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Peergroupmember) GetAttributesOk() (*map[string]map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Peergroupmember) SetAttributes(v map[string]map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Peergroupmember) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


