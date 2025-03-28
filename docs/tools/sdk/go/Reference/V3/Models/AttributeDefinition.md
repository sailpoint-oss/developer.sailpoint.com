---
id: attribute-definition
title: AttributeDefinition
pagination_label: AttributeDefinition
sidebar_label: AttributeDefinition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeDefinition', 'AttributeDefinition'] 
slug: /tools/sdk/go/v3/models/attribute-definition
tags: ['SDK', 'Software Development Kit', 'AttributeDefinition', 'AttributeDefinition']
---

# AttributeDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the attribute. | [optional] 
**Type** | Pointer to [**AttributeDefinitionType**](attribute-definition-type) |  | [optional] 
**Schema** | Pointer to [**AttributeDefinitionSchema**](attribute-definition-schema) |  | [optional] 
**Description** | Pointer to **string** | A human-readable description of the attribute. | [optional] 
**IsMulti** | Pointer to **bool** | Flag indicating whether or not the attribute is multi-valued. | [optional] [default to false]
**IsEntitlement** | Pointer to **bool** | Flag indicating whether or not the attribute is an entitlement. | [optional] [default to false]
**IsGroup** | Pointer to **bool** | Flag indicating whether or not the attribute represents a group. This can only be &#x60;true&#x60; if &#x60;isEntitlement&#x60; is also &#x60;true&#x60; **and** there is a schema defined for the attribute..  | [optional] [default to false]

## Methods

### NewAttributeDefinition

`func NewAttributeDefinition() *AttributeDefinition`

NewAttributeDefinition instantiates a new AttributeDefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeDefinitionWithDefaults

`func NewAttributeDefinitionWithDefaults() *AttributeDefinition`

NewAttributeDefinitionWithDefaults instantiates a new AttributeDefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AttributeDefinition) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttributeDefinition) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttributeDefinition) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AttributeDefinition) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *AttributeDefinition) GetType() AttributeDefinitionType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttributeDefinition) GetTypeOk() (*AttributeDefinitionType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttributeDefinition) SetType(v AttributeDefinitionType)`

SetType sets Type field to given value.

### HasType

`func (o *AttributeDefinition) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSchema

`func (o *AttributeDefinition) GetSchema() AttributeDefinitionSchema`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *AttributeDefinition) GetSchemaOk() (*AttributeDefinitionSchema, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *AttributeDefinition) SetSchema(v AttributeDefinitionSchema)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *AttributeDefinition) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetDescription

`func (o *AttributeDefinition) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AttributeDefinition) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AttributeDefinition) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AttributeDefinition) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIsMulti

`func (o *AttributeDefinition) GetIsMulti() bool`

GetIsMulti returns the IsMulti field if non-nil, zero value otherwise.

### GetIsMultiOk

`func (o *AttributeDefinition) GetIsMultiOk() (*bool, bool)`

GetIsMultiOk returns a tuple with the IsMulti field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMulti

`func (o *AttributeDefinition) SetIsMulti(v bool)`

SetIsMulti sets IsMulti field to given value.

### HasIsMulti

`func (o *AttributeDefinition) HasIsMulti() bool`

HasIsMulti returns a boolean if a field has been set.

### GetIsEntitlement

`func (o *AttributeDefinition) GetIsEntitlement() bool`

GetIsEntitlement returns the IsEntitlement field if non-nil, zero value otherwise.

### GetIsEntitlementOk

`func (o *AttributeDefinition) GetIsEntitlementOk() (*bool, bool)`

GetIsEntitlementOk returns a tuple with the IsEntitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEntitlement

`func (o *AttributeDefinition) SetIsEntitlement(v bool)`

SetIsEntitlement sets IsEntitlement field to given value.

### HasIsEntitlement

`func (o *AttributeDefinition) HasIsEntitlement() bool`

HasIsEntitlement returns a boolean if a field has been set.

### GetIsGroup

`func (o *AttributeDefinition) GetIsGroup() bool`

GetIsGroup returns the IsGroup field if non-nil, zero value otherwise.

### GetIsGroupOk

`func (o *AttributeDefinition) GetIsGroupOk() (*bool, bool)`

GetIsGroupOk returns a tuple with the IsGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsGroup

`func (o *AttributeDefinition) SetIsGroup(v bool)`

SetIsGroup sets IsGroup field to given value.

### HasIsGroup

`func (o *AttributeDefinition) HasIsGroup() bool`

HasIsGroup returns a boolean if a field has been set.


