---
id: v1-get-stream-v1200-response
title: GetStreamV1200Response
pagination_label: GetStreamV1200Response
sidebar_label: GetStreamV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetStreamV1200Response', 'V1GetStreamV1200Response'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/get-stream-v1200-response
tags: ['SDK', 'Software Development Kit', 'GetStreamV1200Response', 'V1GetStreamV1200Response']
---

# GetStreamV1200Response

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

### NewGetStreamV1200Response

`func NewGetStreamV1200Response() *GetStreamV1200Response`

NewGetStreamV1200Response instantiates a new GetStreamV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetStreamV1200ResponseWithDefaults

`func NewGetStreamV1200ResponseWithDefaults() *GetStreamV1200Response`

NewGetStreamV1200ResponseWithDefaults instantiates a new GetStreamV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *GetStreamV1200Response) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *GetStreamV1200Response) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *GetStreamV1200Response) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.

### HasStreamId

`func (o *GetStreamV1200Response) HasStreamId() bool`

HasStreamId returns a boolean if a field has been set.

### GetIss

`func (o *GetStreamV1200Response) GetIss() string`

GetIss returns the Iss field if non-nil, zero value otherwise.

### GetIssOk

`func (o *GetStreamV1200Response) GetIssOk() (*string, bool)`

GetIssOk returns a tuple with the Iss field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIss

`func (o *GetStreamV1200Response) SetIss(v string)`

SetIss sets Iss field to given value.

### HasIss

`func (o *GetStreamV1200Response) HasIss() bool`

HasIss returns a boolean if a field has been set.

### GetAud

`func (o *GetStreamV1200Response) GetAud() string`

GetAud returns the Aud field if non-nil, zero value otherwise.

### GetAudOk

`func (o *GetStreamV1200Response) GetAudOk() (*string, bool)`

GetAudOk returns a tuple with the Aud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAud

`func (o *GetStreamV1200Response) SetAud(v string)`

SetAud sets Aud field to given value.

### HasAud

`func (o *GetStreamV1200Response) HasAud() bool`

HasAud returns a boolean if a field has been set.

### GetDelivery

`func (o *GetStreamV1200Response) GetDelivery() Deliveryresponse`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *GetStreamV1200Response) GetDeliveryOk() (*Deliveryresponse, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *GetStreamV1200Response) SetDelivery(v Deliveryresponse)`

SetDelivery sets Delivery field to given value.

### HasDelivery

`func (o *GetStreamV1200Response) HasDelivery() bool`

HasDelivery returns a boolean if a field has been set.

### GetEventsSupported

`func (o *GetStreamV1200Response) GetEventsSupported() []string`

GetEventsSupported returns the EventsSupported field if non-nil, zero value otherwise.

### GetEventsSupportedOk

`func (o *GetStreamV1200Response) GetEventsSupportedOk() (*[]string, bool)`

GetEventsSupportedOk returns a tuple with the EventsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsSupported

`func (o *GetStreamV1200Response) SetEventsSupported(v []string)`

SetEventsSupported sets EventsSupported field to given value.

### HasEventsSupported

`func (o *GetStreamV1200Response) HasEventsSupported() bool`

HasEventsSupported returns a boolean if a field has been set.

### GetEventsRequested

`func (o *GetStreamV1200Response) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *GetStreamV1200Response) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *GetStreamV1200Response) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *GetStreamV1200Response) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetEventsDelivered

`func (o *GetStreamV1200Response) GetEventsDelivered() []string`

GetEventsDelivered returns the EventsDelivered field if non-nil, zero value otherwise.

### GetEventsDeliveredOk

`func (o *GetStreamV1200Response) GetEventsDeliveredOk() (*[]string, bool)`

GetEventsDeliveredOk returns a tuple with the EventsDelivered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsDelivered

`func (o *GetStreamV1200Response) SetEventsDelivered(v []string)`

SetEventsDelivered sets EventsDelivered field to given value.

### HasEventsDelivered

`func (o *GetStreamV1200Response) HasEventsDelivered() bool`

HasEventsDelivered returns a boolean if a field has been set.

### GetDescription

`func (o *GetStreamV1200Response) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetStreamV1200Response) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetStreamV1200Response) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GetStreamV1200Response) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactivityTimeout

`func (o *GetStreamV1200Response) GetInactivityTimeout() int32`

GetInactivityTimeout returns the InactivityTimeout field if non-nil, zero value otherwise.

### GetInactivityTimeoutOk

`func (o *GetStreamV1200Response) GetInactivityTimeoutOk() (*int32, bool)`

GetInactivityTimeoutOk returns a tuple with the InactivityTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactivityTimeout

`func (o *GetStreamV1200Response) SetInactivityTimeout(v int32)`

SetInactivityTimeout sets InactivityTimeout field to given value.

### HasInactivityTimeout

`func (o *GetStreamV1200Response) HasInactivityTimeout() bool`

HasInactivityTimeout returns a boolean if a field has been set.

### GetMinVerificationInterval

`func (o *GetStreamV1200Response) GetMinVerificationInterval() int32`

GetMinVerificationInterval returns the MinVerificationInterval field if non-nil, zero value otherwise.

### GetMinVerificationIntervalOk

`func (o *GetStreamV1200Response) GetMinVerificationIntervalOk() (*int32, bool)`

GetMinVerificationIntervalOk returns a tuple with the MinVerificationInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinVerificationInterval

`func (o *GetStreamV1200Response) SetMinVerificationInterval(v int32)`

SetMinVerificationInterval sets MinVerificationInterval field to given value.

### HasMinVerificationInterval

`func (o *GetStreamV1200Response) HasMinVerificationInterval() bool`

HasMinVerificationInterval returns a boolean if a field has been set.


