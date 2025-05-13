---
id: visibility-criteria
title: VisibilityCriteria
pagination_label: VisibilityCriteria
sidebar_label: VisibilityCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VisibilityCriteria', 'VisibilityCriteria'] 
slug: /tools/sdk/go/v3/models/visibility-criteria
tags: ['SDK', 'Software Development Kit', 'VisibilityCriteria', 'VisibilityCriteria']
---

# VisibilityCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** | Pointer to [**Expression**](expression) |  | [optional] 

## Methods

### NewVisibilityCriteria

`func NewVisibilityCriteria() *VisibilityCriteria`

NewVisibilityCriteria instantiates a new VisibilityCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVisibilityCriteriaWithDefaults

`func NewVisibilityCriteriaWithDefaults() *VisibilityCriteria`

NewVisibilityCriteriaWithDefaults instantiates a new VisibilityCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpression

`func (o *VisibilityCriteria) GetExpression() Expression`

GetExpression returns the Expression field if non-nil, zero value otherwise.

### GetExpressionOk

`func (o *VisibilityCriteria) GetExpressionOk() (*Expression, bool)`

GetExpressionOk returns a tuple with the Expression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpression

`func (o *VisibilityCriteria) SetExpression(v Expression)`

SetExpression sets Expression field to given value.

### HasExpression

`func (o *VisibilityCriteria) HasExpression() bool`

HasExpression returns a boolean if a field has been set.


