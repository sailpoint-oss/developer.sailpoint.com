---
id: v1-streamconfigresponse
title: Streamconfigresponse
pagination_label: Streamconfigresponse
sidebar_label: Streamconfigresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Streamconfigresponse', 'V1Streamconfigresponse'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/streamconfigresponse
tags: ['SDK', 'Software Development Kit', 'Streamconfigresponse', 'V1Streamconfigresponse']
---

# Streamconfigresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | Pointer to **string** | Unique stream identifier. | [optional] 
**Iss** | Pointer to **string** | Issuer (transmitter) URL. | [optional] 
**Aud** | Pointer to **string** | Audience for the stream. | [optional] 
**Delivery** | Pointer to [**Deliveryresponse**](deliveryresponse) |  | [optional] 
**EventsSupported** | Pointer to **[]string** | Event types supported by the transmitter. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).  | [optional] 
**EventsRequested** | Pointer to **[]string** | Event types requested by the receiver. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**EventsDelivered** | Pointer to **[]string** | Event types currently being delivered (intersection of supported and requested). | [optional] 
**Description** | Pointer to **string** | Optional stream description. | [optional] 
**InactivityTimeout** | Pointer to **int32** | Inactivity timeout in seconds (optional). | [optional] 
**MinVerificationInterval** | Pointer to **int32** | Minimum verification interval in seconds (optional). | [optional] 

## Methods

### NewStreamconfigresponse

`func NewStreamconfigresponse() *Streamconfigresponse`

NewStreamconfigresponse instantiates a new Streamconfigresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStreamconfigresponseWithDefaults

`func NewStreamconfigresponseWithDefaults() *Streamconfigresponse`

NewStreamconfigresponseWithDefaults instantiates a new Streamconfigresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *Streamconfigresponse) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *Streamconfigresponse) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *Streamconfigresponse) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.

### HasStreamId

`func (o *Streamconfigresponse) HasStreamId() bool`

HasStreamId returns a boolean if a field has been set.

### GetIss

`func (o *Streamconfigresponse) GetIss() string`

GetIss returns the Iss field if non-nil, zero value otherwise.

### GetIssOk

`func (o *Streamconfigresponse) GetIssOk() (*string, bool)`

GetIssOk returns a tuple with the Iss field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIss

`func (o *Streamconfigresponse) SetIss(v string)`

SetIss sets Iss field to given value.

### HasIss

`func (o *Streamconfigresponse) HasIss() bool`

HasIss returns a boolean if a field has been set.

### GetAud

`func (o *Streamconfigresponse) GetAud() string`

GetAud returns the Aud field if non-nil, zero value otherwise.

### GetAudOk

`func (o *Streamconfigresponse) GetAudOk() (*string, bool)`

GetAudOk returns a tuple with the Aud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAud

`func (o *Streamconfigresponse) SetAud(v string)`

SetAud sets Aud field to given value.

### HasAud

`func (o *Streamconfigresponse) HasAud() bool`

HasAud returns a boolean if a field has been set.

### GetDelivery

`func (o *Streamconfigresponse) GetDelivery() Deliveryresponse`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *Streamconfigresponse) GetDeliveryOk() (*Deliveryresponse, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *Streamconfigresponse) SetDelivery(v Deliveryresponse)`

SetDelivery sets Delivery field to given value.

### HasDelivery

`func (o *Streamconfigresponse) HasDelivery() bool`

HasDelivery returns a boolean if a field has been set.

### GetEventsSupported

`func (o *Streamconfigresponse) GetEventsSupported() []string`

GetEventsSupported returns the EventsSupported field if non-nil, zero value otherwise.

### GetEventsSupportedOk

`func (o *Streamconfigresponse) GetEventsSupportedOk() (*[]string, bool)`

GetEventsSupportedOk returns a tuple with the EventsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsSupported

`func (o *Streamconfigresponse) SetEventsSupported(v []string)`

SetEventsSupported sets EventsSupported field to given value.

### HasEventsSupported

`func (o *Streamconfigresponse) HasEventsSupported() bool`

HasEventsSupported returns a boolean if a field has been set.

### GetEventsRequested

`func (o *Streamconfigresponse) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *Streamconfigresponse) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *Streamconfigresponse) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *Streamconfigresponse) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetEventsDelivered

`func (o *Streamconfigresponse) GetEventsDelivered() []string`

GetEventsDelivered returns the EventsDelivered field if non-nil, zero value otherwise.

### GetEventsDeliveredOk

`func (o *Streamconfigresponse) GetEventsDeliveredOk() (*[]string, bool)`

GetEventsDeliveredOk returns a tuple with the EventsDelivered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsDelivered

`func (o *Streamconfigresponse) SetEventsDelivered(v []string)`

SetEventsDelivered sets EventsDelivered field to given value.

### HasEventsDelivered

`func (o *Streamconfigresponse) HasEventsDelivered() bool`

HasEventsDelivered returns a boolean if a field has been set.

### GetDescription

`func (o *Streamconfigresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Streamconfigresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Streamconfigresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Streamconfigresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactivityTimeout

`func (o *Streamconfigresponse) GetInactivityTimeout() int32`

GetInactivityTimeout returns the InactivityTimeout field if non-nil, zero value otherwise.

### GetInactivityTimeoutOk

`func (o *Streamconfigresponse) GetInactivityTimeoutOk() (*int32, bool)`

GetInactivityTimeoutOk returns a tuple with the InactivityTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactivityTimeout

`func (o *Streamconfigresponse) SetInactivityTimeout(v int32)`

SetInactivityTimeout sets InactivityTimeout field to given value.

### HasInactivityTimeout

`func (o *Streamconfigresponse) HasInactivityTimeout() bool`

HasInactivityTimeout returns a boolean if a field has been set.

### GetMinVerificationInterval

`func (o *Streamconfigresponse) GetMinVerificationInterval() int32`

GetMinVerificationInterval returns the MinVerificationInterval field if non-nil, zero value otherwise.

### GetMinVerificationIntervalOk

`func (o *Streamconfigresponse) GetMinVerificationIntervalOk() (*int32, bool)`

GetMinVerificationIntervalOk returns a tuple with the MinVerificationInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinVerificationInterval

`func (o *Streamconfigresponse) SetMinVerificationInterval(v int32)`

SetMinVerificationInterval sets MinVerificationInterval field to given value.

### HasMinVerificationInterval

`func (o *Streamconfigresponse) HasMinVerificationInterval() bool`

HasMinVerificationInterval returns a boolean if a field has been set.


