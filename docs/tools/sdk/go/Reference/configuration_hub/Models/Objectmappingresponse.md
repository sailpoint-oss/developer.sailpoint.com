---
id: v1-objectmappingresponse
title: Objectmappingresponse
pagination_label: Objectmappingresponse
sidebar_label: Objectmappingresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectmappingresponse', 'V1Objectmappingresponse'] 
slug: /tools/sdk/go/configurationhub/models/objectmappingresponse
tags: ['SDK', 'Software Development Kit', 'Objectmappingresponse', 'V1Objectmappingresponse']
---

# Objectmappingresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectMappingId** | Pointer to **string** | Id of the object mapping | [optional] 
**ObjectType** | Pointer to **string** | Type of the object the mapping value applies to | [optional] 
**JsonPath** | Pointer to **string** | JSONPath expression denoting the path within the object where the mapping value should be applied | [optional] 
**SourceValue** | Pointer to **string** | Original value at the jsonPath location within the object | [optional] 
**TargetValue** | Pointer to **string** | Value to be assigned at the jsonPath location within the object | [optional] 
**Enabled** | Pointer to **bool** | Whether or not this object mapping is enabled | [optional] [default to false]
**Created** | Pointer to **string** | Object mapping creation timestamp | [optional] 
**Modified** | Pointer to **string** | Object mapping latest update timestamp | [optional] 

## Methods

### NewObjectmappingresponse

`func NewObjectmappingresponse() *Objectmappingresponse`

NewObjectmappingresponse instantiates a new Objectmappingresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectmappingresponseWithDefaults

`func NewObjectmappingresponseWithDefaults() *Objectmappingresponse`

NewObjectmappingresponseWithDefaults instantiates a new Objectmappingresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectMappingId

`func (o *Objectmappingresponse) GetObjectMappingId() string`

GetObjectMappingId returns the ObjectMappingId field if non-nil, zero value otherwise.

### GetObjectMappingIdOk

`func (o *Objectmappingresponse) GetObjectMappingIdOk() (*string, bool)`

GetObjectMappingIdOk returns a tuple with the ObjectMappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectMappingId

`func (o *Objectmappingresponse) SetObjectMappingId(v string)`

SetObjectMappingId sets ObjectMappingId field to given value.

### HasObjectMappingId

`func (o *Objectmappingresponse) HasObjectMappingId() bool`

HasObjectMappingId returns a boolean if a field has been set.

### GetObjectType

`func (o *Objectmappingresponse) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *Objectmappingresponse) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *Objectmappingresponse) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *Objectmappingresponse) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetJsonPath

`func (o *Objectmappingresponse) GetJsonPath() string`

GetJsonPath returns the JsonPath field if non-nil, zero value otherwise.

### GetJsonPathOk

`func (o *Objectmappingresponse) GetJsonPathOk() (*string, bool)`

GetJsonPathOk returns a tuple with the JsonPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPath

`func (o *Objectmappingresponse) SetJsonPath(v string)`

SetJsonPath sets JsonPath field to given value.

### HasJsonPath

`func (o *Objectmappingresponse) HasJsonPath() bool`

HasJsonPath returns a boolean if a field has been set.

### GetSourceValue

`func (o *Objectmappingresponse) GetSourceValue() string`

GetSourceValue returns the SourceValue field if non-nil, zero value otherwise.

### GetSourceValueOk

`func (o *Objectmappingresponse) GetSourceValueOk() (*string, bool)`

GetSourceValueOk returns a tuple with the SourceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceValue

`func (o *Objectmappingresponse) SetSourceValue(v string)`

SetSourceValue sets SourceValue field to given value.

### HasSourceValue

`func (o *Objectmappingresponse) HasSourceValue() bool`

HasSourceValue returns a boolean if a field has been set.

### GetTargetValue

`func (o *Objectmappingresponse) GetTargetValue() string`

GetTargetValue returns the TargetValue field if non-nil, zero value otherwise.

### GetTargetValueOk

`func (o *Objectmappingresponse) GetTargetValueOk() (*string, bool)`

GetTargetValueOk returns a tuple with the TargetValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetValue

`func (o *Objectmappingresponse) SetTargetValue(v string)`

SetTargetValue sets TargetValue field to given value.

### HasTargetValue

`func (o *Objectmappingresponse) HasTargetValue() bool`

HasTargetValue returns a boolean if a field has been set.

### GetEnabled

`func (o *Objectmappingresponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Objectmappingresponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Objectmappingresponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Objectmappingresponse) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetCreated

`func (o *Objectmappingresponse) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Objectmappingresponse) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Objectmappingresponse) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Objectmappingresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Objectmappingresponse) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Objectmappingresponse) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Objectmappingresponse) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Objectmappingresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.


