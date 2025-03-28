---
id: v2024-list-complete-workflow-library200-response-inner
title: ListCompleteWorkflowLibrary200ResponseInner
pagination_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_label: ListCompleteWorkflowLibrary200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListCompleteWorkflowLibrary200ResponseInner', 'V2024ListCompleteWorkflowLibrary200ResponseInner'] 
slug: /tools/sdk/go/v2024/models/list-complete-workflow-library200-response-inner
tags: ['SDK', 'Software Development Kit', 'ListCompleteWorkflowLibrary200ResponseInner', 'V2024ListCompleteWorkflowLibrary200ResponseInner']
---

# ListCompleteWorkflowLibrary200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Operator ID. | [optional] 
**Name** | Pointer to **string** | Operator friendly name | [optional] 
**Type** | Pointer to **string** | Operator type | [optional] 
**Description** | Pointer to **string** | Description of the operator | [optional] 
**FormFields** | Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 
**ExampleOutput** | Pointer to [**WorkflowLibraryActionExampleOutput**](workflow-library-action-example-output) |  | [optional] 
**Deprecated** | Pointer to **bool** |  | [optional] 
**DeprecatedBy** | Pointer to **time.Time** |  | [optional] 
**VersionNumber** | Pointer to **int32** | Version number | [optional] 
**IsSimulationEnabled** | Pointer to **bool** |  | [optional] 
**IsDynamicSchema** | Pointer to **bool** | Determines whether the dynamic output schema is returned in place of the action&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**OutputSchema** | Pointer to **map[string]interface{}** | Example output schema | [optional] 
**InputExample** | Pointer to **map[string]interface{}** | Example trigger payload if applicable | [optional] 

## Methods

### NewListCompleteWorkflowLibrary200ResponseInner

`func NewListCompleteWorkflowLibrary200ResponseInner() *ListCompleteWorkflowLibrary200ResponseInner`

NewListCompleteWorkflowLibrary200ResponseInner instantiates a new ListCompleteWorkflowLibrary200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListCompleteWorkflowLibrary200ResponseInnerWithDefaults

`func NewListCompleteWorkflowLibrary200ResponseInnerWithDefaults() *ListCompleteWorkflowLibrary200ResponseInner`

NewListCompleteWorkflowLibrary200ResponseInnerWithDefaults instantiates a new ListCompleteWorkflowLibrary200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFormFields

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetFormFields() []WorkflowLibraryFormFields`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetFormFieldsOk() (*[]WorkflowLibraryFormFields, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetFormFields(v []WorkflowLibraryFormFields)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.

### SetFormFieldsNil

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetFormFieldsNil(b bool)`

 SetFormFieldsNil sets the value for FormFields to be an explicit nil

### UnsetFormFields
`func (o *ListCompleteWorkflowLibrary200ResponseInner) UnsetFormFields()`

UnsetFormFields ensures that no value is present for FormFields, not even an explicit nil
### GetExampleOutput

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetExampleOutput() WorkflowLibraryActionExampleOutput`

GetExampleOutput returns the ExampleOutput field if non-nil, zero value otherwise.

### GetExampleOutputOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetExampleOutputOk() (*WorkflowLibraryActionExampleOutput, bool)`

GetExampleOutputOk returns a tuple with the ExampleOutput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExampleOutput

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetExampleOutput(v WorkflowLibraryActionExampleOutput)`

SetExampleOutput sets ExampleOutput field to given value.

### HasExampleOutput

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasExampleOutput() bool`

HasExampleOutput returns a boolean if a field has been set.

### GetDeprecated

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetDeprecated() bool`

GetDeprecated returns the Deprecated field if non-nil, zero value otherwise.

### GetDeprecatedOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetDeprecatedOk() (*bool, bool)`

GetDeprecatedOk returns a tuple with the Deprecated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecated

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetDeprecated(v bool)`

SetDeprecated sets Deprecated field to given value.

### HasDeprecated

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasDeprecated() bool`

HasDeprecated returns a boolean if a field has been set.

### GetDeprecatedBy

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetDeprecatedBy() time.Time`

GetDeprecatedBy returns the DeprecatedBy field if non-nil, zero value otherwise.

### GetDeprecatedByOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetDeprecatedByOk() (*time.Time, bool)`

GetDeprecatedByOk returns a tuple with the DeprecatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecatedBy

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetDeprecatedBy(v time.Time)`

SetDeprecatedBy sets DeprecatedBy field to given value.

### HasDeprecatedBy

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasDeprecatedBy() bool`

HasDeprecatedBy returns a boolean if a field has been set.

### GetVersionNumber

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetVersionNumber() int32`

GetVersionNumber returns the VersionNumber field if non-nil, zero value otherwise.

### GetVersionNumberOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetVersionNumberOk() (*int32, bool)`

GetVersionNumberOk returns a tuple with the VersionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionNumber

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetVersionNumber(v int32)`

SetVersionNumber sets VersionNumber field to given value.

### HasVersionNumber

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasVersionNumber() bool`

HasVersionNumber returns a boolean if a field has been set.

### GetIsSimulationEnabled

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetIsSimulationEnabled() bool`

GetIsSimulationEnabled returns the IsSimulationEnabled field if non-nil, zero value otherwise.

### GetIsSimulationEnabledOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetIsSimulationEnabledOk() (*bool, bool)`

GetIsSimulationEnabledOk returns a tuple with the IsSimulationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSimulationEnabled

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetIsSimulationEnabled(v bool)`

SetIsSimulationEnabled sets IsSimulationEnabled field to given value.

### HasIsSimulationEnabled

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasIsSimulationEnabled() bool`

HasIsSimulationEnabled returns a boolean if a field has been set.

### GetIsDynamicSchema

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetIsDynamicSchema() bool`

GetIsDynamicSchema returns the IsDynamicSchema field if non-nil, zero value otherwise.

### GetIsDynamicSchemaOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetIsDynamicSchemaOk() (*bool, bool)`

GetIsDynamicSchemaOk returns a tuple with the IsDynamicSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamicSchema

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetIsDynamicSchema(v bool)`

SetIsDynamicSchema sets IsDynamicSchema field to given value.

### HasIsDynamicSchema

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasIsDynamicSchema() bool`

HasIsDynamicSchema returns a boolean if a field has been set.

### GetOutputSchema

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetOutputSchema() map[string]interface{}`

GetOutputSchema returns the OutputSchema field if non-nil, zero value otherwise.

### GetOutputSchemaOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetOutputSchemaOk() (*map[string]interface{}, bool)`

GetOutputSchemaOk returns a tuple with the OutputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputSchema

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetOutputSchema(v map[string]interface{})`

SetOutputSchema sets OutputSchema field to given value.

### HasOutputSchema

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasOutputSchema() bool`

HasOutputSchema returns a boolean if a field has been set.

### GetInputExample

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetInputExample() map[string]interface{}`

GetInputExample returns the InputExample field if non-nil, zero value otherwise.

### GetInputExampleOk

`func (o *ListCompleteWorkflowLibrary200ResponseInner) GetInputExampleOk() (*map[string]interface{}, bool)`

GetInputExampleOk returns a tuple with the InputExample field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputExample

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetInputExample(v map[string]interface{})`

SetInputExample sets InputExample field to given value.

### HasInputExample

`func (o *ListCompleteWorkflowLibrary200ResponseInner) HasInputExample() bool`

HasInputExample returns a boolean if a field has been set.

### SetInputExampleNil

`func (o *ListCompleteWorkflowLibrary200ResponseInner) SetInputExampleNil(b bool)`

 SetInputExampleNil sets the value for InputExample to be an explicit nil

### UnsetInputExample
`func (o *ListCompleteWorkflowLibrary200ResponseInner) UnsetInputExample()`

UnsetInputExample ensures that no value is present for InputExample, not even an explicit nil

