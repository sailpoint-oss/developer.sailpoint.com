# UpdateStreamConfigResponse

# UpdateStreamConfigResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StreamId** | Pointer to **string** | Unique stream identifier. | [optional] 
**Iss** | Pointer to **string** | Issuer (transmitter) URL. | [optional] 
**Aud** | Pointer to **string** | Audience for the stream. | [optional] 
**Delivery** | Pointer to [**DeliveryResponse**](delivery-response) |  | [optional] 
**EventsSupported** | Pointer to **[]string** | Event types supported by the transmitter. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session-revoked).  | [optional] 
**EventsRequested** | Pointer to **[]string** | Event types requested by the receiver. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [optional] 
**EventsDelivered** | Pointer to **[]string** | Event types currently being delivered (intersection of supported and requested). | [optional] 
**Description** | Pointer to **string** | Optional stream description. | [optional] 
**InactivityTimeout** | Pointer to **int32** | Inactivity timeout in seconds (optional). | [optional] 
**MinVerificationInterval** | Pointer to **int32** | Minimum verification interval in seconds (optional). | [optional] 
**UpdatedAt** | Pointer to **SailPointTime** | Timestamp of the last configuration update. | [optional] 

## Methods

### NewUpdateStreamConfigResponse

`func NewUpdateStreamConfigResponse() *UpdateStreamConfigResponse`

NewUpdateStreamConfigResponse instantiates a new UpdateStreamConfigResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateStreamConfigResponseWithDefaults

`func NewUpdateStreamConfigResponseWithDefaults() *UpdateStreamConfigResponse`

NewUpdateStreamConfigResponseWithDefaults instantiates a new UpdateStreamConfigResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStreamId

`func (o *UpdateStreamConfigResponse) GetStreamId() string`

GetStreamId returns the StreamId field if non-nil, zero value otherwise.

### GetStreamIdOk

`func (o *UpdateStreamConfigResponse) GetStreamIdOk() (*string, bool)`

GetStreamIdOk returns a tuple with the StreamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamId

`func (o *UpdateStreamConfigResponse) SetStreamId(v string)`

SetStreamId sets StreamId field to given value.

### HasStreamId

`func (o *UpdateStreamConfigResponse) HasStreamId() bool`

HasStreamId returns a boolean if a field has been set.

### GetIss

`func (o *UpdateStreamConfigResponse) GetIss() string`

GetIss returns the Iss field if non-nil, zero value otherwise.

### GetIssOk

`func (o *UpdateStreamConfigResponse) GetIssOk() (*string, bool)`

GetIssOk returns a tuple with the Iss field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIss

`func (o *UpdateStreamConfigResponse) SetIss(v string)`

SetIss sets Iss field to given value.

### HasIss

`func (o *UpdateStreamConfigResponse) HasIss() bool`

HasIss returns a boolean if a field has been set.

### GetAud

`func (o *UpdateStreamConfigResponse) GetAud() string`

GetAud returns the Aud field if non-nil, zero value otherwise.

### GetAudOk

`func (o *UpdateStreamConfigResponse) GetAudOk() (*string, bool)`

GetAudOk returns a tuple with the Aud field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAud

`func (o *UpdateStreamConfigResponse) SetAud(v string)`

SetAud sets Aud field to given value.

### HasAud

`func (o *UpdateStreamConfigResponse) HasAud() bool`

HasAud returns a boolean if a field has been set.

### GetDelivery

`func (o *UpdateStreamConfigResponse) GetDelivery() DeliveryResponse`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *UpdateStreamConfigResponse) GetDeliveryOk() (*DeliveryResponse, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *UpdateStreamConfigResponse) SetDelivery(v DeliveryResponse)`

SetDelivery sets Delivery field to given value.

### HasDelivery

`func (o *UpdateStreamConfigResponse) HasDelivery() bool`

HasDelivery returns a boolean if a field has been set.

### GetEventsSupported

`func (o *UpdateStreamConfigResponse) GetEventsSupported() []string`

GetEventsSupported returns the EventsSupported field if non-nil, zero value otherwise.

### GetEventsSupportedOk

`func (o *UpdateStreamConfigResponse) GetEventsSupportedOk() (*[]string, bool)`

GetEventsSupportedOk returns a tuple with the EventsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsSupported

`func (o *UpdateStreamConfigResponse) SetEventsSupported(v []string)`

SetEventsSupported sets EventsSupported field to given value.

### HasEventsSupported

`func (o *UpdateStreamConfigResponse) HasEventsSupported() bool`

HasEventsSupported returns a boolean if a field has been set.

### GetEventsRequested

`func (o *UpdateStreamConfigResponse) GetEventsRequested() []string`

GetEventsRequested returns the EventsRequested field if non-nil, zero value otherwise.

### GetEventsRequestedOk

`func (o *UpdateStreamConfigResponse) GetEventsRequestedOk() (*[]string, bool)`

GetEventsRequestedOk returns a tuple with the EventsRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsRequested

`func (o *UpdateStreamConfigResponse) SetEventsRequested(v []string)`

SetEventsRequested sets EventsRequested field to given value.

### HasEventsRequested

`func (o *UpdateStreamConfigResponse) HasEventsRequested() bool`

HasEventsRequested returns a boolean if a field has been set.

### GetEventsDelivered

`func (o *UpdateStreamConfigResponse) GetEventsDelivered() []string`

GetEventsDelivered returns the EventsDelivered field if non-nil, zero value otherwise.

### GetEventsDeliveredOk

`func (o *UpdateStreamConfigResponse) GetEventsDeliveredOk() (*[]string, bool)`

GetEventsDeliveredOk returns a tuple with the EventsDelivered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsDelivered

`func (o *UpdateStreamConfigResponse) SetEventsDelivered(v []string)`

SetEventsDelivered sets EventsDelivered field to given value.

### HasEventsDelivered

`func (o *UpdateStreamConfigResponse) HasEventsDelivered() bool`

HasEventsDelivered returns a boolean if a field has been set.

### GetDescription

`func (o *UpdateStreamConfigResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateStreamConfigResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateStreamConfigResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateStreamConfigResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactivityTimeout

`func (o *UpdateStreamConfigResponse) GetInactivityTimeout() int32`

GetInactivityTimeout returns the InactivityTimeout field if non-nil, zero value otherwise.

### GetInactivityTimeoutOk

`func (o *UpdateStreamConfigResponse) GetInactivityTimeoutOk() (*int32, bool)`

GetInactivityTimeoutOk returns a tuple with the InactivityTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactivityTimeout

`func (o *UpdateStreamConfigResponse) SetInactivityTimeout(v int32)`

SetInactivityTimeout sets InactivityTimeout field to given value.

### HasInactivityTimeout

`func (o *UpdateStreamConfigResponse) HasInactivityTimeout() bool`

HasInactivityTimeout returns a boolean if a field has been set.

### GetMinVerificationInterval

`func (o *UpdateStreamConfigResponse) GetMinVerificationInterval() int32`

GetMinVerificationInterval returns the MinVerificationInterval field if non-nil, zero value otherwise.

### GetMinVerificationIntervalOk

`func (o *UpdateStreamConfigResponse) GetMinVerificationIntervalOk() (*int32, bool)`

GetMinVerificationIntervalOk returns a tuple with the MinVerificationInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinVerificationInterval

`func (o *UpdateStreamConfigResponse) SetMinVerificationInterval(v int32)`

SetMinVerificationInterval sets MinVerificationInterval field to given value.

### HasMinVerificationInterval

`func (o *UpdateStreamConfigResponse) HasMinVerificationInterval() bool`

HasMinVerificationInterval returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *UpdateStreamConfigResponse) GetUpdatedAt() SailPointTime`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *UpdateStreamConfigResponse) GetUpdatedAtOk() (*SailPointTime, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *UpdateStreamConfigResponse) SetUpdatedAt(v SailPointTime)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *UpdateStreamConfigResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


