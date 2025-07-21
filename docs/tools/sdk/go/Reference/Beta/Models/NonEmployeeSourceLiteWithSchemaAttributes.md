---
id: beta-non-employee-source-lite-with-schema-attributes
title: NonEmployeeSourceLiteWithSchemaAttributes
pagination_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeSourceLiteWithSchemaAttributes', 'BetaNonEmployeeSourceLiteWithSchemaAttributes'] 
slug: /tools/sdk/go/beta/models/non-employee-source-lite-with-schema-attributes
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceLiteWithSchemaAttributes', 'BetaNonEmployeeSourceLiteWithSchemaAttributes']
---

# NonEmployeeSourceLiteWithSchemaAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee source id. | [optional] 
**SourceId** | Pointer to **string** | Source Id associated with this non-employee source. | [optional] 
**Name** | Pointer to **string** | Source name associated with this non-employee source. | [optional] 
**Description** | Pointer to **string** | Source description associated with this non-employee source. | [optional] 
**SchemaAttributes** | Pointer to [**[]NonEmployeeSchemaAttribute**](non-employee-schema-attribute) | List of schema attributes associated with this non-employee source. | [optional] 

## Methods

### NewNonEmployeeSourceLiteWithSchemaAttributes

`func NewNonEmployeeSourceLiteWithSchemaAttributes() *NonEmployeeSourceLiteWithSchemaAttributes`

NewNonEmployeeSourceLiteWithSchemaAttributes instantiates a new NonEmployeeSourceLiteWithSchemaAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeSourceLiteWithSchemaAttributesWithDefaults

`func NewNonEmployeeSourceLiteWithSchemaAttributesWithDefaults() *NonEmployeeSourceLiteWithSchemaAttributes`

NewNonEmployeeSourceLiteWithSchemaAttributesWithDefaults instantiates a new NonEmployeeSourceLiteWithSchemaAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSchemaAttributes

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetSchemaAttributes() []NonEmployeeSchemaAttribute`

GetSchemaAttributes returns the SchemaAttributes field if non-nil, zero value otherwise.

### GetSchemaAttributesOk

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) GetSchemaAttributesOk() (*[]NonEmployeeSchemaAttribute, bool)`

GetSchemaAttributesOk returns a tuple with the SchemaAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemaAttributes

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) SetSchemaAttributes(v []NonEmployeeSchemaAttribute)`

SetSchemaAttributes sets SchemaAttributes field to given value.

### HasSchemaAttributes

`func (o *NonEmployeeSourceLiteWithSchemaAttributes) HasSchemaAttributes() bool`

HasSchemaAttributes returns a boolean if a field has been set.


