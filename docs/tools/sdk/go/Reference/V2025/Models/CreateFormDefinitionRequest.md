---
id: create-form-definition-request
title: CreateFormDefinitionRequest
pagination_label: CreateFormDefinitionRequest
sidebar_label: CreateFormDefinitionRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateFormDefinitionRequest', 'CreateFormDefinitionRequest'] 
slug: /tools/sdk/go//models/create-form-definition-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionRequest', 'CreateFormDefinitionRequest']
---

# CreateFormDefinitionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description is the form definition description | [optional] 
**FormConditions** | Pointer to [**[]FormCondition**](form-condition) | FormConditions is the conditional logic that modify the form dynamically modify the form as the recipient is interacting out the form | [optional] 
**FormElements** | Pointer to [**[]FormElement**](form-element) | FormElements is a list of nested form elements | [optional] 
**FormInput** | Pointer to [**[]FormDefinitionInput**](form-definition-input) | FormInput is a list of form inputs that are required when creating a form-instance object | [optional] 
**Name** | **string** | Name is the form definition name | 
**Owner** | [**FormOwner**](form-owner) |  | 
**UsedBy** | Pointer to [**[]FormUsedBy**](form-used-by) | UsedBy is a list of objects where when any system uses a particular form it reaches out to the form service to record it is currently being used | [optional] 

## Methods

### NewCreateFormDefinitionRequest

`func NewCreateFormDefinitionRequest(name string, owner FormOwner, ) *CreateFormDefinitionRequest`

NewCreateFormDefinitionRequest instantiates a new CreateFormDefinitionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateFormDefinitionRequestWithDefaults

`func NewCreateFormDefinitionRequestWithDefaults() *CreateFormDefinitionRequest`

NewCreateFormDefinitionRequestWithDefaults instantiates a new CreateFormDefinitionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *CreateFormDefinitionRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateFormDefinitionRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateFormDefinitionRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateFormDefinitionRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFormConditions

`func (o *CreateFormDefinitionRequest) GetFormConditions() []FormCondition`

GetFormConditions returns the FormConditions field if non-nil, zero value otherwise.

### GetFormConditionsOk

`func (o *CreateFormDefinitionRequest) GetFormConditionsOk() (*[]FormCondition, bool)`

GetFormConditionsOk returns a tuple with the FormConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormConditions

`func (o *CreateFormDefinitionRequest) SetFormConditions(v []FormCondition)`

SetFormConditions sets FormConditions field to given value.

### HasFormConditions

`func (o *CreateFormDefinitionRequest) HasFormConditions() bool`

HasFormConditions returns a boolean if a field has been set.

### GetFormElements

`func (o *CreateFormDefinitionRequest) GetFormElements() []FormElement`

GetFormElements returns the FormElements field if non-nil, zero value otherwise.

### GetFormElementsOk

`func (o *CreateFormDefinitionRequest) GetFormElementsOk() (*[]FormElement, bool)`

GetFormElementsOk returns a tuple with the FormElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormElements

`func (o *CreateFormDefinitionRequest) SetFormElements(v []FormElement)`

SetFormElements sets FormElements field to given value.

### HasFormElements

`func (o *CreateFormDefinitionRequest) HasFormElements() bool`

HasFormElements returns a boolean if a field has been set.

### GetFormInput

`func (o *CreateFormDefinitionRequest) GetFormInput() []FormDefinitionInput`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *CreateFormDefinitionRequest) GetFormInputOk() (*[]FormDefinitionInput, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *CreateFormDefinitionRequest) SetFormInput(v []FormDefinitionInput)`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *CreateFormDefinitionRequest) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### GetName

`func (o *CreateFormDefinitionRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateFormDefinitionRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateFormDefinitionRequest) SetName(v string)`

SetName sets Name field to given value.


### GetOwner

`func (o *CreateFormDefinitionRequest) GetOwner() FormOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CreateFormDefinitionRequest) GetOwnerOk() (*FormOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CreateFormDefinitionRequest) SetOwner(v FormOwner)`

SetOwner sets Owner field to given value.


### GetUsedBy

`func (o *CreateFormDefinitionRequest) GetUsedBy() []FormUsedBy`

GetUsedBy returns the UsedBy field if non-nil, zero value otherwise.

### GetUsedByOk

`func (o *CreateFormDefinitionRequest) GetUsedByOk() (*[]FormUsedBy, bool)`

GetUsedByOk returns a tuple with the UsedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedBy

`func (o *CreateFormDefinitionRequest) SetUsedBy(v []FormUsedBy)`

SetUsedBy sets UsedBy field to given value.

### HasUsedBy

`func (o *CreateFormDefinitionRequest) HasUsedBy() bool`

HasUsedBy returns a boolean if a field has been set.


