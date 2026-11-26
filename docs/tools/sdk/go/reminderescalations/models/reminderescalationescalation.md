# Reminderescalationescalation

# Reminderescalationescalation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Trigger** | [**Reminderescalationtrigger**](reminderescalationtrigger) |  | 
**Targets** | [**[]Reminderescalationtarget**](reminderescalationtarget) |  | 
**Template** | **string** | Notification template key. | 

## Methods

### NewReminderescalationescalation

`func NewReminderescalationescalation(trigger Reminderescalationtrigger, targets []Reminderescalationtarget, template string, ) *Reminderescalationescalation`

NewReminderescalationescalation instantiates a new Reminderescalationescalation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationescalationWithDefaults

`func NewReminderescalationescalationWithDefaults() *Reminderescalationescalation`

NewReminderescalationescalationWithDefaults instantiates a new Reminderescalationescalation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTrigger

`func (o *Reminderescalationescalation) GetTrigger() Reminderescalationtrigger`

GetTrigger returns the Trigger field if non-nil, zero value otherwise.

### GetTriggerOk

`func (o *Reminderescalationescalation) GetTriggerOk() (*Reminderescalationtrigger, bool)`

GetTriggerOk returns a tuple with the Trigger field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrigger

`func (o *Reminderescalationescalation) SetTrigger(v Reminderescalationtrigger)`

SetTrigger sets Trigger field to given value.


### GetTargets

`func (o *Reminderescalationescalation) GetTargets() []Reminderescalationtarget`

GetTargets returns the Targets field if non-nil, zero value otherwise.

### GetTargetsOk

`func (o *Reminderescalationescalation) GetTargetsOk() (*[]Reminderescalationtarget, bool)`

GetTargetsOk returns a tuple with the Targets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargets

`func (o *Reminderescalationescalation) SetTargets(v []Reminderescalationtarget)`

SetTargets sets Targets field to given value.


### GetTemplate

`func (o *Reminderescalationescalation) GetTemplate() string`

GetTemplate returns the Template field if non-nil, zero value otherwise.

### GetTemplateOk

`func (o *Reminderescalationescalation) GetTemplateOk() (*string, bool)`

GetTemplateOk returns a tuple with the Template field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplate

`func (o *Reminderescalationescalation) SetTemplate(v string)`

SetTemplate sets Template field to given value.



