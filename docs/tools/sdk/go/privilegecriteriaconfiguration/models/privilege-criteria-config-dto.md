# PrivilegeCriteriaConfigDTO

# PrivilegeCriteriaConfigDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The Id of the task which is executing the bulk update. | [optional] 
**SourceId** | Pointer to **string** | The Id of the source that the criteria configuration is applied to. | [optional] 
**Config** | Pointer to **map[string]interface\{\}** | The configuration settings for privilege criteria evaluation.  | [optional] 
**Created** | Pointer to **string** | The date and time when the privilege criteria configuration was created. | [optional] 
**Modified** | Pointer to **string** | The date and time when the privilege criteria configuration was last modified. | [optional] 

## Methods

### NewPrivilegeCriteriaConfigDTO

`func NewPrivilegeCriteriaConfigDTO() *PrivilegeCriteriaConfigDTO`

NewPrivilegeCriteriaConfigDTO instantiates a new PrivilegeCriteriaConfigDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrivilegeCriteriaConfigDTOWithDefaults

`func NewPrivilegeCriteriaConfigDTOWithDefaults() *PrivilegeCriteriaConfigDTO`

NewPrivilegeCriteriaConfigDTOWithDefaults instantiates a new PrivilegeCriteriaConfigDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PrivilegeCriteriaConfigDTO) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PrivilegeCriteriaConfigDTO) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PrivilegeCriteriaConfigDTO) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PrivilegeCriteriaConfigDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *PrivilegeCriteriaConfigDTO) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *PrivilegeCriteriaConfigDTO) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *PrivilegeCriteriaConfigDTO) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *PrivilegeCriteriaConfigDTO) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetConfig

`func (o *PrivilegeCriteriaConfigDTO) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *PrivilegeCriteriaConfigDTO) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *PrivilegeCriteriaConfigDTO) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *PrivilegeCriteriaConfigDTO) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetCreated

`func (o *PrivilegeCriteriaConfigDTO) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PrivilegeCriteriaConfigDTO) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PrivilegeCriteriaConfigDTO) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PrivilegeCriteriaConfigDTO) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *PrivilegeCriteriaConfigDTO) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *PrivilegeCriteriaConfigDTO) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *PrivilegeCriteriaConfigDTO) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *PrivilegeCriteriaConfigDTO) HasModified() bool`

HasModified returns a boolean if a field has been set.


