# PendingApprovalForm

# PendingApprovalForm

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

### NewPendingApprovalForm

`func NewPendingApprovalForm() *PendingApprovalForm`

NewPendingApprovalForm instantiates a new PendingApprovalForm object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingApprovalFormWithDefaults

`func NewPendingApprovalFormWithDefaults() *PendingApprovalForm`

NewPendingApprovalFormWithDefaults instantiates a new PendingApprovalForm object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFormDefinitionId

`func (o *PendingApprovalForm) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *PendingApprovalForm) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *PendingApprovalForm) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *PendingApprovalForm) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### SetFormDefinitionIdNil

`func (o *PendingApprovalForm) SetFormDefinitionIdNil(b bool)`

 SetFormDefinitionIdNil sets the value for FormDefinitionId to be an explicit nil

### UnsetFormDefinitionId
`func (o *PendingApprovalForm) UnsetFormDefinitionId()`

UnsetFormDefinitionId ensures that no value is present for FormDefinitionId, not even an explicit nil
### GetFormInstanceId

`func (o *PendingApprovalForm) GetFormInstanceId() string`

GetFormInstanceId returns the FormInstanceId field if non-nil, zero value otherwise.

### GetFormInstanceIdOk

`func (o *PendingApprovalForm) GetFormInstanceIdOk() (*string, bool)`

GetFormInstanceIdOk returns a tuple with the FormInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceId

`func (o *PendingApprovalForm) SetFormInstanceId(v string)`

SetFormInstanceId sets FormInstanceId field to given value.

### HasFormInstanceId

`func (o *PendingApprovalForm) HasFormInstanceId() bool`

HasFormInstanceId returns a boolean if a field has been set.

### SetFormInstanceIdNil

`func (o *PendingApprovalForm) SetFormInstanceIdNil(b bool)`

 SetFormInstanceIdNil sets the value for FormInstanceId to be an explicit nil

### UnsetFormInstanceId
`func (o *PendingApprovalForm) UnsetFormInstanceId()`

UnsetFormInstanceId ensures that no value is present for FormInstanceId, not even an explicit nil
### GetFormData

`func (o *PendingApprovalForm) GetFormData() map[string]interface{}`

GetFormData returns the FormData field if non-nil, zero value otherwise.

### GetFormDataOk

`func (o *PendingApprovalForm) GetFormDataOk() (*map[string]interface{}, bool)`

GetFormDataOk returns a tuple with the FormData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormData

`func (o *PendingApprovalForm) SetFormData(v map[string]interface{})`

SetFormData sets FormData field to given value.

### HasFormData

`func (o *PendingApprovalForm) HasFormData() bool`

HasFormData returns a boolean if a field has been set.

### SetFormDataNil

`func (o *PendingApprovalForm) SetFormDataNil(b bool)`

 SetFormDataNil sets the value for FormData to be an explicit nil

### UnsetFormData
`func (o *PendingApprovalForm) UnsetFormData()`

UnsetFormData ensures that no value is present for FormData, not even an explicit nil
### GetFormElements

`func (o *PendingApprovalForm) GetFormElements() []map[string]interface{}`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *PendingApprovalForm) GetFormElementsOk() (*[]map[string]interface{}, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *PendingApprovalForm) SetFormElements(v []map[string]interface{})`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *PendingApprovalForm) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### SetFormElementsNil

`func (o *PendingApprovalForm) SetFormElementsNil(b bool)`

 SetFormElementsNil sets the value for FormElements to be an explicit nil

### UnsetFormElements
`func (o *PendingApprovalForm) UnsetFormElements()`

UnsetFormElements ensures that no value is present for FormElements, not even an explicit nil
### GetFormConditions

`func (o *PendingApprovalForm) GetFormConditions() []map[string]interface{}`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *PendingApprovalForm) GetFormConditionsOk() (*[]map[string]interface{}, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *PendingApprovalForm) SetFormConditions(v []map[string]interface{})`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *PendingApprovalForm) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### SetFormConditionsNil

`func (o *PendingApprovalForm) SetFormConditionsNil(b bool)`

 SetFormConditionsNil sets the value for FormConditions to be an explicit nil

### UnsetFormConditions
`func (o *PendingApprovalForm) UnsetFormConditions()`

UnsetFormConditions ensures that no value is present for FormConditions, not even an explicit nil
### GetFormInstanceInputs

`func (o *PendingApprovalForm) GetFormInstanceInputs() map[string]interface{}`

GetFormInstanceInputs returns the FormInstanceInputs field if non-nil, zero value otherwise.

### GetFormInstanceInputsOk

`func (o *PendingApprovalForm) GetFormInstanceInputsOk() (*map[string]interface{}, bool)`

GetFormInstanceInputsOk returns a tuple with the FormInstanceInputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceInputs

`func (o *PendingApprovalForm) SetFormInstanceInputs(v map[string]interface{})`

SetFormInstanceInputs sets FormInstanceInputs field to given value.

### HasFormInstanceInputs

`func (o *PendingApprovalForm) HasFormInstanceInputs() bool`

HasFormInstanceInputs returns a boolean if a field has been set.

### SetFormInstanceInputsNil

`func (o *PendingApprovalForm) SetFormInstanceInputsNil(b bool)`

 SetFormInstanceInputsNil sets the value for FormInstanceInputs to be an explicit nil

### UnsetFormInstanceInputs
`func (o *PendingApprovalForm) UnsetFormInstanceInputs()`

UnsetFormInstanceInputs ensures that no value is present for FormInstanceInputs, not even an explicit nil

