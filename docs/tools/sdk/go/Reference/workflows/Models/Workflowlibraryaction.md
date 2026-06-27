---
id: v1-workflowlibraryaction
title: Workflowlibraryaction
pagination_label: Workflowlibraryaction
sidebar_label: Workflowlibraryaction
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowlibraryaction', 'V1Workflowlibraryaction'] 
slug: /tools/sdk/go/workflows/models/workflowlibraryaction
tags: ['SDK', 'Software Development Kit', 'Workflowlibraryaction', 'V1Workflowlibraryaction']
---

# Workflowlibraryaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Action ID. This is a static namespaced ID for the action | [optional] 
**Name** | Pointer to **string** | Action Name | [optional] 
**Type** | Pointer to **string** | Action type | [optional] 
**Description** | Pointer to **string** | Action Description | [optional] 
**FormFields** | Pointer to [**[]Workflowlibraryformfields**](workflowlibraryformfields) | One or more inputs that the action accepts | [optional] 
**ExampleOutput** | Pointer to [**WorkflowlibraryactionExampleOutput**](workflowlibraryaction-example-output) |  | [optional] 
**Deprecated** | Pointer to **bool** |  | [optional] 
**DeprecatedBy** | Pointer to **SailPointTime** |  | [optional] 
**VersionNumber** | Pointer to **int32** | Version number | [optional] 
**IsSimulationEnabled** | Pointer to **bool** |  | [optional] 
**IsDynamicSchema** | Pointer to **bool** | Determines whether the dynamic output schema is returned in place of the action's output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] [default to false]
**OutputSchema** | Pointer to **map[string]interface{}** | Defines the output schema, if any, that this action produces. | [optional] 

## Methods

### NewWorkflowlibraryaction

`func NewWorkflowlibraryaction() *Workflowlibraryaction`

NewWorkflowlibraryaction instantiates a new Workflowlibraryaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowlibraryactionWithDefaults

`func NewWorkflowlibraryactionWithDefaults() *Workflowlibraryaction`

NewWorkflowlibraryactionWithDefaults instantiates a new Workflowlibraryaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Workflowlibraryaction) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workflowlibraryaction) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workflowlibraryaction) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workflowlibraryaction) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Workflowlibraryaction) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workflowlibraryaction) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workflowlibraryaction) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workflowlibraryaction) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *Workflowlibraryaction) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Workflowlibraryaction) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Workflowlibraryaction) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Workflowlibraryaction) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *Workflowlibraryaction) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workflowlibraryaction) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workflowlibraryaction) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workflowlibraryaction) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFormFields

`func (o *Workflowlibraryaction) GetFormFields() []Workflowlibraryformfields`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *Workflowlibraryaction) GetFormFieldsOk() (*[]Workflowlibraryformfields, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *Workflowlibraryaction) SetFormFields(v []Workflowlibraryformfields)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *Workflowlibraryaction) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.

### SetFormFieldsNil

`func (o *Workflowlibraryaction) SetFormFieldsNil(b bool)`

 SetFormFieldsNil sets the value for FormFields to be an explicit nil

### UnsetFormFields
`func (o *Workflowlibraryaction) UnsetFormFields()`

UnsetFormFields ensures that no value is present for FormFields, not even an explicit nil
### GetExampleOutput

`func (o *Workflowlibraryaction) GetExampleOutput() WorkflowlibraryactionExampleOutput`

GetExampleOutput returns the ExampleOutput field if non-nil, zero value otherwise.

### GetExampleOutputOk

`func (o *Workflowlibraryaction) GetExampleOutputOk() (*WorkflowlibraryactionExampleOutput, bool)`

GetExampleOutputOk returns a tuple with the ExampleOutput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExampleOutput

`func (o *Workflowlibraryaction) SetExampleOutput(v WorkflowlibraryactionExampleOutput)`

SetExampleOutput sets ExampleOutput field to given value.

### HasExampleOutput

`func (o *Workflowlibraryaction) HasExampleOutput() bool`

HasExampleOutput returns a boolean if a field has been set.

### GetDeprecated

`func (o *Workflowlibraryaction) GetDeprecated() bool`

GetDeprecated returns the Deprecated field if non-nil, zero value otherwise.

### GetDeprecatedOk

`func (o *Workflowlibraryaction) GetDeprecatedOk() (*bool, bool)`

GetDeprecatedOk returns a tuple with the Deprecated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecated

`func (o *Workflowlibraryaction) SetDeprecated(v bool)`

SetDeprecated sets Deprecated field to given value.

### HasDeprecated

`func (o *Workflowlibraryaction) HasDeprecated() bool`

HasDeprecated returns a boolean if a field has been set.

### GetDeprecatedBy

`func (o *Workflowlibraryaction) GetDeprecatedBy() SailPointTime`

GetDeprecatedBy returns the DeprecatedBy field if non-nil, zero value otherwise.

### GetDeprecatedByOk

`func (o *Workflowlibraryaction) GetDeprecatedByOk() (*SailPointTime, bool)`

GetDeprecatedByOk returns a tuple with the DeprecatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecatedBy

`func (o *Workflowlibraryaction) SetDeprecatedBy(v SailPointTime)`

SetDeprecatedBy sets DeprecatedBy field to given value.

### HasDeprecatedBy

`func (o *Workflowlibraryaction) HasDeprecatedBy() bool`

HasDeprecatedBy returns a boolean if a field has been set.

### GetVersionNumber

`func (o *Workflowlibraryaction) GetVersionNumber() int32`

GetVersionNumber returns the VersionNumber field if non-nil, zero value otherwise.

### GetVersionNumberOk

`func (o *Workflowlibraryaction) GetVersionNumberOk() (*int32, bool)`

GetVersionNumberOk returns a tuple with the VersionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionNumber

`func (o *Workflowlibraryaction) SetVersionNumber(v int32)`

SetVersionNumber sets VersionNumber field to given value.

### HasVersionNumber

`func (o *Workflowlibraryaction) HasVersionNumber() bool`

HasVersionNumber returns a boolean if a field has been set.

### GetIsSimulationEnabled

`func (o *Workflowlibraryaction) GetIsSimulationEnabled() bool`

GetIsSimulationEnabled returns the IsSimulationEnabled field if non-nil, zero value otherwise.

### GetIsSimulationEnabledOk

`func (o *Workflowlibraryaction) GetIsSimulationEnabledOk() (*bool, bool)`

GetIsSimulationEnabledOk returns a tuple with the IsSimulationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSimulationEnabled

`func (o *Workflowlibraryaction) SetIsSimulationEnabled(v bool)`

SetIsSimulationEnabled sets IsSimulationEnabled field to given value.

### HasIsSimulationEnabled

`func (o *Workflowlibraryaction) HasIsSimulationEnabled() bool`

HasIsSimulationEnabled returns a boolean if a field has been set.

### GetIsDynamicSchema

`func (o *Workflowlibraryaction) GetIsDynamicSchema() bool`

GetIsDynamicSchema returns the IsDynamicSchema field if non-nil, zero value otherwise.

### GetIsDynamicSchemaOk

`func (o *Workflowlibraryaction) GetIsDynamicSchemaOk() (*bool, bool)`

GetIsDynamicSchemaOk returns a tuple with the IsDynamicSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamicSchema

`func (o *Workflowlibraryaction) SetIsDynamicSchema(v bool)`

SetIsDynamicSchema sets IsDynamicSchema field to given value.

### HasIsDynamicSchema

`func (o *Workflowlibraryaction) HasIsDynamicSchema() bool`

HasIsDynamicSchema returns a boolean if a field has been set.

### GetOutputSchema

`func (o *Workflowlibraryaction) GetOutputSchema() map[string]interface{}`

GetOutputSchema returns the OutputSchema field if non-nil, zero value otherwise.

### GetOutputSchemaOk

`func (o *Workflowlibraryaction) GetOutputSchemaOk() (*map[string]interface{}, bool)`

GetOutputSchemaOk returns a tuple with the OutputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputSchema

`func (o *Workflowlibraryaction) SetOutputSchema(v map[string]interface{})`

SetOutputSchema sets OutputSchema field to given value.

### HasOutputSchema

`func (o *Workflowlibraryaction) HasOutputSchema() bool`

HasOutputSchema returns a boolean if a field has been set.


