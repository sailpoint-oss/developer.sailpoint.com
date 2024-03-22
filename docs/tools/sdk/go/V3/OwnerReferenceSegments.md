---
id: owner-reference-segments
title: OwnerReferenceSegments
pagination_label: OwnerReferenceSegments
sidebar_label: OwnerReferenceSegments
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'OwnerReferenceSegments'] 
slug: /tools/sdk/go/v3/models/owner-reference-segments
tags: ['SDK', 'Software Development Kit', 'OwnerReferenceSegments']
---

# OwnerReferenceSegments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | Owner type. This field must be either left null or set to &#39;IDENTITY&#39; on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** |  Pointer to **string** | Identity id | [optional] 
**Name** |  Pointer to **string** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner&#39;s display name, otherwise a 400 Bad Request error will result. | [optional] 

## Methods

### NewOwnerReferenceSegments

`func NewOwnerReferenceSegments() *OwnerReferenceSegments`

NewOwnerReferenceSegments instantiates a new OwnerReferenceSegments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerReferenceSegmentsWithDefaults

`func NewOwnerReferenceSegmentsWithDefaults() *OwnerReferenceSegments`

NewOwnerReferenceSegmentsWithDefaults instantiates a new OwnerReferenceSegments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *OwnerReferenceSegments) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *OwnerReferenceSegments) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *OwnerReferenceSegments) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *OwnerReferenceSegments) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *OwnerReferenceSegments) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OwnerReferenceSegments) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OwnerReferenceSegments) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OwnerReferenceSegments) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *OwnerReferenceSegments) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OwnerReferenceSegments) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OwnerReferenceSegments) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OwnerReferenceSegments) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


