---
id: v2025-health-indicator-category
title: HealthIndicatorCategory
pagination_label: HealthIndicatorCategory
sidebar_label: HealthIndicatorCategory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'HealthIndicatorCategory', 'V2025HealthIndicatorCategory'] 
slug: /tools/sdk/go/v2025/models/health-indicator-category
tags: ['SDK', 'Software Development Kit', 'HealthIndicatorCategory', 'V2025HealthIndicatorCategory']
---

# HealthIndicatorCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | Pointer to [**[]HealthEvent**](health-event) | List of error events for this category | [optional] 
**Warnings** | Pointer to [**[]HealthEvent**](health-event) | List of warning events for this category | [optional] 

## Methods

### NewHealthIndicatorCategory

`func NewHealthIndicatorCategory() *HealthIndicatorCategory`

NewHealthIndicatorCategory instantiates a new HealthIndicatorCategory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHealthIndicatorCategoryWithDefaults

`func NewHealthIndicatorCategoryWithDefaults() *HealthIndicatorCategory`

NewHealthIndicatorCategoryWithDefaults instantiates a new HealthIndicatorCategory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrors

`func (o *HealthIndicatorCategory) GetErrors() []HealthEvent`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *HealthIndicatorCategory) GetErrorsOk() (*[]HealthEvent, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *HealthIndicatorCategory) SetErrors(v []HealthEvent)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *HealthIndicatorCategory) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetWarnings

`func (o *HealthIndicatorCategory) GetWarnings() []HealthEvent`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HealthIndicatorCategory) GetWarningsOk() (*[]HealthEvent, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HealthIndicatorCategory) SetWarnings(v []HealthEvent)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HealthIndicatorCategory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


