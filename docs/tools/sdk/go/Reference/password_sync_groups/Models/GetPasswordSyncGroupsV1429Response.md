---
id: v1-get-password-sync-groups-v1429-response
title: GetPasswordSyncGroupsV1429Response
pagination_label: GetPasswordSyncGroupsV1429Response
sidebar_label: GetPasswordSyncGroupsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPasswordSyncGroupsV1429Response', 'V1GetPasswordSyncGroupsV1429Response'] 
slug: /tools/sdk/go/passwordsyncgroups/models/get-password-sync-groups-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordSyncGroupsV1429Response', 'V1GetPasswordSyncGroupsV1429Response']
---

# GetPasswordSyncGroupsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPasswordSyncGroupsV1429Response

`func NewGetPasswordSyncGroupsV1429Response() *GetPasswordSyncGroupsV1429Response`

NewGetPasswordSyncGroupsV1429Response instantiates a new GetPasswordSyncGroupsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPasswordSyncGroupsV1429ResponseWithDefaults

`func NewGetPasswordSyncGroupsV1429ResponseWithDefaults() *GetPasswordSyncGroupsV1429Response`

NewGetPasswordSyncGroupsV1429ResponseWithDefaults instantiates a new GetPasswordSyncGroupsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPasswordSyncGroupsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPasswordSyncGroupsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPasswordSyncGroupsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPasswordSyncGroupsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPasswordSyncGroupsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPasswordSyncGroupsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

