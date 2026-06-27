---
id: v1-replacestreamconfigurationrequest
title: Replacestreamconfigurationrequest
pagination_label: Replacestreamconfigurationrequest
sidebar_label: Replacestreamconfigurationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Replacestreamconfigurationrequest', 'V1Replacestreamconfigurationrequest'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/replacestreamconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Replacestreamconfigurationrequest', 'V1Replacestreamconfigurationrequest']
---

# Replacestreamconfigurationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | ID of the stream to replace. | 
**Delivery** | [**ReplacestreamconfigurationrequestDelivery**](replacestreamconfigurationrequest-delivery) |  | 
**EventsRequested** | Pointer to **[]string** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**Description** | Pointer to **string** | Optional human-readable description of the stream. | [optional] 

## Methods

### NewReplacestreamconfigurationrequest

`func NewReplacestreamconfigurationrequest(streamId string, delivery ReplacestreamconfigurationrequestDelivery, ) *Replacestreamconfigurationrequest`

NewReplacestreamconfigurationrequest instantiates a new Replacestreamconfigurationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplacestreamconfigurationrequestWithDefaults

`func NewReplacestreamconfigurationrequestWithDefaults() *Replacestreamconfigurationrequest`

NewReplacestreamconfigurationrequestWithDefaults instantiates a new Replacestreamconfigurationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *Replacestreamconfigurationrequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *Replacestreamconfigurationrequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *Replacestreamconfigurationrequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetDelivery

`func (o *Replacestreamconfigurationrequest) GetDelivery() ReplacestreamconfigurationrequestDelivery`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *Replacestreamconfigurationrequest) GetDeliveryOk() (*ReplacestreamconfigurationrequestDelivery, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *Replacestreamconfigurationrequest) SetDelivery(v ReplacestreamconfigurationrequestDelivery)`

SetDelivery sets Delivery field to given value.


### GetEventsRequested

`func (o *Replacestreamconfigurationrequest) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *Replacestreamconfigurationrequest) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *Replacestreamconfigurationrequest) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *Replacestreamconfigurationrequest) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetDescription

`func (o *Replacestreamconfigurationrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Replacestreamconfigurationrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Replacestreamconfigurationrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Replacestreamconfigurationrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


