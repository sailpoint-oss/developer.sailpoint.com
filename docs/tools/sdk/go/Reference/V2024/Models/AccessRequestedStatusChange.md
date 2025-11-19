---
id: v2024-access-requested-status-change
title: AccessRequestedStatusChange
pagination_label: AccessRequestedStatusChange
sidebar_label: AccessRequestedStatusChange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestedStatusChange', 'V2024AccessRequestedStatusChange'] 
slug: /tools/sdk/go/v2024/models/access-requested-status-change
tags: ['SDK', 'Software Development Kit', 'AccessRequestedStatusChange', 'V2024AccessRequestedStatusChange']
---

# AccessRequestedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** | Pointer to **string** | the previous status of the account | [optional] 
**NewStatus** | Pointer to **string** | the new status of the account | [optional] 

## Methods

### NewAccessRequestedStatusChange

`func NewAccessRequestedStatusChange() *AccessRequestedStatusChange`

NewAccessRequestedStatusChange instantiates a new AccessRequestedStatusChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestedStatusChangeWithDefaults

`func NewAccessRequestedStatusChangeWithDefaults() *AccessRequestedStatusChange`

NewAccessRequestedStatusChangeWithDefaults instantiates a new AccessRequestedStatusChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreviousStatus

`func (o *AccessRequestedStatusChange) GetPreviousStatus() string`

GetPreviousStatus returns the PreviousStatus field if non-nil, zero value otherwise.

### GetPreviousStatusOk

`func (o *AccessRequestedStatusChange) GetPreviousStatusOk() (*string, bool)`

GetPreviousStatusOk returns a tuple with the PreviousStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousStatus

`func (o *AccessRequestedStatusChange) SetPreviousStatus(v string)`

SetPreviousStatus sets PreviousStatus field to given value.

### HasPreviousStatus

`func (o *AccessRequestedStatusChange) HasPreviousStatus() bool`

HasPreviousStatus returns a boolean if a field has been set.

### GetNewStatus

`func (o *AccessRequestedStatusChange) GetNewStatus() string`

GetNewStatus returns the NewStatus field if non-nil, zero value otherwise.

### GetNewStatusOk

`func (o *AccessRequestedStatusChange) GetNewStatusOk() (*string, bool)`

GetNewStatusOk returns a tuple with the NewStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewStatus

`func (o *AccessRequestedStatusChange) SetNewStatus(v string)`

SetNewStatus sets NewStatus field to given value.

### HasNewStatus

`func (o *AccessRequestedStatusChange) HasNewStatus() bool`

HasNewStatus returns a boolean if a field has been set.


