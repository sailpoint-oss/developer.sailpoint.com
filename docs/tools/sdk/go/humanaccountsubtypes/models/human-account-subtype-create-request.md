# HumanAccountSubtypeCreateRequest

# HumanAccountSubtypeCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | Pointer to **NullableString** | Description of the subtype. | [optional] 
**Default** | Pointer to **bool** | Whether this subtype is the default human account subtype of the source. | [optional] [default to false]

## Methods

### NewHumanAccountSubtypeCreateRequest

`func NewHumanAccountSubtypeCreateRequest(technicalName string, displayName string, ) *HumanAccountSubtypeCreateRequest`

NewHumanAccountSubtypeCreateRequest instantiates a new HumanAccountSubtypeCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHumanAccountSubtypeCreateRequestWithDefaults

`func NewHumanAccountSubtypeCreateRequestWithDefaults() *HumanAccountSubtypeCreateRequest`

NewHumanAccountSubtypeCreateRequestWithDefaults instantiates a new HumanAccountSubtypeCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTechnicalName

`func (o *HumanAccountSubtypeCreateRequest) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *HumanAccountSubtypeCreateRequest) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *HumanAccountSubtypeCreateRequest) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *HumanAccountSubtypeCreateRequest) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *HumanAccountSubtypeCreateRequest) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *HumanAccountSubtypeCreateRequest) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *HumanAccountSubtypeCreateRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HumanAccountSubtypeCreateRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HumanAccountSubtypeCreateRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HumanAccountSubtypeCreateRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *HumanAccountSubtypeCreateRequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *HumanAccountSubtypeCreateRequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetDefault

`func (o *HumanAccountSubtypeCreateRequest) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *HumanAccountSubtypeCreateRequest) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *HumanAccountSubtypeCreateRequest) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *HumanAccountSubtypeCreateRequest) HasDefault() bool`

HasDefault returns a boolean if a field has been set.


