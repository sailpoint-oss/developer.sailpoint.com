---
id: workflow-library-trigger
title: WorkflowLibraryTrigger
pagination_label: WorkflowLibraryTrigger
sidebar_label: WorkflowLibraryTrigger
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowLibraryTrigger', 'WorkflowLibraryTrigger'] 
slug: /tools/sdk/go/v3/models/workflow-library-trigger
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryTrigger', 'WorkflowLibraryTrigger']
---

# WorkflowLibraryTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] 
**Type** | Pointer to **string** | Trigger type | [optional] 
**Deprecated** | Pointer to **bool** |  | [optional] 
**DeprecatedBy** | Pointer to **time.Time** |  | [optional] 
**IsSimulationEnabled** | Pointer to **bool** |  | [optional] 
**OutputSchema** | Pointer to **map[string]interface{}** | Example output schema | [optional] 
**Name** | Pointer to **string** | Trigger Name | [optional] 
**Description** | Pointer to **string** | Trigger Description | [optional] 
**IsDynamicSchema** | Pointer to **bool** | Determines whether the dynamic output schema is returned in place of the action&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to false]
**InputExample** | Pointer to **map[string]interface{}** | Example trigger payload if applicable | [optional] 
**FormFields** | Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the trigger accepts | [optional] 

## Methods

### NewWorkflowLibraryTrigger

`func NewWorkflowLibraryTrigger() *WorkflowLibraryTrigger`

NewWorkflowLibraryTrigger instantiates a new WorkflowLibraryTrigger object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowLibraryTriggerWithDefaults

`func NewWorkflowLibraryTriggerWithDefaults() *WorkflowLibraryTrigger`

NewWorkflowLibraryTriggerWithDefaults instantiates a new WorkflowLibraryTrigger object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkflowLibraryTrigger) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkflowLibraryTrigger) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkflowLibraryTrigger) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkflowLibraryTrigger) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *WorkflowLibraryTrigger) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkflowLibraryTrigger) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkflowLibraryTrigger) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkflowLibraryTrigger) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDeprecated

`func (o *WorkflowLibraryTrigger) GetDeprecated() bool`

GetDeprecated returns the Deprecated field if non-nil, zero value otherwise.

### GetDeprecatedOk

`func (o *WorkflowLibraryTrigger) GetDeprecatedOk() (*bool, bool)`

GetDeprecatedOk returns a tuple with the Deprecated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecated

`func (o *WorkflowLibraryTrigger) SetDeprecated(v bool)`

SetDeprecated sets Deprecated field to given value.

### HasDeprecated

`func (o *WorkflowLibraryTrigger) HasDeprecated() bool`

HasDeprecated returns a boolean if a field has been set.

### GetDeprecatedBy

`func (o *WorkflowLibraryTrigger) GetDeprecatedBy() time.Time`

GetDeprecatedBy returns the DeprecatedBy field if non-nil, zero value otherwise.

### GetDeprecatedByOk

`func (o *WorkflowLibraryTrigger) GetDeprecatedByOk() (*time.Time, bool)`

GetDeprecatedByOk returns a tuple with the DeprecatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecatedBy

`func (o *WorkflowLibraryTrigger) SetDeprecatedBy(v time.Time)`

SetDeprecatedBy sets DeprecatedBy field to given value.

### HasDeprecatedBy

`func (o *WorkflowLibraryTrigger) HasDeprecatedBy() bool`

HasDeprecatedBy returns a boolean if a field has been set.

### GetIsSimulationEnabled

`func (o *WorkflowLibraryTrigger) GetIsSimulationEnabled() bool`

GetIsSimulationEnabled returns the IsSimulationEnabled field if non-nil, zero value otherwise.

### GetIsSimulationEnabledOk

`func (o *WorkflowLibraryTrigger) GetIsSimulationEnabledOk() (*bool, bool)`

GetIsSimulationEnabledOk returns a tuple with the IsSimulationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSimulationEnabled

`func (o *WorkflowLibraryTrigger) SetIsSimulationEnabled(v bool)`

SetIsSimulationEnabled sets IsSimulationEnabled field to given value.

### HasIsSimulationEnabled

`func (o *WorkflowLibraryTrigger) HasIsSimulationEnabled() bool`

HasIsSimulationEnabled returns a boolean if a field has been set.

### GetOutputSchema

`func (o *WorkflowLibraryTrigger) GetOutputSchema() map[string]interface{}`

GetOutputSchema returns the OutputSchema field if non-nil, zero value otherwise.

### GetOutputSchemaOk

`func (o *WorkflowLibraryTrigger) GetOutputSchemaOk() (*map[string]interface{}, bool)`

GetOutputSchemaOk returns a tuple with the OutputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputSchema

`func (o *WorkflowLibraryTrigger) SetOutputSchema(v map[string]interface{})`

SetOutputSchema sets OutputSchema field to given value.

### HasOutputSchema

`func (o *WorkflowLibraryTrigger) HasOutputSchema() bool`

HasOutputSchema returns a boolean if a field has been set.

### GetName

`func (o *WorkflowLibraryTrigger) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkflowLibraryTrigger) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkflowLibraryTrigger) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkflowLibraryTrigger) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *WorkflowLibraryTrigger) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkflowLibraryTrigger) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkflowLibraryTrigger) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkflowLibraryTrigger) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIsDynamicSchema

`func (o *WorkflowLibraryTrigger) GetIsDynamicSchema() bool`

GetIsDynamicSchema returns the IsDynamicSchema field if non-nil, zero value otherwise.

### GetIsDynamicSchemaOk

`func (o *WorkflowLibraryTrigger) GetIsDynamicSchemaOk() (*bool, bool)`

GetIsDynamicSchemaOk returns a tuple with the IsDynamicSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamicSchema

`func (o *WorkflowLibraryTrigger) SetIsDynamicSchema(v bool)`

SetIsDynamicSchema sets IsDynamicSchema field to given value.

### HasIsDynamicSchema

`func (o *WorkflowLibraryTrigger) HasIsDynamicSchema() bool`

HasIsDynamicSchema returns a boolean if a field has been set.

### GetInputExample

`func (o *WorkflowLibraryTrigger) GetInputExample() map[string]interface{}`

GetInputExample returns the InputExample field if non-nil, zero value otherwise.

### GetInputExampleOk

`func (o *WorkflowLibraryTrigger) GetInputExampleOk() (*map[string]interface{}, bool)`

GetInputExampleOk returns a tuple with the InputExample field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputExample

`func (o *WorkflowLibraryTrigger) SetInputExample(v map[string]interface{})`

SetInputExample sets InputExample field to given value.

### HasInputExample

`func (o *WorkflowLibraryTrigger) HasInputExample() bool`

HasInputExample returns a boolean if a field has been set.

### SetInputExampleNil

`func (o *WorkflowLibraryTrigger) SetInputExampleNil(b bool)`

 SetInputExampleNil sets the value for InputExample to be an explicit nil

### UnsetInputExample
`func (o *WorkflowLibraryTrigger) UnsetInputExample()`

UnsetInputExample ensures that no value is present for InputExample, not even an explicit nil
### GetFormFields

`func (o *WorkflowLibraryTrigger) GetFormFields() []WorkflowLibraryFormFields`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *WorkflowLibraryTrigger) GetFormFieldsOk() (*[]WorkflowLibraryFormFields, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *WorkflowLibraryTrigger) SetFormFields(v []WorkflowLibraryFormFields)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *WorkflowLibraryTrigger) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.

### SetFormFieldsNil

`func (o *WorkflowLibraryTrigger) SetFormFieldsNil(b bool)`

 SetFormFieldsNil sets the value for FormFields to be an explicit nil

### UnsetFormFields
`func (o *WorkflowLibraryTrigger) UnsetFormFields()`

UnsetFormFields ensures that no value is present for FormFields, not even an explicit nil

