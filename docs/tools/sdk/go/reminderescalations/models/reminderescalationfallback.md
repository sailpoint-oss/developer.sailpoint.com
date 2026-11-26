# Reminderescalationfallback

# Reminderescalationfallback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Targets** | [**[]Reminderescalationtarget**](reminderescalationtarget) | Last-resort recipients for this fallback. Each entry resolves to a manager, identity, governance group, entitlement owner, or source owner. At least one target is required. | 
**Template** | **string** | Notification template key. | 

## Methods

### NewReminderescalationfallback

`func NewReminderescalationfallback(targets []Reminderescalationtarget, template string, ) *Reminderescalationfallback`

NewReminderescalationfallback instantiates a new Reminderescalationfallback object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationfallbackWithDefaults

`func NewReminderescalationfallbackWithDefaults() *Reminderescalationfallback`

NewReminderescalationfallbackWithDefaults instantiates a new Reminderescalationfallback object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargets

`func (o *Reminderescalationfallback) GetTargets() []Reminderescalationtarget`

GetTargets returns the Targets field if non-nil, zero value otherwise.

### GetTargetsOk

`func (o *Reminderescalationfallback) GetTargetsOk() (*[]Reminderescalationtarget, bool)`

GetTargetsOk returns a tuple with the Targets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargets

`func (o *Reminderescalationfallback) SetTargets(v []Reminderescalationtarget)`

SetTargets sets Targets field to given value.


### GetTemplate

`func (o *Reminderescalationfallback) GetTemplate() string`

GetTemplate returns the Template field if non-nil, zero value otherwise.

### GetTemplateOk

`func (o *Reminderescalationfallback) GetTemplateOk() (*string, bool)`

GetTemplateOk returns a tuple with the Template field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplate

`func (o *Reminderescalationfallback) SetTemplate(v string)`

SetTemplate sets Template field to given value.



