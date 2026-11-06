# AccessRequestItemForm

# AccessRequestItemForm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FormDefinitionId** | Pointer to **NullableString** | ID of the form definition that was completed for this item. | [optional] 
**FormInstanceId** | Pointer to **NullableString** | ID of the completed form instance. | [optional] 
**FormData** | Pointer to **map[string]interface\{\}** | Key-value pairs (form field technical name to value) from the completed form instance. | [optional] 
**FormElements** | Pointer to **[]map[string]interface\{\}** | Optional form element definitions when present. Shape follows the form instance payload. | [optional] 
**FormConditions** | Pointer to **[]map[string]interface\{\}** | Optional conditional display rules when present. Shape follows the form instance payload; do not depend on a fixed condition schema in this API. | [optional] 
**FormInstanceInputs** | Pointer to **map[string]interface\{\}** | Optional inputs passed into the form instance when present. Copied from the form instance payload as-is. | [optional] 

## Methods

### NewAccessRequestItemForm

`func NewAccessRequestItemForm() *AccessRequestItemForm`

NewAccessRequestItemForm instantiates a new AccessRequestItemForm object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestItemFormWithDefaults

`func NewAccessRequestItemFormWithDefaults() *AccessRequestItemForm`

NewAccessRequestItemFormWithDefaults instantiates a new AccessRequestItemForm object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormDefinitionId

`func (o *AccessRequestItemForm) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *AccessRequestItemForm) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *AccessRequestItemForm) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *AccessRequestItemForm) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### SetFormDefinitionIdNil

`func (o *AccessRequestItemForm) SetFormDefinitionIdNil(b bool)`

 SetFormDefinitionIdNil sets the value for FormDefinitionId to be an explicit nil

### UnsetFormDefinitionId
`func (o *AccessRequestItemForm) UnsetFormDefinitionId()`

UnsetFormDefinitionId ensures that no value is present for FormDefinitionId, not even an explicit nil
### GetFormInstanceId

`func (o *AccessRequestItemForm) GetFormInstanceId() string`

GetFormInstanceId returns the FormInstanceId field if non-nil, zero value otherwise.

### GetFormInstanceIdOk

`func (o *AccessRequestItemForm) GetFormInstanceIdOk() (*string, bool)`

GetFormInstanceIdOk returns a tuple with the FormInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceId

`func (o *AccessRequestItemForm) SetFormInstanceId(v string)`

SetFormInstanceId sets FormInstanceId field to given value.

### HasFormInstanceId

`func (o *AccessRequestItemForm) HasFormInstanceId() bool`

HasFormInstanceId returns a boolean if a field has been set.

### SetFormInstanceIdNil

`func (o *AccessRequestItemForm) SetFormInstanceIdNil(b bool)`

 SetFormInstanceIdNil sets the value for FormInstanceId to be an explicit nil

### UnsetFormInstanceId
`func (o *AccessRequestItemForm) UnsetFormInstanceId()`

UnsetFormInstanceId ensures that no value is present for FormInstanceId, not even an explicit nil
### GetFormData

`func (o *AccessRequestItemForm) GetFormData() map[string]interface{}`

GetFormData returns the FormData field if non-nil, zero value otherwise.

### GetFormDataOk

`func (o *AccessRequestItemForm) GetFormDataOk() (*map[string]interface{}, bool)`

GetFormDataOk returns a tuple with the FormData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormData

`func (o *AccessRequestItemForm) SetFormData(v map[string]interface{})`

SetFormData sets FormData field to given value.

### HasFormData

`func (o *AccessRequestItemForm) HasFormData() bool`

HasFormData returns a boolean if a field has been set.

### SetFormDataNil

`func (o *AccessRequestItemForm) SetFormDataNil(b bool)`

 SetFormDataNil sets the value for FormData to be an explicit nil

### UnsetFormData
`func (o *AccessRequestItemForm) UnsetFormData()`

UnsetFormData ensures that no value is present for FormData, not even an explicit nil
### GetFormElements

`func (o *AccessRequestItemForm) GetFormElements() []map[string]interface{}`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *AccessRequestItemForm) GetFormElementsOk() (*[]map[string]interface{}, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *AccessRequestItemForm) SetFormElements(v []map[string]interface{})`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *AccessRequestItemForm) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### SetFormElementsNil

`func (o *AccessRequestItemForm) SetFormElementsNil(b bool)`

 SetFormElementsNil sets the value for FormElements to be an explicit nil

### UnsetFormElements
`func (o *AccessRequestItemForm) UnsetFormElements()`

UnsetFormElements ensures that no value is present for FormElements, not even an explicit nil
### GetFormConditions

`func (o *AccessRequestItemForm) GetFormConditions() []map[string]interface{}`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *AccessRequestItemForm) GetFormConditionsOk() (*[]map[string]interface{}, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *AccessRequestItemForm) SetFormConditions(v []map[string]interface{})`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *AccessRequestItemForm) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### SetFormConditionsNil

`func (o *AccessRequestItemForm) SetFormConditionsNil(b bool)`

 SetFormConditionsNil sets the value for FormConditions to be an explicit nil

### UnsetFormConditions
`func (o *AccessRequestItemForm) UnsetFormConditions()`

UnsetFormConditions ensures that no value is present for FormConditions, not even an explicit nil
### GetFormInstanceInputs

`func (o *AccessRequestItemForm) GetFormInstanceInputs() map[string]interface{}`

GetFormInstanceInputs returns the FormInstanceInputs field if non-nil, zero value otherwise.

### GetFormInstanceInputsOk

`func (o *AccessRequestItemForm) GetFormInstanceInputsOk() (*map[string]interface{}, bool)`

GetFormInstanceInputsOk returns a tuple with the FormInstanceInputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceInputs

`func (o *AccessRequestItemForm) SetFormInstanceInputs(v map[string]interface{})`

SetFormInstanceInputs sets FormInstanceInputs field to given value.

### HasFormInstanceInputs

`func (o *AccessRequestItemForm) HasFormInstanceInputs() bool`

HasFormInstanceInputs returns a boolean if a field has been set.

### SetFormInstanceInputsNil

`func (o *AccessRequestItemForm) SetFormInstanceInputsNil(b bool)`

 SetFormInstanceInputsNil sets the value for FormInstanceInputs to be an explicit nil

### UnsetFormInstanceInputs
`func (o *AccessRequestItemForm) UnsetFormInstanceInputs()`

UnsetFormInstanceInputs ensures that no value is present for FormInstanceInputs, not even an explicit nil

