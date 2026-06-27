---
id: v1-updatestreamconfigurationrequest
title: Updatestreamconfigurationrequest
pagination_label: Updatestreamconfigurationrequest
sidebar_label: Updatestreamconfigurationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Updatestreamconfigurationrequest', 'V1Updatestreamconfigurationrequest'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/updatestreamconfigurationrequest
tags: ['SDK', 'Software Development Kit', 'Updatestreamconfigurationrequest', 'V1Updatestreamconfigurationrequest']
---

# Updatestreamconfigurationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | **string** | ID of the stream to update. | 
**Delivery** | Pointer to [**Deliveryrequest**](deliveryrequest) |  | [optional] 
**EventsRequested** | Pointer to **[]string** | Event types the receiver wants. Use CAEP event-type URIs. | [optional] 
**Description** | Pointer to **string** | Optional human-readable description of the stream. | [optional] 

## Methods

### NewUpdatestreamconfigurationrequest

`func NewUpdatestreamconfigurationrequest(streamId string, ) *Updatestreamconfigurationrequest`

NewUpdatestreamconfigurationrequest instantiates a new Updatestreamconfigurationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatestreamconfigurationrequestWithDefaults

`func NewUpdatestreamconfigurationrequestWithDefaults() *Updatestreamconfigurationrequest`

NewUpdatestreamconfigurationrequestWithDefaults instantiates a new Updatestreamconfigurationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *Updatestreamconfigurationrequest) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *Updatestreamconfigurationrequest) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *Updatestreamconfigurationrequest) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.


### GetDelivery

`func (o *Updatestreamconfigurationrequest) GetDelivery() Deliveryrequest`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *Updatestreamconfigurationrequest) GetDeliveryOk() (*Deliveryrequest, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *Updatestreamconfigurationrequest) SetDelivery(v Deliveryrequest)`

SetDelivery sets Delivery field to given value.

### HasDelivery

`func (o *Updatestreamconfigurationrequest) HasDelivery() bool`

HasDelivery returns a boolean if a field has been set.

### GetEventsRequested

`func (o *Updatestreamconfigurationrequest) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *Updatestreamconfigurationrequest) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *Updatestreamconfigurationrequest) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *Updatestreamconfigurationrequest) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetDescription

`func (o *Updatestreamconfigurationrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Updatestreamconfigurationrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Updatestreamconfigurationrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Updatestreamconfigurationrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


