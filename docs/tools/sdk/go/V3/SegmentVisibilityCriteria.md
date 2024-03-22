---
id: segment-visibility-criteria
title: SegmentVisibilityCriteria
pagination_label: SegmentVisibilityCriteria
sidebar_label: SegmentVisibilityCriteria
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SegmentVisibilityCriteria'] 
slug: /tools/sdk/go/v3/models/segment-visibility-criteria
tags: ['SDK', 'Software Development Kit', 'SegmentVisibilityCriteria']
---

# SegmentVisibilityCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Expression** |  Pointer to [**Expression**](expression) |  | [optional] 

## Methods

### NewSegmentVisibilityCriteria

`func NewSegmentVisibilityCriteria() *SegmentVisibilityCriteria`

NewSegmentVisibilityCriteria instantiates a new SegmentVisibilityCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSegmentVisibilityCriteriaWithDefaults

`func NewSegmentVisibilityCriteriaWithDefaults() *SegmentVisibilityCriteria`

NewSegmentVisibilityCriteriaWithDefaults instantiates a new SegmentVisibilityCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpression

`func (o *SegmentVisibilityCriteria) GetExpression() Expression`

GetExpression returns the Expression field if non-nil, zero value otherwise.

### GetExpressionOk

`func (o *SegmentVisibilityCriteria) GetExpressionOk() (*Expression, bool)`

GetExpressionOk returns a tuple with the Expression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpression

`func (o *SegmentVisibilityCriteria) SetExpression(v Expression)`

SetExpression sets Expression field to given value.

### HasExpression

`func (o *SegmentVisibilityCriteria) HasExpression() bool`

HasExpression returns a boolean if a field has been set.


[[Back to top]](#) 


