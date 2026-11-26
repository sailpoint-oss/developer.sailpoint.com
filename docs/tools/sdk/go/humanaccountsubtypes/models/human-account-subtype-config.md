# HumanAccountSubtypeConfig

# HumanAccountSubtypeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | Pointer to **string** | ID of the human account subtype this configuration belongs to. | [optional] [readonly] 
**HumanAccountCreate** | Pointer to [**HumanAccountSubtypeConfigHumanAccountCreate**](human-account-subtype-config-human-account-create) |  | [optional] 

## Methods

### NewHumanAccountSubtypeConfig

`func NewHumanAccountSubtypeConfig() *HumanAccountSubtypeConfig`

NewHumanAccountSubtypeConfig instantiates a new HumanAccountSubtypeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHumanAccountSubtypeConfigWithDefaults

`func NewHumanAccountSubtypeConfigWithDefaults() *HumanAccountSubtypeConfig`

NewHumanAccountSubtypeConfigWithDefaults instantiates a new HumanAccountSubtypeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubtypeId

`func (o *HumanAccountSubtypeConfig) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *HumanAccountSubtypeConfig) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *HumanAccountSubtypeConfig) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.

### HasSubtypeId

`func (o *HumanAccountSubtypeConfig) HasSubtypeId() bool`

HasSubtypeId returns a boolean if a field has been set.

### GetHumanAccountCreate

`func (o *HumanAccountSubtypeConfig) GetHumanAccountCreate() HumanAccountSubtypeConfigHumanAccountCreate`

GetHumanAccountCreate returns the HumanAccountCreate field if non-nil, zero value otherwise.

### GetHumanAccountCreateOk

`func (o *HumanAccountSubtypeConfig) GetHumanAccountCreateOk() (*HumanAccountSubtypeConfigHumanAccountCreate, bool)`

GetHumanAccountCreateOk returns a tuple with the HumanAccountCreate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHumanAccountCreate

`func (o *HumanAccountSubtypeConfig) SetHumanAccountCreate(v HumanAccountSubtypeConfigHumanAccountCreate)`

SetHumanAccountCreate sets HumanAccountCreate field to given value.

### HasHumanAccountCreate

`func (o *HumanAccountSubtypeConfig) HasHumanAccountCreate() bool`

HasHumanAccountCreate returns a boolean if a field has been set.


