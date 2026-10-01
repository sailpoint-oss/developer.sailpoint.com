# CorrelationConfig

# CorrelationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | System-generated unique ID of the correlation config. | 
**SourceId** | **string** | The source ID this config belongs to. | 
**ResourceId** | **string** | The source resource identifier for this config scope. | 
**Type** | **string** | The correlation config type. | 
**Attributes** | **map[string]interface\{\}** | JSON object of config attributes. May include syncPrimaryToMachineAccounts (boolean) on OWNER_PRIMARY only. | 
**Rules** | [**[]CorrelationRule**](correlation-rule) | The ordered set of correlation rules for this config. | 
**Created** | Pointer to **SailPointTime** | Creation date of the config. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the config. | [optional] [readonly] 

## Methods

### NewCorrelationConfig

`func NewCorrelationConfig(id string, sourceId string, resourceId string, type_ string, attributes map[string]interface{}, rules []CorrelationRule, ) *CorrelationConfig`

NewCorrelationConfig instantiates a new CorrelationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelationConfigWithDefaults

`func NewCorrelationConfigWithDefaults() *CorrelationConfig`

NewCorrelationConfigWithDefaults instantiates a new CorrelationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CorrelationConfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CorrelationConfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CorrelationConfig) SetId(v string)`

SetId sets Id field to given value.


### GetSourceId

`func (o *CorrelationConfig) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *CorrelationConfig) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *CorrelationConfig) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetResourceId

`func (o *CorrelationConfig) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *CorrelationConfig) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *CorrelationConfig) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.


### GetType

`func (o *CorrelationConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CorrelationConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CorrelationConfig) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *CorrelationConfig) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *CorrelationConfig) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *CorrelationConfig) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetRules

`func (o *CorrelationConfig) GetRules() []CorrelationRule`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *CorrelationConfig) GetRulesOk() (*[]CorrelationRule, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *CorrelationConfig) SetRules(v []CorrelationRule)`

SetRules sets Rules field to given value.


### GetCreated

`func (o *CorrelationConfig) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CorrelationConfig) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CorrelationConfig) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CorrelationConfig) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *CorrelationConfig) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CorrelationConfig) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CorrelationConfig) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CorrelationConfig) HasModified() bool`

HasModified returns a boolean if a field has been set.


