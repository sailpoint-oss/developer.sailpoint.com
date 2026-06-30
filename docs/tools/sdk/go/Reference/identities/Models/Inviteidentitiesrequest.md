---
id: v1-inviteidentitiesrequest
title: Inviteidentitiesrequest
pagination_label: Inviteidentitiesrequest
sidebar_label: Inviteidentitiesrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Inviteidentitiesrequest', 'V1Inviteidentitiesrequest'] 
slug: /tools/sdk/go/identities/models/inviteidentitiesrequest
tags: ['SDK', 'Software Development Kit', 'Inviteidentitiesrequest', 'V1Inviteidentitiesrequest']
---

# Inviteidentitiesrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **[]string** | The list of Identities IDs to invite - required when 'uninvited' is false | [optional] 
**Uninvited** | Pointer to **bool** | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when 'ids' is empty. | [optional] [default to false]

## Methods

### NewInviteidentitiesrequest

`func NewInviteidentitiesrequest() *Inviteidentitiesrequest`

NewInviteidentitiesrequest instantiates a new Inviteidentitiesrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInviteidentitiesrequestWithDefaults

`func NewInviteidentitiesrequestWithDefaults() *Inviteidentitiesrequest`

NewInviteidentitiesrequestWithDefaults instantiates a new Inviteidentitiesrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *Inviteidentitiesrequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *Inviteidentitiesrequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *Inviteidentitiesrequest) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *Inviteidentitiesrequest) HasIds() bool`

HasIds returns a boolean if a field has been set.

### SetIdsNil

`func (o *Inviteidentitiesrequest) SetIdsNil(b bool)`

 SetIdsNil sets the value for Ids to be an explicit nil

### UnsetIds
`func (o *Inviteidentitiesrequest) UnsetIds()`

UnsetIds ensures that no value is present for Ids, not even an explicit nil
### GetUninvited

`func (o *Inviteidentitiesrequest) GetUninvited() bool`

GetUninvited returns the Uninvited field if non-nil, zero value otherwise.

### GetUninvitedOk

`func (o *Inviteidentitiesrequest) GetUninvitedOk() (*bool, bool)`

GetUninvitedOk returns a tuple with the Uninvited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUninvited

`func (o *Inviteidentitiesrequest) SetUninvited(v bool)`

SetUninvited sets Uninvited field to given value.

### HasUninvited

`func (o *Inviteidentitiesrequest) HasUninvited() bool`

HasUninvited returns a boolean if a field has been set.


