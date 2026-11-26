# Intelidentitygraphlink

# Intelidentitygraphlink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Href** | **string** | Absolute URL to the Identity Graph view. Omitted when the tenant lacks idg:base or when the IDN UI host cannot be resolved from sp-tenant. Query parameters include `entity` and `id` for the resolved identity. The `entity` value reflects identity type: `human_identity` for Human responses and `machine_identity` for NHI responses.  | 

## Methods

### NewIntelidentitygraphlink

`func NewIntelidentitygraphlink(href string, ) *Intelidentitygraphlink`

NewIntelidentitygraphlink instantiates a new Intelidentitygraphlink object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelidentitygraphlinkWithDefaults

`func NewIntelidentitygraphlinkWithDefaults() *Intelidentitygraphlink`

NewIntelidentitygraphlinkWithDefaults instantiates a new Intelidentitygraphlink object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHref

`func (o *Intelidentitygraphlink) GetHref() string`

GetHref returns the Href field if non-nil, zero value otherwise.

### GetHrefOk

`func (o *Intelidentitygraphlink) GetHrefOk() (*string, bool)`

GetHrefOk returns a tuple with the Href field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHref

`func (o *Intelidentitygraphlink) SetHref(v string)`

SetHref sets Href field to given value.



