---
id: beta-trigger
title: Trigger
pagination_label: Trigger
sidebar_label: Trigger
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Trigger', 'BetaTrigger'] 
slug: /tools/sdk/go/beta/models/trigger
tags: ['SDK', 'Software Development Kit', 'Trigger', 'BetaTrigger']
---

# Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier of the trigger. | 
**Name** | **string** | Trigger Name. | 
**Type** | [**TriggerType**](trigger-type) |  | 
**Description** | Pointer to **string** | Trigger Description. | [optional] 
**InputSchema** | **string** | The JSON schema of the payload that will be sent by the trigger to the subscribed service. | 
**ExampleInput** | [**TriggerExampleInput**](trigger-example-input) |  | 
**OutputSchema** | Pointer to **NullableString** | The JSON schema of the response that will be sent by the subscribed service to the trigger in response to an event.  This only applies to a trigger type of &#x60;REQUEST_RESPONSE&#x60;. | [optional] 
**ExampleOutput** | Pointer to [**NullableTriggerExampleOutput**](trigger-example-output) |  | [optional] 

## Methods

### NewTrigger

`func NewTrigger(id string, name string, type_ TriggerType, inputSchema string, exampleInput TriggerExampleInput, ) *Trigger`

NewTrigger instantiates a new Trigger object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTriggerWithDefaults

`func NewTriggerWithDefaults() *Trigger`

NewTriggerWithDefaults instantiates a new Trigger object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Trigger) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Trigger) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Trigger) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Trigger) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Trigger) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Trigger) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Trigger) GetType() TriggerType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Trigger) GetTypeOk() (*TriggerType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Trigger) SetType(v TriggerType)`

SetType sets Type field to given value.


### GetDescription

`func (o *Trigger) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Trigger) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Trigger) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Trigger) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInputSchema

`func (o *Trigger) GetInputSchema() string`

GetInputSchema returns the InputSchema field if non-nil, zero value otherwise.

### GetInputSchemaOk

`func (o *Trigger) GetInputSchemaOk() (*string, bool)`

GetInputSchemaOk returns a tuple with the InputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputSchema

`func (o *Trigger) SetInputSchema(v string)`

SetInputSchema sets InputSchema field to given value.


### GetExampleInput

`func (o *Trigger) GetExampleInput() TriggerExampleInput`

GetExampleInput returns the ExampleInput field if non-nil, zero value otherwise.

### GetExampleInputOk

`func (o *Trigger) GetExampleInputOk() (*TriggerExampleInput, bool)`

GetExampleInputOk returns a tuple with the ExampleInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExampleInput

`func (o *Trigger) SetExampleInput(v TriggerExampleInput)`

SetExampleInput sets ExampleInput field to given value.


### GetOutputSchema

`func (o *Trigger) GetOutputSchema() string`

GetOutputSchema returns the OutputSchema field if non-nil, zero value otherwise.

### GetOutputSchemaOk

`func (o *Trigger) GetOutputSchemaOk() (*string, bool)`

GetOutputSchemaOk returns a tuple with the OutputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputSchema

`func (o *Trigger) SetOutputSchema(v string)`

SetOutputSchema sets OutputSchema field to given value.

### HasOutputSchema

`func (o *Trigger) HasOutputSchema() bool`

HasOutputSchema returns a boolean if a field has been set.

### SetOutputSchemaNil

`func (o *Trigger) SetOutputSchemaNil(b bool)`

 SetOutputSchemaNil sets the value for OutputSchema to be an explicit nil

### UnsetOutputSchema
`func (o *Trigger) UnsetOutputSchema()`

UnsetOutputSchema ensures that no value is present for OutputSchema, not even an explicit nil
### GetExampleOutput

`func (o *Trigger) GetExampleOutput() TriggerExampleOutput`

GetExampleOutput returns the ExampleOutput field if non-nil, zero value otherwise.

### GetExampleOutputOk

`func (o *Trigger) GetExampleOutputOk() (*TriggerExampleOutput, bool)`

GetExampleOutputOk returns a tuple with the ExampleOutput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExampleOutput

`func (o *Trigger) SetExampleOutput(v TriggerExampleOutput)`

SetExampleOutput sets ExampleOutput field to given value.

### HasExampleOutput

`func (o *Trigger) HasExampleOutput() bool`

HasExampleOutput returns a boolean if a field has been set.

### SetExampleOutputNil

`func (o *Trigger) SetExampleOutputNil(b bool)`

 SetExampleOutputNil sets the value for ExampleOutput to be an explicit nil

### UnsetExampleOutput
`func (o *Trigger) UnsetExampleOutput()`

UnsetExampleOutput ensures that no value is present for ExampleOutput, not even an explicit nil

