---
id: form-definition-response
title: FormDefinitionResponse
pagination_label: FormDefinitionResponse
sidebar_label: FormDefinitionResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormDefinitionResponse', 'FormDefinitionResponse'] 
slug: /tools/sdk/go//models/form-definition-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionResponse', 'FormDefinitionResponse']
---

# FormDefinitionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique guid identifying the form definition. | [optional] 
**Name** | Pointer to **string** | Name of the form definition. | [optional] 
**Description** | Pointer to **string** | Form definition's description. | [optional] 
**Owner** | Pointer to [**FormOwner**](form-owner) |  | [optional] 
**UsedBy** | Pointer to [**[]FormUsedBy**](form-used-by) | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [optional] 
**FormInput** | Pointer to [**[]FormDefinitionInput**](form-definition-input) | List of form inputs required to create a form-instance object. | [optional] 
**FormElements** | Pointer to [**[]FormElement**](form-element) | List of nested form elements. | [optional] 
**FormConditions** | Pointer to [**[]FormCondition**](form-condition) | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [optional] 
**Created** | Pointer to **SailPointTime** | Created is the date the form definition was created | [optional] 
**Modified** | Pointer to **SailPointTime** | Modified is the last date the form definition was modified | [optional] 

## Methods

### NewFormDefinitionResponse

`func NewFormDefinitionResponse() *FormDefinitionResponse`

NewFormDefinitionResponse instantiates a new FormDefinitionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormDefinitionResponseWithDefaults

`func NewFormDefinitionResponseWithDefaults() *FormDefinitionResponse`

NewFormDefinitionResponseWithDefaults instantiates a new FormDefinitionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FormDefinitionResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormDefinitionResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormDefinitionResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormDefinitionResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *FormDefinitionResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FormDefinitionResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FormDefinitionResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FormDefinitionResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *FormDefinitionResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FormDefinitionResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FormDefinitionResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FormDefinitionResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOwner

`func (o *FormDefinitionResponse) GetOwner() FormOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *FormDefinitionResponse) GetOwnerOk() (*FormOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *FormDefinitionResponse) SetOwner(v FormOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *FormDefinitionResponse) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetUsedBy

`func (o *FormDefinitionResponse) GetUsedBy() []FormUsedBy`

GetUsedBy returns the UsedBy field if non-nil, zero value otherwise.

### GetUsedByOk

`func (o *FormDefinitionResponse) GetUsedByOk() (*[]FormUsedBy, bool)`

GetUsedByOk returns a tuple with the UsedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedBy

`func (o *FormDefinitionResponse) SetUsedBy(v []FormUsedBy)`

SetUsedBy sets UsedBy field to given value.

### HasUsedBy

`func (o *FormDefinitionResponse) HasUsedBy() bool`

HasUsedBy returns a boolean if a field has been set.

### GetFormInput

`func (o *FormDefinitionResponse) GetFormInput() []FormDefinitionInput`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *FormDefinitionResponse) GetFormInputOk() (*[]FormDefinitionInput, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *FormDefinitionResponse) SetFormInput(v []FormDefinitionInput)`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *FormDefinitionResponse) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### GetFormElements

`func (o *FormDefinitionResponse) GetFormElements() []FormElement`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *FormDefinitionResponse) GetFormElementsOk() (*[]FormElement, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *FormDefinitionResponse) SetFormElements(v []FormElement)`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *FormDefinitionResponse) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### GetFormConditions

`func (o *FormDefinitionResponse) GetFormConditions() []FormCondition`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *FormDefinitionResponse) GetFormConditionsOk() (*[]FormCondition, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *FormDefinitionResponse) SetFormConditions(v []FormCondition)`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *FormDefinitionResponse) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### GetCreated

`func (o *FormDefinitionResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *FormDefinitionResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *FormDefinitionResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *FormDefinitionResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *FormDefinitionResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *FormDefinitionResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *FormDefinitionResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *FormDefinitionResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.


