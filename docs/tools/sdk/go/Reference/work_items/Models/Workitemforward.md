---
id: v1-workitemforward
title: Workitemforward
pagination_label: Workitemforward
sidebar_label: Workitemforward
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workitemforward', 'V1Workitemforward'] 
slug: /tools/sdk/go/workitems/models/workitemforward
tags: ['SDK', 'Software Development Kit', 'Workitemforward', 'V1Workitemforward']
---

# Workitemforward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetOwnerId** | **string** | The ID of the identity to forward this work item to. | 
**Comment** | **string** | Comments to send to the target owner | 
**SendNotifications** | Pointer to **bool** | If true, send a notification to the target owner. | [optional] [default to true]

## Methods

### NewWorkitemforward

`func NewWorkitemforward(targetOwnerId string, comment string, ) *Workitemforward`

NewWorkitemforward instantiates a new Workitemforward object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkitemforwardWithDefaults

`func NewWorkitemforwardWithDefaults() *Workitemforward`

NewWorkitemforwardWithDefaults instantiates a new Workitemforward object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetOwnerId

`func (o *Workitemforward) GetTargetOwnerId() string`

GetTargetOwnerId returns the TargetOwnerId field if non-nil, zero value otherwise.

### GetTargetOwnerIdOk

`func (o *Workitemforward) GetTargetOwnerIdOk() (*string, bool)`

GetTargetOwnerIdOk returns a tuple with the TargetOwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetOwnerId

`func (o *Workitemforward) SetTargetOwnerId(v string)`

SetTargetOwnerId sets TargetOwnerId field to given value.


### GetComment

`func (o *Workitemforward) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Workitemforward) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Workitemforward) SetComment(v string)`

SetComment sets Comment field to given value.


### GetSendNotifications

`func (o *Workitemforward) GetSendNotifications() bool`

GetSendNotifications returns the SendNotifications field if non-nil, zero value otherwise.

### GetSendNotificationsOk

`func (o *Workitemforward) GetSendNotificationsOk() (*bool, bool)`

GetSendNotificationsOk returns a tuple with the SendNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendNotifications

`func (o *Workitemforward) SetSendNotifications(v bool)`

SetSendNotifications sets SendNotifications field to given value.

### HasSendNotifications

`func (o *Workitemforward) HasSendNotifications() bool`

HasSendNotifications returns a boolean if a field has been set.


