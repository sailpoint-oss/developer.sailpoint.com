---
id: source-account-correlation-rule
title: SourceAccountCorrelationRule
pagination_label: SourceAccountCorrelationRule
sidebar_label: SourceAccountCorrelationRule
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAccountCorrelationRule', 'SourceAccountCorrelationRule'] 
slug: /tools/sdk/go/v3/models/source-account-correlation-rule
tags: ['SDK', 'Software Development Kit', 'SourceAccountCorrelationRule', 'SourceAccountCorrelationRule']
---

# SourceAccountCorrelationRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Rule ID. | [optional] 
**Name** | Pointer to **string** | Rule's human-readable display name. | [optional] 

## Methods

### NewSourceAccountCorrelationRule

`func NewSourceAccountCorrelationRule() *SourceAccountCorrelationRule`

NewSourceAccountCorrelationRule instantiates a new SourceAccountCorrelationRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAccountCorrelationRuleWithDefaults

`func NewSourceAccountCorrelationRuleWithDefaults() *SourceAccountCorrelationRule`

NewSourceAccountCorrelationRuleWithDefaults instantiates a new SourceAccountCorrelationRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceAccountCorrelationRule) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceAccountCorrelationRule) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceAccountCorrelationRule) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceAccountCorrelationRule) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourceAccountCorrelationRule) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAccountCorrelationRule) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAccountCorrelationRule) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceAccountCorrelationRule) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceAccountCorrelationRule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceAccountCorrelationRule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceAccountCorrelationRule) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceAccountCorrelationRule) HasName() bool`

HasName returns a boolean if a field has been set.


