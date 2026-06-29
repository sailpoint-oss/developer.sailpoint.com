---
id: v1-visibilitycriteria
title: Visibilitycriteria
pagination_label: Visibilitycriteria
sidebar_label: Visibilitycriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Visibilitycriteria', 'V1Visibilitycriteria'] 
slug: /tools/sdk/go/segments/models/visibilitycriteria
tags: ['SDK', 'Software Development Kit', 'Visibilitycriteria', 'V1Visibilitycriteria']
---

# Visibilitycriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** | Pointer to [**Expression**](expression) |  | [optional] 

## Methods

### NewVisibilitycriteria

`func NewVisibilitycriteria() *Visibilitycriteria`

NewVisibilitycriteria instantiates a new Visibilitycriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVisibilitycriteriaWithDefaults

`func NewVisibilitycriteriaWithDefaults() *Visibilitycriteria`

NewVisibilitycriteriaWithDefaults instantiates a new Visibilitycriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpression

`func (o *Visibilitycriteria) GetExpression() Expression`

GetExpression returns the Expression field if non-nil, zero value otherwise.

### GetExpressionOk

`func (o *Visibilitycriteria) GetExpressionOk() (*Expression, bool)`

GetExpressionOk returns a tuple with the Expression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpression

`func (o *Visibilitycriteria) SetExpression(v Expression)`

SetExpression sets Expression field to given value.

### HasExpression

`func (o *Visibilitycriteria) HasExpression() bool`

HasExpression returns a boolean if a field has been set.


