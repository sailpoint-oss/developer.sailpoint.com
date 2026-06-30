---
id: v1-update-access-profiles-in-bulk-v1412-response
title: UpdateAccessProfilesInBulkV1412Response
pagination_label: UpdateAccessProfilesInBulkV1412Response
sidebar_label: UpdateAccessProfilesInBulkV1412Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UpdateAccessProfilesInBulkV1412Response', 'V1UpdateAccessProfilesInBulkV1412Response'] 
slug: /tools/sdk/go/accessprofiles/models/update-access-profiles-in-bulk-v1412-response
tags: ['SDK', 'Software Development Kit', 'UpdateAccessProfilesInBulkV1412Response', 'V1UpdateAccessProfilesInBulkV1412Response']
---

# UpdateAccessProfilesInBulkV1412Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewUpdateAccessProfilesInBulkV1412Response

`func NewUpdateAccessProfilesInBulkV1412Response() *UpdateAccessProfilesInBulkV1412Response`

NewUpdateAccessProfilesInBulkV1412Response instantiates a new UpdateAccessProfilesInBulkV1412Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateAccessProfilesInBulkV1412ResponseWithDefaults

`func NewUpdateAccessProfilesInBulkV1412ResponseWithDefaults() *UpdateAccessProfilesInBulkV1412Response`

NewUpdateAccessProfilesInBulkV1412ResponseWithDefaults instantiates a new UpdateAccessProfilesInBulkV1412Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *UpdateAccessProfilesInBulkV1412Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *UpdateAccessProfilesInBulkV1412Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *UpdateAccessProfilesInBulkV1412Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *UpdateAccessProfilesInBulkV1412Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *UpdateAccessProfilesInBulkV1412Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *UpdateAccessProfilesInBulkV1412Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

