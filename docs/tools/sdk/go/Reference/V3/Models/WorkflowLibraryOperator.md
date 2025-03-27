---
id: workflow-library-operator
title: WorkflowLibraryOperator
pagination_label: WorkflowLibraryOperator
sidebar_label: WorkflowLibraryOperator
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkflowLibraryOperator', 'WorkflowLibraryOperator'] 
slug: /tools/sdk/go/v3/models/workflow-library-operator
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryOperator', 'WorkflowLibraryOperator']
---

# WorkflowLibraryOperator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Operator ID. | [optional] 
**Name** | Pointer to **string** | Operator friendly name | [optional] 
**Type** | Pointer to **string** | Operator type | [optional] 
**Description** | Pointer to **string** | Description of the operator | [optional] 
**IsDynamicSchema** | Pointer to **bool** | Determines whether the dynamic output schema is returned in place of the action&#39;s output schema. The dynamic schema lists non-static properties, like properties of a workflow form where each form has different fields. These will be provided dynamically based on available form fields. | [optional] 
**Deprecated** | Pointer to **bool** |  | [optional] 
**DeprecatedBy** | Pointer to **time.Time** |  | [optional] 
**IsSimulationEnabled** | Pointer to **bool** |  | [optional] 
**FormFields** | Pointer to [**[]WorkflowLibraryFormFields**](workflow-library-form-fields) | One or more inputs that the operator accepts | [optional] 

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

### GetIsDynamicSchema

`func (o *WorkflowLibraryOperator) GetIsDynamicSchema() bool`

GetIsDynamicSchema returns the IsDynamicSchema field if non-nil, zero value otherwise.

### GetIsDynamicSchemaOk

`func (o *WorkflowLibraryOperator) GetIsDynamicSchemaOk() (*bool, bool)`

GetIsDynamicSchemaOk returns a tuple with the IsDynamicSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDynamicSchema

`func (o *WorkflowLibraryOperator) SetIsDynamicSchema(v bool)`

SetIsDynamicSchema sets IsDynamicSchema field to given value.

### HasIsDynamicSchema

`func (o *WorkflowLibraryOperator) HasIsDynamicSchema() bool`

HasIsDynamicSchema returns a boolean if a field has been set.

### GetDeprecated

`func (o *WorkflowLibraryOperator) GetDeprecated() bool`

GetDeprecated returns the Deprecated field if non-nil, zero value otherwise.

### GetDeprecatedOk

`func (o *WorkflowLibraryOperator) GetDeprecatedOk() (*bool, bool)`

GetDeprecatedOk returns a tuple with the Deprecated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecated

`func (o *WorkflowLibraryOperator) SetDeprecated(v bool)`

SetDeprecated sets Deprecated field to given value.

### HasDeprecated

`func (o *WorkflowLibraryOperator) HasDeprecated() bool`

HasDeprecated returns a boolean if a field has been set.

### GetDeprecatedBy

`func (o *WorkflowLibraryOperator) GetDeprecatedBy() time.Time`

GetDeprecatedBy returns the DeprecatedBy field if non-nil, zero value otherwise.

### GetDeprecatedByOk

`func (o *WorkflowLibraryOperator) GetDeprecatedByOk() (*time.Time, bool)`

GetDeprecatedByOk returns a tuple with the DeprecatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeprecatedBy

`func (o *WorkflowLibraryOperator) SetDeprecatedBy(v time.Time)`

SetDeprecatedBy sets DeprecatedBy field to given value.

### HasDeprecatedBy

`func (o *WorkflowLibraryOperator) HasDeprecatedBy() bool`

HasDeprecatedBy returns a boolean if a field has been set.

### GetIsSimulationEnabled

`func (o *WorkflowLibraryOperator) GetIsSimulationEnabled() bool`

GetIsSimulationEnabled returns the IsSimulationEnabled field if non-nil, zero value otherwise.

### GetIsSimulationEnabledOk

`func (o *WorkflowLibraryOperator) GetIsSimulationEnabledOk() (*bool, bool)`

GetIsSimulationEnabledOk returns a tuple with the IsSimulationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSimulationEnabled

`func (o *WorkflowLibraryOperator) SetIsSimulationEnabled(v bool)`

SetIsSimulationEnabled sets IsSimulationEnabled field to given value.

### HasIsSimulationEnabled

`func (o *WorkflowLibraryOperator) HasIsSimulationEnabled() bool`

HasIsSimulationEnabled returns a boolean if a field has been set.

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

### SetFormFieldsNil

`func (o *WorkflowLibraryOperator) SetFormFieldsNil(b bool)`

 SetFormFieldsNil sets the value for FormFields to be an explicit nil

### UnsetFormFields
`func (o *WorkflowLibraryOperator) UnsetFormFields()`

UnsetFormFields ensures that no value is present for FormFields, not even an explicit nil

