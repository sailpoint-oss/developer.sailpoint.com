# IntelAccessItemHistoryEvent

# IntelAccessItemHistoryEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **string** | Type of access-item history event. | 
**DateTime** | Pointer to **SailPointTime** | Event timestamp. | [optional] 

## Methods

### NewIntelAccessItemHistoryEvent

`func NewIntelAccessItemHistoryEvent(eventType string, ) *IntelAccessItemHistoryEvent`

NewIntelAccessItemHistoryEvent instantiates a new IntelAccessItemHistoryEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelAccessItemHistoryEventWithDefaults

`func NewIntelAccessItemHistoryEventWithDefaults() *IntelAccessItemHistoryEvent`

NewIntelAccessItemHistoryEventWithDefaults instantiates a new IntelAccessItemHistoryEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *IntelAccessItemHistoryEvent) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *IntelAccessItemHistoryEvent) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *IntelAccessItemHistoryEvent) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetDateTime

`func (o *IntelAccessItemHistoryEvent) GetDateTime() SailPointTime`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *IntelAccessItemHistoryEvent) GetDateTimeOk() (*SailPointTime, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *IntelAccessItemHistoryEvent) SetDateTime(v SailPointTime)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *IntelAccessItemHistoryEvent) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.


