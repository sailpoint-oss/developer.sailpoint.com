---
id: v2024-invite-identities-request
title: InviteIdentitiesRequest
pagination_label: InviteIdentitiesRequest
sidebar_label: InviteIdentitiesRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'InviteIdentitiesRequest', 'V2024InviteIdentitiesRequest'] 
slug: /tools/sdk/go/v2024/models/invite-identities-request
tags: ['SDK', 'Software Development Kit', 'InviteIdentitiesRequest', 'V2024InviteIdentitiesRequest']
---

# InviteIdentitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **[]string** | The list of Identities IDs to invite - required when &#39;uninvited&#39; is false | [optional] 
**Uninvited** | Pointer to **bool** | indicator (optional) to invite all unregistered identities in the system within a limit 1000. This parameter makes sense only when &#39;ids&#39; is empty. | [optional] [default to false]

## Methods

### NewInviteIdentitiesRequest

`func NewInviteIdentitiesRequest() *InviteIdentitiesRequest`

NewInviteIdentitiesRequest instantiates a new InviteIdentitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInviteIdentitiesRequestWithDefaults

`func NewInviteIdentitiesRequestWithDefaults() *InviteIdentitiesRequest`

NewInviteIdentitiesRequestWithDefaults instantiates a new InviteIdentitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *InviteIdentitiesRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *InviteIdentitiesRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *InviteIdentitiesRequest) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *InviteIdentitiesRequest) HasIds() bool`

HasIds returns a boolean if a field has been set.

### SetIdsNil

`func (o *InviteIdentitiesRequest) SetIdsNil(b bool)`

 SetIdsNil sets the value for Ids to be an explicit nil

### UnsetIds
`func (o *InviteIdentitiesRequest) UnsetIds()`

UnsetIds ensures that no value is present for Ids, not even an explicit nil
### GetUninvited

`func (o *InviteIdentitiesRequest) GetUninvited() bool`

GetUninvited returns the Uninvited field if non-nil, zero value otherwise.

### GetUninvitedOk

`func (o *InviteIdentitiesRequest) GetUninvitedOk() (*bool, bool)`

GetUninvitedOk returns a tuple with the Uninvited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUninvited

`func (o *InviteIdentitiesRequest) SetUninvited(v bool)`

SetUninvited sets Uninvited field to given value.

### HasUninvited

`func (o *InviteIdentitiesRequest) HasUninvited() bool`

HasUninvited returns a boolean if a field has been set.


