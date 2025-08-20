---
id: v2025-list-form-instances-by-tenant-response
title: ListFormInstancesByTenantResponse
pagination_label: ListFormInstancesByTenantResponse
sidebar_label: ListFormInstancesByTenantResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListFormInstancesByTenantResponse', 'V2025ListFormInstancesByTenantResponse'] 
slug: /tools/sdk/go/v2025/models/list-form-instances-by-tenant-response
tags: ['SDK', 'Software Development Kit', 'ListFormInstancesByTenantResponse', 'V2025ListFormInstancesByTenantResponse']
---

# ListFormInstancesByTenantResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique guid identifying this form instance | [optional] 
**Expire** | Pointer to **string** | Expire is the maximum amount of time that a form can be in progress. After this time is reached then the form will be moved to a CANCELED state automatically. The user will no longer be able to complete the submission. When a form instance is expires an audit log will be generated for that record | [optional] 
**State** | Pointer to **string** | State the state of the form instance ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] 
**StandAloneForm** | Pointer to **bool** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to false]
**StandAloneFormUrl** | Pointer to **string** | StandAloneFormURL is the URL where this form may be completed by the designated recipients using the standalone form UI | [optional] 
**CreatedBy** | Pointer to [**FormInstanceCreatedBy**](form-instance-created-by) |  | [optional] 
**FormDefinitionId** | Pointer to **string** | FormDefinitionID is the id of the form definition that created this form | [optional] 
**FormInput** | Pointer to **map[string]map[string]interface{}** | FormInput is an object of form input labels to value | [optional] 
**FormElements** | Pointer to [**[]FormElement**](form-element) | FormElements is the configuration of the form, this would be a repeat of the fields from the form-config | [optional] 
**FormData** | Pointer to **map[string]interface{}** | FormData is the data provided by the form on submit. The data is in a key -> value map | [optional] 
**FormErrors** | Pointer to [**[]FormError**](form-error) | FormErrors is an array of form validation errors from the last time the form instance was transitioned to the SUBMITTED state. If the form instance had validation errors then it would be moved to the IN PROGRESS state where the client can retrieve these errors | [optional] 
**FormConditions** | Pointer to [**[]FormCondition**](form-condition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**Created** | Pointer to **SailPointTime** | Created is the date the form instance was assigned | [optional] 
**Modified** | Pointer to **SailPointTime** | Modified is the last date the form instance was modified | [optional] 
**Recipients** | Pointer to [**[]FormInstanceRecipient**](form-instance-recipient) | Recipients references to the recipient of a form. The recipients are those who are responsible for filling out a form and completing it | [optional] 

## Methods

### NewListFormInstancesByTenantResponse

`func NewListFormInstancesByTenantResponse() *ListFormInstancesByTenantResponse`

NewListFormInstancesByTenantResponse instantiates a new ListFormInstancesByTenantResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListFormInstancesByTenantResponseWithDefaults

`func NewListFormInstancesByTenantResponseWithDefaults() *ListFormInstancesByTenantResponse`

NewListFormInstancesByTenantResponseWithDefaults instantiates a new ListFormInstancesByTenantResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ListFormInstancesByTenantResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListFormInstancesByTenantResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListFormInstancesByTenantResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ListFormInstancesByTenantResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetExpire

`func (o *ListFormInstancesByTenantResponse) GetExpire() string`

GetExpire returns the Expire field if non-nil, zero value otherwise.

### GetExpireOk

`func (o *ListFormInstancesByTenantResponse) GetExpireOk() (*string, bool)`

GetExpireOk returns a tuple with the Expire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpire

`func (o *ListFormInstancesByTenantResponse) SetExpire(v string)`

SetExpire sets Expire field to given value.

### HasExpire

`func (o *ListFormInstancesByTenantResponse) HasExpire() bool`

HasExpire returns a boolean if a field has been set.

### GetState

`func (o *ListFormInstancesByTenantResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ListFormInstancesByTenantResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ListFormInstancesByTenantResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ListFormInstancesByTenantResponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetStandAloneForm

`func (o *ListFormInstancesByTenantResponse) GetStandAloneForm() bool`

GetStandAloneForm returns the StandAloneForm field if non-nil, zero value otherwise.

### GetStandAloneFormOk

`func (o *ListFormInstancesByTenantResponse) GetStandAloneFormOk() (*bool, bool)`

GetStandAloneFormOk returns a tuple with the StandAloneForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandAloneForm

`func (o *ListFormInstancesByTenantResponse) SetStandAloneForm(v bool)`

SetStandAloneForm sets StandAloneForm field to given value.

### HasStandAloneForm

`func (o *ListFormInstancesByTenantResponse) HasStandAloneForm() bool`

HasStandAloneForm returns a boolean if a field has been set.

### GetStandAloneFormUrl

`func (o *ListFormInstancesByTenantResponse) GetStandAloneFormUrl() string`

GetStandAloneFormUrl returns the StandAloneFormUrl field if non-nil, zero value otherwise.

### GetStandAloneFormUrlOk

`func (o *ListFormInstancesByTenantResponse) GetStandAloneFormUrlOk() (*string, bool)`

GetStandAloneFormUrlOk returns a tuple with the StandAloneFormUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandAloneFormUrl

`func (o *ListFormInstancesByTenantResponse) SetStandAloneFormUrl(v string)`

SetStandAloneFormUrl sets StandAloneFormUrl field to given value.

### HasStandAloneFormUrl

`func (o *ListFormInstancesByTenantResponse) HasStandAloneFormUrl() bool`

HasStandAloneFormUrl returns a boolean if a field has been set.

### GetCreatedBy

`func (o *ListFormInstancesByTenantResponse) GetCreatedBy() FormInstanceCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *ListFormInstancesByTenantResponse) GetCreatedByOk() (*FormInstanceCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *ListFormInstancesByTenantResponse) SetCreatedBy(v FormInstanceCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *ListFormInstancesByTenantResponse) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetFormDefinitionId

`func (o *ListFormInstancesByTenantResponse) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *ListFormInstancesByTenantResponse) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *ListFormInstancesByTenantResponse) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *ListFormInstancesByTenantResponse) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### GetFormInput

`func (o *ListFormInstancesByTenantResponse) GetFormInput() map[string]map[string]interface{}`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *ListFormInstancesByTenantResponse) GetFormInputOk() (*map[string]map[string]interface{}, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *ListFormInstancesByTenantResponse) SetFormInput(v map[string]map[string]interface{})`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *ListFormInstancesByTenantResponse) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### SetFormInputNil

`func (o *ListFormInstancesByTenantResponse) SetFormInputNil(b bool)`

 SetFormInputNil sets the value for FormInput to be an explicit nil

### UnsetFormInput
`func (o *ListFormInstancesByTenantResponse) UnsetFormInput()`

UnsetFormInput ensures that no value is present for FormInput, not even an explicit nil
### GetFormElements

`func (o *ListFormInstancesByTenantResponse) GetFormElements() []FormElement`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *ListFormInstancesByTenantResponse) GetFormElementsOk() (*[]FormElement, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *ListFormInstancesByTenantResponse) SetFormElements(v []FormElement)`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *ListFormInstancesByTenantResponse) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### GetFormData

`func (o *ListFormInstancesByTenantResponse) GetFormData() map[string]interface{}`

GetFormData returns the FormData field if non-nil, zero value otherwise.

### GetFormDataOk

`func (o *ListFormInstancesByTenantResponse) GetFormDataOk() (*map[string]interface{}, bool)`

GetFormDataOk returns a tuple with the FormData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormData

`func (o *ListFormInstancesByTenantResponse) SetFormData(v map[string]interface{})`

SetFormData sets FormData field to given value.

### HasFormData

`func (o *ListFormInstancesByTenantResponse) HasFormData() bool`

HasFormData returns a boolean if a field has been set.

### SetFormDataNil

`func (o *ListFormInstancesByTenantResponse) SetFormDataNil(b bool)`

 SetFormDataNil sets the value for FormData to be an explicit nil

### UnsetFormData
`func (o *ListFormInstancesByTenantResponse) UnsetFormData()`

UnsetFormData ensures that no value is present for FormData, not even an explicit nil
### GetFormErrors

`func (o *ListFormInstancesByTenantResponse) GetFormErrors() []FormError`

GetFormErrors returns the FormErrors field if non-nil, zero value otherwise.

### GetFormErrorsOk

`func (o *ListFormInstancesByTenantResponse) GetFormErrorsOk() (*[]FormError, bool)`

GetFormErrorsOk returns a tuple with the FormErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormErrors

`func (o *ListFormInstancesByTenantResponse) SetFormErrors(v []FormError)`

SetFormErrors sets FormErrors field to given value.

### HasFormErrors

`func (o *ListFormInstancesByTenantResponse) HasFormErrors() bool`

HasFormErrors returns a boolean if a field has been set.

### GetFormConditions

`func (o *ListFormInstancesByTenantResponse) GetFormConditions() []FormCondition`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *ListFormInstancesByTenantResponse) GetFormConditionsOk() (*[]FormCondition, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *ListFormInstancesByTenantResponse) SetFormConditions(v []FormCondition)`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *ListFormInstancesByTenantResponse) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### GetCreated

`func (o *ListFormInstancesByTenantResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ListFormInstancesByTenantResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ListFormInstancesByTenantResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ListFormInstancesByTenantResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *ListFormInstancesByTenantResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ListFormInstancesByTenantResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ListFormInstancesByTenantResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ListFormInstancesByTenantResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetRecipients

`func (o *ListFormInstancesByTenantResponse) GetRecipients() []FormInstanceRecipient`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *ListFormInstancesByTenantResponse) GetRecipientsOk() (*[]FormInstanceRecipient, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *ListFormInstancesByTenantResponse) SetRecipients(v []FormInstanceRecipient)`

SetRecipients sets Recipients field to given value.

### HasRecipients

`func (o *ListFormInstancesByTenantResponse) HasRecipients() bool`

HasRecipients returns a boolean if a field has been set.


