# RequestedItemStatusForm

# RequestedItemStatusForm

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

### NewRequestedItemStatusForm

`func NewRequestedItemStatusForm() *RequestedItemStatusForm`

NewRequestedItemStatusForm instantiates a new RequestedItemStatusForm object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemStatusFormWithDefaults

`func NewRequestedItemStatusFormWithDefaults() *RequestedItemStatusForm`

NewRequestedItemStatusFormWithDefaults instantiates a new RequestedItemStatusForm object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormDefinitionId

`func (o *RequestedItemStatusForm) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *RequestedItemStatusForm) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *RequestedItemStatusForm) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *RequestedItemStatusForm) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### SetFormDefinitionIdNil

`func (o *RequestedItemStatusForm) SetFormDefinitionIdNil(b bool)`

 SetFormDefinitionIdNil sets the value for FormDefinitionId to be an explicit nil

### UnsetFormDefinitionId
`func (o *RequestedItemStatusForm) UnsetFormDefinitionId()`

UnsetFormDefinitionId ensures that no value is present for FormDefinitionId, not even an explicit nil
### GetFormInstanceId

`func (o *RequestedItemStatusForm) GetFormInstanceId() string`

GetFormInstanceId returns the FormInstanceId field if non-nil, zero value otherwise.

### GetFormInstanceIdOk

`func (o *RequestedItemStatusForm) GetFormInstanceIdOk() (*string, bool)`

GetFormInstanceIdOk returns a tuple with the FormInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceId

`func (o *RequestedItemStatusForm) SetFormInstanceId(v string)`

SetFormInstanceId sets FormInstanceId field to given value.

### HasFormInstanceId

`func (o *RequestedItemStatusForm) HasFormInstanceId() bool`

HasFormInstanceId returns a boolean if a field has been set.

### SetFormInstanceIdNil

`func (o *RequestedItemStatusForm) SetFormInstanceIdNil(b bool)`

 SetFormInstanceIdNil sets the value for FormInstanceId to be an explicit nil

### UnsetFormInstanceId
`func (o *RequestedItemStatusForm) UnsetFormInstanceId()`

UnsetFormInstanceId ensures that no value is present for FormInstanceId, not even an explicit nil
### GetFormData

`func (o *RequestedItemStatusForm) GetFormData() map[string]interface{}`

GetFormData returns the FormData field if non-nil, zero value otherwise.

### GetFormDataOk

`func (o *RequestedItemStatusForm) GetFormDataOk() (*map[string]interface{}, bool)`

GetFormDataOk returns a tuple with the FormData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormData

`func (o *RequestedItemStatusForm) SetFormData(v map[string]interface{})`

SetFormData sets FormData field to given value.

### HasFormData

`func (o *RequestedItemStatusForm) HasFormData() bool`

HasFormData returns a boolean if a field has been set.

### SetFormDataNil

`func (o *RequestedItemStatusForm) SetFormDataNil(b bool)`

 SetFormDataNil sets the value for FormData to be an explicit nil

### UnsetFormData
`func (o *RequestedItemStatusForm) UnsetFormData()`

UnsetFormData ensures that no value is present for FormData, not even an explicit nil
### GetFormElements

`func (o *RequestedItemStatusForm) GetFormElements() []map[string]interface{}`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *RequestedItemStatusForm) GetFormElementsOk() (*[]map[string]interface{}, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *RequestedItemStatusForm) SetFormElements(v []map[string]interface{})`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *RequestedItemStatusForm) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### SetFormElementsNil

`func (o *RequestedItemStatusForm) SetFormElementsNil(b bool)`

 SetFormElementsNil sets the value for FormElements to be an explicit nil

### UnsetFormElements
`func (o *RequestedItemStatusForm) UnsetFormElements()`

UnsetFormElements ensures that no value is present for FormElements, not even an explicit nil
### GetFormConditions

`func (o *RequestedItemStatusForm) GetFormConditions() []map[string]interface{}`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *RequestedItemStatusForm) GetFormConditionsOk() (*[]map[string]interface{}, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *RequestedItemStatusForm) SetFormConditions(v []map[string]interface{})`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *RequestedItemStatusForm) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### SetFormConditionsNil

`func (o *RequestedItemStatusForm) SetFormConditionsNil(b bool)`

 SetFormConditionsNil sets the value for FormConditions to be an explicit nil

### UnsetFormConditions
`func (o *RequestedItemStatusForm) UnsetFormConditions()`

UnsetFormConditions ensures that no value is present for FormConditions, not even an explicit nil
### GetFormInstanceInputs

`func (o *RequestedItemStatusForm) GetFormInstanceInputs() map[string]interface{}`

GetFormInstanceInputs returns the FormInstanceInputs field if non-nil, zero value otherwise.

### GetFormInstanceInputsOk

`func (o *RequestedItemStatusForm) GetFormInstanceInputsOk() (*map[string]interface{}, bool)`

GetFormInstanceInputsOk returns a tuple with the FormInstanceInputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceInputs

`func (o *RequestedItemStatusForm) SetFormInstanceInputs(v map[string]interface{})`

SetFormInstanceInputs sets FormInstanceInputs field to given value.

### HasFormInstanceInputs

`func (o *RequestedItemStatusForm) HasFormInstanceInputs() bool`

HasFormInstanceInputs returns a boolean if a field has been set.

### SetFormInstanceInputsNil

`func (o *RequestedItemStatusForm) SetFormInstanceInputsNil(b bool)`

 SetFormInstanceInputsNil sets the value for FormInstanceInputs to be an explicit nil

### UnsetFormInstanceInputs
`func (o *RequestedItemStatusForm) UnsetFormInstanceInputs()`

UnsetFormInstanceInputs ensures that no value is present for FormInstanceInputs, not even an explicit nil

