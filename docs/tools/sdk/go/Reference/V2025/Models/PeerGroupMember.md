---
id: peer-group-member
title: PeerGroupMember
pagination_label: PeerGroupMember
sidebar_label: PeerGroupMember
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PeerGroupMember', 'PeerGroupMember'] 
slug: /tools/sdk/go//models/peer-group-member
tags: ['SDK', 'Software Development Kit', 'PeerGroupMember', 'PeerGroupMember']
---

# PeerGroupMember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifier for the peer group member. | [optional] 
**Type** | Pointer to **string** | The type of the peer group member. | [optional] 
**PeerGroupId** | Pointer to **string** | The ID of the peer group. | [optional] 
**Attributes** | Pointer to **map[string]map[string]interface{}** | Arbitrary key-value pairs, belonging to the peer group member. | [optional] 

## Methods

### NewPeerGroupMember

`func NewPeerGroupMember() *PeerGroupMember`

NewPeerGroupMember instantiates a new PeerGroupMember object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPeerGroupMemberWithDefaults

`func NewPeerGroupMemberWithDefaults() *PeerGroupMember`

NewPeerGroupMemberWithDefaults instantiates a new PeerGroupMember object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PeerGroupMember) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PeerGroupMember) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PeerGroupMember) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PeerGroupMember) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *PeerGroupMember) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PeerGroupMember) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PeerGroupMember) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PeerGroupMember) HasType() bool`

HasType returns a boolean if a field has been set.

### GetPeerGroupId

`func (o *PeerGroupMember) GetPeerGroupId() string`

GetPeerGroupId returns the PeerGroupId field if non-nil, zero value otherwise.

### GetPeerGroupIdOk

`func (o *PeerGroupMember) GetPeerGroupIdOk() (*string, bool)`

GetPeerGroupIdOk returns a tuple with the PeerGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeerGroupId

`func (o *PeerGroupMember) SetPeerGroupId(v string)`

SetPeerGroupId sets PeerGroupId field to given value.

### HasPeerGroupId

`func (o *PeerGroupMember) HasPeerGroupId() bool`

HasPeerGroupId returns a boolean if a field has been set.

### GetAttributes

`func (o *PeerGroupMember) GetAttributes() map[string]map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *PeerGroupMember) GetAttributesOk() (*map[string]map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *PeerGroupMember) SetAttributes(v map[string]map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *PeerGroupMember) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


