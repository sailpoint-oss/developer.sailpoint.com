---
id: v2024-work-item-forward
title: WorkItemForward
pagination_label: WorkItemForward
sidebar_label: WorkItemForward
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkItemForward', 'V2024WorkItemForward'] 
slug: /tools/sdk/go/v2024/models/work-item-forward
tags: ['SDK', 'Software Development Kit', 'WorkItemForward', 'V2024WorkItemForward']
---

# WorkItemForward

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetOwnerId** | **string** | The ID of the identity to forward this work item to. | 
**Comment** | **string** | Comments to send to the target owner | 
**SendNotifications** | Pointer to **bool** | If true, send a notification to the target owner. | [optional] [default to true]

## Methods

### NewWorkItemForward

`func NewWorkItemForward(targetOwnerId string, comment string, ) *WorkItemForward`

NewWorkItemForward instantiates a new WorkItemForward object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkItemForwardWithDefaults

`func NewWorkItemForwardWithDefaults() *WorkItemForward`

NewWorkItemForwardWithDefaults instantiates a new WorkItemForward object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetOwnerId

`func (o *WorkItemForward) GetTargetOwnerId() string`

GetTargetOwnerId returns the TargetOwnerId field if non-nil, zero value otherwise.

### GetTargetOwnerIdOk

`func (o *WorkItemForward) GetTargetOwnerIdOk() (*string, bool)`

GetTargetOwnerIdOk returns a tuple with the TargetOwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetOwnerId

`func (o *WorkItemForward) SetTargetOwnerId(v string)`

SetTargetOwnerId sets TargetOwnerId field to given value.


### GetComment

`func (o *WorkItemForward) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *WorkItemForward) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *WorkItemForward) SetComment(v string)`

SetComment sets Comment field to given value.


### GetSendNotifications

`func (o *WorkItemForward) GetSendNotifications() bool`

GetSendNotifications returns the SendNotifications field if non-nil, zero value otherwise.

### GetSendNotificationsOk

`func (o *WorkItemForward) GetSendNotificationsOk() (*bool, bool)`

GetSendNotificationsOk returns a tuple with the SendNotifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendNotifications

`func (o *WorkItemForward) SetSendNotifications(v bool)`

SetSendNotifications sets SendNotifications field to given value.

### HasSendNotifications

`func (o *WorkItemForward) HasSendNotifications() bool`

HasSendNotifications returns a boolean if a field has been set.


