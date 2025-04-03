---
id: v2025-form-definition-dynamic-schema-request
title: FormDefinitionDynamicSchemaRequest
pagination_label: FormDefinitionDynamicSchemaRequest
sidebar_label: FormDefinitionDynamicSchemaRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormDefinitionDynamicSchemaRequest', 'V2025FormDefinitionDynamicSchemaRequest'] 
slug: /tools/sdk/go/v2025/models/form-definition-dynamic-schema-request
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaRequest', 'V2025FormDefinitionDynamicSchemaRequest']
---

# FormDefinitionDynamicSchemaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**FormDefinitionDynamicSchemaRequestAttributes**](form-definition-dynamic-schema-request-attributes) |  | [optional] 
**Description** | Pointer to **string** | Description is the form definition dynamic schema description text | [optional] 
**Id** | Pointer to **string** | ID is a unique identifier | [optional] 
**Type** | Pointer to **string** | Type is the form definition dynamic schema type | [optional] 
**VersionNumber** | Pointer to **int64** | VersionNumber is the form definition dynamic schema version number | [optional] 

## Methods

### NewFormDefinitionDynamicSchemaRequest

`func NewFormDefinitionDynamicSchemaRequest() *FormDefinitionDynamicSchemaRequest`

NewFormDefinitionDynamicSchemaRequest instantiates a new FormDefinitionDynamicSchemaRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormDefinitionDynamicSchemaRequestWithDefaults

`func NewFormDefinitionDynamicSchemaRequestWithDefaults() *FormDefinitionDynamicSchemaRequest`

NewFormDefinitionDynamicSchemaRequestWithDefaults instantiates a new FormDefinitionDynamicSchemaRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *FormDefinitionDynamicSchemaRequest) GetAttributes() FormDefinitionDynamicSchemaRequestAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *FormDefinitionDynamicSchemaRequest) GetAttributesOk() (*FormDefinitionDynamicSchemaRequestAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *FormDefinitionDynamicSchemaRequest) SetAttributes(v FormDefinitionDynamicSchemaRequestAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *FormDefinitionDynamicSchemaRequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetDescription

`func (o *FormDefinitionDynamicSchemaRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FormDefinitionDynamicSchemaRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FormDefinitionDynamicSchemaRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FormDefinitionDynamicSchemaRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *FormDefinitionDynamicSchemaRequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormDefinitionDynamicSchemaRequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormDefinitionDynamicSchemaRequest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormDefinitionDynamicSchemaRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *FormDefinitionDynamicSchemaRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FormDefinitionDynamicSchemaRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FormDefinitionDynamicSchemaRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FormDefinitionDynamicSchemaRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVersionNumber

`func (o *FormDefinitionDynamicSchemaRequest) GetVersionNumber() int64`

GetVersionNumber returns the VersionNumber field if non-nil, zero value otherwise.

### GetVersionNumberOk

`func (o *FormDefinitionDynamicSchemaRequest) GetVersionNumberOk() (*int64, bool)`

GetVersionNumberOk returns a tuple with the VersionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionNumber

`func (o *FormDefinitionDynamicSchemaRequest) SetVersionNumber(v int64)`

SetVersionNumber sets VersionNumber field to given value.

### HasVersionNumber

`func (o *FormDefinitionDynamicSchemaRequest) HasVersionNumber() bool`

HasVersionNumber returns a boolean if a field has been set.


