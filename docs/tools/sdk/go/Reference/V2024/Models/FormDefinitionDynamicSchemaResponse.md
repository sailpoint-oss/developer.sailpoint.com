---
id: v2024-form-definition-dynamic-schema-response
title: FormDefinitionDynamicSchemaResponse
pagination_label: FormDefinitionDynamicSchemaResponse
sidebar_label: FormDefinitionDynamicSchemaResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormDefinitionDynamicSchemaResponse', 'V2024FormDefinitionDynamicSchemaResponse'] 
slug: /tools/sdk/go/v2024/models/form-definition-dynamic-schema-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaResponse', 'V2024FormDefinitionDynamicSchemaResponse']
---

# FormDefinitionDynamicSchemaResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OutputSchema** | Pointer to **map[string]map[string]interface{}** | OutputSchema holds a JSON schema generated dynamically | [optional] 

## Methods

### NewFormDefinitionDynamicSchemaResponse

`func NewFormDefinitionDynamicSchemaResponse() *FormDefinitionDynamicSchemaResponse`

NewFormDefinitionDynamicSchemaResponse instantiates a new FormDefinitionDynamicSchemaResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormDefinitionDynamicSchemaResponseWithDefaults

`func NewFormDefinitionDynamicSchemaResponseWithDefaults() *FormDefinitionDynamicSchemaResponse`

NewFormDefinitionDynamicSchemaResponseWithDefaults instantiates a new FormDefinitionDynamicSchemaResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOutputSchema

`func (o *FormDefinitionDynamicSchemaResponse) GetOutputSchema() map[string]map[string]interface{}`

GetOutputSchema returns the OutputSchema field if non-nil, zero value otherwise.

### GetOutputSchemaOk

`func (o *FormDefinitionDynamicSchemaResponse) GetOutputSchemaOk() (*map[string]map[string]interface{}, bool)`

GetOutputSchemaOk returns a tuple with the OutputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputSchema

`func (o *FormDefinitionDynamicSchemaResponse) SetOutputSchema(v map[string]map[string]interface{})`

SetOutputSchema sets OutputSchema field to given value.

### HasOutputSchema

`func (o *FormDefinitionDynamicSchemaResponse) HasOutputSchema() bool`

HasOutputSchema returns a boolean if a field has been set.


