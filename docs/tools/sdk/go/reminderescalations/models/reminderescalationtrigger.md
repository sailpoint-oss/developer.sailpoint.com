# Reminderescalationtrigger

# Reminderescalationtrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerType** | **string** | How this escalation decides when to fire. | 
**Cron** | Pointer to **string** | Five-field cron expression. Required when `triggerType` is `ON_CRON`. | [optional] [default to ""]
**BeforeDeadLine** | Pointer to **string** | ISO-8601 duration relative to the deadline. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `activeAfter`. | [optional] [default to ""]
**ActiveAfter** | Pointer to **string** | ISO-8601 duration relative to workflow start. Used when `triggerType` is `ON_CRON`. Mutually exclusive with `beforeDeadLine`. | [optional] [default to ""]
**MaxFirings** | Pointer to **NullableInt32** | Maximum number of times an `ON_CRON` escalation fires. Null means no cap. | [optional] 
**Count** | Pointer to **NullableInt32** | Reminder count for the current assignee. Required when `triggerType` is `AFTER_REMINDER_COUNT`. Null when `triggerType` is `ON_CRON`. | [optional] 
**Delay** | Pointer to **string** | ISO-8601 grace period before an `AFTER_REMINDER_COUNT` escalation fires. | [optional] [default to ""]

## Methods

### NewReminderescalationtrigger

`func NewReminderescalationtrigger(triggerType string, ) *Reminderescalationtrigger`

NewReminderescalationtrigger instantiates a new Reminderescalationtrigger object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationtriggerWithDefaults

`func NewReminderescalationtriggerWithDefaults() *Reminderescalationtrigger`

NewReminderescalationtriggerWithDefaults instantiates a new Reminderescalationtrigger object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTriggerType

`func (o *Reminderescalationtrigger) GetTriggerType() string`

GetTriggerType returns the TriggerType field if non-nil, zero value otherwise.

### GetTriggerTypeOk

`func (o *Reminderescalationtrigger) GetTriggerTypeOk() (*string, bool)`

GetTriggerTypeOk returns a tuple with the TriggerType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerType

`func (o *Reminderescalationtrigger) SetTriggerType(v string)`

SetTriggerType sets TriggerType field to given value.


### GetCron

`func (o *Reminderescalationtrigger) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *Reminderescalationtrigger) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *Reminderescalationtrigger) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *Reminderescalationtrigger) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetBeforeDeadLine

`func (o *Reminderescalationtrigger) GetBeforeDeadLine() string`

GetBeforeDeadLine returns the BeforeDeadLine field if non-nil, zero value otherwise.

### GetBeforeDeadLineOk

`func (o *Reminderescalationtrigger) GetBeforeDeadLineOk() (*string, bool)`

GetBeforeDeadLineOk returns a tuple with the BeforeDeadLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeDeadLine

`func (o *Reminderescalationtrigger) SetBeforeDeadLine(v string)`

SetBeforeDeadLine sets BeforeDeadLine field to given value.

### HasBeforeDeadLine

`func (o *Reminderescalationtrigger) HasBeforeDeadLine() bool`

HasBeforeDeadLine returns a boolean if a field has been set.

### GetActiveAfter

`func (o *Reminderescalationtrigger) GetActiveAfter() string`

GetActiveAfter returns the ActiveAfter field if non-nil, zero value otherwise.

### GetActiveAfterOk

`func (o *Reminderescalationtrigger) GetActiveAfterOk() (*string, bool)`

GetActiveAfterOk returns a tuple with the ActiveAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveAfter

`func (o *Reminderescalationtrigger) SetActiveAfter(v string)`

SetActiveAfter sets ActiveAfter field to given value.

### HasActiveAfter

`func (o *Reminderescalationtrigger) HasActiveAfter() bool`

HasActiveAfter returns a boolean if a field has been set.

### GetMaxFirings

`func (o *Reminderescalationtrigger) GetMaxFirings() int32`

GetMaxFirings returns the MaxFirings field if non-nil, zero value otherwise.

### GetMaxFiringsOk

`func (o *Reminderescalationtrigger) GetMaxFiringsOk() (*int32, bool)`

GetMaxFiringsOk returns a tuple with the MaxFirings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFirings

`func (o *Reminderescalationtrigger) SetMaxFirings(v int32)`

SetMaxFirings sets MaxFirings field to given value.

### HasMaxFirings

`func (o *Reminderescalationtrigger) HasMaxFirings() bool`

HasMaxFirings returns a boolean if a field has been set.

### SetMaxFiringsNil

`func (o *Reminderescalationtrigger) SetMaxFiringsNil(b bool)`

 SetMaxFiringsNil sets the value for MaxFirings to be an explicit nil

### UnsetMaxFirings
`func (o *Reminderescalationtrigger) UnsetMaxFirings()`

UnsetMaxFirings ensures that no value is present for MaxFirings, not even an explicit nil
### GetCount

`func (o *Reminderescalationtrigger) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *Reminderescalationtrigger) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *Reminderescalationtrigger) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *Reminderescalationtrigger) HasCount() bool`

HasCount returns a boolean if a field has been set.

### SetCountNil

`func (o *Reminderescalationtrigger) SetCountNil(b bool)`

 SetCountNil sets the value for Count to be an explicit nil

### UnsetCount
`func (o *Reminderescalationtrigger) UnsetCount()`

UnsetCount ensures that no value is present for Count, not even an explicit nil
### GetDelay

`func (o *Reminderescalationtrigger) GetDelay() string`

GetDelay returns the Delay field if non-nil, zero value otherwise.

### GetDelayOk

`func (o *Reminderescalationtrigger) GetDelayOk() (*string, bool)`

GetDelayOk returns a tuple with the Delay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelay

`func (o *Reminderescalationtrigger) SetDelay(v string)`

SetDelay sets Delay field to given value.

### HasDelay

`func (o *Reminderescalationtrigger) HasDelay() bool`

HasDelay returns a boolean if a field has been set.


