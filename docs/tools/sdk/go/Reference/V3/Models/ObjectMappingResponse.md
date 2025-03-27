---
id: object-mapping-response
title: ObjectMappingResponse
pagination_label: ObjectMappingResponse
sidebar_label: ObjectMappingResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ObjectMappingResponse', 'ObjectMappingResponse'] 
slug: /tools/sdk/go/v3/models/object-mapping-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingResponse', 'ObjectMappingResponse']
---

# ObjectMappingResponse

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

### NewObjectMappingResponse

`func NewObjectMappingResponse() *ObjectMappingResponse`

NewObjectMappingResponse instantiates a new ObjectMappingResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectMappingResponseWithDefaults

`func NewObjectMappingResponseWithDefaults() *ObjectMappingResponse`

NewObjectMappingResponseWithDefaults instantiates a new ObjectMappingResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectMappingId

`func (o *ObjectMappingResponse) GetObjectMappingId() string`

GetObjectMappingId returns the ObjectMappingId field if non-nil, zero value otherwise.

### GetObjectMappingIdOk

`func (o *ObjectMappingResponse) GetObjectMappingIdOk() (*string, bool)`

GetObjectMappingIdOk returns a tuple with the ObjectMappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectMappingId

`func (o *ObjectMappingResponse) SetObjectMappingId(v string)`

SetObjectMappingId sets ObjectMappingId field to given value.

### HasObjectMappingId

`func (o *ObjectMappingResponse) HasObjectMappingId() bool`

HasObjectMappingId returns a boolean if a field has been set.

### GetObjectType

`func (o *ObjectMappingResponse) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *ObjectMappingResponse) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *ObjectMappingResponse) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *ObjectMappingResponse) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetJsonPath

`func (o *ObjectMappingResponse) GetJsonPath() string`

GetJsonPath returns the JsonPath field if non-nil, zero value otherwise.

### GetJsonPathOk

`func (o *ObjectMappingResponse) GetJsonPathOk() (*string, bool)`

GetJsonPathOk returns a tuple with the JsonPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPath

`func (o *ObjectMappingResponse) SetJsonPath(v string)`

SetJsonPath sets JsonPath field to given value.

### HasJsonPath

`func (o *ObjectMappingResponse) HasJsonPath() bool`

HasJsonPath returns a boolean if a field has been set.

### GetSourceValue

`func (o *ObjectMappingResponse) GetSourceValue() string`

GetSourceValue returns the SourceValue field if non-nil, zero value otherwise.

### GetSourceValueOk

`func (o *ObjectMappingResponse) GetSourceValueOk() (*string, bool)`

GetSourceValueOk returns a tuple with the SourceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceValue

`func (o *ObjectMappingResponse) SetSourceValue(v string)`

SetSourceValue sets SourceValue field to given value.

### HasSourceValue

`func (o *ObjectMappingResponse) HasSourceValue() bool`

HasSourceValue returns a boolean if a field has been set.

### GetTargetValue

`func (o *ObjectMappingResponse) GetTargetValue() string`

GetTargetValue returns the TargetValue field if non-nil, zero value otherwise.

### GetTargetValueOk

`func (o *ObjectMappingResponse) GetTargetValueOk() (*string, bool)`

GetTargetValueOk returns a tuple with the TargetValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetValue

`func (o *ObjectMappingResponse) SetTargetValue(v string)`

SetTargetValue sets TargetValue field to given value.

### HasTargetValue

`func (o *ObjectMappingResponse) HasTargetValue() bool`

HasTargetValue returns a boolean if a field has been set.

### GetEnabled

`func (o *ObjectMappingResponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ObjectMappingResponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ObjectMappingResponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ObjectMappingResponse) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetCreated

`func (o *ObjectMappingResponse) GetCreated() string`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ObjectMappingResponse) GetCreatedOk() (*string, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ObjectMappingResponse) SetCreated(v string)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ObjectMappingResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *ObjectMappingResponse) GetModified() string`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ObjectMappingResponse) GetModifiedOk() (*string, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ObjectMappingResponse) SetModified(v string)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ObjectMappingResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.


