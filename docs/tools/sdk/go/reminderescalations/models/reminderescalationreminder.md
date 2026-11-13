# Reminderescalationreminder

# Reminderescalationreminder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | **string** | Five-field cron expression, evaluated in UTC. | 
**BeforeDeadLine** | Pointer to **string** | ISO-8601 duration. The reminder is active when `(deadline - now) <= beforeDeadLine`. A negative duration means the reminder starts after the deadline, for example `-P14D`. Mutually exclusive with `activeAfter`.  | [optional] [default to ""]
**ActiveAfter** | Pointer to **string** | ISO-8601 duration. The reminder is active when `(now - workflowStart) >= activeAfter`. Mutually exclusive with `beforeDeadLine`.  | [optional] [default to ""]
**Template** | **string** | Notification template key. | 
**MaxFirings** | Pointer to **NullableInt32** | Maximum number of times this reminder fires before it deactivates. Null means the reminder keeps firing while its predicate is active. | [optional] 

## Methods

### NewReminderescalationreminder

`func NewReminderescalationreminder(cron string, template string, ) *Reminderescalationreminder`

NewReminderescalationreminder instantiates a new Reminderescalationreminder object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationreminderWithDefaults

`func NewReminderescalationreminderWithDefaults() *Reminderescalationreminder`

NewReminderescalationreminderWithDefaults instantiates a new Reminderescalationreminder object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *Reminderescalationreminder) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *Reminderescalationreminder) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *Reminderescalationreminder) SetCron(v string)`

SetCron sets Cron field to given value.


### GetBeforeDeadLine

`func (o *Reminderescalationreminder) GetBeforeDeadLine() string`

GetBeforeDeadLine returns the BeforeDeadLine field if non-nil, zero value otherwise.

### GetBeforeDeadLineOk

`func (o *Reminderescalationreminder) GetBeforeDeadLineOk() (*string, bool)`

GetBeforeDeadLineOk returns a tuple with the BeforeDeadLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeforeDeadLine

`func (o *Reminderescalationreminder) SetBeforeDeadLine(v string)`

SetBeforeDeadLine sets BeforeDeadLine field to given value.

### HasBeforeDeadLine

`func (o *Reminderescalationreminder) HasBeforeDeadLine() bool`

HasBeforeDeadLine returns a boolean if a field has been set.

### GetActiveAfter

`func (o *Reminderescalationreminder) GetActiveAfter() string`

GetActiveAfter returns the ActiveAfter field if non-nil, zero value otherwise.

### GetActiveAfterOk

`func (o *Reminderescalationreminder) GetActiveAfterOk() (*string, bool)`

GetActiveAfterOk returns a tuple with the ActiveAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveAfter

`func (o *Reminderescalationreminder) SetActiveAfter(v string)`

SetActiveAfter sets ActiveAfter field to given value.

### HasActiveAfter

`func (o *Reminderescalationreminder) HasActiveAfter() bool`

HasActiveAfter returns a boolean if a field has been set.

### GetTemplate

`func (o *Reminderescalationreminder) GetTemplate() string`

GetTemplate returns the Template field if non-nil, zero value otherwise.

### GetTemplateOk

`func (o *Reminderescalationreminder) GetTemplateOk() (*string, bool)`

GetTemplateOk returns a tuple with the Template field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplate

`func (o *Reminderescalationreminder) SetTemplate(v string)`

SetTemplate sets Template field to given value.


### GetMaxFirings

`func (o *Reminderescalationreminder) GetMaxFirings() int32`

GetMaxFirings returns the MaxFirings field if non-nil, zero value otherwise.

### GetMaxFiringsOk

`func (o *Reminderescalationreminder) GetMaxFiringsOk() (*int32, bool)`

GetMaxFiringsOk returns a tuple with the MaxFirings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxFirings

`func (o *Reminderescalationreminder) SetMaxFirings(v int32)`

SetMaxFirings sets MaxFirings field to given value.

### HasMaxFirings

`func (o *Reminderescalationreminder) HasMaxFirings() bool`

HasMaxFirings returns a boolean if a field has been set.

### SetMaxFiringsNil

`func (o *Reminderescalationreminder) SetMaxFiringsNil(b bool)`

 SetMaxFiringsNil sets the value for MaxFirings to be an explicit nil

### UnsetMaxFirings
`func (o *Reminderescalationreminder) UnsetMaxFirings()`

UnsetMaxFirings ensures that no value is present for MaxFirings, not even an explicit nil

