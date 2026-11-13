# Reminderescalationtenantconfigupdate

# Reminderescalationtenantconfigupdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | 
**Revision** | **int32** | Revision from a prior read of this ruleset. | 

## Methods

### NewReminderescalationtenantconfigupdate

`func NewReminderescalationtenantconfigupdate(rules Reminderescalationruleset, revision int32, ) *Reminderescalationtenantconfigupdate`

NewReminderescalationtenantconfigupdate instantiates a new Reminderescalationtenantconfigupdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationtenantconfigupdateWithDefaults

`func NewReminderescalationtenantconfigupdateWithDefaults() *Reminderescalationtenantconfigupdate`

NewReminderescalationtenantconfigupdateWithDefaults instantiates a new Reminderescalationtenantconfigupdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRules

`func (o *Reminderescalationtenantconfigupdate) GetRules() Reminderescalationruleset`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *Reminderescalationtenantconfigupdate) GetRulesOk() (*Reminderescalationruleset, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *Reminderescalationtenantconfigupdate) SetRules(v Reminderescalationruleset)`

SetRules sets Rules field to given value.


### GetRevision

`func (o *Reminderescalationtenantconfigupdate) GetRevision() int32`

GetRevision returns the Revision field if non-nil, zero value otherwise.

### GetRevisionOk

`func (o *Reminderescalationtenantconfigupdate) GetRevisionOk() (*int32, bool)`

GetRevisionOk returns a tuple with the Revision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevision

`func (o *Reminderescalationtenantconfigupdate) SetRevision(v int32)`

SetRevision sets Revision field to given value.



