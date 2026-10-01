# FormSubmitted

# FormSubmitted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubmittedAt** | **SailPointTime** | Date and time when the user submitted the form. | 
**TenantId** | **string** | ISC tenant's unique identifier. | 
**FormInstanceId** | **string** | Form instance's unique identifier. | 
**FormDefinitionId** | **string** | Form definition's unique identifier. | 
**Name** | **string** | Form's name. | 
**CreatedBy** | [**FormSubmittedCreatedBy**](form-submitted-created-by) |  | 
**SubmittedBy** | [**FormSubmittedSubmittedBy**](form-submitted-submitted-by) |  | 
**FormData** | **map[string]interface\{\}** | Data in the submitted form. | 

## Methods

### NewFormSubmitted

`func NewFormSubmitted(submittedAt SailPointTime, tenantId string, formInstanceId string, formDefinitionId string, name string, createdBy FormSubmittedCreatedBy, submittedBy FormSubmittedSubmittedBy, formData map[string]interface{}, ) *FormSubmitted`

NewFormSubmitted instantiates a new FormSubmitted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormSubmittedWithDefaults

`func NewFormSubmittedWithDefaults() *FormSubmitted`

NewFormSubmittedWithDefaults instantiates a new FormSubmitted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubmittedAt

`func (o *FormSubmitted) GetSubmittedAt() SailPointTime`

GetSubmittedAt returns the SubmittedAt field if non-nil, zero value otherwise.

### GetSubmittedAtOk

`func (o *FormSubmitted) GetSubmittedAtOk() (*SailPointTime, bool)`

GetSubmittedAtOk returns a tuple with the SubmittedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedAt

`func (o *FormSubmitted) SetSubmittedAt(v SailPointTime)`

SetSubmittedAt sets SubmittedAt field to given value.


### GetTenantId

`func (o *FormSubmitted) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *FormSubmitted) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *FormSubmitted) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.


### GetFormInstanceId

`func (o *FormSubmitted) GetFormInstanceId() string`

GetFormInstanceId returns the FormInstanceId field if non-nil, zero value otherwise.

### GetFormInstanceIdOk

`func (o *FormSubmitted) GetFormInstanceIdOk() (*string, bool)`

GetFormInstanceIdOk returns a tuple with the FormInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInstanceId

`func (o *FormSubmitted) SetFormInstanceId(v string)`

SetFormInstanceId sets FormInstanceId field to given value.


### GetFormDefinitionId

`func (o *FormSubmitted) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *FormSubmitted) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *FormSubmitted) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.


### GetName

`func (o *FormSubmitted) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormSubmitted) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormSubmitted) SetName(v string)`

SetName sets Name field to given value.


### GetCreatedBy

`func (o *FormSubmitted) GetCreatedBy() FormSubmittedCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *FormSubmitted) GetCreatedByOk() (*FormSubmittedCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *FormSubmitted) SetCreatedBy(v FormSubmittedCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.


### GetSubmittedBy

`func (o *FormSubmitted) GetSubmittedBy() FormSubmittedSubmittedBy`

GetSubmittedBy returns the SubmittedBy field if non-nil, zero value otherwise.

### GetSubmittedByOk

`func (o *FormSubmitted) GetSubmittedByOk() (*FormSubmittedSubmittedBy, bool)`

GetSubmittedByOk returns a tuple with the SubmittedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmittedBy

`func (o *FormSubmitted) SetSubmittedBy(v FormSubmittedSubmittedBy)`

SetSubmittedBy sets SubmittedBy field to given value.


### GetFormData

`func (o *FormSubmitted) GetFormData() map[string]interface{}`

GetFormData returns the FormData field if non-nil, zero value otherwise.

### GetFormDataOk

`func (o *FormSubmitted) GetFormDataOk() (*map[string]interface{}, bool)`

GetFormDataOk returns a tuple with the FormData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormData

`func (o *FormSubmitted) SetFormData(v map[string]interface{})`

SetFormData sets FormData field to given value.


### SetFormDataNil

`func (o *FormSubmitted) SetFormDataNil(b bool)`

 SetFormDataNil sets the value for FormData to be an explicit nil

### UnsetFormData
`func (o *FormSubmitted) UnsetFormData()`

UnsetFormData ensures that no value is present for FormData, not even an explicit nil

