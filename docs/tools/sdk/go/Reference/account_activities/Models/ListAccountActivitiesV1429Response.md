---
id: v1-list-account-activities-v1429-response
title: ListAccountActivitiesV1429Response
pagination_label: ListAccountActivitiesV1429Response
sidebar_label: ListAccountActivitiesV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListAccountActivitiesV1429Response', 'V1ListAccountActivitiesV1429Response'] 
slug: /tools/sdk/go/accountactivities/models/list-account-activities-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListAccountActivitiesV1429Response', 'V1ListAccountActivitiesV1429Response']
---

# ListAccountActivitiesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListAccountActivitiesV1429Response

`func NewListAccountActivitiesV1429Response() *ListAccountActivitiesV1429Response`

NewListAccountActivitiesV1429Response instantiates a new ListAccountActivitiesV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListAccountActivitiesV1429ResponseWithDefaults

`func NewListAccountActivitiesV1429ResponseWithDefaults() *ListAccountActivitiesV1429Response`

NewListAccountActivitiesV1429ResponseWithDefaults instantiates a new ListAccountActivitiesV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListAccountActivitiesV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListAccountActivitiesV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListAccountActivitiesV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListAccountActivitiesV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListAccountActivitiesV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListAccountActivitiesV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

