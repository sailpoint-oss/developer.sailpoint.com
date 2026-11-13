# Reminderescalationtenantconfigcreate

# Reminderescalationtenantconfigcreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DomainObjectType** | **string** | Domain object type to create a default for. | 
**Rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | 

## Methods

### NewReminderescalationtenantconfigcreate

`func NewReminderescalationtenantconfigcreate(domainObjectType string, rules Reminderescalationruleset, ) *Reminderescalationtenantconfigcreate`

NewReminderescalationtenantconfigcreate instantiates a new Reminderescalationtenantconfigcreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationtenantconfigcreateWithDefaults

`func NewReminderescalationtenantconfigcreateWithDefaults() *Reminderescalationtenantconfigcreate`

NewReminderescalationtenantconfigcreateWithDefaults instantiates a new Reminderescalationtenantconfigcreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomainObjectType

`func (o *Reminderescalationtenantconfigcreate) GetDomainObjectType() string`

GetDomainObjectType returns the DomainObjectType field if non-nil, zero value otherwise.

### GetDomainObjectTypeOk

`func (o *Reminderescalationtenantconfigcreate) GetDomainObjectTypeOk() (*string, bool)`

GetDomainObjectTypeOk returns a tuple with the DomainObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainObjectType

`func (o *Reminderescalationtenantconfigcreate) SetDomainObjectType(v string)`

SetDomainObjectType sets DomainObjectType field to given value.


### GetRules

`func (o *Reminderescalationtenantconfigcreate) GetRules() Reminderescalationruleset`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *Reminderescalationtenantconfigcreate) GetRulesOk() (*Reminderescalationruleset, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *Reminderescalationtenantconfigcreate) SetRules(v Reminderescalationruleset)`

SetRules sets Rules field to given value.



