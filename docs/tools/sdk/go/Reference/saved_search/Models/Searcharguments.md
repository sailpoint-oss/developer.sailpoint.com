---
id: v1-searcharguments
title: Searcharguments
pagination_label: Searcharguments
sidebar_label: Searcharguments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Searcharguments', 'V1Searcharguments'] 
slug: /tools/sdk/go/savedsearch/models/searcharguments
tags: ['SDK', 'Software Development Kit', 'Searcharguments', 'V1Searcharguments']
---

# Searcharguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleId** | Pointer to **string** | The ID of the scheduled search that triggered the saved search execution.  | [optional] 
**Owner** | Pointer to [**Typedreference**](typedreference) | The owner of the scheduled search being tested.  | [optional] 
**Recipients** | Pointer to [**[]Typedreference**](typedreference) | The email recipients of the scheduled search being tested.  | [optional] 

## Methods

### NewSearcharguments

`func NewSearcharguments() *Searcharguments`

NewSearcharguments instantiates a new Searcharguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchargumentsWithDefaults

`func NewSearchargumentsWithDefaults() *Searcharguments`

NewSearchargumentsWithDefaults instantiates a new Searcharguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheduleId

`func (o *Searcharguments) GetScheduleId() string`

GetScheduleId returns the ScheduleId field if non-nil, zero value otherwise.

### GetScheduleIdOk

`func (o *Searcharguments) GetScheduleIdOk() (*string, bool)`

GetScheduleIdOk returns a tuple with the ScheduleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleId

`func (o *Searcharguments) SetScheduleId(v string)`

SetScheduleId sets ScheduleId field to given value.

### HasScheduleId

`func (o *Searcharguments) HasScheduleId() bool`

HasScheduleId returns a boolean if a field has been set.

### GetOwner

`func (o *Searcharguments) GetOwner() Typedreference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Searcharguments) GetOwnerOk() (*Typedreference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Searcharguments) SetOwner(v Typedreference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Searcharguments) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRecipients

`func (o *Searcharguments) GetRecipients() []Typedreference`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *Searcharguments) GetRecipientsOk() (*[]Typedreference, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *Searcharguments) SetRecipients(v []Typedreference)`

SetRecipients sets Recipients field to given value.

### HasRecipients

`func (o *Searcharguments) HasRecipients() bool`

HasRecipients returns a boolean if a field has been set.


