---
id: v1-updatestreamconfigresponse
title: Updatestreamconfigresponse
pagination_label: Updatestreamconfigresponse
sidebar_label: Updatestreamconfigresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Updatestreamconfigresponse', 'V1Updatestreamconfigresponse'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/updatestreamconfigresponse
tags: ['SDK', 'Software Development Kit', 'Updatestreamconfigresponse', 'V1Updatestreamconfigresponse']
---

# Updatestreamconfigresponse

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
**UpdatedAt** | Pointer to **SailPointTime** | Timestamp of the last configuration update. | [optional] 

## Methods

### NewUpdatestreamconfigresponse

`func NewUpdatestreamconfigresponse() *Updatestreamconfigresponse`

NewUpdatestreamconfigresponse instantiates a new Updatestreamconfigresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatestreamconfigresponseWithDefaults

`func NewUpdatestreamconfigresponseWithDefaults() *Updatestreamconfigresponse`

NewUpdatestreamconfigresponseWithDefaults instantiates a new Updatestreamconfigresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *Updatestreamconfigresponse) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *Updatestreamconfigresponse) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *Updatestreamconfigresponse) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.

### HasStreamId

`func (o *Updatestreamconfigresponse) HasStreamId() bool`

HasStreamId returns a boolean if a field has been set.

### GetIss

`func (o *Updatestreamconfigresponse) GetIss() string`

GetIss returns the Iss field if non-nil, zero value otherwise.

### GetIssOk

`func (o *Updatestreamconfigresponse) GetIssOk() (*string, bool)`

GetIssOk returns a tuple with the Iss field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIss

`func (o *Updatestreamconfigresponse) SetIss(v string)`

SetIss sets Iss field to given value.

### HasIss

`func (o *Updatestreamconfigresponse) HasIss() bool`

HasIss returns a boolean if a field has been set.

### GetAud

`func (o *Updatestreamconfigresponse) GetAud() string`

GetAud returns the Aud field if non-nil, zero value otherwise.

### GetAudOk

`func (o *Updatestreamconfigresponse) GetAudOk() (*string, bool)`

GetAudOk returns a tuple with the Aud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAud

`func (o *Updatestreamconfigresponse) SetAud(v string)`

SetAud sets Aud field to given value.

### HasAud

`func (o *Updatestreamconfigresponse) HasAud() bool`

HasAud returns a boolean if a field has been set.

### GetDelivery

`func (o *Updatestreamconfigresponse) GetDelivery() Deliveryresponse`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *Updatestreamconfigresponse) GetDeliveryOk() (*Deliveryresponse, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *Updatestreamconfigresponse) SetDelivery(v Deliveryresponse)`

SetDelivery sets Delivery field to given value.

### HasDelivery

`func (o *Updatestreamconfigresponse) HasDelivery() bool`

HasDelivery returns a boolean if a field has been set.

### GetEventsSupported

`func (o *Updatestreamconfigresponse) GetEventsSupported() []string`

GetEventsSupported returns the EventsSupported field if non-nil, zero value otherwise.

### GetEventsSupportedOk

`func (o *Updatestreamconfigresponse) GetEventsSupportedOk() (*[]string, bool)`

GetEventsSupportedOk returns a tuple with the EventsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsSupported

`func (o *Updatestreamconfigresponse) SetEventsSupported(v []string)`

SetEventsSupported sets EventsSupported field to given value.

### HasEventsSupported

`func (o *Updatestreamconfigresponse) HasEventsSupported() bool`

HasEventsSupported returns a boolean if a field has been set.

### GetEventsRequested

`func (o *Updatestreamconfigresponse) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *Updatestreamconfigresponse) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *Updatestreamconfigresponse) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *Updatestreamconfigresponse) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetEventsDelivered

`func (o *Updatestreamconfigresponse) GetEventsDelivered() []string`

GetEventsDelivered returns the EventsDelivered field if non-nil, zero value otherwise.

### GetEventsDeliveredOk

`func (o *Updatestreamconfigresponse) GetEventsDeliveredOk() (*[]string, bool)`

GetEventsDeliveredOk returns a tuple with the EventsDelivered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsDelivered

`func (o *Updatestreamconfigresponse) SetEventsDelivered(v []string)`

SetEventsDelivered sets EventsDelivered field to given value.

### HasEventsDelivered

`func (o *Updatestreamconfigresponse) HasEventsDelivered() bool`

HasEventsDelivered returns a boolean if a field has been set.

### GetDescription

`func (o *Updatestreamconfigresponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Updatestreamconfigresponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Updatestreamconfigresponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Updatestreamconfigresponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactivityTimeout

`func (o *Updatestreamconfigresponse) GetInactivityTimeout() int32`

GetInactivityTimeout returns the InactivityTimeout field if non-nil, zero value otherwise.

### GetInactivityTimeoutOk

`func (o *Updatestreamconfigresponse) GetInactivityTimeoutOk() (*int32, bool)`

GetInactivityTimeoutOk returns a tuple with the InactivityTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactivityTimeout

`func (o *Updatestreamconfigresponse) SetInactivityTimeout(v int32)`

SetInactivityTimeout sets InactivityTimeout field to given value.

### HasInactivityTimeout

`func (o *Updatestreamconfigresponse) HasInactivityTimeout() bool`

HasInactivityTimeout returns a boolean if a field has been set.

### GetMinVerificationInterval

`func (o *Updatestreamconfigresponse) GetMinVerificationInterval() int32`

GetMinVerificationInterval returns the MinVerificationInterval field if non-nil, zero value otherwise.

### GetMinVerificationIntervalOk

`func (o *Updatestreamconfigresponse) GetMinVerificationIntervalOk() (*int32, bool)`

GetMinVerificationIntervalOk returns a tuple with the MinVerificationInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinVerificationInterval

`func (o *Updatestreamconfigresponse) SetMinVerificationInterval(v int32)`

SetMinVerificationInterval sets MinVerificationInterval field to given value.

### HasMinVerificationInterval

`func (o *Updatestreamconfigresponse) HasMinVerificationInterval() bool`

HasMinVerificationInterval returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Updatestreamconfigresponse) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Updatestreamconfigresponse) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Updatestreamconfigresponse) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Updatestreamconfigresponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


