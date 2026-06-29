---
id: v1-listforminstancesbytenantresponse
title: Listforminstancesbytenantresponse
pagination_label: Listforminstancesbytenantresponse
sidebar_label: Listforminstancesbytenantresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Listforminstancesbytenantresponse', 'V1Listforminstancesbytenantresponse'] 
slug: /tools/sdk/go/customforms/models/listforminstancesbytenantresponse
tags: ['SDK', 'Software Development Kit', 'Listforminstancesbytenantresponse', 'V1Listforminstancesbytenantresponse']
---

# Listforminstancesbytenantresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique guid identifying this form instance | [optional] 
**Expire** | Pointer to **string** | Expire is the maximum amount of time that a form can be in progress. After this time is reached then the form will be moved to a CANCELED state automatically. The user will no longer be able to complete the submission. When a form instance is expires an audit log will be generated for that record | [optional] 
**State** | Pointer to **string** | State the state of the form instance ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] 
**StandAloneForm** | Pointer to **bool** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to false]
**StandAloneFormUrl** | Pointer to **string** | StandAloneFormURL is the URL where this form may be completed by the designated recipients using the standalone form UI | [optional] 
**CreatedBy** | Pointer to [**Forminstancecreatedby**](forminstancecreatedby) |  | [optional] 
**FormDefinitionId** | Pointer to **string** | FormDefinitionID is the id of the form definition that created this form | [optional] 
**FormInput** | Pointer to **map[string]interface{}** | FormInput is an object of form input labels to value | [optional] 
**FormElements** | Pointer to [**[]Formelement**](formelement) | FormElements is the configuration of the form, this would be a repeat of the fields from the form-config | [optional] 
**FormData** | Pointer to **map[string]interface{}** | FormData is the data provided by the form on submit. The data is in a key -> value map | [optional] 
**FormErrors** | Pointer to [**[]Formerror**](formerror) | FormErrors is an array of form validation errors from the last time the form instance was transitioned to the SUBMITTED state. If the form instance had validation errors then it would be moved to the IN PROGRESS state where the client can retrieve these errors | [optional] 
**FormConditions** | Pointer to [**[]Formcondition**](formcondition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**Created** | Pointer to **SailPointTime** | Created is the date the form instance was assigned | [optional] 
**Modified** | Pointer to **SailPointTime** | Modified is the last date the form instance was modified | [optional] 
**Recipients** | Pointer to [**[]Forminstancerecipient**](forminstancerecipient) | Recipients references to the recipient of a form. The recipients are those who are responsible for filling out a form and completing it | [optional] 

## Methods

### NewListforminstancesbytenantresponse

`func NewListforminstancesbytenantresponse() *Listforminstancesbytenantresponse`

NewListforminstancesbytenantresponse instantiates a new Listforminstancesbytenantresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListforminstancesbytenantresponseWithDefaults

`func NewListforminstancesbytenantresponseWithDefaults() *Listforminstancesbytenantresponse`

NewListforminstancesbytenantresponseWithDefaults instantiates a new Listforminstancesbytenantresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Listforminstancesbytenantresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Listforminstancesbytenantresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Listforminstancesbytenantresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Listforminstancesbytenantresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetExpire

`func (o *Listforminstancesbytenantresponse) GetExpire() string`

GetExpire returns the Expire field if non-nil, zero value otherwise.

### GetExpireOk

`func (o *Listforminstancesbytenantresponse) GetExpireOk() (*string, bool)`

GetExpireOk returns a tuple with the Expire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpire

`func (o *Listforminstancesbytenantresponse) SetExpire(v string)`

SetExpire sets Expire field to given value.

### HasExpire

`func (o *Listforminstancesbytenantresponse) HasExpire() bool`

HasExpire returns a boolean if a field has been set.

### GetState

`func (o *Listforminstancesbytenantresponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Listforminstancesbytenantresponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Listforminstancesbytenantresponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Listforminstancesbytenantresponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetStandAloneForm

`func (o *Listforminstancesbytenantresponse) GetStandAloneForm() bool`

GetStandAloneForm returns the StandAloneForm field if non-nil, zero value otherwise.

### GetStandAloneFormOk

`func (o *Listforminstancesbytenantresponse) GetStandAloneFormOk() (*bool, bool)`

GetStandAloneFormOk returns a tuple with the StandAloneForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandAloneForm

`func (o *Listforminstancesbytenantresponse) SetStandAloneForm(v bool)`

SetStandAloneForm sets StandAloneForm field to given value.

### HasStandAloneForm

`func (o *Listforminstancesbytenantresponse) HasStandAloneForm() bool`

HasStandAloneForm returns a boolean if a field has been set.

### GetStandAloneFormUrl

`func (o *Listforminstancesbytenantresponse) GetStandAloneFormUrl() string`

GetStandAloneFormUrl returns the StandAloneFormUrl field if non-nil, zero value otherwise.

### GetStandAloneFormUrlOk

`func (o *Listforminstancesbytenantresponse) GetStandAloneFormUrlOk() (*string, bool)`

GetStandAloneFormUrlOk returns a tuple with the StandAloneFormUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandAloneFormUrl

`func (o *Listforminstancesbytenantresponse) SetStandAloneFormUrl(v string)`

SetStandAloneFormUrl sets StandAloneFormUrl field to given value.

### HasStandAloneFormUrl

`func (o *Listforminstancesbytenantresponse) HasStandAloneFormUrl() bool`

HasStandAloneFormUrl returns a boolean if a field has been set.

### GetCreatedBy

`func (o *Listforminstancesbytenantresponse) GetCreatedBy() Forminstancecreatedby`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Listforminstancesbytenantresponse) GetCreatedByOk() (*Forminstancecreatedby, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Listforminstancesbytenantresponse) SetCreatedBy(v Forminstancecreatedby)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *Listforminstancesbytenantresponse) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetFormDefinitionId

`func (o *Listforminstancesbytenantresponse) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *Listforminstancesbytenantresponse) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *Listforminstancesbytenantresponse) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.

### HasFormDefinitionId

`func (o *Listforminstancesbytenantresponse) HasFormDefinitionId() bool`

HasFormDefinitionId returns a boolean if a field has been set.

### GetFormInput

`func (o *Listforminstancesbytenantresponse) GetFormInput() map[string]interface{}`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *Listforminstancesbytenantresponse) GetFormInputOk() (*map[string]interface{}, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *Listforminstancesbytenantresponse) SetFormInput(v map[string]interface{})`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *Listforminstancesbytenantresponse) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### SetFormInputNil

`func (o *Listforminstancesbytenantresponse) SetFormInputNil(b bool)`

 SetFormInputNil sets the value for FormInput to be an explicit nil

### UnsetFormInput
`func (o *Listforminstancesbytenantresponse) UnsetFormInput()`

UnsetFormInput ensures that no value is present for FormInput, not even an explicit nil
### GetFormElements

`func (o *Listforminstancesbytenantresponse) GetFormElements() []Formelement`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *Listforminstancesbytenantresponse) GetFormElementsOk() (*[]Formelement, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *Listforminstancesbytenantresponse) SetFormElements(v []Formelement)`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *Listforminstancesbytenantresponse) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### GetFormData

`func (o *Listforminstancesbytenantresponse) GetFormData() map[string]interface{}`

GetFormData returns the FormData field if non-nil, zero value otherwise.

### GetFormDataOk

`func (o *Listforminstancesbytenantresponse) GetFormDataOk() (*map[string]interface{}, bool)`

GetFormDataOk returns a tuple with the FormData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormData

`func (o *Listforminstancesbytenantresponse) SetFormData(v map[string]interface{})`

SetFormData sets FormData field to given value.

### HasFormData

`func (o *Listforminstancesbytenantresponse) HasFormData() bool`

HasFormData returns a boolean if a field has been set.

### SetFormDataNil

`func (o *Listforminstancesbytenantresponse) SetFormDataNil(b bool)`

 SetFormDataNil sets the value for FormData to be an explicit nil

### UnsetFormData
`func (o *Listforminstancesbytenantresponse) UnsetFormData()`

UnsetFormData ensures that no value is present for FormData, not even an explicit nil
### GetFormErrors

`func (o *Listforminstancesbytenantresponse) GetFormErrors() []Formerror`

GetFormErrors returns the FormErrors field if non-nil, zero value otherwise.

### GetFormErrorsOk

`func (o *Listforminstancesbytenantresponse) GetFormErrorsOk() (*[]Formerror, bool)`

GetFormErrorsOk returns a tuple with the FormErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormErrors

`func (o *Listforminstancesbytenantresponse) SetFormErrors(v []Formerror)`

SetFormErrors sets FormErrors field to given value.

### HasFormErrors

`func (o *Listforminstancesbytenantresponse) HasFormErrors() bool`

HasFormErrors returns a boolean if a field has been set.

### GetFormConditions

`func (o *Listforminstancesbytenantresponse) GetFormConditions() []Formcondition`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *Listforminstancesbytenantresponse) GetFormConditionsOk() (*[]Formcondition, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *Listforminstancesbytenantresponse) SetFormConditions(v []Formcondition)`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *Listforminstancesbytenantresponse) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### GetCreated

`func (o *Listforminstancesbytenantresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Listforminstancesbytenantresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Listforminstancesbytenantresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Listforminstancesbytenantresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Listforminstancesbytenantresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Listforminstancesbytenantresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Listforminstancesbytenantresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Listforminstancesbytenantresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetRecipients

`func (o *Listforminstancesbytenantresponse) GetRecipients() []Forminstancerecipient`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *Listforminstancesbytenantresponse) GetRecipientsOk() (*[]Forminstancerecipient, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *Listforminstancesbytenantresponse) SetRecipients(v []Forminstancerecipient)`

SetRecipients sets Recipients field to given value.

### HasRecipients

`func (o *Listforminstancesbytenantresponse) HasRecipients() bool`

HasRecipients returns a boolean if a field has been set.


