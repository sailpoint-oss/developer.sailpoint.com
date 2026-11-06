# Schedule

# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set. | 
**Months** | Pointer to [**Selector**](selector) |  | [optional] 
**Days** | Pointer to [**Selector**](selector) |  | [optional] 
**Hours** | Pointer to [**Selector**](selector) |  | [optional] 
**Expiration** | Pointer to **SailPointTime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**TimeZoneId** | Pointer to **string** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [optional] 

## Methods

### NewSchedule

`func NewSchedule(type_ string, ) *Schedule`

NewSchedule instantiates a new Schedule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleWithDefaults

`func NewScheduleWithDefaults() *Schedule`

NewScheduleWithDefaults instantiates a new Schedule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Schedule) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Schedule) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Schedule) SetType(v string)`

SetType sets Type field to given value.


### GetMonths

`func (o *Schedule) GetMonths() Selector`

GetMonths returns the Months field if non-nil, zero value otherwise.

### GetMonthsOk

`func (o *Schedule) GetMonthsOk() (*Selector, bool)`

GetMonthsOk returns a tuple with the Months field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonths

`func (o *Schedule) SetMonths(v Selector)`

SetMonths sets Months field to given value.

### HasMonths

`func (o *Schedule) HasMonths() bool`

HasMonths returns a boolean if a field has been set.

### GetDays

`func (o *Schedule) GetDays() Selector`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *Schedule) GetDaysOk() (*Selector, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *Schedule) SetDays(v Selector)`

SetDays sets Days field to given value.

### HasDays

`func (o *Schedule) HasDays() bool`

HasDays returns a boolean if a field has been set.

### GetHours

`func (o *Schedule) GetHours() Selector`

GetHours returns the Hours field if non-nil, zero value otherwise.

### GetHoursOk

`func (o *Schedule) GetHoursOk() (*Selector, bool)`

GetHoursOk returns a tuple with the Hours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHours

`func (o *Schedule) SetHours(v Selector)`

SetHours sets Hours field to given value.

### HasHours

`func (o *Schedule) HasHours() bool`

HasHours returns a boolean if a field has been set.

### GetExpiration

`func (o *Schedule) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Schedule) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Schedule) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Schedule) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetTimeZoneId

`func (o *Schedule) GetTimeZoneId() string`

GetTimeZoneId returns the TimeZoneId field if non-nil, zero value otherwise.

### GetTimeZoneIdOk

`func (o *Schedule) GetTimeZoneIdOk() (*string, bool)`

GetTimeZoneIdOk returns a tuple with the TimeZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeZoneId

`func (o *Schedule) SetTimeZoneId(v string)`

SetTimeZoneId sets TimeZoneId field to given value.

### HasTimeZoneId

`func (o *Schedule) HasTimeZoneId() bool`

HasTimeZoneId returns a boolean if a field has been set.


