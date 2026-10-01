# TemplateVariablesDto

# TemplateVariablesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The notification template key. | [optional] 
**Medium** | Pointer to **TemplateMediumDto** |  | [optional] 
**GlobalVariables** | Pointer to [**[]TemplateVariable**](template-variable) | Global variables available to all templates for this tenant (e.g. __global.*, __recipient, __util.*, __dateTool.*, __esc.*). Includes both data variables and function-type helpers.  | [optional] 
**TemplateVariables** | Pointer to [**[]TemplateVariable**](template-variable) | Template-specific variables for the given key and medium (e.g. approverPath, requester, attributes). | [optional] 

## Methods

### NewTemplateVariablesDto

`func NewTemplateVariablesDto() *TemplateVariablesDto`

NewTemplateVariablesDto instantiates a new TemplateVariablesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateVariablesDtoWithDefaults

`func NewTemplateVariablesDtoWithDefaults() *TemplateVariablesDto`

NewTemplateVariablesDtoWithDefaults instantiates a new TemplateVariablesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateVariablesDto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateVariablesDto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateVariablesDto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplateVariablesDto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMedium

`func (o *TemplateVariablesDto) GetMedium() TemplateMediumDto`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *TemplateVariablesDto) GetMediumOk() (*TemplateMediumDto, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *TemplateVariablesDto) SetMedium(v TemplateMediumDto)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *TemplateVariablesDto) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetGlobalVariables

`func (o *TemplateVariablesDto) GetGlobalVariables() []TemplateVariable`

GetGlobalVariables returns the GlobalVariables field if non-nil, zero value otherwise.

### GetGlobalVariablesOk

`func (o *TemplateVariablesDto) GetGlobalVariablesOk() (*[]TemplateVariable, bool)`

GetGlobalVariablesOk returns a tuple with the GlobalVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalVariables

`func (o *TemplateVariablesDto) SetGlobalVariables(v []TemplateVariable)`

SetGlobalVariables sets GlobalVariables field to given value.

### HasGlobalVariables

`func (o *TemplateVariablesDto) HasGlobalVariables() bool`

HasGlobalVariables returns a boolean if a field has been set.

### SetGlobalVariablesNil

`func (o *TemplateVariablesDto) SetGlobalVariablesNil(b bool)`

 SetGlobalVariablesNil sets the value for GlobalVariables to be an explicit nil

### UnsetGlobalVariables
`func (o *TemplateVariablesDto) UnsetGlobalVariables()`

UnsetGlobalVariables ensures that no value is present for GlobalVariables, not even an explicit nil
### GetTemplateVariables

`func (o *TemplateVariablesDto) GetTemplateVariables() []TemplateVariable`

GetTemplateVariables returns the TemplateVariables field if non-nil, zero value otherwise.

### GetTemplateVariablesOk

`func (o *TemplateVariablesDto) GetTemplateVariablesOk() (*[]TemplateVariable, bool)`

GetTemplateVariablesOk returns a tuple with the TemplateVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateVariables

`func (o *TemplateVariablesDto) SetTemplateVariables(v []TemplateVariable)`

SetTemplateVariables sets TemplateVariables field to given value.

### HasTemplateVariables

`func (o *TemplateVariablesDto) HasTemplateVariables() bool`

HasTemplateVariables returns a boolean if a field has been set.

### SetTemplateVariablesNil

`func (o *TemplateVariablesDto) SetTemplateVariablesNil(b bool)`

 SetTemplateVariablesNil sets the value for TemplateVariables to be an explicit nil

### UnsetTemplateVariables
`func (o *TemplateVariablesDto) UnsetTemplateVariables()`

UnsetTemplateVariables ensures that no value is present for TemplateVariables, not even an explicit nil

