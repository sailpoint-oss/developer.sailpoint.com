---
id: workflow-library-operator
title: WorkflowLibraryOperator
pagination_label: WorkflowLibraryOperator
sidebar_label: WorkflowLibraryOperator
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'WorkflowLibraryOperator'] 
slug: /tools/sdk/go/v3/models/workflow-library-operator
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryOperator']
---

# WorkflowLibraryOperator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Operator ID. | [optional] 
**Name** |  Pointer to **string** | Operator friendly name | [optional] 
**Type** |  Pointer to **string** | Operator type | [optional] 
**Description** |  Pointer to **string** | Description of the operator | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 

## Methods

### NewWorkflowLibraryOperator

`func NewWorkflowLibraryOperator() *WorkflowLibraryOperator`

NewWorkflowLibraryOperator instantiates a new WorkflowLibraryOperator object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowLibraryOperatorWithDefaults

`func NewWorkflowLibraryOperatorWithDefaults() *WorkflowLibraryOperator`

NewWorkflowLibraryOperatorWithDefaults instantiates a new WorkflowLibraryOperator object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowLibraryOperator) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowLibraryOperator) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowLibraryOperator) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowLibraryOperator) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkflowLibraryOperator) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowLibraryOperator) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowLibraryOperator) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkflowLibraryOperator) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *WorkflowLibraryOperator) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkflowLibraryOperator) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkflowLibraryOperator) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkflowLibraryOperator) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *WorkflowLibraryOperator) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkflowLibraryOperator) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkflowLibraryOperator) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkflowLibraryOperator) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFormFields

`func (o *WorkflowLibraryOperator) GetFormFields() []WorkflowLibraryFormFields`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *WorkflowLibraryOperator) GetFormFieldsOk() (*[]WorkflowLibraryFormFields, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *WorkflowLibraryOperator) SetFormFields(v []WorkflowLibraryFormFields)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *WorkflowLibraryOperator) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.


[[Back to top]](#) 


