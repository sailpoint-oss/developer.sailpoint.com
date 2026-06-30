---
id: v1-workflowlibrarytrigger
title: Workflowlibrarytrigger
pagination_label: Workflowlibrarytrigger
sidebar_label: Workflowlibrarytrigger
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowlibrarytrigger', 'V1Workflowlibrarytrigger'] 
slug: /tools/sdk/go/workflows/models/workflowlibrarytrigger
tags: ['SDK', 'Software Development Kit', 'Workflowlibrarytrigger', 'V1Workflowlibrarytrigger']
---

# Workflowlibrarytrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Trigger ID. This is a static namespaced ID for the trigger. | [optional] 
**Type** | Pointer to **string** | Trigger type | [optional] 
**Deprecated** | Pointer to **bool** | Whether the trigger is deprecated. | [optional] [default to false]
**DeprecatedBy** | Pointer to **SailPointTime** | Date the trigger was deprecated, if applicable. | [optional] 
**IsSimulationEnabled** | Pointer to **bool** | Whether the trigger can be simulated. | [optional] [default to false]
**OutputSchema** | Pointer to **map[string]interface{}** | Example output schema | [optional] 
**Name** | Pointer to **string** | Trigger Name | [optional] 
**Description** | Pointer to **string** | Trigger Description | [optional] 
**IsDynamicSchema** | Pointer to **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to false]
**InputExample** | Pointer to **map[string]interface{}** | Example trigger payload if applicable | [optional] 
**FormFields** | Pointer to [**[]Workflowlibraryformfields**](workflowlibraryformfields) | One or more inputs that the trigger accepts | [optional] 

## Methods

### NewWorkflowlibrarytrigger

`func NewWorkflowlibrarytrigger() *Workflowlibrarytrigger`

NewWorkflowlibrarytrigger instantiates a new Workflowlibrarytrigger object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowlibrarytriggerWithDefaults

`func NewWorkflowlibrarytriggerWithDefaults() *Workflowlibrarytrigger`

NewWorkflowlibrarytriggerWithDefaults instantiates a new Workflowlibrarytrigger object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workflowlibrarytrigger) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workflowlibrarytrigger) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workflowlibrarytrigger) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workflowlibrarytrigger) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Workflowlibrarytrigger) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Workflowlibrarytrigger) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Workflowlibrarytrigger) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Workflowlibrarytrigger) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDeprecated

`func (o *Workflowlibrarytrigger) GetDeprecated() bool`

GetDeprecated returns the Deprecated field if non-nil, zero value otherwise.

### GetDeprecatedOk

`func (o *Workflowlibrarytrigger) GetDeprecatedOk() (*bool, bool)`

GetDeprecatedOk returns a tuple with the Deprecated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecated

`func (o *Workflowlibrarytrigger) SetDeprecated(v bool)`

SetDeprecated sets Deprecated field to given value.

### HasDeprecated

`func (o *Workflowlibrarytrigger) HasDeprecated() bool`

HasDeprecated returns a boolean if a field has been set.

### GetDeprecatedBy

`func (o *Workflowlibrarytrigger) GetDeprecatedBy() SailPointTime`

GetDeprecatedBy returns the DeprecatedBy field if non-nil, zero value otherwise.

### GetDeprecatedByOk

`func (o *Workflowlibrarytrigger) GetDeprecatedByOk() (*SailPointTime, bool)`

GetDeprecatedByOk returns a tuple with the DeprecatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecatedBy

`func (o *Workflowlibrarytrigger) SetDeprecatedBy(v SailPointTime)`

SetDeprecatedBy sets DeprecatedBy field to given value.

### HasDeprecatedBy

`func (o *Workflowlibrarytrigger) HasDeprecatedBy() bool`

HasDeprecatedBy returns a boolean if a field has been set.

### GetIsSimulationEnabled

`func (o *Workflowlibrarytrigger) GetIsSimulationEnabled() bool`

GetIsSimulationEnabled returns the IsSimulationEnabled field if non-nil, zero value otherwise.

### GetIsSimulationEnabledOk

`func (o *Workflowlibrarytrigger) GetIsSimulationEnabledOk() (*bool, bool)`

GetIsSimulationEnabledOk returns a tuple with the IsSimulationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSimulationEnabled

`func (o *Workflowlibrarytrigger) SetIsSimulationEnabled(v bool)`

SetIsSimulationEnabled sets IsSimulationEnabled field to given value.

### HasIsSimulationEnabled

`func (o *Workflowlibrarytrigger) HasIsSimulationEnabled() bool`

HasIsSimulationEnabled returns a boolean if a field has been set.

### GetOutputSchema

`func (o *Workflowlibrarytrigger) GetOutputSchema() map[string]interface{}`

GetOutputSchema returns the OutputSchema field if non-nil, zero value otherwise.

### GetOutputSchemaOk

`func (o *Workflowlibrarytrigger) GetOutputSchemaOk() (*map[string]interface{}, bool)`

GetOutputSchemaOk returns a tuple with the OutputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputSchema

`func (o *Workflowlibrarytrigger) SetOutputSchema(v map[string]interface{})`

SetOutputSchema sets OutputSchema field to given value.

### HasOutputSchema

`func (o *Workflowlibrarytrigger) HasOutputSchema() bool`

HasOutputSchema returns a boolean if a field has been set.

### GetName

`func (o *Workflowlibrarytrigger) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workflowlibrarytrigger) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workflowlibrarytrigger) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workflowlibrarytrigger) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Workflowlibrarytrigger) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workflowlibrarytrigger) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workflowlibrarytrigger) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workflowlibrarytrigger) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIsDynamicSchema

`func (o *Workflowlibrarytrigger) GetIsDynamicSchema() bool`

GetIsDynamicSchema returns the IsDynamicSchema field if non-nil, zero value otherwise.

### GetIsDynamicSchemaOk

`func (o *Workflowlibrarytrigger) GetIsDynamicSchemaOk() (*bool, bool)`

GetIsDynamicSchemaOk returns a tuple with the IsDynamicSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamicSchema

`func (o *Workflowlibrarytrigger) SetIsDynamicSchema(v bool)`

SetIsDynamicSchema sets IsDynamicSchema field to given value.

### HasIsDynamicSchema

`func (o *Workflowlibrarytrigger) HasIsDynamicSchema() bool`

HasIsDynamicSchema returns a boolean if a field has been set.

### GetInputExample

`func (o *Workflowlibrarytrigger) GetInputExample() map[string]interface{}`

GetInputExample returns the InputExample field if non-nil, zero value otherwise.

### GetInputExampleOk

`func (o *Workflowlibrarytrigger) GetInputExampleOk() (*map[string]interface{}, bool)`

GetInputExampleOk returns a tuple with the InputExample field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputExample

`func (o *Workflowlibrarytrigger) SetInputExample(v map[string]interface{})`

SetInputExample sets InputExample field to given value.

### HasInputExample

`func (o *Workflowlibrarytrigger) HasInputExample() bool`

HasInputExample returns a boolean if a field has been set.

### SetInputExampleNil

`func (o *Workflowlibrarytrigger) SetInputExampleNil(b bool)`

 SetInputExampleNil sets the value for InputExample to be an explicit nil

### UnsetInputExample
`func (o *Workflowlibrarytrigger) UnsetInputExample()`

UnsetInputExample ensures that no value is present for InputExample, not even an explicit nil
### GetFormFields

`func (o *Workflowlibrarytrigger) GetFormFields() []Workflowlibraryformfields`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *Workflowlibrarytrigger) GetFormFieldsOk() (*[]Workflowlibraryformfields, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *Workflowlibrarytrigger) SetFormFields(v []Workflowlibraryformfields)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *Workflowlibrarytrigger) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.

### SetFormFieldsNil

`func (o *Workflowlibrarytrigger) SetFormFieldsNil(b bool)`

 SetFormFieldsNil sets the value for FormFields to be an explicit nil

### UnsetFormFields
`func (o *Workflowlibrarytrigger) UnsetFormFields()`

UnsetFormFields ensures that no value is present for FormFields, not even an explicit nil

