---
id: v1-createstreamrequest
title: Createstreamrequest
pagination_label: Createstreamrequest
sidebar_label: Createstreamrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createstreamrequest', 'V1Createstreamrequest'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/createstreamrequest
tags: ['SDK', 'Software Development Kit', 'Createstreamrequest', 'V1Createstreamrequest']
---

# Createstreamrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delivery** | [**Createstreamdeliveryrequest**](createstreamdeliveryrequest) |  | 
**EventsRequested** | Pointer to **[]string** | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**Description** | Pointer to **string** | Optional human-readable description of the stream. | [optional] 

## Methods

### NewCreatestreamrequest

`func NewCreatestreamrequest(delivery Createstreamdeliveryrequest, ) *Createstreamrequest`

NewCreatestreamrequest instantiates a new Createstreamrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatestreamrequestWithDefaults

`func NewCreatestreamrequestWithDefaults() *Createstreamrequest`

NewCreatestreamrequestWithDefaults instantiates a new Createstreamrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDelivery

`func (o *Createstreamrequest) GetDelivery() Createstreamdeliveryrequest`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *Createstreamrequest) GetDeliveryOk() (*Createstreamdeliveryrequest, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *Createstreamrequest) SetDelivery(v Createstreamdeliveryrequest)`

SetDelivery sets Delivery field to given value.


### GetEventsRequested

`func (o *Createstreamrequest) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *Createstreamrequest) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *Createstreamrequest) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *Createstreamrequest) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetDescription

`func (o *Createstreamrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Createstreamrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Createstreamrequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Createstreamrequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


