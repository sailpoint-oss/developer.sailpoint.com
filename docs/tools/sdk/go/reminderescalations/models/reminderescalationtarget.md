# Reminderescalationtarget

# Reminderescalationtarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** | **string** | Kind of recipient this target resolves to. | 
**IdentityId** | Pointer to **string** | Identity the target applies to. Empty for a dynamic `MANAGER_OF` target. | [optional] [default to ""]

## Methods

### NewReminderescalationtarget

`func NewReminderescalationtarget(targetType string, ) *Reminderescalationtarget`

NewReminderescalationtarget instantiates a new Reminderescalationtarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReminderescalationtargetWithDefaults

`func NewReminderescalationtargetWithDefaults() *Reminderescalationtarget`

NewReminderescalationtargetWithDefaults instantiates a new Reminderescalationtarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetType

`func (o *Reminderescalationtarget) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *Reminderescalationtarget) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *Reminderescalationtarget) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.


### GetIdentityId

`func (o *Reminderescalationtarget) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Reminderescalationtarget) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Reminderescalationtarget) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Reminderescalationtarget) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.


