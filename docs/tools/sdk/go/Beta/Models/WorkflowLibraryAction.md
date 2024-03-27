---
id: workflow-library-action
title: WorkflowLibraryAction
pagination_label: WorkflowLibraryAction
sidebar_label: WorkflowLibraryAction
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'WorkflowLibraryAction'] 
slug: /tools/sdk/go/beta/models/workflow-library-action
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryAction']
---

# WorkflowLibraryAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Action ID. This is a static namespaced ID for the action | [optional] 
**Name** |  Pointer to **string** | Action Name | [optional] 
**Type** |  Pointer to **string** | Action type | [optional] 
**Description** |  Pointer to **string** | Action Description | [optional] 
**FormFields** |  Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the action accepts | [optional] 
**IsDynamicSchema** |  Pointer to **bool** | Determines whether the dynamic output schema is returned in place of the action&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**OutputSchema** |  Pointer to **map[string]interface{}** | Defines the output schema, if any, that this action produces. | [optional] 

## Methods

### NewWorkflowLibraryAction

`func NewWorkflowLibraryAction() *WorkflowLibraryAction`

NewWorkflowLibraryAction instantiates a new WorkflowLibraryAction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowLibraryActionWithDefaults

`func NewWorkflowLibraryActionWithDefaults() *WorkflowLibraryAction`

NewWorkflowLibraryActionWithDefaults instantiates a new WorkflowLibraryAction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowLibraryAction) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowLibraryAction) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowLibraryAction) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowLibraryAction) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkflowLibraryAction) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowLibraryAction) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowLibraryAction) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkflowLibraryAction) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *WorkflowLibraryAction) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkflowLibraryAction) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkflowLibraryAction) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkflowLibraryAction) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *WorkflowLibraryAction) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkflowLibraryAction) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkflowLibraryAction) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkflowLibraryAction) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFormFields

`func (o *WorkflowLibraryAction) GetFormFields() []WorkflowLibraryFormFields`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *WorkflowLibraryAction) GetFormFieldsOk() (*[]WorkflowLibraryFormFields, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *WorkflowLibraryAction) SetFormFields(v []WorkflowLibraryFormFields)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *WorkflowLibraryAction) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.

### GetIsDynamicSchema

`func (o *WorkflowLibraryAction) GetIsDynamicSchema() bool`

GetIsDynamicSchema returns the IsDynamicSchema field if non-nil, zero value otherwise.

### GetIsDynamicSchemaOk

`func (o *WorkflowLibraryAction) GetIsDynamicSchemaOk() (*bool, bool)`

GetIsDynamicSchemaOk returns a tuple with the IsDynamicSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamicSchema

`func (o *WorkflowLibraryAction) SetIsDynamicSchema(v bool)`

SetIsDynamicSchema sets IsDynamicSchema field to given value.

### HasIsDynamicSchema

`func (o *WorkflowLibraryAction) HasIsDynamicSchema() bool`

HasIsDynamicSchema returns a boolean if a field has been set.

### GetOutputSchema

`func (o *WorkflowLibraryAction) GetOutputSchema() map[string]interface{}`

GetOutputSchema returns the OutputSchema field if non-nil, zero value otherwise.

### GetOutputSchemaOk

`func (o *WorkflowLibraryAction) GetOutputSchemaOk() (*map[string]interface{}, bool)`

GetOutputSchemaOk returns a tuple with the OutputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputSchema

`func (o *WorkflowLibraryAction) SetOutputSchema(v map[string]interface{})`

SetOutputSchema sets OutputSchema field to given value.

### HasOutputSchema

`func (o *WorkflowLibraryAction) HasOutputSchema() bool`

HasOutputSchema returns a boolean if a field has been set.


[[Back to top]](#) 


