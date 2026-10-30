# CreateSourceSubtypeV2Request

# CreateSourceSubtypeV2Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** | Pointer to **string** | Tier to create the subtype at. Defaults to `SOURCE`. | [optional] [default to "SOURCE"]
**TargetId** | **string** | Scope key of the subtype. The source ID for a `SOURCE` subtype, or a registered connector type for a `CONNECTOR` subtype. | 
**TargetName** | Pointer to **string** | Display name of the target. For a `CONNECTOR` subtype, a supplied value must match the connector's registered name and is replaced by the registered spelling. When omitted, the registered name is used. | [optional] 
**TechnicalName** | **string** | Technical name of the subtype. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Type** | Pointer to **string** | Entity type of the subtype. Defaults to `MACHINE`. | [optional] [default to "MACHINE"]
**Classification** | Pointer to **string** | Classification of the subtype. Defaults to `MACHINE`. | [optional] [default to "MACHINE"]

## Methods

### NewCreateSourceSubtypeV2Request

`func NewCreateSourceSubtypeV2Request(targetId string, technicalName string, displayName string, description string, ) *CreateSourceSubtypeV2Request`

NewCreateSourceSubtypeV2Request instantiates a new CreateSourceSubtypeV2Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateSourceSubtypeV2RequestWithDefaults

`func NewCreateSourceSubtypeV2RequestWithDefaults() *CreateSourceSubtypeV2Request`

NewCreateSourceSubtypeV2RequestWithDefaults instantiates a new CreateSourceSubtypeV2Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetType

`func (o *CreateSourceSubtypeV2Request) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *CreateSourceSubtypeV2Request) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *CreateSourceSubtypeV2Request) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *CreateSourceSubtypeV2Request) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *CreateSourceSubtypeV2Request) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *CreateSourceSubtypeV2Request) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *CreateSourceSubtypeV2Request) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetTargetName

`func (o *CreateSourceSubtypeV2Request) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *CreateSourceSubtypeV2Request) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *CreateSourceSubtypeV2Request) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *CreateSourceSubtypeV2Request) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetTechnicalName

`func (o *CreateSourceSubtypeV2Request) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *CreateSourceSubtypeV2Request) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *CreateSourceSubtypeV2Request) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *CreateSourceSubtypeV2Request) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *CreateSourceSubtypeV2Request) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *CreateSourceSubtypeV2Request) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *CreateSourceSubtypeV2Request) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateSourceSubtypeV2Request) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateSourceSubtypeV2Request) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *CreateSourceSubtypeV2Request) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateSourceSubtypeV2Request) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateSourceSubtypeV2Request) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateSourceSubtypeV2Request) HasType() bool`

HasType returns a boolean if a field has been set.

### GetClassification

`func (o *CreateSourceSubtypeV2Request) GetClassification() string`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *CreateSourceSubtypeV2Request) GetClassificationOk() (*string, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *CreateSourceSubtypeV2Request) SetClassification(v string)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *CreateSourceSubtypeV2Request) HasClassification() bool`

HasClassification returns a boolean if a field has been set.


