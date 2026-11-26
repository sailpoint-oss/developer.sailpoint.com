# Reminderescalationruleset

# Reminderescalationruleset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reminders** | Pointer to [**[]Reminderescalationreminder**](reminderescalationreminder) | Independent reminder schedules. Every entry must use the same predicate, either `beforeDeadLine` or `activeAfter`. | [optional] [default to []]
**Escalations** | Pointer to [**[]Reminderescalationescalation**](reminderescalationescalation) | Independent escalations. Each entry has its own trigger. | [optional] [default to []]
**Fallback** | Pointer to [**Reminderescalationfallback**](reminderescalationfallback) |  | [optional] 

## Methods

### NewReminderescalationruleset

`func NewReminderescalationruleset() *Reminderescalationruleset`

NewReminderescalationruleset instantiates a new Reminderescalationruleset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationrulesetWithDefaults

`func NewReminderescalationrulesetWithDefaults() *Reminderescalationruleset`

NewReminderescalationrulesetWithDefaults instantiates a new Reminderescalationruleset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReminders

`func (o *Reminderescalationruleset) GetReminders() []Reminderescalationreminder`

GetReminders returns the Reminders field if non-nil, zero value otherwise.

### GetRemindersOk

`func (o *Reminderescalationruleset) GetRemindersOk() (*[]Reminderescalationreminder, bool)`

GetRemindersOk returns a tuple with the Reminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReminders

`func (o *Reminderescalationruleset) SetReminders(v []Reminderescalationreminder)`

SetReminders sets Reminders field to given value.

### HasReminders

`func (o *Reminderescalationruleset) HasReminders() bool`

HasReminders returns a boolean if a field has been set.

### GetEscalations

`func (o *Reminderescalationruleset) GetEscalations() []Reminderescalationescalation`

GetEscalations returns the Escalations field if non-nil, zero value otherwise.

### GetEscalationsOk

`func (o *Reminderescalationruleset) GetEscalationsOk() (*[]Reminderescalationescalation, bool)`

GetEscalationsOk returns a tuple with the Escalations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEscalations

`func (o *Reminderescalationruleset) SetEscalations(v []Reminderescalationescalation)`

SetEscalations sets Escalations field to given value.

### HasEscalations

`func (o *Reminderescalationruleset) HasEscalations() bool`

HasEscalations returns a boolean if a field has been set.

### GetFallback

`func (o *Reminderescalationruleset) GetFallback() Reminderescalationfallback`

GetFallback returns the Fallback field if non-nil, zero value otherwise.

### GetFallbackOk

`func (o *Reminderescalationruleset) GetFallbackOk() (*Reminderescalationfallback, bool)`

GetFallbackOk returns a tuple with the Fallback field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallback

`func (o *Reminderescalationruleset) SetFallback(v Reminderescalationfallback)`

SetFallback sets Fallback field to given value.

### HasFallback

`func (o *Reminderescalationruleset) HasFallback() bool`

HasFallback returns a boolean if a field has been set.


