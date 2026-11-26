# IntelCertificationHistoryEvent

# IntelCertificationHistoryEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of certification history event. | 
**DateTime** | Pointer to **SailPointTime** | Event timestamp. | [optional] 
**CertificationId** | Pointer to **string** | Identifier of the certification. | [optional] 
**CertificationName** | Pointer to **string** | Display name of the certification. | [optional] 
**SignedDate** | Pointer to **SailPointTime** | Timestamp when the certification was signed. | [optional] 

## Methods

### NewIntelCertificationHistoryEvent

`func NewIntelCertificationHistoryEvent(eventType string, ) *IntelCertificationHistoryEvent`

NewIntelCertificationHistoryEvent instantiates a new IntelCertificationHistoryEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelCertificationHistoryEventWithDefaults

`func NewIntelCertificationHistoryEventWithDefaults() *IntelCertificationHistoryEvent`

NewIntelCertificationHistoryEventWithDefaults instantiates a new IntelCertificationHistoryEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *IntelCertificationHistoryEvent) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *IntelCertificationHistoryEvent) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *IntelCertificationHistoryEvent) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetDateTime

`func (o *IntelCertificationHistoryEvent) GetDateTime() SailPointTime`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *IntelCertificationHistoryEvent) GetDateTimeOk() (*SailPointTime, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *IntelCertificationHistoryEvent) SetDateTime(v SailPointTime)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *IntelCertificationHistoryEvent) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetCertificationId

`func (o *IntelCertificationHistoryEvent) GetCertificationId() string`

GetCertificationId returns the CertificationId field if non-nil, zero value otherwise.

### GetCertificationIdOk

`func (o *IntelCertificationHistoryEvent) GetCertificationIdOk() (*string, bool)`

GetCertificationIdOk returns a tuple with the CertificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationId

`func (o *IntelCertificationHistoryEvent) SetCertificationId(v string)`

SetCertificationId sets CertificationId field to given value.

### HasCertificationId

`func (o *IntelCertificationHistoryEvent) HasCertificationId() bool`

HasCertificationId returns a boolean if a field has been set.

### GetCertificationName

`func (o *IntelCertificationHistoryEvent) GetCertificationName() string`

GetCertificationName returns the CertificationName field if non-nil, zero value otherwise.

### GetCertificationNameOk

`func (o *IntelCertificationHistoryEvent) GetCertificationNameOk() (*string, bool)`

GetCertificationNameOk returns a tuple with the CertificationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationName

`func (o *IntelCertificationHistoryEvent) SetCertificationName(v string)`

SetCertificationName sets CertificationName field to given value.

### HasCertificationName

`func (o *IntelCertificationHistoryEvent) HasCertificationName() bool`

HasCertificationName returns a boolean if a field has been set.

### GetSignedDate

`func (o *IntelCertificationHistoryEvent) GetSignedDate() SailPointTime`

GetSignedDate returns the SignedDate field if non-nil, zero value otherwise.

### GetSignedDateOk

`func (o *IntelCertificationHistoryEvent) GetSignedDateOk() (*SailPointTime, bool)`

GetSignedDateOk returns a tuple with the SignedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedDate

`func (o *IntelCertificationHistoryEvent) SetSignedDate(v SailPointTime)`

SetSignedDate sets SignedDate field to given value.

### HasSignedDate

`func (o *IntelCertificationHistoryEvent) HasSignedDate() bool`

HasSignedDate returns a boolean if a field has been set.


