---
id: search-arguments
title: SearchArguments
pagination_label: SearchArguments
sidebar_label: SearchArguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchArguments', 'SearchArguments'] 
slug: /tools/sdk/go//models/search-arguments
tags: ['SDK', 'Software Development Kit', 'SearchArguments', 'SearchArguments']
---

# SearchArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleId** | Pointer to **string** | The ID of the scheduled search that triggered the saved search execution.  | [optional] 
**Owner** | Pointer to [**TypedReference**](typed-reference) | The owner of the scheduled search being tested.  | [optional] 
**Recipients** | Pointer to [**[]TypedReference**](typed-reference) | The email recipients of the scheduled search being tested.  | [optional] 

## Methods

### NewSearchArguments

`func NewSearchArguments() *SearchArguments`

NewSearchArguments instantiates a new SearchArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchArgumentsWithDefaults

`func NewSearchArgumentsWithDefaults() *SearchArguments`

NewSearchArgumentsWithDefaults instantiates a new SearchArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheduleId

`func (o *SearchArguments) GetScheduleId() string`

GetScheduleId returns the ScheduleId field if non-nil, zero value otherwise.

### GetScheduleIdOk

`func (o *SearchArguments) GetScheduleIdOk() (*string, bool)`

GetScheduleIdOk returns a tuple with the ScheduleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleId

`func (o *SearchArguments) SetScheduleId(v string)`

SetScheduleId sets ScheduleId field to given value.

### HasScheduleId

`func (o *SearchArguments) HasScheduleId() bool`

HasScheduleId returns a boolean if a field has been set.

### GetOwner

`func (o *SearchArguments) GetOwner() TypedReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *SearchArguments) GetOwnerOk() (*TypedReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *SearchArguments) SetOwner(v TypedReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *SearchArguments) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRecipients

`func (o *SearchArguments) GetRecipients() []TypedReference`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *SearchArguments) GetRecipientsOk() (*[]TypedReference, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *SearchArguments) SetRecipients(v []TypedReference)`

SetRecipients sets Recipients field to given value.

### HasRecipients

`func (o *SearchArguments) HasRecipients() bool`

HasRecipients returns a boolean if a field has been set.


